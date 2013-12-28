<%-- 
    Document   : WaterRep
    Created on : 2013-12-21, 21:02:32
    Author     : 尔康
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.*"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <jsp:include page="../masterlib/sealib.jspf"></jsp:include>
         <script type="text/javascript">

           seajs.config({base:"../resources/WaterResource-modules/",
                            alias: {
                            "jquery": "jquery/jquery-1.6.2.min",
                            "ligerUI":"ligerUI/js/ligerui.min.js",
                            "ligerUIcss":"ligerUI/skins/Aqua/css/ligerui-all.css",
                            "ligerUIhelper":"ligerUI/helper/ligerhelper.js",
                            "json2":"json2/json2.js"
                                    }
                         });
                         
             seajs.use(["../resources/WaterResource-dals/Report/water/do.js"],function(reprw){
                 reprw.initial();
             });  
             
             
         </script>
         <style>
             html,body,#layoutcontent{
                 width:100%;
                 height: 100%;
                 margin: 1px auto;
             }
             
         </style>
        <title>JSP Page</title>
    </head>
    <body >
         <div id="layoutcontent">
             <div id="centercontent" position="center">
                 <div id="allmap" class="bdmap"> </div>
             </div>
          
        <div id="rightcontent"  position="right" title="报表分类">
            <div id="navaccordion" class="liger-accordion">
                 <div id="Div1" title="时段水位检索">
                                       <form id="form_time" ></form> 
                                 </div>
                                 <div id="Div2" title="日逐时水位检索">
                                        <form id="form_day_avg"></form>
                                 </div>
                                  <div id="Div3" title="月逐日平均水位检索">
                                      <form id="form_month_avg"></form>
                                 </div>
                                  <div id="Div4" title="年逐月平均水位检索">
                                      <form id="form_year_avg"></form>
                                 </div>
                                 <div id="Div5" title="时段流量检索">
                                      <form id="form_q_time"></form>
                                 </div>
                                  <div id="Div6" title="时段蓄水量检索">
                                      <form id="form_wth_time"></form>
                                 </div>
            </div>
        </div>
    </div>
    </body>
</html>
