<%-- 
    Document   : InfChartMeteorologyQuery
    Created on : 2013-12-8, 21:37:17
    Author     : 尔康
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html style="height:100%;width:100%;margin:0 auto">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>气象测站云图信息</title>
        <script type="text/javascript" src="./resources/WaterResource-modules/jquery/jquery-1.6.2.min.js"></script>
        <script type="text/javascript" src="./resources/WaterResource-modules/ligerUI/js/ligerui.min.js"></script>
        <link   type="text/css"  rel="stylesheet"   href="./resources/WaterResource-modules/ligerUI/skins/Aqua/css/ligerui-all.css" />
        <script type="text/javascript">
                
        </script>
        
       <script type="text/javascript">
        $(function () {
            initialQueryBar();
            $('#pictitle').html("气象测站于2013-12-1云图信息");
        });
    </script>
    
    <script type="text/javascript">
        var initialQueryBar = function () {
           var t= $("#mydate").ligerDateEditor(
               {
                   format: "yyyy-MM-dd",
                  labelWidth: 100,
                  labelAlign: 'center',
                  cancelable : true
               });

            $('#querybtn').ligerButton({
                click: function () {
                    $('#pictitle').html("气象测站于2013-12-1云图信息");
                }
            })
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
            width:100%;
            height:100%;
        }
        </style>
    </head>
    <body>
      <table border="1"  style="width:800px;margin:0 auto;border-color:#aecaf0">
             <tr>
                <td colspan="4"><p id="pictitle" style="text-align:center;font-size:24px"></p></td>
            </tr>
            <tr>
                <td colspan="4"><img src="./resources/WaterResource-modules/images/demo/pic_yt.jpg" style="height:400px;width:100%" /></td>
            </tr>
            <tr style="text-align:center">
                <td style="width:25%">选择日期:<div class="querymid" ><input id="mydate" type="text"  /></div></td>
                <td style="width:25%">查询信息: <div class="querymid" ><input id="querybtn" type="button" value="查询" /></div></td>
            </tr>
        </table>
    </body>
</html>
