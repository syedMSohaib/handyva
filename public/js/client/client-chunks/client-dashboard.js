(self["webpackChunk"] = self["webpackChunk"] || []).push([["client-dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/AllNotificationComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/AllNotificationComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  components: {},
  data: function data() {
    return {
      notifications: []
    };
  },
  mounted: function mounted() {
    this.loadNotifications();
  },
  methods: {
    loadNotifications: function loadNotifications() {
      var _this = this;

      axios.get("get-notifications?type=all").then(function (_ref) {
        var data = _ref.data;
        _this.notifications = data;
      })["catch"](function (e) {
        return console.log(e);
      });
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
// import BarChart from "./BarChart.vue";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {// BarChart,
  },
  data: function data() {
    return {
      data: undefined,
      baseUrl: window.base_url,
      years: Array.from({
        length: 10
      }, function (value, index) {
        return new Date().getFullYear() - index;
      }),
      filter: new Date().getFullYear(),
      user: undefined,
      task: undefined,
      referrels: [],
      reminders: []
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get("/dashboard?year=".concat(this.filter)).then(function (_ref) {
        var data = _ref.data;
        _this.reminders = data.reminders;
        _this.user = data.user;
        _this.task = data.task;
        _this.referrels = data.referrels;
      });
    }
  },
  watch: {
    filter: function filter() {
      this.getData();
    }
  }
});

/***/ }),

/***/ "./resources/js/client/views/dashboard/AllNotificationComponent.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/client/views/dashboard/AllNotificationComponent.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllNotificationComponent_vue_vue_type_template_id_7b57a4e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllNotificationComponent.vue?vue&type=template&id=7b57a4e3& */ "./resources/js/client/views/dashboard/AllNotificationComponent.vue?vue&type=template&id=7b57a4e3&");
/* harmony import */ var _AllNotificationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllNotificationComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/views/dashboard/AllNotificationComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AllNotificationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AllNotificationComponent_vue_vue_type_template_id_7b57a4e3___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllNotificationComponent_vue_vue_type_template_id_7b57a4e3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/views/dashboard/AllNotificationComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/client/views/dashboard/IndexComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/client/views/dashboard/IndexComponent.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexComponent_vue_vue_type_template_id_5fef4106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexComponent.vue?vue&type=template&id=5fef4106& */ "./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=template&id=5fef4106&");
/* harmony import */ var _IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _IndexComponent_vue_vue_type_template_id_5fef4106___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexComponent_vue_vue_type_template_id_5fef4106___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/views/dashboard/IndexComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/client/views/dashboard/AllNotificationComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/client/views/dashboard/AllNotificationComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllNotificationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllNotificationComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/AllNotificationComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllNotificationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/client/views/dashboard/AllNotificationComponent.vue?vue&type=template&id=7b57a4e3&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/client/views/dashboard/AllNotificationComponent.vue?vue&type=template&id=7b57a4e3& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllNotificationComponent_vue_vue_type_template_id_7b57a4e3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllNotificationComponent_vue_vue_type_template_id_7b57a4e3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllNotificationComponent_vue_vue_type_template_id_7b57a4e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllNotificationComponent.vue?vue&type=template&id=7b57a4e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/AllNotificationComponent.vue?vue&type=template&id=7b57a4e3&");


/***/ }),

