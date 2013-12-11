/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(function(require,exports){
    require('ichart');
    require("jquery");
    require('ligerUI');
    require('ligerUIcss');

    var initial=function(){
      initialWeatherChart();
      initialQueryBar();
      
    };
     var initialWeatherChart = function () {

            var data = [
						{ name: '周一', value: '23', color: '#53b8b1' },
						{ name: '周二', value: '33', color: '#53b8b1' },
						{ name: '周三', value: '20', color: '#53b8b1' },
						{ name: '周四', value: '29', color: '#53b8b1' },
						{ name: '周五', value: '31', color: '#53b8b1' },
						{ name: '周六', value: '34', color: '#53b8b1' },
						{ name: '周天', value: '17', color: '#53b8b1' }
            ];

            var data1 = [
				        	{
				        	    name: '',
				        	    value: [0, 3, 8, 11, 7, 2, 13, 1, 2],
				        	    color: '#34a1d9',
				        	    line_width: 5
				        	}
            ];

            var chart = new iChart.Column2D({
                render: 'canvasDiv',
                data: data,
                tip: {
                    enable: true,
                    shadow: true,
                    listeners: {
                        //tip:提示框对象、name:数据名称、value:数据值、text:当前文本、i:数据点的索引
                        parseText: function (tip, name, value, text, i) {
                            var weather = '晴';
                            var f1 = '12';
                            var f2 = '西北风';
                            return "<div class='mytip'>" +
                                   "<span>气温:" + value + "℃" + "</br></span>" +
							       "<span>天气状况:" + weather + "</br></span>" +
                                   "<span>风力:" + f1 + "级" + "</br></span>" +
                                   "<span>风向:" + f2 + "</br></span>" +
                                   "</div>";
                        }
                    }
                },
                title: {
                    text: '测试气象测站' + '于' + new Date().getMonth() + '月' + '第二周气象数据',
                    color: '#4572a7',
                    textAlign: 'center',
                    padding: '0 40',
                    border: {
                        enable: true,
                        width: [0, 0, 4, 0],
                        color: '#4572a7'
                    },
                    height: 40
                },
                width: 800,
                height: 400,
                padding: 0,
                label: {
                    fontsize: 11,
                    fontweight: 600,
                    color: '#666666'
                },
                shadow: true,
                shadow_blur: 2,
                shadow_color: '#aaaaaa',
                shadow_offsetx: 1,
                shadow_offsety: 0,
                background_color: '#f7f7f7',
                column_width: 62,
                sub_option: {
                    label: {
                        color: '#31e0d4'
                    },
                    border: {
                        width: 2,
                        radius: '5 5 0 0',//上圆角设置
                        color: '#ffffff'
                    },
                    listeners: {
                        parseText: function (r, t) {
                            //自定义柱形图上方label的格式。
                            return t + '℃';
                        }
                    }
                },
                coordinate: {
                    background_color: null,
                    grid_color: '#c0c0c0',
                    width: '90%',
                    height: '78%',
                    axis: {
                        color: '#c0d0e0',
                        width: [0, 0, 1, 0]
                    },
                    scale: [{
                        position: 'left',
                        start_scale: 0,
                        end_scale: 40,
                        scale_space: 5,
                        scale_enable: false,
                        label: {
                            fontsize: 11,
                            fontweight: 600,
                            color: '#666666'
                        }
                    }, {
                        position: 'right',
                        start_scale: 0,
                        scale_space: 3,
                        end_scale: 13,
                        scale_enable: false,
                        scaleAlign: 'right',
                        label: {
                            fontsize: 11,
                            fontweight: 600,
                            color: '#666666'
                        }
                    }]
                }
            });
            //构造折线图
            var line = new iChart.LineBasic2D({
                z_index: 1000,
                data: data1,
                label: {
                    color: '#4c4f48'
                },
                point_space: chart.get('column_width') + chart.get('column_space'),
                scaleAlign: 'right',
                sub_option: {
                    label: {
                        color: '#f7f70d'
                    },
                    listeners: {
                        parseText: function (r, t) {
                            //自定义柱形图上方label的格式。
                            return t + '级';
                        }
                    },
                    point_size: 22
                },
                coordinate: chart.coo//共用坐标系
            });

            chart.plugin(line);


            //利用自定义组件构造左侧说明文本
            chart.plugin(new iChart.Custom({
                drawFn: function () {
                    //计算位置
                    var coo = chart.getCoordinate(),
                        x = coo.get('originx'),
                        y = coo.get('originy');
                    //在左上侧的位置，渲染一个单位的文字
                    chart.target.textAlign('start')
                    .textBaseline('bottom')
                    .textFont('600 16px Verdana')
                    .fillText('气温(℃)', x - 20, y - 20, false, '#53b8b1')
                    .textFont('600 11px Verdana');
                    //.fillText('℃', x - 20, y - 10, false, '#c52120');

                    //在右上侧的位置，渲染一个单位的文字
                    chart.target.textAlign('end')
                    .textBaseline('bottom')
                    .textFont('600 16px Verdana')
                    .fillText('风力等级', x + 20 + coo.width, y - 20, false, '#34a1d9')
                    .textFont('600 11px Verdana');
                    //.fillText('in thousands', x + 20 + coo.width, y - 10, false, '#34a1d9');

                }
            }));

            chart.draw();
        };
        
     var initialQueryBar = function () {
            var datayear = [];
            for (var index = new Date().getFullYear() ; index > new Date().getFullYear() - 10; index--) {
                datayear.push({text:index+'年', id:index});
            }

            comboxSet("#year", datayear);

            var datamonth = [];
            for (var index = 1 ; index < 13; index++) {
                datamonth.push({ text: index + '月', id: index });
            }

            comboxSet("#month", datamonth);

            var dataweek = [];
            for (var index = 1 ; index < 5; index++) {
                dataweek.push({ text: index + '周', id: index });
            }

            comboxSet("#week", dataweek);

            $('#querybtn').ligerButton({
                click: function () {
                    
                }
            })
            
        };

        var comboxSet = function (id, dt) {

         $(id).ligerComboBox(
           {
               data: dt,
               width:100
           });
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
    var weatherQuery=function(echarts,cig){
        this.cig=cig;
        this.ec=echarts;
        this.chart;
    };
    weatherQuery.prototype={
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
    
    exports.weatherQuery=weatherQuery;
    exports.initial=initial;
});


