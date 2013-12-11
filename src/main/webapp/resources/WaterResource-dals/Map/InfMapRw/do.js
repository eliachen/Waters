/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
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
        { case 'rain':
                $.ligerDialog.open({ height: 500, width: 700, left: 0, top: 0,
                                          url: './InfChartRainQuey.do',
                                          title: '测试站1(00000001)',
                                          showMax: false,
                                          showToggle: true, showMin: true, isResize: false,
                                          modal: false
                                          });
                        break;
                    case 'water':
                          $.ligerDialog.open({ height: 500, width: 700, left: 0, top: 0,
                                          url: './InfChartWaterQuey.do',
                                          title: '测试站1(00000001)',
                                          showMax: false,
                                          showToggle: true, showMin: true, isResize: false,
                                          modal: false
                                          });
                              break;
        };
    };
    
    
    //var baidumapAPI= require('baidumapAPI');
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
          var rainData=[];
          var waterData=[];
          var t_rainicon='./resources/WaterResource-modules/baiduMap/icons/maker2/map-marker-drawing-pin-left-azure.png';
          var t_watericon='./resources/WaterResource-modules/baiduMap/icons/maker2/map-marker-drawing-pin-left-chartreuse.png';
          
          for(index in d.datatree){
              rainData.push({text:d.datatree[index].name+'...'+d.randomNum(10,20)+'mm',icon:t_rainicon});
              waterData.push({text:d.datatree[index].name+'...'+d.randomNum(50,200)+'m',icon:t_watericon})
          }
          
         //引入tree
          $("#treeInfWater").ligerTree({
            treeLine: false,
            checkbox: false,
            nodeWidth: 140,
            data: waterData,
            onClick: function(){
                openDialog({type:'water'});
            }
        });
        
         $("#treeInfRain").ligerTree({
            treeLine: false,
            checkbox: false,
            nodeWidth: 140,
            data: rainData,
            onClick: function(){
               openDialog({type:'rain'});
            }
        });
        
         //处理maker
        var imgnormal="./resources/WaterResource-modules/baiduMap/icons/maker1/pin-location-blue.png";
        var imgnoralm="./resources/WaterResource-modules/baiduMap/icons/maker1/pin-location-red.png";
        for(index in d.datatree){
                var content=      "<div><p style=color:black>站名:" + d.datatree[index].name + "</p></div>"
                                + "<div><p style=color:black>站址:" + '安徽省某地' + "</p></div>"
                                + "<div><p style=color:black>管理单位：" + '安徽省水文局' + "</p></div>";
                        
                        if (index==1){
                            content=content +
                                    "<div><p style=color:red>水位报警:超历史水位（+8m）</p></div>";
                             var tmp = d.setdata(d.datatree[index].point,imgnoralm,
                              d.datatree[index].name,
                              content,
                                      [{name:"水情数据",event:function(){
                                                    openDialog({type:'water'});
                                                                     }},
                                       {name:"雨情数据",event:function(){
                                                     openDialog({type:'rain'});              
                                                                 }}],200);
                                tmp.addtoMap(emap.bdmap);
                                tmp.setAnimation1(BMAP_ANIMATION_BOUNCE);
                            
                        }else{
                             var tmp = d.setdata(d.datatree[index].point,imgnormal,
                              d.datatree[index].name,
                              content,
                                      [{name:"水情数据",event:function(){
                                                    openDialog({type:'water'});
                                                                     }},
                                       {name:"雨情数据",event:function(){
                                                     openDialog({type:'rain'});                 
                                                                 }}],200);
                                          tmp.addtoMap(emap.bdmap);
                            
                        };
            };
        });
        };
});


