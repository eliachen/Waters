
// 所有模块都通过 define 来定义
define(function(require, exports) {
  // 通过 require 引入依赖
 
exports.data=
[
        { text: "信息监视图", isexpand: "true", children: [
        { tabid: "home", url: "./InfMapRW.do", text: "雨水情信息监视图" },
        { url: "./InfMapMeteorology.do", text: "气象信息监视图" },
        { url: "./InfMapPumpAndGate.do", text: "闸门与泵站信息监视图" },
        { url: "./InfMapRiverAndReservoir.do", text: "河道与水库信息监视图" }
	 ]
     },
    { text: "数据图表", isexpand: "true", children: [
		{ url: "./InfMapRW.do", text: "雨情信息图表" },
		{ url: "./InfMapRW.do", text: "水情信息图表" }
	]
    },
     {
          text: " 视频监控", isexpand: "true", children: [
          { url: "./InfMapRW.do", text: "视频监控中心" }
          //{ url: "/InfPumpStation?id=PumpStation", text: "泵站数据信息一览" }
         ]
     },
    {
        text: "基础数据管理", isexpand: "true", children: [
        { url: "./InfMapRW.do", text: "雨水情报警数据设置" },
        { url: "./InfMapRW.do", text: "雨情数据表" },
		{ url: "./InfMapRW.do", text: "水情数据表" },
		{ url: "./InfMapRW.do", text: "测站信息维护" }
       
	]
    }
];
 
});
