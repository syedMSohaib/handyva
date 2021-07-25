(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin-job-show-index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/jobs/ShowComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/jobs/ShowComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-the-mask'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      job: undefined
    };
  },
  components: {
    TheMask: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-the-mask'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  mounted: function mounted() {
    this.getJob();
  },
  methods: {
    getJob: function getJob() {
      var _this = this;

      axios.get("/jobs/".concat(this.$route.params.id)).then(function (data) {
        _this.job = data.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/views/jobs/ShowComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/admin/views/jobs/ShowComponent.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowComponent_vue_vue_type_template_id_0418c266___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowComponent.vue?vue&type=template&id=0418c266& */ "./resources/js/admin/views/jobs/ShowComponent.vue?vue&type=template&id=0418c266&");
/* harmony import */ var _ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowComponent.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/jobs/ShowComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ShowComponent_vue_vue_type_template_id_0418c266___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowComponent_vue_vue_type_template_id_0418c266___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/jobs/ShowComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/jobs/ShowComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/views/jobs/ShowComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/jobs/ShowComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/admin/views/jobs/ShowComponent.vue?vue&type=template&id=0418c266&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/views/jobs/ShowComponent.vue?vue&type=template&id=0418c266& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_0418c266___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_0418c266___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_0418c266___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowComponent.vue?vue&type=template&id=0418c266& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/jobs/ShowComponent.vue?vue&type=template&id=0418c266&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/jobs/ShowComponent.vue?vue&type=template&id=0418c266&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/jobs/ShowComponent.vue?vue&type=template&id=0418c266& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { attrs: { id: "configuration" } }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "h1",
          {},
          [
            _c(
              "router-link",
              { staticClass: "back", attrs: { to: { name: "jobs" } } },
              [_c("i", { staticClass: "fa fa-angle-left" })]
            ),
            _vm._v(" " + _vm._s(_vm.$route.meta.title))
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 mt-4" }, [
        _vm.job
          ? _c("div", { staticClass: "card " }, [
              _c("div", { staticClass: "card-content collapse show" }, [
                _c(
                  "div",
                  { staticClass: "card-dashboard top p-2" },
                  [
                    _c("ul", { staticClass: "jobs" }, [
                      _c("li", [
                        _c("h5", [_vm._v("Job title")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.job.title))])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("h5", [_vm._v("Job Category")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.job.category_id))])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("h5", [_vm._v("Status")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.job.status_value))])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("h5", [_vm._v("Experience")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.job.experience))])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("i", { staticClass: "fa fa-book-open" }),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.job.minimum_requirment))])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("i", { staticClass: "fa fa-clock" }),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.job.created_date))])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("i", { staticClass: "fas fa-hand-holding-usd" }),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "USD " +
                              _vm._s(
                                new Intl.NumberFormat().format(_vm.job.salary)
                              )
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                        _c("h5", { staticClass: "mb-0" }, [
                          _vm._v("Organization Name")
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.job.jobable.name))])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                        _c("h5", { staticClass: "mb-0" }, [
                          _vm._v("Project name")
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.job.project_title))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "mb-0 mt-1" }, [
                      _vm._v("Description")
                    ]),
                    _vm._v(
                      "\n\n                        " +
                        _vm._s(_vm.job.description) +
                        "\n\n                        "
                    ),
                    _c("h5", { staticClass: "mb-0 mt-2" }, [_vm._v("Skills")]),
                    _vm._v(" "),
                    _vm._l(_vm.job.skills, function(skill, index) {
                      return _c("p", { key: index, staticClass: "mb-0" }, [
                        _vm._v(_vm._s(skill))
                      ])
                    })
                  ],
                  2
                )
              ])
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);