/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(function(require,exports){
  
    //require('esl');

    var initial=function(e,c){
//        var wq=new meteorologyQuery(e,c);
//        wq.draw();
    };
    
    
    //echarts:echarts的命名空间
    //cig.container
    //cig.stcd
    //cig.stnm
    //cig.data:[{t:,v:}]必须是序列化好的
    //cig.alm 汛限水位
    //cig.assure 保证水位
    //cig.protect 安全水位
    //cig.hismax 历史最高水位
    var meteorologyQuery=function(echarts,cig){
        this.cig=cig;
        this.ec=echarts;
        this.chart;
    };
    meteorologyQuery.prototype={
        _gettitle:function(){
            return this.cig.stnm+'('+this.cig.stcd+')'+'逐日水位过程';
        },
        _getdata:function(){
            var data={t_axis:[],rzs:[],alms:[],assures:[],protects:[],hismaxs:[]};
            for(index in this.cig.data){
                data.t_axis.push(this.cig.data[index].t);
                data.rzs.push(this.cig.data[index].v);
                data.alms.push(this.cig.alm);
                data.assures.push(this.cig.assure);
                data.protects.push(this.cig.protect);
                data.hismaxs.push(this.cig.hismax);
            }
            return data;
        },
        _gettip:function(t,cv,almv,assurev,protectv,hismaxv){
            var content="时间:"+t+"</br>";
           content=content+
                        "水位:"+cv+"(m)"+"</br>";
                
           if(cv>almv){
               content=content+
                       "<p style=color:red>超汛限:+"+(cv-almv)+"(m)</p>";
           };
           if(cv>assurev){
                content=content+
                       "<p style=color:red>超保证:+"+(cv-assurev)+"(m)</p>";
           };
           if(cv>protectv){
               content=content+
                       "<p style=color:red>超安全:+"+(cv-protectv)+"(m)</p>";
           };
           if(cv>hismaxv){
                content=content+
                       "<p style=color:red>超历史最高:+"+(cv-hismaxv)+"(m)</p>";
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
                        return c._gettip(params[0][1],params[0][2],
                                         params[1][2],params[2][2],
                                         params[3][2],params[4][2]
                                         )
                         }
                            },
                 legend: {
                       orient: 'horizontal',
                       x: '95',
                       y: '40',
                       data: ['当前水位','汛限水位','保证水位','安全水位','历史最高水位'],
                        selected: {
                        '保证水位' : false,
                        '安全水位' : false,
                        '历史最高水位' : false
                        }   
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
                         name:'当前水位',
                         type:'bar',
                         data:d.rzs,
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
                         name:'汛限水位',
                         type:'line',
                         data:d.alms,
                             itemStyle: {
                             normal: {
                             lineStyle: {
                            shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            }
                     },
                     {
                         name:'保证水位',
                         type:'line',
                         data:d.assures,
                             itemStyle: {
                             normal: {
                             lineStyle: {
                            shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            }
                     },
                      {
                         name:'安全水位',
                         type:'line',
                         data:d.protects,
                             itemStyle: {
                             normal: {
                             lineStyle: {
                            shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            }
                     },
                     {
                         name:'历史最高水位',
                         type:'line',
                         data:d.hismaxs,
                             itemStyle: {
                             normal: {
                             lineStyle: {
                            shadowColor : 'rgba(0,0,0,0.4)'
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
    
    exports.meteorologyQuery=meteorologyQuery;
    exports.initial=initial;
});


