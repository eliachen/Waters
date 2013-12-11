<%-- 
    Document   : InfChartswAndllQuery
    Created on : 2013-12-8, 21:37:17
    Author     : 尔康
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html style="height:100%;width:100%;margin:0 auto">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>河道水位与流量关系曲线</title>
        <script type="text/javascript" src="./resources/WaterResource-modules/charts/echarts/esl.js"></script>
        <script type="text/javascript" src="./resources/WaterResource-modules/jquery/jquery-1.6.2.min.js"></script>
        <script type="text/javascript" src="./resources/WaterResource-modules/ligerUI/js/ligerui.min.js"></script>
        <link   type="text/css"  rel="stylesheet"   href="./resources/WaterResource-modules/ligerUI/skins/Aqua/css/ligerui-all.css" />
        <script type="text/javascript">
             
                require.config({
                    paths: {
                        'echarts': './resources/WaterResource-modules/charts/echarts/echarts',
                        'sw-llquery':"./resources/WaterResource-dals/ChartQuerys/sw-llQuery/sw-llQuery",
                        'sw-lldata':"./resources/WaterResource-dals/ChartQuerys/sw-llQuery/sw-lldata"
                    }
                    });
                    
                    require([
                              'echarts',
                              'sw-llquery',
                              'sw-lldata'
                        ],
                                function (ec,slq,d) {
                                  slq.initial(ec,d.data);
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
            html,body,table,.chart{
                height: 100%;
                width: 100%;
                margin: 0 auto;
                overflow: hidden;
            };
        </style>
    </head>
    <body>
        <table>
            <tr height="100%">
                <td colspan="3">
                 <div id="container" class="chart"></div>
                </td>
            </tr>
            <tr height="55px">
                <td width="30%"><input id="st" type="text"/></td>
                <td width="30%"><input id="et" type="text" style="display:block" /></td>
                <td width="30%"><div id="buttonquery"></div></td>
            </tr>
        </table>

    </body>
</html>
