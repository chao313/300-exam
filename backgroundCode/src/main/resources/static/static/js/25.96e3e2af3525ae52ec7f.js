webpackJsonp([25],{FxeH:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"exam"},[a("el-table",{attrs:{data:t.pagination.records,border:""}},[a("el-table-column",{attrs:{fixed:"left",prop:"source",label:"试卷名称",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"description",label:"介绍",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"institute",label:"所属学院",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"major",label:"所属专业",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"grade",label:"年级",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"examDate",label:"考试日期",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalTime",label:"持续时间",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalScore",label:"总分",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"试卷类型",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tips",label:"考生提示",width:"400"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.toPart(e.row.examCode,e.row.source)}}},[t._v("查看分段")])]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"page",attrs:{"current-page":t.pagination.current,"page-sizes":[4,8,10,20],"page-size":t.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},staticRenderFns:[]};var i=a("C7Lr")({data:function(){return{form:{},pagination:{current:1,total:null,size:4},dialogVisible:!1}},created:function(){this.getExamInfo()},methods:{getExamInfo:function(){var t=this;this.$axios("/300-exam/exams/"+this.pagination.current+"/"+this.pagination.size).then(function(e){t.pagination=e.data.data}).catch(function(t){})},handleSizeChange:function(t){this.pagination.size=t,this.getExamInfo()},handleCurrentChange:function(t){this.pagination.current=t,this.getExamInfo()},toPart:function(t,e){this.$router.push({path:"/scorePart",query:{examCode:t,source:e}})}}},n,!1,function(t){a("T44/")},"data-v-0e0030b4",null);e.default=i.exports},"T44/":function(t,e){}});
//# sourceMappingURL=25.96e3e2af3525ae52ec7f.js.map