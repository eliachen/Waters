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
    
    exports.initial=function(){
              $(function () {
            

            setVideo({ id: '#v1', src: './resources/WaterResource-modules/videos/demo.m4v', loop: true });
            setVideo({ id: '#v2', src: './resources/WaterResource-modules/videos/demo.m4v', loop: true });
            setVideo({ id: '#v3', src: './resources/WaterResource-modules/videos/demo.m4v', loop: true });
            setVideo({ id: '#v4', src: './resources/WaterResource-modules/videos/demo.m4v', loop: true });
            setVideo({ id: '#v5', src: './resources/WaterResource-modules/videos/demo.m4v', loop: true });
            setVideo({ id: '#v6', src: './resources/WaterResource-modules/videos/demo.m4v', loop: true });

           
            //布局
            $("#layoutcontent").ligerLayout({ rightWidth:230, isRightCollapse: false, height: '100%', space: 1
                                              ,onHeightChanged:function(options){
                                                  if (acrd && options.middleHeight - 24 > 0){
                                                      acrd.setHeight(options.middleHeight - 24);
                                                     };
                                              }});
            var height = $(".l-layout-center").height();
            var acrd = $("#navaccordion").ligerAccordion({ height: height - 24 });
            acrd.setHeight(height - 24);
            
            
          
            var data = [];
            data.push({ id: 2, text: "测试名称1" });
            data.push({ id: 3, text: "测试名称2" });
            data.push({ id: 4, text: "测试名称3" });
            data.push({ id: 5, text: "测试名称4" });
            data.push({ id: 6, text: "测试名称5" });
            data.push({ id: 7, text: "测试名称6" });
            data.push({ id: 8, text: "测试名称7" });
            data.push({ id: 9, text: "测试名称8" });

            for (var index = 1; index < 5; index++)
            {
                var s = $("#tree"+index).ligerTree({
                    treeLine: false,
                    checkbox: false,
                    idFieldName: 'id',
                    parentIDFieldName: 'pid',
                    nodeWidth: 140,
                    data: data,
                    isexpand: true,
                    onClick: function (node) {
                        //settitle(node.data.text);
                    }
                });
            }
           
        });
    };
    
    var setVideo = function (cig) {
            $(cig.id).attr("src", cig.src);
            if (cig.loop) {
                //$(cig.loop).attr("loop", '20');
            } else {
                //$(cig.loop).attr("loop", '20');
            }
        };
});


