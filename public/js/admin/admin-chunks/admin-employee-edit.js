(self.webpackChunk=self.webpackChunk||[]).push([[922],{7631:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const o={data:function(){var e;return{employee:(e={gender:"",name:"",email:"",password:""},s(e,"gender",""),s(e,"phone",""),s(e,"address",""),s(e,"cnic",""),e),image:"",cv:"",baseUrl:window.axios.defaults.baseURL}},components:{},mounted:function(){this.getEmployee()},methods:{getEmployee:function(){var e=this;axios.get("user/"+this.$route.params.id).then((function(t){var a=t.data;e.employee=a}))},handleFileChange:function(e){this.image=e.target.files[0],console.log(e.target.files[0])},handleCVChange:function(e){this.cv=e.target.files[0]},store:function(){var e=this,t=new FormData;t.append("name",this.employee.name),t.append("email",this.employee.email),t.append("password",this.employee.password),t.append("gender",this.employee.gender),t.append("phone",this.employee.phone),t.append("cnic",this.employee.cnic),t.append("address",this.employee.address),t.append("image",this.image),t.append("cv",this.cv),axios.post("/user/".concat(this.employee.id),t).then((function(t){var a=t.data;e.$toastr.success(a.message,"Success"),e.$router.push({name:"employee"})})).catch((function(t){var a=t.response.data.errors;Object.keys(a).forEach((function(t){e.$toastr.error(a[t],"Error!")}))}))}},watch:{}};const l=(0,a(1900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row page-titles mx-0"},[a("div",{staticClass:"col-sm-6 p-md-0"},[a("div",{staticClass:"welcome-text"},[a("h4",[e._v(e._s(e.$route.meta.title))])])]),e._v(" "),e._m(0)]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12"},[a("div",{staticClass:"card task-card"},[a("div",{staticClass:"card-body"},[a("form",{attrs:{id:"form1",enctype:"multipart/form-data"}},[a("div",{staticClass:"row row-sm mg-b-10 first-parent"},[a("div",{staticClass:"col-sm-6 mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.name,expression:"employee.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Full Name",name:"name"},domProps:{value:e.employee.name},on:{input:function(t){t.target.composing||e.$set(e.employee,"name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-sm-6 mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.email,expression:"employee.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter Email",name:"email"},domProps:{value:e.employee.email},on:{input:function(t){t.target.composing||e.$set(e.employee,"email",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-sm-6 mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.password,expression:"employee.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter password",name:"password"},domProps:{value:e.employee.password},on:{input:function(t){t.target.composing||e.$set(e.employee,"password",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-sm-6 mb-2"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.employee.gender,expression:"employee.gender"}],staticClass:"form-control",attrs:{name:"gender"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.employee,"gender",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("Select Gender")]),e._v(" "),a("option",{attrs:{value:"male"}},[e._v("Male")]),e._v(" "),a("option",{attrs:{value:"female"}},[e._v("Female")])])]),e._v(" "),a("div",{staticClass:"col-sm-6 mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.phone,expression:"employee.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter phone",name:"phone"},domProps:{value:e.employee.phone},on:{input:function(t){t.target.composing||e.$set(e.employee,"phone",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-sm-6 mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.cnic,expression:"employee.cnic"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter cnic",name:"cnic"},domProps:{value:e.employee.cnic},on:{input:function(t){t.target.composing||e.$set(e.employee,"cnic",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-sm-12 mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.address,expression:"employee.address"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter address",name:"address"},domProps:{value:e.employee.address},on:{input:function(t){t.target.composing||e.$set(e.employee,"address",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-sm-12 mb-3"},[a("div",{staticClass:"custom-file"},[a("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"customFile1",name:"profile"},on:{change:e.handleFileChange}}),e._v(" "),a("label",{staticClass:"custom-file-label",attrs:{for:"customFile"}},[e._v("Upload Profile Image\n                                        "),e.image?a("small",[e._v(" (  "+e._s(e.image.name)+"  ) ")]):e._e()])])]),e._v(" "),a("div",{staticClass:"col-sm-12 mb-2"},[a("div",{staticClass:"custom-file"},[a("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"customFile1",name:"profile"},on:{change:e.handleCVChange}}),e._v(" "),a("label",{staticClass:"custom-file-label",attrs:{for:"customFile"}},[e._v("Upload CV\n                                        "),e.cv?a("small",[e._v(" (  "+e._s(e.cv.name)+"  ) ")]):e._e()])])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-sm-12 mt-5 mg-t-10"},[a("button",{staticClass:"btn btn-primary float-right",attrs:{type:"button"},on:{click:e.store}},[e._v("Save")])])])])])])])])])}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex"},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"javascript:void(0)"}},[e._v("Home")])]),e._v(" "),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"javascript:void(0)"}},[e._v("All Employee")])]),e._v(" "),a("li",{staticClass:"breadcrumb-item active"},[a("a",{attrs:{href:"javascript:void(0)"}},[e._v("Edit Employee")])])])])}],!1,null,null,null).exports}}]);