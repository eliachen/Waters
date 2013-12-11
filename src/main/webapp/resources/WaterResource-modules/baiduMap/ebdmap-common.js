/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(function(require,exports){
    //var bmap=require('baidumapAPI');
      require('jquery');
      require('ligerUI');
      require('baiduMapAPI');
    //说明：二次定义maker
    //_bdmaker:type(BMap.Marker)
    /*---------------------------*/
    //_cig.point(BMap.Point)
    //_cig.img(String)图片地址
    //_cig.label(String)显示标签
    //_cig.content(String)显示在Tip内的内容
    //_cig.animation(enum:BMAP_ANIMATION_DROP:坠落,BMAP_ANIMATION_BOUNCE:跳动)
    //_cig.tip.width(int)tip的宽度
    //_cig.contexmenu([{name:name1,event:event1},{name:name2,event:event2}]):function(e,emk)
    //_cig:event([mouseover:,mouseout:,click:])
    //_cig.XX（object）可以自定义扩展
    /*---------------------------*/
  var eliachenBdMaker = function (_cig) {
    this.bdmaker;
    this.cig = _cig;
  };
    //this.cig=new Object(_cig)
   eliachenBdMaker.prototype={
       initialize:function(){
           //设置属性
           this.setAttr();
           //关联事件
           this.bindEvent();
       },
        //设置属性
       setAttr:function(){
             if (!this.cig) {
                 this.bdmaker = new BMap.Marker(this.cig.point);  // 创建标注
             } else {
                 //Size(width:Number, height:Number)
                 var _size = new BMap.Size(24, 24);
                 var _icon = new BMap.Icon(this.cig.img, _size); 
                 var MarkerOptions = { icon: _icon };
                 this.bdmaker = new BMap.Marker(this.cig.point, MarkerOptions);
                 //var marker = new BMap.Marker(point);
                 //设置label
                 if (this.cig.label) {
                     var _label = new BMap.Label("");
                     _label.setContent(this.cig.label);
                     _label.setStyle({ color: "black", border: "0" });
                     var off_x = this.cig.label.length;
                     _label.setOffset(new BMap.Size(-3.5 * (off_x - 1), 25));
                     this.bdmaker.setLabel(_label);
                 };
             }; 
                },
          //绑定事件
         bindEvent:function(){
                    var tmpid; //tip的id
                    var g=this;//存储this指针,避免事件内部调用失败
                      if(g.cig.event.mouseover){
                            g.bdmaker.addEventListener('mouseover', function (e) {
                                g.cig.event.mouseover(e,g);
                                tmpid = $.ligerTip({ content: g.cig.content, 
                                                     width:g.cig.tip.width || 200, 
                                                     x: e.clientX, y: e.clientY }).id;
                               });
                          };
                          if(g.cig.event.mouseout){
                               g.bdmaker.addEventListener('mouseout', function (e) {
                                         $('#' + tmpid).remove();
                                         if(g.cig.event.mouseout){
                                             g.cig.event.mouseout(e,this);
                                         }
                                      });
                          };
                          
                          if(g.cig.event.click){
                              g.bdmaker.addEventListener('click', function (e) {
                                        $('#' + tmpid).remove();
                                        g.cig.event.click(e,g);
                               });
                          };

                     //菜单关联
                   if(g.cig.contexmenu){
                     var ContextMenu = new BMap.ContextMenu;
                      for (index in this.cig.contexmenu){
                          ContextMenu.addItem(new BMap.MenuItem(g.cig.contexmenu[index].name, g.cig.contexmenu[index].event));
                      };
                      this.bdmaker.addContextMenu(ContextMenu);
             };
             
         } ,
          //加入到地图
         //map(BMap)
         addtoMap:function(map){
             map.addOverlay(this.bdmaker);              // 将标注添加到地图中
         },
          //动画(cig定义)
         setAnimation:function(){
            if (this.cig.animation) {
                 this.bdmaker.setAnimation(this.cig.animation);
            };  
         },
        //动画（自定义）
         setAnimation1:function(a){
                 this.bdmaker.setAnimation(a);
         },
   }; 
  
   
   //_cig.div(String):地图容器
   //_cig.map(BMap.Map):自己初始化地图
   var eliachenbdMap=function(_cig){
            this.cig=_cig;
            this.bdmap;
            
            if(!this.cig.map){
            this.bdmap = new BMap.Map(_cig.div, { mapType: BMAP_HYBRID_MAP });
            this.bdmap.addControl(new BMap.ScaleControl());                    // 添加比例尺控件
            this.bdmap.addControl(new BMap.OverviewMapControl());              //添加缩略地图控件
            this.bdmap.enableScrollWheelZoom();                            //启用滚轮放大缩小
            this.bdmap.addControl(new BMap.MapTypeControl());          //添加地图类型控件
//            var point = new BMap.Point(116.403765, 39.914850);
//            this.bdmap.centerAndZoom(point, 12);
            }else{
                this.bdmap=_cig.map;
            };
           
            //添加地图边界
            //_cig.addr(String)边界区域
            this.getBoundary=function(bdarycig){
                 getBoundary(this.bdmap,bdarycig.addr);
        };
        
            //添加地图控件
            this.addContorl=function(_cig){
                    addCtrl(this.bdmap,_cig.id,_cig.anchor,_cig.offset);
            };
   };
    
    //_ebdmakers(eliachenBdMaker)
   var eliachenBdMakersManager = function (_ebdmakers, _cig) {
    this.bdmakers = _ebdmakers;
    this.cig = _cig;

    //添加到地图
    this.addtoMap = function (map) {
        for (var index in _ebdmakers) {
            //addMaker(map,emk.bdmaker)
           map.addOverlay(this.bdmakers[index].bdmaker); 
        };
    };
   
    };
    /**-------绑定事件------**/
   this.bindEvent=function(){
      for (var emk in _ebdmakers) { 
        
    }; 
};
    
    //exports.bmap=bmap;
    exports.eliachenBdMaker=eliachenBdMaker;
    exports.eliachenBdMakersManager=eliachenBdMakersManager;
    exports.eliachenbdMap=eliachenbdMap;
    
/*--Original----*/    
//map
//point:(BMap.Point)
//cig.img(String)图片地址
//cig.label(String)显示标签
//cig.animation(enum:BMAP_ANIMATION_DROP:坠落,BMAP_ANIMATION_BOUNCE:跳动)
//return:BMap.Marker
//作用:添加标注
var addMaker= function(map, point, cig) {
    if (!cig) {
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);              // 将标注添加到地图中
        return marker;
    } else {
        //    Size(width:Number, height:Number)
        var _size = new BMap.Size(24, 24);
        var _icon = new BMap.Icon(cig.img, _size);
        var MarkerOptions = { icon: _icon };
        var marker = new BMap.Marker(point, MarkerOptions);
        //var marker = new BMap.Marker(point);
        //设置label
        if (cig.label) {
            var _label = new BMap.Label("");
            _label.setContent(cig.label);
            _label.setStyle({ color: "black", border: "0" });
            var off_x = cig.label.length;
            _label.setOffset(new BMap.Size(-3.5 * (off_x - 1), 25));
            marker.setLabel(_label);
          
        };
        map.addOverlay(marker);
        //动画
        if (cig.animation) {
            marker.setAnimation(cig.animation);
        };
        return marker;
    };

};


/// <reference path="../../lib/ligerUI/skins/icons/true.gif" />

//map:地图
//addr:行政区地名
//作用:行政区划分
var getBoundary=function(map, addr) {
    var bdary = new BMap.Boundary();
    bdary.get(addr, function (rs) {
        //map.clearOverlays();        //清除地图覆盖物       
        var count = rs.boundaries.length; //行政区域的点有多少个
        for (var i = 0; i < count; i++) {
            var ply = new BMap.Polygon(rs.boundaries[i], { strokeWeight: 2, strokeColor: "#3410e6" }); //建立多边形折线
            map.addOverlay(ply);  //添加覆盖物
            map.setViewport(ply.getPath());    //调整视野 
        }
    });
};

//map
//makers:需要聚合的maker数组
//作用:聚合数组
var MakerClusterer=function (map, makersdata) {
    //最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
    var markerClusterer = new BMapLib.MarkerClusterer(map,{markers:makersdata});
};

//map:(BMap)
//id:(String)
//Anchor:(Enum)  BMAP_ANCHOR_TOP_LEFT	    控件将定位到地图的左上角。
        //       BMAP_ANCHOR_TOP_RIGHT	    控件将定位到地图的右上角。
        //       BMAP_ANCHOR_BOTTOM_LEFT	控件将定位到地图的左下角。
        //       BMAP_ANCHOR_BOTTOM_RIGHT   控件将定位到地图的右下角。
//Offset:(BMap.Size)
var addCtrl=function (map,id,Anchor,Offset) {

    function AddDoc(id) {
        // 设置默认停靠位置和偏移量  
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new BMap.Size(10, 10);
        this.id = id;
    };

    AddDoc.prototype = new BMap.Control();

    AddDoc.prototype.initialize = function (map) {
        // 创建一个DOM元素  
        var div = document.getElementById(this.id);
        map.getContainer().appendChild(div);
        // 将DOM元素返回  
        return div;
    };

    // 创建控件实例
    var newCtrl = new AddDoc(id);
    newCtrl.setAnchor(Anchor);
    newCtrl.setOffset(Offset);
    // 添加到地图当中
    map.addControl(newCtrl);
};

//BMAP_NORMAL_MAP	此地图类型展示普通街道视图。
//BMAP_PERSPECTIVE_MAP	此地图类型展示透视图像视图。
//BMAP_SATELLITE_MAP	此地图类型展示卫星视图。(自 1.2 新增)
//BMAP_HYBRID_MAP	此地图类型展示卫星和路网的混合视图。(自 1.2 新增）

//Demo
//  var emk=new ebdmap.eliachenBdMaker({point:new BMap.Point(117.272306, 32.066323),img:imgsrc,
//                                            label:"ss",content:"<p>ss</p>",
//                                            event:{mouseover:function(e,ek){},
//                                                    mouseout:function(e,ek){},
//                                                    click:function(e,ek){ }},
//                                            contexmenu:[{name:"c1",event:function(){}},
//                                                        {name:"c2",event:function(){}}],
//                                             tip:{width:200}       
//                                                });
});










