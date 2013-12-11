<%-- 
    Document   : InfChartWeatherQuery
    Created on : 2013-12-8, 21:37:17
    Author     : 尔康
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html style="height:100%;width:100%;margin:0 auto">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>天气信息查询</title>
        <jsp:include page="../masterlib/sealib.jspf"></jsp:include>
        <script type="text/javascript">
             
                 seajs.config({base:"./resources/WaterResource-modules/",
                            alias: {
                            "jquery": "jquery/jquery-1.6.2.min",
                            "ligerUI":"ligerUI/js/ligerui.min.js",
                            "ligerUIcss":"ligerUI/skins/Aqua/css/ligerui-all.css",
                            "ichart":"charts/ichartjs/ichart.1.2.min.js"
                                    }
                         });
    
             //"baidumapAPI":"http://api.map.baidu.com/api?v=2.0&ak=79911baf0e80c70c7e77e5654b4a8204"     
            seajs.use(["./resources/WaterResource-dals/ChartQuerys/weatherQuery/weatherQuery.js",
                       "./resources/WaterResource-dals/ChartQuerys/weatherQuery/weatherdata.js"],function(m,d){
                       m.initial();
            });
        </script>
        
        <script type="text/javascript">
            $(function(){
                $("#st").ligerDateEditor(timeSet('开始时间'));
                $("#et").ligerDateEditor(timeSet('结束时间'));
                $("#buttonquery").ligerButton({
                text: '查询信息',
                click: function (e) { 
                    
                }
            });
            });
            
            var timeSet=function(label){
              return opt=  {
                    format: "yyyy-MM-dd hh",
                    label: label,
                    labelWidth: 60,
                    labelAlign: 'center',
                    cancelable: false,
                    showTime: true,
                    onChangeDate: function (val) {
                        this.setValue(val + ':00');
                        endTime = val + ':00';
                    }
                };
            };
            
        </script>
        
        <style>
        .mytip span {
            color:#005268;
            font-size:15px;
        }
        .querymid {
           margin:0 auto;
           width:100px
        }
        html, body {
            margin:0 auto;
            width:100%;
            height:100%;
            overflow-x:hidden;
            overflow-y:hidden
        }

        table, td {
            border-color:#dfe5ed
        }
    </style>
    </head>
  <body>
        <table border="1" style="width:800px;margin:0 auto;border-color:#aecaf0">
            <tr style="height:400px">
                <td colspan="4"><div id="canvasDiv"/></td>
            </tr>
            <tr style="text-align:center;height:60px">
                <td style="width:25%">选择年份:<div class="querymid" ><input  id="year" type="text" /></div></td>
                <td style="width:25%">选择月份:<div class="querymid" ><input id="month" type="text" /></div></td>
                <td style="width:25%">选择自然周:<div class="querymid" ><input id="week" type="text" /></div></td>
                <td style="width:25%">查询信息: <div class="querymid" ><input id="querybtn" type="button" value="查询" /></div></td>
            </tr>
        </table>
     

</body>
</html>
