webpackJsonp([15],{OB99:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"part"},[t("div",{ref:"box",staticClass:"box"}),this._v(" "),this.isNull?t("div",[t("span",[this._v("该门考试还没人参考哦,请提醒学生参加考试。")])]):this._e()])},staticRenderFns:[]};var s=a("C7Lr")({data:function(){return{isNull:!1,name:null,category:{"90分及以上":0,"80-89分":0,"70-79分":0,"60-69分":0,"60分以下":0}}},created:function(){this.getScoreInfo()},methods:{getScoreInfo:function(){var e=this,t=this.$route.query.examCode;this.name=this.$route.query.source,this.$axios("/300-exam/scores/"+t).then(function(t){var a=t.data.data;if(a.length>0){var r=e.$refs.box,s=e.$echarts.init(r);a.forEach(function(t){switch(t.etScore/10){case 10:case 9:e.category["90分及以上"]++;break;case 8:e.category["80-89分"]++;break;case 7:e.category["70-79分"]++;break;case 6:e.category["60-69分"]++;break;default:e.category["60分以下"]++}});var o={title:{text:e.name+"分数段图",subtext:"分数段饼图",x:"center"},tooltip:{trigger:"item",formatter:"{a}：{b} <br/> {c}人 ({d}%)"},legend:{orient:"vertical",left:"left",data:["90分及以上","80-89分","70-79分","60-69分","60分以下"]},series:[{name:"分数段",type:"pie",radius:"35%",center:["50%","35%"],data:[{value:e.category["90分及以上"],name:"90分及以上"},{value:e.category["80-89分"],name:"80-89分"},{value:e.category["70-79分"],name:"70-79分"},{value:e.category["60-69分"],name:"60-69分"},{value:e.category["60分以下"],name:"60分以下"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};s.setOption(o)}else e.isNull=!0})}}},r,!1,function(e){a("VXzU")},"data-v-6320e99c",null);t.default=s.exports},VXzU:function(e,t){}});
//# sourceMappingURL=15.2b8a3c2e729a133e586e.js.map