/***/ "./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=template&id=5fef4106&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=template&id=5fef4106& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_5fef4106___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_5fef4106___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_5fef4106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=template&id=5fef4106& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=template&id=5fef4106&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/AllNotificationComponent.vue?vue&type=template&id=7b57a4e3&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/AllNotificationComponent.vue?vue&type=template&id=7b57a4e3& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "section",
    {
      staticClass: "search view-cause all-notifications",
      attrs: { id: "configuration" }
    },
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card rounded pad-20" }, [
            _c("div", { staticClass: "card-content collapse show" }, [
              _c(
                "div",
                { staticClass: "card-body table-responsive card-dashboard" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-12 col-xl-12 col-sm-12" },
                      _vm._l(_vm.notifications, function(noti, index) {
                        return _c("div", { staticClass: "noti-inner-cards" }, [
                          _c("div", { staticClass: "card mt-3" }, [
                            _c("div", { staticClass: "notification-title" }, [
                              _c("h5", [_vm._v(_vm._s(noti.data.subject))]),
                              _vm._v(" "),
                              noti.read_at !== null
                                ? _c("h4", [_vm._v("New")])
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "noti-content" }, [
                              _c(
                                "div",
                                { staticClass: "media align-items-center" },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-envelope-o",
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "media-body" }, [
                                    _c("p", [
                                      _vm._v(
                                        _vm._s(
                                          noti.data.notification_text ||
                                            noti.data.text
                                        )
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "h5",
                                    [
                                      _c("timeago", {
                                        attrs: { datetime: noti.created_at }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ])
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-12 d-block d-sm-flex justify-content-between" },
        [
          _c("div", { staticClass: "left" }, [
            _c("h1", { staticClass: "pull-left" }, [_vm._v("Notifications")])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=template&id=5fef4106&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=template&id=5fef4106& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm.task
      ? _c("div", { staticClass: "row justify-content-center" }, [
          _c("div", { staticClass: "col-xl-3 col-sm-6 m-t35" }, [
            _c("div", { staticClass: "card card-coin" }, [
              _c("div", { staticClass: "card-body text-center" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "flex-d-custom" }, [
                  _c(
                    "h2",
                    {
                      staticClass: "text-black mb-2 font-w600 custom-big-stat"
                    },
                    [_vm._v("All Task")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "mb-0 fs-14 custom-dash-text-stats" },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.task.all_task) +
                          "\n                        "
                      )
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-3 col-sm-6 m-t35" }, [
            _c("div", { staticClass: "card card-coin" }, [
              _c("div", { staticClass: "card-body text-center" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "flex-d-custom" }, [
                  _c(
                    "h2",
                    {
                      staticClass: "text-black mb-2 font-w600 custom-big-stat"
                    },
                    [_vm._v("Active Tasks")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "mb-0 fs-14 custom-dash-text-stats" },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.task.active_tasks) +
                          "\n                        "
                      )
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-3 col-sm-6 m-t35" }, [
            _c("div", { staticClass: "card card-coin" }, [
              _c("div", { staticClass: "card-body text-center" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "flex-d-custom" }, [
                  _c(
                    "h2",
                    {
                      staticClass: "text-black mb-2 font-w600 custom-big-stat"
                    },
                    [_vm._v("Pending Tasks")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "mb-0 fs-14 custom-dash-text-stats" },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.task.pending_tasks) +
                          "\n                        "
                      )
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-3 col-sm-6 m-t35" }, [
            _c("div", { staticClass: "card card-coin" }, [
              _c("div", { staticClass: "card-body text-center" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "flex-d-custom" }, [
                  _c(
                    "h2",
                    {
                      staticClass: "text-black mb-2 font-w600 custom-big-stat"
                    },
                    [_vm._v("Work In Progress")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "mb-0 fs-14 custom-dash-text-stats" },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.task.work_in_progress) +
                          "\n                        "
                      )
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-3 col-sm-6 m-t35" }, [
            _c("div", { staticClass: "card card-coin" }, [
              _c("div", { staticClass: "card-body text-center" }, [
                _vm._m(5),
                _vm._v(" "),
                _c("div", { staticClass: "flex-d-custom" }, [
                  _c(
                    "h2",
                    {
                      staticClass: "text-black mb-2 font-w600 custom-big-stat"
                    },
                    [_vm._v("Recurring")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "mb-0 fs-14 custom-dash-text-stats" },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.task.recurring) +
                          "\n                        "
                      )
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-3 col-sm-6 m-t35" }, [
            _c("div", { staticClass: "card card-coin" }, [
              _c("div", { staticClass: "card-body text-center" }, [
                _vm._m(6),
                _vm._v(" "),
                _c("div", { staticClass: "flex-d-custom" }, [
                  _c(
                    "h2",
                    {
                      staticClass: "text-black mb-2 font-w600 custom-big-stat"
                    },
                    [_vm._v("Completed")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "mb-0 fs-14 custom-dash-text-stats" },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.task.completed) +
                          "\n                        "
                      )
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-3 col-sm-6 m-t35" }, [
            _c("div", { staticClass: "card card-coin" }, [
              _c("div", { staticClass: "card-body text-center" }, [
                _vm._m(7),
                _vm._v(" "),
                _c("div", { staticClass: "flex-d-custom" }, [
                  _c(
                    "h2",
                    {
                      staticClass: "text-black mb-2 font-w600 custom-big-stat"
                    },
                    [_vm._v("Canceled")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "mb-0 fs-14 custom-dash-text-stats" },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.task.cancelled) +
                          "\n                        "
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header border-0 flex-wrap pb-0" }, [
            _c("div", { staticClass: "mb-3" }, [
              _c("h4", { staticClass: "fs-20 text-black" }, [
                _vm._v(
                  "Today's Reminders (" + _vm._s(_vm.reminders.length) + ")"
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body pb-0" }, [
            _c(
              "table",
              {
                staticClass: "table display",
                staticStyle: { "min-width": "845px" },
                attrs: { id: "referralTable" }
              },
              [
                _vm._m(8),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.reminders, function(rem, index) {
                      return _c(
                        "tr",
                        {
                          key: index,
                          class: rem.color ? rem.color + " text-white" : ""
                        },
                        [
                          _c("td", [_vm._v(_vm._s(rem.id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(rem.title))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(rem.description))])
                        ]
                      )
                    }),
                    _vm._v(" "),
                    !_vm.reminders.length
                      ? _c("tr", [
                          _c("td", { attrs: { colspan: "6" } }, [
                            _vm._v("No Reminders for today ")
                          ])
                        ])
                      : _vm._e()
                  ],
                  2
                )
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.user
      ? _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "card text-white bg-secondary" }, [
              _vm._m(9),
              _vm._v(" "),
              _c("div", { staticClass: "card-body mb-0" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-12 d-flex align-items-center justify-content-between flex-column flex-sm-row"
                    },
                    [
                      _c("h4", { staticClass: "text-white heading-badge" }, [
                        _vm._v("Full Name")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "dash-acc-summ" }, [
                        _vm._v(_vm._s(_vm.user.name))
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-12 d-flex align-items-center justify-content-between flex-column flex-sm-row"
                    },
                    [
                      _c("h4", { staticClass: "text-white heading-badge" }, [
                        _vm._v("Current Package")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "dash-acc-summ" }, [
                        _vm._v(
                          _vm._s(_vm.user.plan.title) +
                            " " +
                            _vm._s(_vm.user.plan.no_of_task) +
                            " Tasks"
                        )
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-12 d-flex align-items-center justify-content-between flex-column flex-sm-row"
                    },
                    [
                      _c("h4", { staticClass: "text-white heading-badge" }, [
                        _vm._v("Next Billing Date")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "dash-acc-summ" }, [
                        _vm._v(_vm._s(_vm.user.billing_date))
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-12 d-flex align-items-center justify-content-between flex-column flex-sm-row"
                    },
                    [
                      _c("h4", { staticClass: "text-white heading-badge" }, [
                        _vm._v("Remaining Tasks")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "dash-acc-summ" }, [
                        _vm._v(_vm._s(_vm.user.remaining_tasks))
                      ])
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(10),
          _vm._v(" "),
          _c("div", { staticClass: "card-body pb-0" }, [
            _c(
              "table",
              {
                staticClass: "table display",
                staticStyle: { "min-width": "845px" },
                attrs: { id: "referralTable" }
              },
              [
                _vm._m(11),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.data, function(ref, index) {
                      return _c("tr", { key: index }, [
                        _c("td", [_vm._v(_vm._s(ref.id))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ref.created_date))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ref.referral_code))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ref.referred_client_name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ref.referred_client_email))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            {
                              class:
                                "badge light badge-" +
                                _vm.type_class[ref.registration_status]
                            },
                            [
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(
                                    ref.registration_status
                                      ? "Registered"
                                      : "Pending"
                                  ) +
                                  "\n                                        "
                              )
                            ]
                          )
                        ])
                      ])
                    }),
                    _vm._v(" "),
                    !_vm.referrels.length
                      ? _c("tr", [
                          _c("td", { attrs: { colspan: "6" } }, [
                            _vm._v("No Referrels found yet")
                          ])
                        ])
                      : _vm._e()
                  ],
                  2
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "form-head mb-sm-5 mb-3 d-flex flex-wrap align-items-center"
      },
      [
        _c("h2", { staticClass: "font-w600 mb-2 mr-auto " }, [
          _vm._v("Dashboard")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon-wrp" }, [
      _c("i", { staticClass: "fi-rr-gallery" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon-wrp" }, [
      _c("i", { staticClass: "fi-rr-interactive" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon-wrp" }, [
      _c("i", { staticClass: "fi-rr-hourglass-end" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon-wrp" }, [
      _c("i", { staticClass: "fi-rr-settings" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon-wrp" }, [
      _c("i", { staticClass: "fi-rr-refresh" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon-wrp" }, [
      _c("i", { staticClass: "fi-rr-time-check" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon-wrp" }, [
      _c("i", { staticClass: "fi-rr-cross-circle" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "card-header d-flex align-items-center justify-content-between"
      },
      [
        _c("h5", { staticClass: "card-title text-white" }, [
          _vm._v("Account Summary")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "acc-sum-icon" }, [
          _c("i", { staticClass: "fi-rr-user-add" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0 flex-wrap pb-0" }, [
      _c("div", { staticClass: "mb-3" }, [
        _c("h4", { staticClass: "fs-20 text-black" }, [
          _vm._v("Referral Analytics")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "mb-0 fs-12 text-black" }, [
          _vm._v("No of referred clients onboard on the platforms")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created at")]),
        _vm._v(" "),
        _c("th", [_vm._v("Referral Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Referred Client Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Referred Client Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Registration Status")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);