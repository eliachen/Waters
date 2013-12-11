/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(function(require,exports){
    require('baiduMapAPI');
    var ebdmap=require('ebdmap');
    
    exports.setdata=function(point,img,label,content,contexmenu,tipwidth){
         var tmpemaker= new ebdmap.eliachenBdMaker({point:point,img:img,
                                            label:label,content:content,
                                            event:{mouseover:function(e,ek){},
                                                    mouseout:function(e,ek){},
                                                    click:function(e,ek){ }},
                                            contexmenu:contexmenu,
                                            tip:{width:tipwidth}       
                                                });
          tmpemaker.initialize();
          return  tmpemaker;
    };
    
    exports.datapoint=[ new BMap.Point(117.272306, 32.066323), new BMap.Point(116.252306, 31.166323),
                        new BMap.Point(117.302306, 33.036323),new BMap.Point(118.302306, 31.036323)];
    
    exports.datatree= [{name:'测试站点1',point:new BMap.Point(117.272306, 32.066323)},
                      {name:'测试站点2',point:new BMap.Point(116.252306, 31.166323)},
                      {name:'测试站点3',point:new BMap.Point(117.302306, 33.036323)},
                      {name:'测试站点4',point:new BMap.Point(118.302306, 31.036323)}];
                  
    exports.rwdata  =   [{stnm:'测试站点1',point:new BMap.Point(117.272306, 32.066323)},
                      {name:'测试站点2',point:new BMap.Point(116.252306, 31.166323)},
                      {name:'测试站点3',point:new BMap.Point(117.302306, 33.036323)},
                      {name:'测试站点4',point:new BMap.Point(118.302306, 31.036323)}];
                  
    exports.pumpandgate= function(){
          var data1 = [];
            data1.push({ id: 1, text: "合肥市" });
            data1.push({ id: 2, pid: 1, text: "地点1" });
            data1.push({ id: 3, pid: 1, text: "地点2" });
            data1.push({ id: 4, pid: 1, text: "地点3" });
            data1.push({ id: 10, text: "宿州市" });
            data1.push({ id: 11, pid: 10, text: "地点1" });
            data1.push({ id: 11, pid: 10, text: "地点2" });
        return data1;
    };
    
          

    exports.randomNum=function(min,max){
            return (Math.random() * max + min).toFixed(2);
    };
});

