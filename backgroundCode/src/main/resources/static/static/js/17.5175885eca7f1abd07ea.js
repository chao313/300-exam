webpackJsonp([17],{Cq1r:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l("4YfN"),a=l.n(r),n={data:function(){return{form:{studentName:null,grade:null,major:null,clazz:null,institute:null,tel:null,email:null,pwd:null,cardId:null,sex:null,role:2}}},methods:{onSubmit:function(){var e=this;this.$axios({url:"/300-exam/teacher",method:"post",data:a()({},this.form)}).then(function(t){200==t.data.code&&(e.$message({message:"数据添加成功",type:"success"}),e.$router.push({path:"/teacherManage"}))})},cancel:function(){this.form={}}}},o={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"add"},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"姓名"}},[l("el-input",{model:{value:e.form.teacherName,callback:function(t){e.$set(e.form,"teacherName",t)},expression:"form.teacherName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"学院"}},[l("el-input",{model:{value:e.form.institute,callback:function(t){e.$set(e.form,"institute",t)},expression:"form.institute"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"性别"}},[l("el-input",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"电话号码"}},[l("el-input",{model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",t)},expression:"form.tel"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"密码"}},[l("el-input",{model:{value:e.form.pwd,callback:function(t){e.$set(e.form,"pwd",t)},expression:"form.pwd"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"身份证号"}},[l("el-input",{model:{value:e.form.cardId,callback:function(t){e.$set(e.form,"cardId",t)},expression:"form.cardId"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"职称"}},[l("el-input",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit()}}},[e._v("立即创建")]),e._v(" "),l("el-button",{attrs:{type:"text"},on:{click:function(t){return e.cancel()}}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var s=l("C7Lr")(n,o,!1,function(e){l("kZI1")},"data-v-55a93ced",null);t.default=s.exports},kZI1:function(e,t){}});
//# sourceMappingURL=17.5175885eca7f1abd07ea.js.map