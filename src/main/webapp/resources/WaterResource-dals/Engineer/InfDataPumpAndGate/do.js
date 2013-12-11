/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * InfEngineer/pg
 */

define(function(require,exports){
    require('jquery');
    require('ligerUI');
    require('ligerUIcss');
    
        var treeinf;
        var f_water;
        var f_mainelc;
        var f_temperature;
        var f_pump = [];
        
    exports.initial=function(){
        

        $(function () {
            //初始化树
            InitialpumpstaTree();

            //初始化表单结构及其数据
            InitialpumpstaForm();
            //设置初始标题
            //settitle(treeinf.getDataByID(2).text);
            //设置表格样式
            //$("#dtmain").width($("body").width() * 0.8);
            //$("#dtmain").height($("body").height() - 60);

            simulateData();
            setInterval(function () {
                simulateData();
                //LigerUIHelper.tiptm("加载数据成功", 1500);
            }, 3000)

        });
    };
    
        var InitialpumpstaTree = function () {
            var location = [];
            var data = [];
            for (var index = 1; index < 10; index++) {
                //data.push({ id: index, pid: 1, text: "测试泵站"+index });
            }

            //data.push({ id:1, text: "地点1" });
            data.push({ id: 1, text: "地点1" });
            data.push({ id: 2, pid: 1, text: "地点1-测试泵站1" });
            data.push({ id: 3, pid: 1, text: "地点1-测试泵站2" });
            data.push({ id: 4, pid: 1, text: "地点1-测试泵站3" });
            data.push({ id: 5, pid: 1, text: "地点1-测试泵站4" });
            data.push({ id: 6, pid: 1, text: "地点1-测试泵站5" });
            data.push({ id: 7, pid: 1, text: "地点1-测试泵站6" });
            data.push({ id: 8, pid: 1, text: "地点1-测试泵站7" });
            data.push({ id: 9, pid: 1, text: "地点1-测试泵站8" });

            data.push({ id: 10, text: "地点2" });
            data.push({ id: 11, pid: 10, text: "地点2-测试泵站1" });
            data.push({ id: 11, pid: 10, text: "地点2-测试泵站2" });

            treeinf = $("#treeinfpumpstation").ligerTree({
                treeLine: false,
                checkbox: false,
                idFieldName: 'id',
                parentIDFieldName: "pid",
                nodeWidth: 140,
                data: data,
                onClick: function (node) {
                    //settitle(node.data.text);
                }
            });


        };

        var InitialpumpstaForm = function () {

            f_water = $("#f_water").ligerForm({
                inputWidth: 80, labelWidth: 80, space: 1,
                fields: [
                { display: "流量(m³/h)", name: "flow", type: "number" },
                { display: "闸上水位(m)", name: "uprz", type: "number" },
                { display: "闸下水位(m)", name: "downrz", type: "number" }
                ]
            });

            f_mainelc = $("#f_mainelc").ligerForm({
                inputWidth: 80, labelWidth: 110, space: 30,
                fields: [
                { display: "电压(KV)", name: "v", type: "number" },
                { display: "电流(A)", name: "a", type: "number" },
                { display: "有功功率(KW/H)", name: "activep", type: "number" },
                { display: "无功功率(Kavr/H)", name: "reactivep", type: "number" },
                { display: "功率因素", name: "par", type: "number" }
                ]
            });

            f_temperature = $("#f_temperature").ligerForm({
                inputWidth: 80, labelWidth: 110, space: 30,
                fields: [
                { display: "推子温度(℃)", name: "ttz", type: "number" },
                { display: "定子温度(℃)", name: "tdz", type: "number" },
                { display: "上导温度(℃)", name: "tsd", type: "number" },
                { display: "下导温度(℃)", name: "txd", type: "number" }
                ]
            });

            f_pump.push(pumpform("#f_pump1"));
            f_pump.push(pumpform("#f_pump2"));
            f_pump.push(pumpform("#f_pump3"));
        };

        var pumpform = function (f) {
            return $(f).ligerForm({
                inputWidth: 80, labelWidth: 110, space: 30,
                fields: [
                { display: "运行状态", name: "runstate", type: "text", width: 35 },
                { display: "电压(KV)", name: "v", type: "number" },
                { display: "电流(A)", name: "a", type: "number" },
                { display: "有功功率(KW/H)", name: "activep", type: "number" },
                { display: "无功功率(Kavr/H)", name: "reactivep", type: "number" },
                { display: "功率因素", name: "par", type: "number" },
                { display: "闸门开度(m)", name: "kd", type: "number" },
                { display: "流量(m³/h)", name: "flow", type: "number" }
                ]
            });
        };

        var setdatastate = function (t) {
            var td = $("#datastate");
            if (t) {
                td.css("color", "green");
                td.html("数据状态:正常");
            } else {
                td.css("color", "red");
                td.html("数据状态:异常");
            };
        };

        var settitle = function (t) {
            $("#title").html(t);
        };
        
        var simulateData = function () {
            f_water.setData({ flow: randomnum(100, 210), uprz: randomnum(10, 15), downrz: randomnum(5, 10) });
            f_mainelc.setData({
                v: randomnum(100, 210), a: randomnum(10, 15), activep: randomnum(5, 10),
                reactivep: randomnum(100, 210), par: randomnum(0, 1)
            });

            f_temperature.setData({
                ttz: randomnum(10, 30), tdz: randomnum(10, 30),
                tsd: randomnum(10, 30), txd: randomnum(10, 30)
            });

            $.each(f_pump, function (index, item) {
                item.setData({
                    runstate: '运行', v: randomnum(100, 210),
                    a: randomnum(10, 15), activep: randomnum(5, 10),
                    reactivep: randomnum(100, 210), par: randomnum(0, 1),
                    kd: randomnum(0, 15), flow: randomnum(0, 110)
                });
            });

        };
        var randomnum = function (min, max) {
            return (Math.random() * max + min).toFixed(2);
        };
});


