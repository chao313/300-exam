webpackJsonp([13],{DlBy:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"index"},[e("div",{staticClass:"hello"},[e("i",{staticClass:"iconfont icon-xihuan"}),e("span",[t._v("很高兴遇见你,"+t._s(t.user.userName)+"老师。")])]),t._v(" "),e("div",{staticClass:"msg"},[e("p",{staticClass:"title"},[t._v("教务公告：")]),t._v(" "),e("ul",[e("li",{on:{click:function(n){return t.openMsg()}}},[e("i",{staticClass:"iconfont icon-flag"}),t._v("清明节放假通知")]),t._v(" "),e("li",{on:{click:function(n){return t.openMsg()}}},[e("i",{staticClass:"iconfont icon-flag"}),t._v("下周例行工作报告会")]),t._v(" "),e("li",{on:{click:function(n){return t.openMsg()}}},[e("i",{staticClass:"iconfont icon-flag"}),t._v("关于毕业生答辩具体流程")])])])])},staticRenderFns:[]};var i=e("C7Lr")({data:function(){return{user:{userName:null,userId:null}}},created:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this.$cookies.get("cname"),n=this.$cookies.get("cid");this.user.userName=t,this.user.userId=n},openMsg:function(){this.$alert("根据《国务院办公厅关于2019年部分节假日安排的通知》精神，越城区行政服务中心将于4月5日（星期五）至4月7日（星期天）进行清明节放假调休，共3天，放假期间不受理业务。4月8日（星期一）开始正常上班受理业务。望市民朋友相互转告，给您带来不便，敬请谅解。","清明节放假通知",{confirmButtonText:"确定"})}}},s,!1,function(t){e("c99U")},"data-v-77eeab2b",null);n.default=i.exports},c99U:function(t,n){}});
//# sourceMappingURL=13.a10b35e546cea80d5ea1.js.map