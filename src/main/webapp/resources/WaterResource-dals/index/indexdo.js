/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(function(require, exports) {
  // 通过 require 引入依赖
   require('jquery');
   require('ligerUI');
  // 通过 exports 对外提供接口
  
  //cig:
  //indexdata:树索引数组
  //mainname:主页名字
  //mainsrc:主页地址
 exports.initial=function(cig){
   $(function(){
         var tab = null;
            var accordion = null;
            var tree = null;
            $(function (){
                //布局
                $("#layout1").ligerLayout({
                    leftWidth: 190,
                    height: '100%',
                    heightDiff: -34,
                    space: 4,
                    onHeightChanged: f_heightChanged
                });

                var height = $(".l-layout-center").height();

                //Tab
                $("#framecenter").ligerTab({ height: height });

                //面板
                $("#accordion1").ligerAccordion({ height: height - 24, speed: null });

                $(".l-link").hover(function ()
                {
                    $(this).addClass("l-link-over");
                }, function ()
                {
                    $(this).removeClass("l-link-over");
                });
                //树
                $("#tree1").ligerTree({
                    data: cig.indexdata,
                    treeLine: false,
                    checkbox: false,
                    slide: false,
                    nodeWidth: 140,
                    delay:false,
                    attribute: ['nodename', 'url'],
                    onSelect: function (node) {
                        if (!node.data.url) return;
                        var tabid = $(node.target).attr("tabid");
                        //保证起始加载
                        if (node.data.tabid == "home") {
                            f_addTab(node.data.tabid, node.data.text, node.data.url);
                        }else{
                          if (!tabid) {
                            tabid = new Date().getTime();
                            $(node.target).attr("tabid", tabid)
                        }
                        f_addTab(tabid, node.data.text, node.data.url);
                        }
                    }
                });

                tab = $("#framecenter").ligerGetTabManager();
                accordion = $("#accordion1").ligerGetAccordionManager();
                tree = $("#tree1").ligerGetTreeManager();
                $("#pageloading").hide();
                
             //初始化主页
            //$('#homeid').attr('title',cig.mainname);
            f_addTab('home',cig.mainname,cig.mainsrc);
            });
            function f_heightChanged(options)
            {
                if (tab)
                    tab.addHeight(options.diff);
                if (accordion && options.middleHeight - 24 > 0)
                    accordion.setHeight(options.middleHeight - 24);
            }
            function f_addTab(tabid,text, url)
            { 
                //避免主页重复打开
                     tab.addTabItem({ tabid : tabid,text: text, url: url });
            } 
            
           
      });
  };
});


