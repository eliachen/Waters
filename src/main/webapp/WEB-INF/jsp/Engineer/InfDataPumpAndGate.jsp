<%-- 
    Document   : InfDataPumpAndGate
    Created on : 2013-12-9, 23:06:46
    Author     : 尔康
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html style="width: 100%; height: 100%;margin: 0 auto">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <jsp:include page="../masterlib/sealib.jspf"></jsp:include>
        <link type="text/css" rel="stylesheet" href="./resources/WaterResource-dals/Engineer/InfDataPumpAndGate/datapg.css" />
        <title>JSP Page</title>
        <script type="text/javascript">
          /*  var cig={
             bdmap:{container:null,title:null,boundary:null},
             layout:{container:null,opt:null},
             nav:{container:null,title:null}
         };*/
             seajs.config({base:"./resources/WaterResource-modules/",
                            alias: {
                            "jquery": "jquery/jquery-1.6.2.min",
                            "ligerUI":"ligerUI/js/ligerui.min.js",
                            "ligerUIcss":"ligerUI/skins/Aqua/css/ligerui-all.css"
                                    }
                         });
             seajs.use(["./resources/WaterResource-dals/Engineer/InfDataPumpAndGate/do.js"],function(pgd){
                 pgd.initial();
             });  
                         
       </script>         
    </head>
    <body style="width: 100%;margin: 0 auto">
         <table id="dtmain" border="2" style="table-layout:fixed; margin:0 auto;border-color:#aecaf0;font-variant: normal;height:100%;width:100%">
        <tr>
            <td colspan="3">
                <p id="title" style="text-align: center; font-size: xx-large; font-variant: normal;">某地-泵站</p>
            </td>
        </tr>
        <tr>
            <td  style="text-align:left;font-size:medium" colspan="3"><p id="datastate" style="color:green">数据状态:正常</p></td>
        </tr>
        <tr>
            <th>水文数据</th>
            <th colspan="2">36KV母线数据</th>
        </tr>
        <tr>
            <td>
                <div id="f_water" class="pumpsta">
                </div>
            </td>
            <td>
                <div id="f_mainelc" class="pumpsta">
                </div>
            </td>
            <td>
                <div id="f_temperature" class="pumpsta">
                </div>
            </td>
        </tr>
        <tr>
            <th colspan="3">
                6KV干线数据
            </th>
        </tr>
        <tr>
            <th>
                1#机组
            </th>
            <th>
                2#机组
            </th>
            <th>
                3#机组
            </th>
        </tr>
        <tr>
            <td>
                <div id="f_pump1" class="pumpsta">
                  <%--  @*f_pump1*@--%>
                </div>
            </td>
            <td>
                <div id="f_pump2" class="pumpsta">
                   <%-- @*f_pump2*@--%>
                </div>
            </td>
            <td>
                <div id="f_pump3" class="pumpsta">
                  <%--  @*f_pump3*@--%>
                </div>
            </td>
        </tr>
    </table>
    </body>
</html>
