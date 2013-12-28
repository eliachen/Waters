/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * report/water
 */

define(function(require,exports){
    require('jquery');
    require('ligerUI');
    require('ligerUIcss');
    require('ligerUIhelper');
    require('json2');
    
    var initial=function(){
        
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
            
            //初始化表单
            InitialForms();
        });
        
    };
    
     var InitialForms = function () {

            var GridRows=null;
            var InitialForm = function (form, myOpt) {

                var f = null;

                //选择测站表单
                var Gridoptions = {
                    columns: [
                { display: '测站名称', name: 'STNM', align: 'left', width: 65, minWidth: 60, clickToEdit: false },
                { display: '测站编码', name: 'STCD', minWidth: 120, width: 75, clickToEdit: false }
                ],
                    switchPageSizeApplyComboBox: true,
                    data: GridRows,
                    pageSize: 10,
                    checkbox: true,
                    showTableToggleBtn: false
                };


                //myOpt.g_single = myOpt.g_single || true;
                //表格处理
                if (myOpt.g_single == true) {
                    Gridoptions.checkbox = false;
                } else {
                    Gridoptions.checkbox = true;
                };



                //表单options
                var opts = {
                    inputWidth: 130, labelWidth: 90, space: 40,
                    fields: [
                { display: "开始时间", name: "STime", type: "date", options: myOpt.time || { showTime: true, format: "yyyy-MM-dd hh:mm" }, validate: { required: true }, group: "基础信息选择" },
                { display: "结束时间", name: "ETime", type: "date", options: myOpt.time || { showTime: true, format: "yyyy-MM-dd hh:mm" }, validate: { required: true} },
                { display: "测站选择", name: "STCD", type: "select", validate: { required: true }, options: {
                    hideGridOnLoseFocus:true,	
                    isMultiSelect: true, isShowCheckBox: true,
                    selectBoxWidth: 280,
                    selectBoxHeight: 240,
                    valueField: 'STCD',
                    textField: 'STNM',
                    grid: Gridoptions
                }
                },
                { display: "类型", name: "SelectType", type: "select", options: { data: [{ id: 1, text: '报表输出' }, { id: 2, text: "图表输出"}], initValue: 1, initText: '报表输出', selectBoxHeight: 50 }, validate: { required: true }, group: "输出类型选择" }
                ],
                    buttons: [{ text: '提交', width: 60, newline: false, click: function () {
//                        if ($(form).valid()) {
//                            myOpt.fnclk(f.getData());
//                            LigerUIHelper.tip("正在生成报表,请稍后");
//                        } else {
//                            //$.ligerDialog.warn("初始条件错误!");
//                            LigerUIHelper.tip("查询条件错误!");
//                        }
                            myOpt.fnclk(f.getData());
                            LigerUIHelper.tip("正在生成报表,请稍后");
                    }
                    }
                ]
                };

                //处理时间选择
                if (myOpt.t_single == true) {
                    opts.fields[0] = { display: "时间", name: "Time", type: "date", options: myOpt.time || { showTime: true, format: "yyyy-MM-dd hh:mm" }, validate: { required: true }, group: "基础信息选择" };
                    opts.fields.splice(1, 1);
                };

                //时间自定义
                if (myOpt.TimeEx) {
                    opts.fields.splice(0, 2);
                    opts.fields = myOpt.TimeEx.concat(opts.fields);
                    //opts.fields.unshift(myOpt.TimeEx);
                };

                // opts.fields.
                f = $(form).ligerForm(opts);

                //表单验证
//                $.metadata.setType("attr", "validate");
//                LigerUIHelper.validate(form);

            };

          
            var RepSet = function (data) {
                //RemoveTitle();
                var test = {rwmodel: 0,
                            rwq: [
                            {stcd: "ss", stnm: "bb"}
                ]};
                
                //$("#Div2").attr("src", "./Water/RepQuery.do?rep=" + JSON2.stringify(test));
                var senddata={rwrepmodel:"Waterlevelforperiodoftime",outModel:"Pdf",Pars:{t1:"s1",t2:"s2"},RepPath:"ss",title:"titleval"};
                //{user:JSON2.stringify({name:"das",education:"dasf"}),s2:JSON2.stringify(senddata),s3:1}
                
            $.ajax({
                type: "POST",
                url: "../Water/test.do",
                data: {user:"dada",s2:JSON2.stringify(senddata),s3:1},
                success: function(response)
                {
                   
                },
                error: function(e) {
                    alert('Error: ' + e);
                }
            });
        
//                $.getJSON("../Water/test.do",{t:JSON2.stringify(senddata)},function(data){
//                     
//                 });
                 
                 
                 
//                  LigerUIHelper.ajax({
//                            loading: "正在处理请求.....",
//                            url: "../Water/test.do",
//                            type:"application/json",
//                            data:JSON2.stringify({'t1':"32",'t2':3}),
//                            success: function (data, msg) {
//                               
//                            },
//                            error: function (msg) {
//                                $.ligerDialog.error(msg);
//                            }
//                        });
            };



            //时段水位
            InitialForm("#form_time", { g_single: false, t_single: false,
                time: { showTime: true, format: "yyyy-MM-dd hh", onChangeDate: function (val) { this.setValue(val + ':00'); } },
                fnclk: function (d) {
                    if (d.SelectType == 1) {
                        var sd = { stcds: d.STCD.split(";"), timepars: [d.STime, d.ETime], repshtype: 0, watershtype: 0, H: $(".l-layout-center").height(), W: $(".l-layout-center").width() };
                        RepSet(sd);
                    } else {
                        var sd = { stcds: d.STCD.split(";"), timepars: [d.STime, d.ETime], repshtype: 1, watershtype: 0, H: $(".l-layout-center").height(), W: $(".l-layout-center").width() };
                        RepSet(sd);
                    };

                }
            });


            //日逐时水位
            InitialForm("#form_day_avg", { t_single: true, g_single:true,
                time: { showTime: false, format: "yyyy-MM-dd" },
                fnclk: function (d) {
                    if (d.SelectType == 1) {
                        var sd = { stcds: d.STCD.split(";"), timepars: [d.Time], repshtype: 0, watershtype: 1, H: $(".l-layout-center").height(), W: $(".l-layout-center").width() };
                        RepSet(sd);
                    } else {
                        var sd = { stcds: d.STCD.split(";"), timepars: [d.Time], repshtype: 1, watershtype: 1, H: $(".l-layout-center").height(), W: $(".l-layout-center").width() };
                        RepSet(sd);
                    };

                }
            });

            var data_y = [];
            for (var i = new Date().getFullYear(); i > (new Date().getFullYear() - 10); i--) {
                data_y.push({ id: i, text: i + '年' });
            };


            var data_m = [];
            for (var i = 1; i < 13; i++) {
                data_m.push({ id: i, text: i + '月' });
            }

            //月逐日水位
            InitialForm("#form_month_avg", { t_single: false, g_single: true,
                TimeEx: [{ display: "年份", name: "YTime", type: "select", validate: { required: true },
                    options: { data: data_y, initValue: new Date().getFullYear(), initText: new Date().getFullYear() + '年', selectBoxHeight: 100 }, group: "基础信息选择"
                },
                       { display: "月份", name: "MTime", type: "select", validate: { required: true },
                           options: { data: data_m, initValue: 1, initText: '1月', selectBoxHeight: 260 }
                       }],
                       fnclk: function (d) {
                       var t = new Date();
                       t.setFullYear(d.YTime);
                       t.setMonth(d.MTime - 1);

                    if (d.SelectType == 1) {
                        var sd = { stcds: d.STCD.split(";"), timepars: [t], repshtype: 0, watershtype: 2, H: $(".l-layout-center").height(), W: $(".l-layout-center").width() };
                        RepSet(sd);
                    } else {
                        var sd = { stcds: d.STCD.split(";"), timepars: [t], repshtype: 1, watershtype: 2, H: $(".l-layout-center").height(), W: $(".l-layout-center").width() };
                        RepSet(sd);
                    };

                }
            });


            //年逐月水位
            InitialForm("#form_year_avg", { t_single: false, g_single: true,
                TimeEx: [{ display: "年份", name: "YTime", type: "select", validate: { required: true },
                    options: { data: data_y, initValue: new Date().getFullYear(), initText: new Date().getFullYear() + '年', selectBoxHeight: 100 }, group: "基础信息选择"
                }],
                fnclk: function (d) {
                    var t = new Date();
                    t.setFullYear(d.YTime);
                    if (d.SelectType == 1) {
                        var sd = { stcds: d.STCD.split(";"), timepars: [t], repshtype: 0, watershtype: 3, H: $(".l-layout-center").height(), W: $(".l-layout-center").width() };
                        RepSet(sd);
                    } else {
                        var sd = { stcds: d.STCD.split(";"), timepars: [t], repshtype: 1, watershtype: 3, H: $(".l-layout-center").height(), W: $(".l-layout-center").width() };
                        RepSet(sd);
                    };

                }
            });

            //时段流量
            InitialForm("#form_q_time", { g_single: false, t_single: false,
                time: { showTime: true, format: "yyyy-MM-dd hh", onChangeDate: function (val) { this.setValue(val + ':00'); } },
                fnclk: function (d) {
                    if (d.SelectType == 1) {
                        var sd = { stcds: d.STCD.split(";"), timepars: [d.STime, d.ETime], repshtype: 0, watershtype: 4, H: $(".l-layout-center").height(), W: $(".l-layout-center").width() };
                        RepSet(sd);
                    } else {
                        var sd = { stcds: d.STCD.split(";"), timepars: [d.STime, d.ETime], repshtype: 1, watershtype: 4, H: $(".l-layout-center").height(), W: $(".l-layout-center").width() };
                        RepSet(sd);
                    };

                }
            });

            //时段蓄水量
            InitialForm("#form_wth_time", { g_single: false, t_single: false,
                time: { showTime: true, format: "yyyy-MM-dd hh", onChangeDate: function (val) { this.setValue(val + ':00'); } },
                fnclk: function (d) {
                    if (d.SelectType == 1) {
                        var sd = { stcds: d.STCD.split(";"), timepars: [d.STime, d.ETime], repshtype: 0, watershtype: 5, H: $(".l-layout-center").height(), W: $(".l-layout-center").width() };
                        RepSet(sd);
                    } else {
                        var sd = { stcds: d.STCD.split(";"), timepars: [d.STime, d.ETime], repshtype: 1, watershtype: 5, H: $(".l-layout-center").height(), W: $(".l-layout-center").width() };
                        RepSet(sd);
                    };

                }
            });

        };
    
    exports.initial=initial;
    
    
});



