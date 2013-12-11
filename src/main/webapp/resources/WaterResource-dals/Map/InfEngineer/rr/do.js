/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * infMapEngineer/rr
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
        { case 'sw_kr':
                //./InfChartswAndkrQuery.do
                $.ligerDialog.open({ height: 525, width: 720, left: 0, top: 0,
                                          url: './InfChartswAndkrQuery.do',
                                          title: '测试站1(00000001)水位与库容信息',
                                          showMax: false,
                                          showToggle: true, showMin: true, isResize: false,
                                          modal: false
                                          });
                        break;
                    case 'sw_ll':
                          $.ligerDialog.open({ height:  525, width: 720, left: 0, top: 0,
                                          url: './InfChartswAndllQuery.do',
                                          title: '测试站1(00000001)水位与流量信息',
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
          $("#treeInfRiver").ligerTree({
            treeLine: false,
            checkbox: false,
            nodeWidth: 140,
            idFieldName: 'id',
            parentIDFieldName: "pid",
            data: d.pumpandgate(),
            onClick: function(){
               openDialog({type:'sw_ll'});
            }
        });
        
         $("#treeInfReservoir").ligerTree({
            treeLine: false,
            checkbox: false,
            nodeWidth: 140,
            idFieldName: 'id',
            parentIDFieldName: "pid",
            data: d.pumpandgate(),
            onClick: function(){
               openDialog({type:'sw_kr'});
            }
        });
        
         //处理maker
        var imgnormal="./resources/WaterResource-modules/baiduMap/icons/maker1/pin-location-blue.png";
        //var imgnoralm="./resources/WaterResource-modules/baiduMap/icons/maker1/pin-location-red.png";
        for(index in d.datatree){
                  var content =
                    "       <div class=\"imgmid\" style=\"width:180px; height:180px\">" +
                    "            <table border=\"1\" class=\"tb\">" +
                    "                 <tr>" +
                    "                    <td width:20% >测站编号</td>" +
                    "                    <td colspan=\"3\" width:20%>00009527</td>" +
                    "                </tr>" +
                    "                <tr>" +
                    "                    <td width:20% >名称</td>" +
                    "                    <td colspan=\"3\" width:20%>XXX河道</td>" +
                    "                </tr>" +
                    "                <tr>" +
                    "                    <td width:20% >类型</td>" +
                    "                    <td colspan=\"3\" width:20%>河道</td>" +
                    "                </tr>" +
                    "                <tr>" +
                    "                    <td width:20% colspan=\"2\" rowspan=\"2\" >河道信息</td>" +
                    "                    <td width:20%>流量</td>" +
                    "                    <td width:20%>水位</td>" +
                    "                </tr>" +
                    "               " +
                    "                 <tr>" +
                    "                    <td width:20%>2000m³/s</td>" +
                    "                    <td width:20%>132m</td>" +
                    "                </tr>" +
                    "            </table>" +
                    "       </div>";
                        
                             var tmp = d.setdata(d.datatree[index].point,imgnormal,
                              d.datatree[index].name,
                              content,[{name:"流量与水位信息",event:function(){
                                                    openDialog({type:'sw_ll'});
                                                                     }},
                                       {name:"库容与水位信息",event:function(){
                                                                         openDialog({type:'sw_kr'});
                                                                 }}],200);
                          
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


