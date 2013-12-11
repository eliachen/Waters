/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * /InfMapMeteorology
 */

define(function(require,exports){
    var ebdmap = require('ebdmap');
    require('jquery');
    require('ligerUI');
    require('ligerUIcss');
    require('ebdmapcss');
    require('baiduMapAPI');

    
    //opt.type
    var openDialog=function(opt){
        switch(opt.type)
        { case 'ws':
                //./InfChartswAndkrQuery.do
                $.ligerDialog.open({ height: 550, width: 850, left: 0, top: 0,
                                          url: './InfChartMeteorologyQuery.do',
                                          title: '卫星云图信息',
                                          showMax: false,
                                          showToggle: true, showMin: true, isResize: false,
                                          modal: false
                                          });
                        break;
                    case 'w':
                          $.ligerDialog.open({ height:  550, width: 850, left: 0, top: 0,
                                          url: './InfChartWeatherQuery.do',
                                          title: '气象信息',
                                          showMax: false,
                                          showToggle: true, showMin: true, isResize: false,
                                          modal: false
                                          });
                              break;
        };
    };


    exports.initial=function(d){
        $(function(){
            //布局
            $("#layoutcontent").ligerLayout({ rightWidth:230, isRightCollapse: false, height: '100%', space: 1
                                              ,onHeightChanged:function(options){
                                                  if (acrd && options.middleHeight - 24 > 0){
                                                      acrd.setHeight(options.middleHeight - 24);
                                                     };
                                              }});
            var height = $(".l-layout-center").height();
            var acrd = $("#navaccordion").ligerAccordion({ height: height - 24 });
            acrd.setHeight(height - 24);
            
            //处理map
            var emap= new ebdmap.eliachenbdMap({div:"allmap"});
            emap.getBoundary({addr:"安徽省"});
            emap.addContorl({id:'rwtitle',anchor:BMAP_ANCHOR_TOP_LEFT,offset:new BMap.Size(25, 15)});
        
       
          //模拟数据
         
          
         //引入tree
          $("#treeInfsector1").ligerTree({
            treeLine: false,
            checkbox: false,
            nodeWidth: 140,
            idFieldName: 'id',
            parentIDFieldName: "pid",
            data: d.pumpandgate(),
            onClick: function(){
               openDialog({type:'ws'});
            }
        });
        
         $("#treeInfsector2").ligerTree({
            treeLine: false,
            checkbox: false,
            nodeWidth: 140,
            idFieldName: 'id',
            parentIDFieldName: "pid",
            data: d.pumpandgate(),
            onClick: function(){
               openDialog({type:'w'});
            }
        });
        
         //处理maker
        var imgnormal="./resources/WaterResource-modules/baiduMap/icons/maker1/pin-location-blue.png";
        //var imgnoralm="./resources/WaterResource-modules/baiduMap/icons/maker1/pin-location-red.png";
        for(index in d.datatree){
                  var content = "<div><p class=title>测试气象测站1</p></div>" +
                                     "<div class=imgmid><img class=imgmid src=./resources/WaterResource-modules/images/demo/pic_yt.jpg alt=点击查看大图 /></div>"+
                                      "<table class=tb border=1>" +
                                      "<tr>"+
                                        "<td width:20% rowspan=2 >气象信息</td>"+
                                        "<td width:20%>天气</td>" +
                                        "<td width:20%>气温</td>"+
                                        "<td width:20%>风向</td>"+
                                        "<td width:20%>风力</td>"+
                                     "</tr>" +
                                     "<tr>" +
                                     "<td><img class=imgweather src=./resources/WaterResource-modules/images/weather/320.png /><p class=pweather>晴</p></td>" +
                                     "<td>12℃~0℃</td>"+
                                     "<td>东风</td>"+
                                     "<td>微风</td>"+
                                     "</tr>"+
                                     "</table>";
                        
                             var tmp = d.setdata(d.datatree[index].point,imgnormal,
                              d.datatree[index].name,
                              content,[{name:"气象云图查询",event:function(){
                                                    openDialog({type:'ws'});
                                                                     }},
                                       {name:"天气查询",event:function(){
                                                                         openDialog({type:'w'});
                                                                 }}],240);
                          
//                {name:"库容与水位信息",event:function(g){
//                                                    openDialog({type:'sw_kr'});
//                                                                 }}
//                    [{name:"水情数据",event:function(){
//                                                    openDialog({type:'water'});
//                                                                     }},
//                                       {name:"雨情数据",event:function(){
//                                                     openDialog({type:'rain'});                 
//                                                                 }}]
                    tmp.addtoMap(emap.bdmap);
            };
        });
        };
});


