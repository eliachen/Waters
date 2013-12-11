/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * infMapEngineer/pg
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
        { case 'pump':
                $.ligerDialog.open({ height: 525, width: 720, left: 0, top: 0,
                                          url: './InfDataPumpAndGate.do',
                                          title: '测试站1(00000001)泵站信息',
                                          showMax: false,
                                          showToggle: true, showMin: true, isResize: false,
                                          modal: false
                                          });
                        break;
                    case 'gate':
                          $.ligerDialog.open({ height:  525, width: 720, left: 0, top: 0,
                                          url: './InfDataPumpAndGate.do',
                                          title: '测试站1(00000001)闸门信息',
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
          $("#treeInfPump").ligerTree({
            treeLine: false,
            checkbox: false,
            nodeWidth: 140,
            idFieldName: 'id',
            parentIDFieldName: "pid",
            data: d.pumpandgate(),
            onClick: function(){
               openDialog({type:'pump'});
            }
        });
        
         $("#treeInfGate").ligerTree({
            treeLine: false,
            checkbox: false,
            nodeWidth: 140,
            idFieldName: 'id',
            parentIDFieldName: "pid",
            data: d.pumpandgate(),
            onClick: function(){
               openDialog({type:'gate'});
            }
        });
        
         //处理maker
        var imgnormal="./resources/WaterResource-modules/baiduMap/icons/maker1/pin-location-blue.png";
        //var imgnoralm="./resources/WaterResource-modules/baiduMap/icons/maker1/pin-location-red.png";
        for(index in d.datatree){
                   var content = "<div class=\"imgmid\" style=\" width:180px; height:110px\">" +
                   "            <table border=1 class=\"tb\">" +
                   "                <tr>" +
                   "                     <td width:25%>名称</td>" +
                   "                     <td colspan=\"3\">某测试泵站名称</td>" +
                   "                </tr>" +
                   "                <tr>" +
                   "                     <td width:25%>编号</td>" +
                   "                     <td colspan=\"3\">95270001</td>" +
                   "                </tr>" +
                   "                <tr>" +
                   "                     <td width:25%>类型</td>" +
                   "                     <td colspan=\"3\">泵站</td>" +
                   "                </tr>" +
                   "                 <tr>" +
                   "                     <td width:25%>管理单位</td>" +
                   "                     <td colspan=\"3\">安徽省泵群协会</td>" +
                   "                </tr>" +
                   "                <tr>" +
                   "                    <td rowspan=\"2\" width:25%>数据信息</td>" +
                   "                    <td width:25%>水位</td>" +
                   "                    <td width:25%>用电量</td>" +
                   "                    <td width:25%>流量</td>" +
                   "                </tr>" +
                   "                <tr>"  +
                   "                    <td width:25%>132m</td>" +
                   "                    <td width:25%>300kw•h</td>" +
                   "                    <td width:25%>11m³/h</td>" +
                   "                </tr>" +
                   "            </table>" +
                   "        </div>";
                        
                             var tmp = d.setdata(d.datatree[index].point,imgnormal,
                              d.datatree[index].name,
                              content,
                                      [{name:"泵站信息",event:function(){
                                                    openDialog({type:'pump'});
                                                                     }},
                                       {name:"闸门信息",event:function(){
                                                     openDialog({type:'gate'});                 
                                                                 }}],200);
                    tmp.addtoMap(emap.bdmap);
                            
                     
            };
        });
        };
});


