<%-- 
    Document   : InfMapPumpAndGate
    Created on : 2013-12-4, 12:58:17
    Author     : 尔康
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
         <jsp:include page="../masterlib/sealib.jspf"></jsp:include>
         <!--<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=79911baf0e80c70c7e77e5654b4a8204"></script>-->
         <link type="text/css" href="./resources/WaterResource-dals/Map/InfEngineer/pg/pg.css" rel="stylesheet" />
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
                            "ligerUIcss":"ligerUI/skins/Aqua/css/ligerui-all.css",
                            "ebdmap": "baiduMap/ebdmap-common.js",
                            "ebdmapcss":"baiduMap/ebdmap-all.css",
                            "baiduMapAPI":"http://api.map.baidu.com/getscript?v=2.0&ak=79911baf0e80c70c7e77e5654b4a8204"
                                    }
                         });
                 
    
             //"baidumapAPI":"http://api.map.baidu.com/api?v=2.0&ak=79911baf0e80c70c7e77e5654b4a8204"     
            seajs.use(["./resources/WaterResource-dals/Map/InfEngineer/pg/do.js",
                       "./resources/WaterResource-dals/Map/demodata.js"],function(m,d){
                       m.initial(d);
            });
        </script>
        
    </head>
    <body>
      <div id="layoutcontent" style="width:100%;height:100%;margin:0; padding:0;">
           <div id="rwtitle" class="maptitle">
            <p>安徽省闸泵工情监视图</p>
            </div>
          <div id="centercontent" style="height:100%" position="center">
          <div id="allmap" class="bdmap"> </div>
        </div>
          
        <div id="rightcontent"  position="right" title="信息查看">
            <div id="navaccordion" class="liger-accordion">
                <div id="rain" title="闸门信息" >
                    <ul id="treeInfPump"></ul>
                </div>
                
                <div id="water" title="泵站信息">
                    <ul id="treeInfGate"></ul>
                </div>
            </div>
        </div>
    </div>
    </body>
</html>
