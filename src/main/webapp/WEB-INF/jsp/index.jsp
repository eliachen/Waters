


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>金海迪尔水资源信息系统</title>
      
        <jsp:include page="masterlib/sealib.jspf"></jsp:include>
        <link   type="text/css"  rel="stylesheet"   href="./resources/WaterResource-modules/ligerUI/skins/Aqua/css/ligerui-all.css" />
        <script type="text/javascript" >
            
            // base:"./resources/WaterResource-modules/sea/",
            seajs.config({
                base:"./resources/WaterResource-modules/",
                alias: {
                "jquery": "jquery/jquery-1.6.2.min",
                "ligerUI":"ligerUI/js/ligerui.min.js"
                     } 
                  });
                  
            seajs.use(["./resources/WaterResource-dals/index/indexdo.js",
                       "./resources/WaterResource-dals/index/indexdata.js"],function(e,d){
                       e.initial({indexdata:d.data,mainname:'雨水情信息监视图',mainsrc:'./InfMapRW.do'});
                   });
         </script>
        
        
       
        
   <style type="text/css"> 
    body,html{height:100%;}
    body{ padding:0px; margin:0;   overflow:hidden;}  
    .l-link{ display:block; height:26px; line-height:26px; padding-left:10px; text-decoration:underline; color:#333;}
    .l-link2{text-decoration:underline; color:white; margin-left:2px;margin-right:2px;}
    .l-layout-top{background:#102A49; color:White;}
    .l-layout-bottom{ background:#E5EDEF; text-align:center;}
    #pageloading{position:absolute; left:0px; top:0px; background:white url('resources/WaterResource-modules/images/loading.gif') no-repeat center; width:100%; height:100%;z-index:99999;}
    .l-link{ display:block; line-height:22px; height:22px; padding-left:16px;border:1px solid white; margin:4px;}
    .l-link-over{ background:#FFEEAC; border:1px solid #DB9F00;} 
    .l-winbar{ background:#2B5A76; height:30px; position:absolute; left:0px; bottom:0px; width:100%; z-index:99999;}
    .space{ color:#E7E7E7;}
    /* 顶部 */ 
    .l-topmenu{ margin:0; padding:0; height:31px; line-height:31px; background:url('resources/WaterResource-modules/images/top.jpg') repeat-x bottom;  position:relative; border-top:1px solid #1D438B;  }
    .l-topmenu-logo{ color:#E7E7E7; padding-left:35px; line-height:26px;background:url('resources/WaterResource-modules/images/topicon.gif') no-repeat 10px 5px;}
    .l-topmenu-welcome{  position:absolute; height:24px; line-height:24px;  right:30px; top:2px;color:#070A0C;}
    .l-topmenu-welcome a{ color:#E7E7E7; text-decoration:underline} 

 </style>


</head>
 <body style="padding:0px;background:#EAEEF5;">  
<div id="pageloading"></div>  
<div id="topmenu" class="l-topmenu">
    <div class="l-topmenu-logo">金海迪尔水资源系统</div>
    <div class="l-topmenu-welcome">
        <a href="http://www.jhtvwall.com/" target="_blank" class="l-link2">公司主页</a>
        <span class="space">|</span>
        <a href="http://weibo.com/linzechen" target="_blank" class="l-link2" target="_blank">开发者微博</a> 
    </div> 
</div>
  <div id="layout1" style="width:99.2%; margin:0 auto; margin-top:4px; "> 
        <div position="left"  title="主要菜单" id="accordion1"> 
                     <div title="功能列表" class="l-scroll">
                         <ul id="tree1" style="margin-top:3px;">
                    </div>
        </div>
        <div position="center" id="framecenter"> 
             <!--<div id="homeid" tabid="home" title="" style="height:300px" >
                <!--<iframe frameborder="0" name="home" id="home" src="./InfMapRW.do"></iframe>-->
             <!--</div>--> 
        </div> 
        
    </div>
    <div  style="height:32px; line-height:32px; text-align:center;">
            Copyright © 2011-2013 HFUT-EliaChen
    </div>
</body>

</html>
