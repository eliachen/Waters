/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(function(require,exports){
    //require('echarts');
    //require('esl');

    var initial=function(e,c){
        var rq=new rainQuery(e,c);
        rq.draw();
    };
    
    
    //echarts:echarts的命名空间
    //cig.container
    //cig.stcd
    //cig.stnm
    //cig.data:[{t:,v:}]必须是序列化好的
    //cig.alm
    var rainQuery=function(echarts,cig){
        this.cig=cig;
        this.ec=echarts;
        this.chart;
    };
    rainQuery.prototype={
        _gettitle:function(){
            return this.cig.stnm+'('+this.cig.stcd+')'+'逐日降雨过程';
        },
        _getdata:function(){
            var data={t_axis:[],drps:[],alms:[]};
           
            for(index in this.cig.data){
                data.t_axis.push(this.cig.data[index].t);
                data.drps.push(this.cig.data[index].v);
                data.alms.push(this.cig.alm);
            }
            return data;
        },
        _gettip:function(t,cv,almv){
            var content="时间:"+t+"</br>";
            if (cv>almv){
                content=content+
                        "降雨量:"+cv+"(mm)"+""+
                        "<p style=color:red>降雨超限:+"+(cv-almv)+"(mm)</p>";
            }else{
                 content=content+
                        "降雨量:"+cv+"(mm)";
            };
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
                        return c._gettip(params[0][1],params[0][2],params[1][2])
                         }
                            },
                 legend: {
                       orient: 'horizontal',
                       x: '95',
                       y: '40',
                       data: ['降雨量(mm)','降雨超限量(mm)']
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
                                end: 40
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
                         name:'降雨量(mm)',
                         type:'bar',
                         data:d.drps,
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
                         name:'降雨超限量(mm)',
                         type:'line',
                         data:d.alms,
                          itemStyle: {
                             normal: {
                            lineStyle: {
                            shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
                     }
                 ]
             };
             //绘制
            this.chart.setOption(option);  
            //this.chart.refresh();
                     }
        
    };
    
    exports.rainQuery=rainQuery;
    exports.initial=initial;
});


