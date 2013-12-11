/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(function(require,exports){
    require('echarts');
    //require('esl');
    var initial=function(e,c){
        var rq=new swkrQuery(e,c);
        
        rq.draw();
    };
    
    //echarts:echarts的命名空间
    //cig.container
    //cig.data:[{t:,v:}]必须是序列化好的
    var swkrQuery=function(echarts,cig){
        this.cig=cig;
        this.ec=echarts;
        this.chart;
    };
    swkrQuery.prototype={
        _gettitle:function(){
            return '水库水位与库容变化曲线';
        },
        _getdata:function(){
            var data={t_axis:[],sws:[],krs:[]};
           
            for(index in this.cig.data){
                data.t_axis.push(this.cig.data[index].t);
                data.sws.push(this.cig.data[index].sw);
                data.krs.push(this.cig.data[index].kr);
            }
            return data;
        },
        _gettip:function(t,sw,kr){
                    var content =     "时间:" + t + '</br>' +
                                      "水位:" + sw + 'm' + '</br>' +
                                      "库容:" + kr + 'x10^5 m³';;
                        return content;
            return content;
        },
        draw:function(){
         var c=this;
           //先拿数据
          var d=this._getdata();
          this.chart= this.ec.init(document.getElementById(this.cig.container));
           var option = {
                 title : {
                     text: this._gettitle(),
                     x:'center'
                 },
                 tooltip: {
                      show: true,
                      trigger: 'axis',
                      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                          },
                      formatter: function(params) {
                        return c._gettip(params[0][1],params[0][2],params[1][2]);
                         }
                            },
                 legend: {
                       orient: 'horizontal',
                       x: '95',
                       y: '40',
                       data:  ['水库水位', '水库库容']
                 },
                 toolbox: {
                     show: true,
                     feature: {
                            mark: false,
                            restore: true,
                            magicType: ['bar', 'line'],
                            saveAsImage: true
                        }
                 },
                 calculable : true,
                 dataZoom: {
                                show: true,
                                realtime: true,
                                start: 0,
                                end: 50
                            },
                 xAxis : [
                     {
                         type : 'category',
                         data : d.t_axis
                     }
                 ],
                 yAxis : [
                     {
                         type : 'value',
                         splitArea : {show : true}
                     }
                 ],
                 series : [
                     {
                         name:'水库水位',
                         type:'bar',
                         data:d.sws,
                         itemStyle: {
                            normal: {                   // 系列级个性化，横向渐变填充
                                color: (function () {
                                    var zrColor = require('zrender/tool/color');
                                    return zrColor.getLinearGradient(
                                             0, 0, 1000, 0,
                                            [[0, 'rgba(30,144,255,0.8)'], [1, 'rgba(138,43,226,0.8)']]
                                             )
                                })()
                            }
                        }
                     },
                     {
                         name:'水库库容',
                         type:'line',
                         data:d.krs,
                          itemStyle: {
                            normal: {
                                areaStyle: {
                                    color: 'rgba(252, 195, 153, 0.6)'
                                }
                            }  
                }
            }       
                 ]
             };
             //绘制
            this.chart.setOption(option);  
            //this.chart.refresh();
                     }
        
    };
    
    exports.swkrQuery=swkrQuery;
    exports.initial=initial;
});


