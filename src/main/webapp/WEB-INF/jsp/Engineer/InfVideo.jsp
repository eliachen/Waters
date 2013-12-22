<%-- 
    Document   : InfVideo
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
         <link type="text/css" href="./resources/WaterResource-dals/Map/InfEngineer/rr/rr.css" rel="stylesheet" />
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
             seajs.use(["./resources/WaterResource-dals/Engineer/InfVideo/do.js"],function(pgd){
                 pgd.initial();
             });  
        </script>
        
    <style>
         body,html {
            width: 100%;
            height: 100%;
            margin:0;
            overflow:hidden;
        }
        
          .video {
            width:100%;
            height:100%;
            margin: 0px 0px 0px 0px;

        }
    </style>
    </head>
    <body>
      <div id="layoutcontent"  style="width:100%; margin:0 auto; margin-top:1px; ">
          <div id="centercontent"  position="center">
               <table border="1" style="width:100%;height:100%;margin:0px 0px 0px 0px; border-color:#aecaf0">
            <tr style="height:30%;">
                <td colspan="2" rowspan="2"><embed class="video" id="v1"/></td>
                <td><embed class="video" id="v2"/></td>
            </tr>
            <tr style="height:30%;">
                <td><embed class="video" id="v3"/></td>
                
            </tr>
            <tr style="height:40%;">
                <td style="width:30%"><embed class="video" id="v4"/></td>
                <td style="width:30%"><embed class="video" id="v5"/></td>
                <td style="width:40%"><embed class="video" id="v6"/></td>
            </tr>
        </table>
        </div>
          
 <div id="rightcontent"  position="right" title="信息查看">
            <div id="navaccordion" class="liger-accordion">
                <div id="l1" title="泵站视频监控">
                    <ul id="tree1">
                    </ul>
            </div>
            <div id="l2" title="闸门视频监控">
                <ul id="tree2">
                </ul>
            </div>
            <div id="l3" title="取水点视频监控">
                <ul id="tree3">
                </ul>
            </div>
            <div id="l4" title="排污口视频监控">
               <ul id="tree4">
               </ul>
           </div>
            </div>
        </div>
    </div>
    </body>
</html>
