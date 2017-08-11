webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demolist_demolist_component__ = __webpack_require__("./src/app/demolist/demolist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demodetail_demodetail_component__ = __webpack_require__("./src/app/demodetail/demodetail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'demolist', component: __WEBPACK_IMPORTED_MODULE_3__demolist_demolist_component__["a" /* DemolistComponent */] },
    { path: 'demodetail/:id', component: __WEBPACK_IMPORTED_MODULE_4__demodetail_demodetail_component__["a" /* DemodetailComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<nav>\n  <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n  <a routerLink=\"/demolist\" routerLinkActive=\"active\">DemoList</a>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'D3-demo';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demolist_demolist_component__ = __webpack_require__("./src/app/demolist/demolist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demodetail_demodetail_component__ = __webpack_require__("./src/app/demodetail/demodetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__demos_powerofdatarounded_powerofdatarounded_component__ = __webpack_require__("./src/app/demos/powerofdatarounded/powerofdatarounded.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_editor_editor_component__ = __webpack_require__("./src/app/common/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__demos_drawingsvgscolor_drawingsvgscolor_component__ = __webpack_require__("./src/app/demos/drawingsvgscolor/drawingsvgscolor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__demos_makingbarchart_makingbarchart_component__ = __webpack_require__("./src/app/demos/makingbarchart/makingbarchart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__demos_scatterplot_scatterplot_component__ = __webpack_require__("./src/app/demos/scatterplot/scatterplot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__demos_scale_scale_component__ = __webpack_require__("./src/app/demos/scale/scale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__demos_axisscatterplot_axisscatterplot_component__ = __webpack_require__("./src/app/demos/axisscatterplot/axisscatterplot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__demos_axistime_axistime_component__ = __webpack_require__("./src/app/demos/axistime/axistime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__demos_axistimeformat_axistimeformat_component__ = __webpack_require__("./src/app/demos/axistimeformat/axistimeformat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__demos_transitionduration_transitionduration_component__ = __webpack_require__("./src/app/demos/transitionduration/transitionduration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__demos_easing_easing_component__ = __webpack_require__("./src/app/demos/easing/easing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__demos_delaydynamic_delaydynamic_component__ = __webpack_require__("./src/app/demos/delaydynamic/delaydynamic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__demos_delaydynamicrandom_delaydynamicrandom_component__ = __webpack_require__("./src/app/demos/delaydynamicrandom/delaydynamicrandom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__demos_axisscatterplotdynamic_axisscatterplotdynamic_component__ = __webpack_require__("./src/app/demos/axisscatterplotdynamic/axisscatterplotdynamic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__demos_on_on_component__ = __webpack_require__("./src/app/demos/on/on.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__demos_addandremove_addandremove_component__ = __webpack_require__("./src/app/demos/addandremove/addandremove.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__demos_sort_sort_component__ = __webpack_require__("./src/app/demos/sort/sort.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__demos_tooltip_tooltip_component__ = __webpack_require__("./src/app/demos/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__demos_lineareachart_lineareachart_component__ = __webpack_require__("./src/app/demos/lineareachart/lineareachart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__demos_slider_slider_component__ = __webpack_require__("./src/app/demos/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__demos_radios_radios_component__ = __webpack_require__("./src/app/demos/radios/radios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__demos_combinations_combinations_component__ = __webpack_require__("./src/app/demos/combinations/combinations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__demos_each_each_component__ = __webpack_require__("./src/app/demos/each/each.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__demos_pie_pie_component__ = __webpack_require__("./src/app/demos/pie/pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__demos_doughnut_doughnut_component__ = __webpack_require__("./src/app/demos/doughnut/doughnut.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__demos_stackedbaranchored_stackedbaranchored_component__ = __webpack_require__("./src/app/demos/stackedbaranchored/stackedbaranchored.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__demos_stackedarea_stackedarea_component__ = __webpack_require__("./src/app/demos/stackedarea/stackedarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__demos_forcedraggable_forcedraggable_component__ = __webpack_require__("./src/app/demos/forcedraggable/forcedraggable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__demos_path_path_component__ = __webpack_require__("./src/app/demos/path/path.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__demos_pathprojection_pathprojection_component__ = __webpack_require__("./src/app/demos/pathprojection/pathprojection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__demos_pathscaled_pathscaled_component__ = __webpack_require__("./src/app/demos/pathscaled/pathscaled.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__demos_map_map_component__ = __webpack_require__("./src/app/demos/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__demos_mapoceans_mapoceans_component__ = __webpack_require__("./src/app/demos/mapoceans/mapoceans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__demos_mapmeractor_mapmeractor_component__ = __webpack_require__("./src/app/demos/mapmeractor/mapmeractor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__demos_linearareamap_linearareamap_component__ = __webpack_require__("./src/app/demos/linearareamap/linearareamap.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__demolist_demolist_component__["a" /* DemolistComponent */],
            __WEBPACK_IMPORTED_MODULE_6__demodetail_demodetail_component__["a" /* DemodetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__demos_powerofdatarounded_powerofdatarounded_component__["a" /* PowerofdataroundedComponent */],
            __WEBPACK_IMPORTED_MODULE_8__common_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_9__demos_drawingsvgscolor_drawingsvgscolor_component__["a" /* DrawingsvgscolorComponent */],
            __WEBPACK_IMPORTED_MODULE_10__demos_makingbarchart_makingbarchart_component__["a" /* MakingbarchartComponent */],
            __WEBPACK_IMPORTED_MODULE_11__demos_scatterplot_scatterplot_component__["a" /* ScatterplotComponent */],
            __WEBPACK_IMPORTED_MODULE_12__demos_scale_scale_component__["a" /* ScaleComponent */],
            __WEBPACK_IMPORTED_MODULE_13__demos_axisscatterplot_axisscatterplot_component__["a" /* AxisscatterplotComponent */],
            __WEBPACK_IMPORTED_MODULE_14__demos_axistime_axistime_component__["a" /* AxistimeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__demos_axistimeformat_axistimeformat_component__["a" /* AxistimeformatComponent */],
            __WEBPACK_IMPORTED_MODULE_16__demos_transitionduration_transitionduration_component__["a" /* TransitiondurationComponent */],
            __WEBPACK_IMPORTED_MODULE_17__demos_easing_easing_component__["a" /* EasingComponent */],
            __WEBPACK_IMPORTED_MODULE_18__demos_delaydynamic_delaydynamic_component__["a" /* DelaydynamicComponent */],
            __WEBPACK_IMPORTED_MODULE_19__demos_delaydynamicrandom_delaydynamicrandom_component__["a" /* DelaydynamicrandomComponent */],
            __WEBPACK_IMPORTED_MODULE_20__demos_axisscatterplotdynamic_axisscatterplotdynamic_component__["a" /* AxisscatterplotdynamicComponent */],
            __WEBPACK_IMPORTED_MODULE_21__demos_on_on_component__["a" /* OnComponent */],
            __WEBPACK_IMPORTED_MODULE_22__demos_addandremove_addandremove_component__["a" /* AddandremoveComponent */],
            __WEBPACK_IMPORTED_MODULE_23__demos_sort_sort_component__["a" /* SortComponent */],
            __WEBPACK_IMPORTED_MODULE_24__demos_tooltip_tooltip_component__["a" /* TooltipComponent */],
            __WEBPACK_IMPORTED_MODULE_25__demos_lineareachart_lineareachart_component__["a" /* LineareachartComponent */],
            __WEBPACK_IMPORTED_MODULE_26__demos_slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_27__demos_radios_radios_component__["a" /* RadiosComponent */],
            __WEBPACK_IMPORTED_MODULE_28__demos_combinations_combinations_component__["a" /* CombinationsComponent */],
            __WEBPACK_IMPORTED_MODULE_29__demos_each_each_component__["a" /* EachComponent */],
            __WEBPACK_IMPORTED_MODULE_30__demos_pie_pie_component__["a" /* PieComponent */],
            __WEBPACK_IMPORTED_MODULE_31__demos_doughnut_doughnut_component__["a" /* DoughnutComponent */],
            __WEBPACK_IMPORTED_MODULE_32__demos_stackedbaranchored_stackedbaranchored_component__["a" /* StackedbaranchoredComponent */],
            __WEBPACK_IMPORTED_MODULE_33__demos_stackedarea_stackedarea_component__["a" /* StackedareaComponent */],
            __WEBPACK_IMPORTED_MODULE_34__demos_forcedraggable_forcedraggable_component__["a" /* ForcedraggableComponent */],
            __WEBPACK_IMPORTED_MODULE_35__demos_path_path_component__["a" /* PathComponent */],
            __WEBPACK_IMPORTED_MODULE_36__demos_pathprojection_pathprojection_component__["a" /* PathprojectionComponent */],
            __WEBPACK_IMPORTED_MODULE_37__demos_pathscaled_pathscaled_component__["a" /* PathscaledComponent */],
            __WEBPACK_IMPORTED_MODULE_38__demos_map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_39__demos_mapoceans_mapoceans_component__["a" /* MapoceansComponent */],
            __WEBPACK_IMPORTED_MODULE_40__demos_mapmeractor_mapmeractor_component__["a" /* MapmeractorComponent */],
            __WEBPACK_IMPORTED_MODULE_41__demos_linearareamap_linearareamap_component__["a" /* LinearareamapComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/common/common.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-top: 20px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.result, .code {\n  width: 500px;\n  height: 400px;\n  border: 1px solid #eee;\n  overflow: auto;\n}\n.result {\n  margin-right: 10px;\n  margin-bottom: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n\n.code {\n  overflow: auto;\n}\n\n.bar {\n  display: inline-block;\n  width: 20px;\n  height: 75px;\t/* Gets overriden by D3-assigned height below */\n  margin-right: 2px;\n  background-color: teal;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/common/common.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"result\"></div>\n  <div class=\"code\">\n    <app-editor [code]=\"code\"></app-editor>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/common/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/common/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 400px;\" id=\"editor\">\n  {{ code }}\n</div>"

/***/ }),

/***/ "./src/app/common/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_brace__ = __webpack_require__("./node_modules/brace/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_brace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_brace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_brace_theme_xcode_js__ = __webpack_require__("./node_modules/brace/theme/xcode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_brace_theme_xcode_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_brace_theme_xcode_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brace_mode_javascript_js__ = __webpack_require__("./node_modules/brace/mode/javascript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brace_mode_javascript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_brace_mode_javascript_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditorComponent = (function () {
    function EditorComponent() {
    }
    EditorComponent.prototype.ngOnInit = function () {
        this.editor = __WEBPACK_IMPORTED_MODULE_1_brace__["edit"]('editor');
        this.editor.setOptions({
            tabSize: 2
        });
        this.editor.setTheme('ace/theme/xcode');
        this.editor.getSession().setMode('ace/mode/javascript');
        this.editor.setValue(this.code);
        this.editor.setReadOnly(true);
    };
    return EditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], EditorComponent.prototype, "code", void 0);
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__("./src/app/common/editor/editor.component.html"),
        styles: [__webpack_require__("./src/app/common/editor/editor.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EditorComponent);

//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard-content {\n  margin-top: 20px; \n  display: -webkit-box; \n  display: -ms-flexbox; \n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\na {\n  text-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-content\">\n  <a *ngFor=\"let demo of demos\" [routerLink]=\"['/demodetail', demo.id]\">\n    <div class=\"module\">\n      {{demo.name}}\n    </div>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demos_demo_json__ = __webpack_require__("./src/app/demos/demo.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demos_demo_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__demos_demo_json__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// var data = <any>require('../../assets/demo.json');

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.demos = __WEBPACK_IMPORTED_MODULE_1__demos_demo_json__["demos"];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_1__demos_demo_json__);
        // d3.csv("assets/food.csv", function (data) {
        //   console.log(data);
        // });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/demodetail/demodetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/demodetail/demodetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"id\">\n  <div  *ngSwitchCase=\"1\"><app-powerofdatarounded></app-powerofdatarounded></div>\n  <div  *ngSwitchCase=\"2\"><app-drawingsvgscolor></app-drawingsvgscolor></div>\n  <div  *ngSwitchCase=\"3\"><app-makingbarchart></app-makingbarchart></div>\n  <div  *ngSwitchCase=\"4\"><app-scatterplot></app-scatterplot></div>\n  <div  *ngSwitchCase=\"5\"><app-scale></app-scale></div>\n  <div  *ngSwitchCase=\"6\"><app-axisscatterplot></app-axisscatterplot></div>\n  <div  *ngSwitchCase=\"7\"><app-axistime></app-axistime></div>\n  <div  *ngSwitchCase=\"8\"><app-axistimeformat></app-axistimeformat></div>\n  <div  *ngSwitchCase=\"9\"><app-transitionduration></app-transitionduration></div>\n  <div  *ngSwitchCase=\"10\"><app-easing></app-easing></div>\n  <div  *ngSwitchCase=\"11\"><app-delaydynamic></app-delaydynamic></div>\n  <div  *ngSwitchCase=\"12\"><app-delaydynamicrandom></app-delaydynamicrandom></div>\n  <div  *ngSwitchCase=\"13\"><app-axisscatterplotdynamic></app-axisscatterplotdynamic></div>\n  <div  *ngSwitchCase=\"14\"><app-on></app-on></div>\n  <div  *ngSwitchCase=\"15\"><app-addandremove></app-addandremove></div>\n  <div  *ngSwitchCase=\"16\"><app-sort></app-sort></div>\n  <div  *ngSwitchCase=\"17\"><app-tooltip></app-tooltip></div>\n  <div  *ngSwitchCase=\"18\"><app-lineareachart></app-lineareachart></div>\n  <div  *ngSwitchCase=\"19\"><app-slider></app-slider></div>\n  <div  *ngSwitchCase=\"20\"><app-radios></app-radios></div>\n  <div  *ngSwitchCase=\"21\"><app-combinations></app-combinations></div>\n  <div  *ngSwitchCase=\"22\"><app-each></app-each></div>\n  <div  *ngSwitchCase=\"23\"><app-pie></app-pie></div>\n  <div  *ngSwitchCase=\"24\"><app-doughnut></app-doughnut></div>\n  <div  *ngSwitchCase=\"25\"><app-stackedbaranchored></app-stackedbaranchored></div>\n  <div  *ngSwitchCase=\"26\"><app-stackedarea></app-stackedarea></div>\n  <div  *ngSwitchCase=\"27\"><app-forcedraggable></app-forcedraggable></div>\n  <div  *ngSwitchCase=\"28\"><app-path></app-path></div>\n  <div  *ngSwitchCase=\"29\"><app-pathprojection></app-pathprojection></div>\n  <div  *ngSwitchCase=\"30\"><app-pathscaled></app-pathscaled></div>\n  <div  *ngSwitchCase=\"31\"><app-map></app-map></div>\n  <div  *ngSwitchCase=\"32\"><app-mapoceans></app-mapoceans></div>\n  <div  *ngSwitchCase=\"33\"><app-mapmeractor></app-mapmeractor></div>\n  <div  *ngSwitchCase=\"34\"><app-linearareamap></app-linearareamap></div>\n</div>\n"

/***/ }),

/***/ "./src/app/demodetail/demodetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemodetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemodetailComponent = (function () {
    function DemodetailComponent(route) {
        this.route = route;
    }
    DemodetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (parms) {
            _this.id = +parms['id'];
        });
    };
    return DemodetailComponent;
}());
DemodetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-demodetail',
        template: __webpack_require__("./src/app/demodetail/demodetail.component.html"),
        styles: [__webpack_require__("./src/app/demodetail/demodetail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], DemodetailComponent);

var _a;
//# sourceMappingURL=demodetail.component.js.map

/***/ }),

/***/ "./src/app/demolist/demolist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".demolist-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-top: 20px;\n}\nh2 {\n  margin-top: 0;\n}\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.demos {\n  margin: 0 20px 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 20em;\n}\n.demos li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.demos li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.demos li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.demos .text {\n  position: relative;\n  top: -3px;\n}\n.demos .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/demolist/demolist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demolist-content\">\n  <ul class=\"demos\">\n    <li *ngFor=\"let demo of demos\" [class.selected]=\"demo === selectedDemo\" (click)=\"onSelect(demo)\">\n      <span class=\"badge\">{{demo.id}}</span> {{demo.name}}\n    </li>\n  </ul>\n  <div *ngIf=\"selectedDemo\">\n    <h2>{{selectedDemo.name}}</h2>\n    <p>{{selectedDemo.description}}</p>\n    <button (click)=\"gotoDetail()\">View Details</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/demolist/demolist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demos_demo_json__ = __webpack_require__("./src/app/demos/demo.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demos_demo_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__demos_demo_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemolistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemolistComponent = (function () {
    function DemolistComponent(router) {
        this.router = router;
        this.demos = __WEBPACK_IMPORTED_MODULE_1__demos_demo_json__["demos"];
    }
    DemolistComponent.prototype.ngOnInit = function () {
    };
    DemolistComponent.prototype.onSelect = function (demo) {
        this.selectedDemo = demo;
    };
    DemolistComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/demodetail', this.selectedDemo.id]);
    };
    return DemolistComponent;
}());
DemolistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-demolist',
        template: __webpack_require__("./src/app/demolist/demolist.component.html"),
        styles: [__webpack_require__("./src/app/demolist/demolist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object])
], DemolistComponent);

var _a;
//# sourceMappingURL=demolist.component.js.map

/***/ }),

/***/ "./src/app/demos/addandremove/addandremove.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddandremoveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddandremoveComponent = (function () {
    function AddandremoveComponent() {
    }
    AddandremoveComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 250;
        var dataset = [{ key: 0, value: 5 },
            { key: 1, value: 10 },
            { key: 2, value: 13 },
            { key: 3, value: 19 },
            { key: 4, value: 21 },
            { key: 5, value: 25 },
            { key: 6, value: 22 },
            { key: 7, value: 18 },
            { key: 8, value: 15 },
            { key: 9, value: 13 },
            { key: 10, value: 11 },
            { key: 11, value: 12 },
            { key: 12, value: 15 },
            { key: 13, value: 20 },
            { key: 14, value: 18 },
            { key: 15, value: 17 },
            { key: 16, value: 16 },
            { key: 17, value: 18 },
            { key: 18, value: 23 },
            { key: 19, value: 25 }];
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleBand"]()
            .domain(__WEBPACK_IMPORTED_MODULE_1_d3__["range"](dataset.length))
            .rangeRound([0, w])
            .paddingInner(0.05);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d.value; })])
            .range([0, h]);
        // Define key function, to be used when binding data
        var key = function (d) {
            return d.key;
        };
        // Create SVG element
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        // Create bars
        svg.selectAll('rect')
            .data(dataset, key)
            .enter()
            .append('rect')
            .attr('x', function (d, i) {
            return xScale(i);
        })
            .attr('y', function (d) {
            return h - yScale(d.value);
        })
            .attr('width', xScale.bandwidth())
            .attr('height', function (d) {
            return yScale(d.value);
        })
            .attr('fill', function (d) {
            return 'rgb(0, 0, ' + (d.value * 10) + ')';
        });
        // Create labels
        svg.selectAll('text')
            .data(dataset, key)
            .enter()
            .append('text')
            .text(function (d) {
            return d.value;
        })
            .attr('text-anchor', 'middle')
            .attr('x', function (d, i) {
            return xScale(i) + xScale.bandwidth() / 2;
        })
            .attr('y', function (d) {
            return h - yScale(d.value) + 14;
        })
            .attr('font-family', 'sans-serif')
            .attr('font-size', '11px')
            .attr('fill', 'white');
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result').append('p').text('click me: Remove a data value').attr('id', 'remove');
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result').append('p').text('click me: Add a new data value').attr('id', 'add');
        // On click, update with new data
        __WEBPACK_IMPORTED_MODULE_1_d3__["selectAll"]('p')
            .on('click', function () {
            // See which p was clicked
            var paragraphID = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('id');
            // Decide what to do next
            if (paragraphID === 'add') {
                // Add a data value
                var minValue = 2;
                var maxValue = 25 - minValue;
                var newNumber = Math.floor(Math.random() * maxValue) + minValue;
                var lastKeyValue = dataset[dataset.length - 1].key;
                dataset.push({
                    key: lastKeyValue + 1,
                    value: newNumber
                });
            }
            else {
                // Remove a value
                dataset.shift(); // Remove one value from dataset
            }
            // Update scale domains
            xScale.domain(__WEBPACK_IMPORTED_MODULE_1_d3__["range"](dataset.length));
            yScale.domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d.value; })]);
            // Select…
            var bars = svg.selectAll('rect')
                .data(dataset, key);
            // Enter…
            bars.enter()
                .append('rect')
                .attr('x', w)
                .attr('y', function (d) {
                return h - yScale(d.value);
            })
                .attr('width', xScale.bandwidth())
                .attr('height', function (d) {
                return yScale(d.value);
            })
                .attr('fill', function (d) {
                return 'rgb(0, 0, ' + (d.value * 10) + ')';
            })
                .merge(bars) // Update…
                .transition()
                .duration(500)
                .attr('x', function (d, i) {
                return xScale(i);
            })
                .attr('y', function (d) {
                return h - yScale(d.value);
            })
                .attr('width', xScale.bandwidth())
                .attr('height', function (d) {
                return yScale(d.value);
            });
            // Exit…
            bars.exit()
                .transition()
                .duration(500)
                .attr('x', -xScale.bandwidth())
                .remove();
            // Update all labels
            // Select…
            var labels = svg.selectAll('text')
                .data(dataset, key);
            // Exit…
            labels.exit()
                .transition()
                .duration(500)
                .attr('x', -xScale.bandwidth())
                .remove();
            // Enter…
            labels.enter()
                .append('text')
                .text(function (d) {
                return d.value;
            })
                .attr('text-anchor', 'middle')
                .attr('x', w)
                .attr('y', function (d) {
                return h - yScale(d.value) + 14;
            })
                .attr('font-family', 'sans-serif')
                .attr('font-size', '11px')
                .attr('fill', 'white')
                .merge(labels) // Update…
                .transition()
                .duration(500)
                .attr('x', function (d, i) {
                return xScale(i) + xScale.bandwidth() / 2;
            });
        });
        this.code = "// Width and height\nconst w = 500;\nconst h = 250;\n\nconst dataset = [{ key: 0, value: 5 },\t\t// dataset is now an array of objects.\n{ key: 1, value: 10 },\t\t// Each object has a 'key' and a 'value'.\n{ key: 2, value: 13 },\n{ key: 3, value: 19 },\n{ key: 4, value: 21 },\n{ key: 5, value: 25 },\n{ key: 6, value: 22 },\n{ key: 7, value: 18 },\n{ key: 8, value: 15 },\n{ key: 9, value: 13 },\n{ key: 10, value: 11 },\n{ key: 11, value: 12 },\n{ key: 12, value: 15 },\n{ key: 13, value: 20 },\n{ key: 14, value: 18 },\n{ key: 15, value: 17 },\n{ key: 16, value: 16 },\n{ key: 17, value: 18 },\n{ key: 18, value: 23 },\n{ key: 19, value: 25 }];\n\nconst xScale = d3.scaleBand()\n  .domain(d3.range(dataset.length))\n  .rangeRound([0, w])\n  .paddingInner(0.05);\n\nconst yScale = d3.scaleLinear()\n  .domain([0, d3.max(dataset, function (d) { return d.value; })])\n  .range([0, h]);\n\n// Define key function, to be used when binding data\nconst key = function (d) {\n  return d.key;\n};\n\n// Create SVG element\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\n// Create bars\nsvg.selectAll('rect')\n  .data(dataset, key)\n  .enter()\n  .append('rect')\n  .attr('x', function (d, i) {\n    return xScale(i);\n  })\n  .attr('y', function (d) {\n    return h - yScale(d.value);\n  })\n  .attr('width', xScale.bandwidth())\n  .attr('height', function (d) {\n    return yScale(d.value);\n  })\n  .attr('fill', function (d) {\n    return 'rgb(0, 0, ' + (d.value * 10) + ')';\n  });\n\n// Create labels\nsvg.selectAll('text')\n  .data(dataset, key)\n  .enter()\n  .append('text')\n  .text(function (d) {\n    return d.value;\n  })\n  .attr('text-anchor', 'middle')\n  .attr('x', function (d, i) {\n    return xScale(i) + xScale.bandwidth() / 2;\n  })\n  .attr('y', function (d) {\n    return h - yScale(d.value) + 14;\n  })\n  .attr('font-family', 'sans-serif')\n  .attr('font-size', '11px')\n  .attr('fill', 'white');\n\nd3.select('.result').append('p').text('click me: Remove a data value').attr('id', 'remove');\nd3.select('.result').append('p').text('click me: Add a new data value').attr('id', 'add');\n\n// On click, update with new data\nd3.selectAll('p')\n  .on('click', function () {\n\n    // See which p was clicked\n    const paragraphID = d3.select(this).attr('id');\n\n    // Decide what to do next\n    if (paragraphID === 'add') {\n      // Add a data value\n      const minValue = 2;\n      const maxValue = 25 - minValue;\n      const newNumber = Math.floor(Math.random() * maxValue) + minValue;\n      const lastKeyValue = dataset[dataset.length - 1].key;\n      dataset.push({\n        key: lastKeyValue + 1,\n        value: newNumber\n      });\n    } else {\n      // Remove a value\n      dataset.shift();\t// Remove one value from dataset\n    }\n\n    // Update scale domains\n    xScale.domain(d3.range(dataset.length));\n    yScale.domain([0, d3.max(dataset, function (d) { return d.value; })]);\n\n    // Select\u2026\n    const bars = svg.selectAll('rect')\n      .data(dataset, key);\n\n    // Enter\u2026\n    bars.enter()\n      .append('rect')\n      .attr('x', w)\n      .attr('y', function (d) {\n        return h - yScale(d.value);\n      })\n      .attr('width', xScale.bandwidth())\n      .attr('height', function (d) {\n        return yScale(d.value);\n      })\n      .attr('fill', function (d) {\n        return 'rgb(0, 0, ' + (d.value * 10) + ')';\n      })\n      .merge(bars)\t// Update\u2026\n      .transition()\n      .duration(500)\n      .attr('x', function (d, i) {\n        return xScale(i);\n      })\n      .attr('y', function (d) {\n        return h - yScale(d.value);\n      })\n      .attr('width', xScale.bandwidth())\n      .attr('height', function (d) {\n        return yScale(d.value);\n      });\n\n    // Exit\u2026\n    bars.exit()\n      .transition()\n      .duration(500)\n      .attr('x', -xScale.bandwidth())\n      .remove();\n\n    // Update all labels\n\n    // Select\u2026\n    const labels = svg.selectAll('text')\n      .data(dataset, key);\n\n    // Exit\u2026\n    labels.exit()\n      .transition()\n      .duration(500)\n      .attr('x', -xScale.bandwidth())\n      .remove();\n\n    // Enter\u2026\n    labels.enter()\n      .append('text')\n      .text(function (d) {\n        return d.value;\n      })\n      .attr('text-anchor', 'middle')\n      .attr('x', w)\n      .attr('y', function (d) {\n        return h - yScale(d.value) + 14;\n      })\n      .attr('font-family', 'sans-serif')\n      .attr('font-size', '11px')\n      .attr('fill', 'white')\n      .merge(labels)\t// Update\u2026\n      .transition()\n      .duration(500)\n      .attr('x', function (d, i) {\n        return xScale(i) + xScale.bandwidth() / 2;\n      });\n  });";
    };
    return AddandremoveComponent;
}());
AddandremoveComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-addandremove',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], AddandremoveComponent);

//# sourceMappingURL=addandremove.component.js.map

/***/ }),

/***/ "./src/app/demos/axisscatterplot/axisscatterplot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AxisscatterplotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AxisscatterplotComponent = (function () {
    function AxisscatterplotComponent() {
    }
    AxisscatterplotComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 300;
        var padding = 30;
        // Dynamic, random dataset
        var dataset = []; // Initialize empty array
        var numDataPoints = 50; // Number of dummy data points to create
        var xRange = Math.random() * 1000; // Max range of new x values
        var yRange = Math.random() * 1000; // Max range of new y values
        for (var i = 0; i < numDataPoints; i++) {
            var newNumber1 = Math.floor(Math.random() * xRange); // New random integer
            var newNumber2 = Math.floor(Math.random() * yRange); // New random integer
            dataset.push([newNumber1, newNumber2]); // Add new number to array
        }
        // Create scale functions
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d[0]; })])
            .range([padding, w - padding * 2]);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d[1]; })])
            .range([h - padding, padding]);
        var aScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleSqrt"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d[1]; })])
            .range([0, 10]);
        // const formatAsPercentage = d3.format(",.1%");
        // Define X axis
        var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]()
            .scale(xScale)
            .ticks(5);
        // .tickFormat(formatAsPercentage);
        // Define Y axis
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"]()
            .scale(yScale)
            .ticks(5);
        // .tickFormat(formatAsPercentage);
        // Create SVG element
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        // Create circles
        svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('cx', function (d) {
            return xScale(d[0]);
        })
            .attr('cy', function (d) {
            return yScale(d[1]);
        })
            .attr('r', function (d) {
            return aScale(d[1]);
        });
        // Create X axis
        svg.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(0,' + (h - padding) + ')')
            .call(xAxis);
        // Create Y axis
        svg.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(' + padding + ',0)')
            .call(yAxis);
        this.code = "// Width and height\nconst w = 500;\nconst h = 300;\nconst padding = 30;\n\n// Dynamic, random dataset\nconst dataset = [];\t\t\t\t\t// Initialize empty array\nconst numDataPoints = 50;\t\t\t\t// Number of dummy data points to create\nconst xRange = Math.random() * 1000;\t// Max range of new x values\nconst yRange = Math.random() * 1000;\t// Max range of new y values\nfor (let i = 0; i < numDataPoints; i++) {\t\t\t\t\t// Loop numDataPoints times\n  const newNumber1 = Math.floor(Math.random() * xRange);\t// New random integer\n  const newNumber2 = Math.floor(Math.random() * yRange);\t// New random integer\n  dataset.push([newNumber1, newNumber2]);\t\t\t\t\t// Add new number to array\n}\n\n// Create scale functions\nconst xScale = d3.scaleLinear()\n  .domain([0, d3.max(dataset, function (d) { return d[0]; })])\n  .range([padding, w - padding * 2]);\n\nconst yScale = d3.scaleLinear()\n  .domain([0, d3.max(dataset, function (d) { return d[1]; })])\n  .range([h - padding, padding]);\n\nconst aScale = d3.scaleSqrt()\n  .domain([0, d3.max(dataset, function (d) { return d[1]; })])\n  .range([0, 10]);\n\n// const formatAsPercentage = d3.format(\",.1%\");\n\n// Define X axis\nconst xAxis = d3.axisBottom()\n  .scale(xScale)\n  .ticks(5);\n  // .tickFormat(formatAsPercentage);\n\n// Define Y axis\nconst yAxis = d3.axisLeft()\n  .scale(yScale)\n  .ticks(5);\n  // .tickFormat(formatAsPercentage);\n\n// Create SVG element\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\n// Create circles\nsvg.selectAll('circle')\n  .data(dataset)\n  .enter()\n  .append('circle')\n  .attr('cx', function (d) {\n    return xScale(d[0]);\n  })\n  .attr('cy', function (d) {\n    return yScale(d[1]);\n  })\n  .attr('r', function (d) {\n    return aScale(d[1]);\n  });\n\n// Create X axis\nsvg.append('g')\n  .attr('class', 'axis')\n  .attr('transform', 'translate(0,' + (h - padding) + ')')\n  .call(xAxis);\n\n// Create Y axis\nsvg.append('g')\n  .attr('class', 'axis')\n  .attr('transform', 'translate(' + padding + ',0)')\n  .call(yAxis);";
    };
    return AxisscatterplotComponent;
}());
AxisscatterplotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-axisscatterplot',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], AxisscatterplotComponent);

//# sourceMappingURL=axisscatterplot.component.js.map

/***/ }),

/***/ "./src/app/demos/axisscatterplotdynamic/axisscatterplotdynamic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AxisscatterplotdynamicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AxisscatterplotdynamicComponent = (function () {
    function AxisscatterplotdynamicComponent() {
    }
    AxisscatterplotdynamicComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 300;
        var padding = 30;
        // Dynamic, random dataset
        var dataset = []; // Initialize empty array
        var numDataPoints = 50; // Number of dummy data points to create
        var maxRange = Math.random() * 1000; // Max range of new values
        for (var i = 0; i < numDataPoints; i++) {
            var newNumber1 = Math.floor(Math.random() * maxRange); // New random integer
            var newNumber2 = Math.floor(Math.random() * maxRange); // New random integer
            dataset.push([newNumber1, newNumber2]); // Add new number to array
        }
        // Create scale functions
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d[0]; })])
            .range([padding, w - padding * 2]);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d[1]; })])
            .range([h - padding, padding]);
        // Define X axis
        var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]()
            .scale(xScale)
            .ticks(5);
        // Define Y axis
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"]()
            .scale(yScale)
            .ticks(5);
        // Create SVG element
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        // Create circles
        svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('cx', function (d) {
            return xScale(d[0]);
        })
            .attr('cy', function (d) {
            return yScale(d[1]);
        })
            .attr('r', 2);
        // Create X axis
        svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + (h - padding) + ')')
            .call(xAxis);
        // Create Y axis
        svg.append('g')
            .attr('class', 'y axis')
            .attr('transform', 'translate(' + padding + ',0)')
            .call(yAxis);
        // On click, update with new data
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result').append('p').text('click me!');
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('p')
            .on('click', function () {
            // New values for dataset
            var numValues = dataset.length; // Count original length of dataset
            var tdataset = []; // Initialize empty array
            for (var i = 0; i < numValues; i++) {
                var newNumber1 = Math.floor(Math.random() * Math.random() * 1000); // New random integer
                var newNumber2 = Math.floor(Math.random() * Math.random() * 1000); // New random integer
                tdataset.push([newNumber1, newNumber2]); // Add new number to array
            }
            // Update scale domains
            xScale.domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](tdataset, function (d) { return d[0]; })]);
            yScale.domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](tdataset, function (d) { return d[1]; })]);
            // Update all circles
            svg.selectAll('circle')
                .data(tdataset)
                .transition()
                .duration(1000)
                .attr('cx', function (d) {
                return xScale(d[0]);
            })
                .attr('cy', function (d) {
                return yScale(d[1]);
            });
            // Update X axis
            // svg.select('.x.axis')
            //   .transition()
            //   .duration(1000)
            //   .call(xAxis);
            // Update Y axis
            // svg.select('.y.axis')
            //   .transition()
            //   .duration(1000)
            //   .call(yAxis);
        });
        this.code = "// Width and height\nconst w = 500;\nconst h = 300;\nconst padding = 30;\n\n// Dynamic, random dataset\nconst dataset = [];\t\t\t\t\t\t\t\t\t\t\t// Initialize empty array\nconst numDataPoints = 50;\t\t\t\t\t\t\t\t\t\t// Number of dummy data points to create\nconst maxRange = Math.random() * 1000;\t\t\t\t\t\t// Max range of new values\nfor (let i = 0; i < numDataPoints; i++) {\t\t\t\t\t// Loop numDataPoints times\n  const newNumber1 = Math.floor(Math.random() * maxRange);\t// New random integer\n  const newNumber2 = Math.floor(Math.random() * maxRange);\t// New random integer\n  dataset.push([newNumber1, newNumber2]);\t\t\t\t\t// Add new number to array\n}\n\n// Create scale functions\nconst xScale = d3.scaleLinear()\n  .domain([0, d3.max(dataset, function (d) { return d[0]; })])\n  .range([padding, w - padding * 2]);\n\nconst yScale = d3.scaleLinear()\n  .domain([0, d3.max(dataset, function (d) { return d[1]; })])\n  .range([h - padding, padding]);\n\n// Define X axis\nconst xAxis = d3.axisBottom()\n  .scale(xScale)\n  .ticks(5);\n\n// Define Y axis\nconst yAxis = d3.axisLeft()\n  .scale(yScale)\n  .ticks(5);\n\n// Create SVG element\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\n// Create circles\nsvg.selectAll('circle')\n  .data(dataset)\n  .enter()\n  .append('circle')\n  .attr('cx', function (d) {\n    return xScale(d[0]);\n  })\n  .attr('cy', function (d) {\n    return yScale(d[1]);\n  })\n  .attr('r', 2);\n\n// Create X axis\nsvg.append('g')\n  .attr('class', 'x axis')\n  .attr('transform', 'translate(0,' + (h - padding) + ')')\n  .call(xAxis);\n\n// Create Y axis\nsvg.append('g')\n  .attr('class', 'y axis')\n  .attr('transform', 'translate(' + padding + ',0)')\n  .call(yAxis);\n// On click, update with new data\nd3.select('.result').append('p').text('click me!');\nd3.select('p')\n  .on('click', function () {\n\n    // New values for dataset\n    const numValues = dataset.length;\t\t\t\t\t\t \t\t// Count original length of dataset\n    const tdataset = [];  \t\t\t\t\t\t \t\t\t\t \t\t// Initialize empty array\n    for (let i = 0; i < numValues; i++) {\t\t\t\t \t\t// Loop numValues times\n      const newNumber1 = Math.floor(Math.random() * Math.random() * 1000);\t// New random integer\n      const newNumber2 = Math.floor(Math.random() * Math.random() * 1000);\t// New random integer\n      tdataset.push([newNumber1, newNumber2]);\t\t\t\t\t// Add new number to array\n    }\n\n    // Update scale domains\n    xScale.domain([0, d3.max(tdataset, function (d) { return d[0]; })]);\n    yScale.domain([0, d3.max(tdataset, function (d) { return d[1]; })]);\n\n    // Update all circles\n    svg.selectAll('circle')\n      .data(tdataset)\n      .transition()\n      .duration(1000)\n      .attr('cx', function (d) {\n        return xScale(d[0]);\n      })\n      .attr('cy', function (d) {\n        return yScale(d[1]);\n      });\n\n    // Update X axis\n    // svg.select('.x.axis')\n    //   .transition()\n    //   .duration(1000)\n    //   .call(xAxis);\n\n    // Update Y axis\n    // svg.select('.y.axis')\n    //   .transition()\n    //   .duration(1000)\n    //   .call(yAxis);\n  });";
    };
    return AxisscatterplotdynamicComponent;
}());
AxisscatterplotdynamicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-axisscatterplotdynamic',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], AxisscatterplotdynamicComponent);

//# sourceMappingURL=axisscatterplotdynamic.component.js.map

/***/ }),

/***/ "./src/app/demos/axistime/axistime.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AxistimeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AxistimeComponent = (function () {
    function AxistimeComponent() {
    }
    AxistimeComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 300;
        var padding = 40;
        var dataset, xScale, yScale, xAxis, yAxis; // Empty, for now
        // For converting strings to Dates
        var parseTime = __WEBPACK_IMPORTED_MODULE_1_d3__["timeParse"]('%m/%d/%y');
        // For converting Dates to strings
        var formatTime = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%b %e');
        // Function for converting CSV values from strings to Dates and numbers
        var rowConverter = function (d) {
            return {
                Date: parseTime(d.Date),
                Amount: parseInt(d.Amount, 10)
            };
        };
        // Load in the data
        __WEBPACK_IMPORTED_MODULE_1_d3__["csv"]('assets/time_scale_data.csv', rowConverter, function (data) {
            // Copy data into global dataset
            dataset = data;
            // Create scale functions
            xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleTime"]()
                .domain([
                __WEBPACK_IMPORTED_MODULE_1_d3__["min"](dataset, function (d) { return d.Date; }),
                __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d.Date; })
            ])
                .range([padding, w - padding]);
            yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
                .domain([
                __WEBPACK_IMPORTED_MODULE_1_d3__["min"](dataset, function (d) { return d.Amount; }),
                __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d.Amount; })
            ])
                .range([h - padding, padding]);
            // Define X axis
            xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]()
                .scale(xScale)
                .ticks(5);
            // Define Y axis
            yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"]()
                .scale(yScale)
                .ticks(5);
            // Create SVG element
            var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
                .append('svg')
                .attr('width', w)
                .attr('height', h);
            // Generate date labels first, so they are in back
            svg.selectAll('text')
                .data(dataset)
                .enter()
                .append('text')
                .text(function (d) {
                return formatTime(d.Date);
            })
                .attr('x', function (d) {
                return xScale(d.Date) + 4;
            })
                .attr('y', function (d) {
                return yScale(d.Amount) + 4;
            })
                .attr('font-family', 'sans-serif')
                .attr('font-size', '11px')
                .attr('fill', '#bbb');
            // Generate circles last, so they appear in front
            svg.selectAll('circle')
                .data(dataset)
                .enter()
                .append('circle')
                .attr('cx', function (d) {
                return xScale(d.Date);
            })
                .attr('cy', function (d) {
                return yScale(d.Amount);
            })
                .attr('r', 2);
            // Create X axis
            svg.append('g')
                .attr('class', 'axis')
                .attr('transform', 'translate(0,' + (h - padding) + ')')
                .call(xAxis);
            // Create Y axis
            svg.append('g')
                .attr('class', 'axis')
                .attr('transform', 'translate(' + padding + ',0)')
                .call(yAxis);
        });
        this.code = "// Width and height\nconst w = 500;\nconst h = 300;\nconst padding = 40;\n\nlet dataset, xScale, yScale, xAxis, yAxis;  // Empty, for now\n\n// For converting strings to Dates\nconst parseTime = d3.timeParse('%m/%d/%y');\n\n// For converting Dates to strings\nconst formatTime = d3.timeFormat('%b %e');\n\n// Function for converting CSV values from strings to Dates and numbers\nconst rowConverter = function (d) {\n  return {\n    Date: parseTime(d.Date),\n    Amount: parseInt(d.Amount, 10)\n  };\n};\n\n// Load in the data\nd3.csv('assets/time_scale_data.csv', rowConverter, function (data) {\n\n  // Copy data into global dataset\n  dataset = data;\n\n  // Create scale functions\n  xScale = d3.scaleTime()\n    .domain([\n      d3.min(dataset, function (d) { return d.Date; }),\n      d3.max(dataset, function (d) { return d.Date; })\n    ])\n    .range([padding, w - padding]);\n\n  yScale = d3.scaleLinear()\n    .domain([\n      d3.min(dataset, function (d) { return d.Amount; }),\n      d3.max(dataset, function (d) { return d.Amount; })\n    ])\n    .range([h - padding, padding]);\n\n  // Define X axis\n  xAxis = d3.axisBottom()\n    .scale(xScale)\n    .ticks(5);\n\n  // Define Y axis\n  yAxis = d3.axisLeft()\n    .scale(yScale)\n    .ticks(5);\n\n  // Create SVG element\n  const svg = d3.select('.result')\n    .append('svg')\n    .attr('width', w)\n    .attr('height', h);\n\n  // Generate date labels first, so they are in back\n  svg.selectAll('text')\n    .data(dataset)\n    .enter()\n    .append('text')\n    .text(function (d) {\n      return formatTime(d.Date);\n    })\n    .attr('x', function (d) {\n      return xScale(d.Date) + 4;\n    })\n    .attr('y', function (d) {\n      return yScale(d.Amount) + 4;\n    })\n    .attr('font-family', 'sans-serif')\n    .attr('font-size', '11px')\n    .attr('fill', '#bbb');\n\n  // Generate circles last, so they appear in front\n  svg.selectAll('circle')\n    .data(dataset)\n    .enter()\n    .append('circle')\n    .attr('cx', function (d) {\n      return xScale(d.Date);\n    })\n    .attr('cy', function (d) {\n      return yScale(d.Amount);\n    })\n    .attr('r', 2);\n\n  // Create X axis\n  svg.append('g')\n    .attr('class', 'axis')\n    .attr('transform', 'translate(0,' + (h - padding) + ')')\n    .call(xAxis);\n\n  // Create Y axis\n  svg.append('g')\n    .attr('class', 'axis')\n    .attr('transform', 'translate(' + padding + ',0)')\n    .call(yAxis);\n});";
    };
    return AxistimeComponent;
}());
AxistimeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-axistime',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], AxistimeComponent);

//# sourceMappingURL=axistime.component.js.map

/***/ }),

/***/ "./src/app/demos/axistimeformat/axistimeformat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AxistimeformatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AxistimeformatComponent = (function () {
    function AxistimeformatComponent() {
    }
    AxistimeformatComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 300;
        var padding = 40;
        var dataset, xScale, yScale, xAxis, yAxis; // Empty, for now
        // For converting strings to Dates
        var parseTime = __WEBPACK_IMPORTED_MODULE_1_d3__["timeParse"]('%m/%d/%y');
        // For converting Dates to strings
        var formatTime = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%e');
        // Function for converting CSV values from strings to Dates and numbers
        var rowConverter = function (d) {
            return {
                Date: parseTime(d.Date),
                Amount: parseInt(d.Amount, 10)
            };
        };
        // Load in the data
        __WEBPACK_IMPORTED_MODULE_1_d3__["csv"]('assets/time_scale_data.csv', rowConverter, function (data) {
            // Copy data into global dataset
            dataset = data;
            // Discover start and end dates in dataset
            var startDate = __WEBPACK_IMPORTED_MODULE_1_d3__["min"](dataset, function (d) { return d.Date; });
            var endDate = __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d.Date; });
            // Create scale functions
            xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleTime"]()
                .domain([
                __WEBPACK_IMPORTED_MODULE_1_d3__["timeDay"].offset(startDate, -1),
                __WEBPACK_IMPORTED_MODULE_1_d3__["timeDay"].offset(endDate, 1) // endDate plus one day, for padding
            ])
                .range([padding, w - padding]);
            yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
                .domain([
                0,
                __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d.Amount; })
            ])
                .range([h - padding, padding]);
            // Define X axis
            xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]()
                .scale(xScale)
                .ticks(9)
                .tickFormat(formatTime);
            // Define Y axis
            yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"]()
                .scale(yScale)
                .ticks(10);
            // Create SVG element
            var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
                .append('svg')
                .attr('width', w)
                .attr('height', h);
            // Generate guide lines
            svg.selectAll('line')
                .data(dataset)
                .enter()
                .append('line')
                .attr('x1', function (d) {
                return xScale(d.Date);
            })
                .attr('x2', function (d) {
                return xScale(d.Date);
            })
                .attr('y1', h - padding)
                .attr('y2', function (d) {
                return yScale(d.Amount);
            })
                .attr('stroke', '#ddd')
                .attr('stroke-width', 1);
            // Generate circles last, so they appear in front
            svg.selectAll('circle')
                .data(dataset)
                .enter()
                .append('circle')
                .attr('cx', function (d) {
                return xScale(d.Date);
            })
                .attr('cy', function (d) {
                return yScale(d.Amount);
            })
                .attr('r', 2);
            // Create X axis
            svg.append('g')
                .attr('class', 'axis')
                .attr('transform', 'translate(0,' + (h - padding) + ')')
                .call(xAxis);
            // Create Y axis
            svg.append('g')
                .attr('class', 'axis')
                .attr('transform', 'translate(' + padding + ',0)')
                .call(yAxis);
        });
        this.code = "// Width and height\nconst w = 500;\nconst h = 300;\nconst padding = 40;\n\nlet dataset, xScale, yScale, xAxis, yAxis;  // Empty, for now\n\n// For converting strings to Dates\nconst parseTime = d3.timeParse('%m/%d/%y');\n\n// For converting Dates to strings\nconst formatTime = d3.timeFormat('%e');\n\n// Function for converting CSV values from strings to Dates and numbers\nconst rowConverter = function (d) {\n  return {\n    Date: parseTime(d.Date),\n    Amount: parseInt(d.Amount, 10)\n  };\n};\n\n// Load in the data\nd3.csv('assets/time_scale_data.csv', rowConverter, function (data) {\n\n  // Copy data into global dataset\n  dataset = data;\n\n  // Discover start and end dates in dataset\n  const startDate = d3.min(dataset, function (d) { return d.Date; });\n  const endDate = d3.max(dataset, function (d) { return d.Date; });\n\n  // Create scale functions\n  xScale = d3.scaleTime()\n    .domain([\n      d3.timeDay.offset(startDate, -1),  // startDate minus one day, for padding\n      d3.timeDay.offset(endDate, 1)\t  // endDate plus one day, for padding\n    ])\n    .range([padding, w - padding]);\n\n  yScale = d3.scaleLinear()\n    .domain([\n      0,  // Because I want a zero baseline\n      d3.max(dataset, function (d) { return d.Amount; })\n    ])\n    .range([h - padding, padding]);\n\n  // Define X axis\n  xAxis = d3.axisBottom()\n    .scale(xScale)\n    .ticks(9)\n    .tickFormat(formatTime);\n\n  // Define Y axis\n  yAxis = d3.axisLeft()\n    .scale(yScale)\n    .ticks(10);\n\n  // Create SVG element\n  const svg = d3.select('.result')\n    .append('svg')\n    .attr('width', w)\n    .attr('height', h);\n\n  // Generate guide lines\n  svg.selectAll('line')\n    .data(dataset)\n    .enter()\n    .append('line')\n    .attr('x1', function (d) {\n      return xScale(d.Date);\n    })\n    .attr('x2', function (d) {\n      return xScale(d.Date);\n    })\n    .attr('y1', h - padding)\n    .attr('y2', function (d) {\n      return yScale(d.Amount);\n    })\n    .attr('stroke', '#ddd')\n    .attr('stroke-width', 1);\n\n  // Generate circles last, so they appear in front\n  svg.selectAll('circle')\n    .data(dataset)\n    .enter()\n    .append('circle')\n    .attr('cx', function (d) {\n      return xScale(d.Date);\n    })\n    .attr('cy', function (d) {\n      return yScale(d.Amount);\n    })\n    .attr('r', 2);\n\n  // Create X axis\n  svg.append('g')\n    .attr('class', 'axis')\n    .attr('transform', 'translate(0,' + (h - padding) + ')')\n    .call(xAxis);\n\n  // Create Y axis\n  svg.append('g')\n    .attr('class', 'axis')\n    .attr('transform', 'translate(' + padding + ',0)')\n    .call(yAxis);\n});";
    };
    return AxistimeformatComponent;
}());
AxistimeformatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-axistimeformat',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], AxistimeformatComponent);

//# sourceMappingURL=axistimeformat.component.js.map

/***/ }),

/***/ "./src/app/demos/combinations/combinations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  font-family: Helvetica, sans-serif;\n  font-size: 12px;\n}\n\ninput[type=radio] {\n  margin-left: 40px;\n}\n\n.result {\n  margin-right: 10px;\n  margin-bottom: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/demos/combinations/combinations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"result\">\n    <p>\n      <input type=\"radio\" name=\"filterPreset\" value=\"none\" checked=\"true\"> None\n      <input type=\"radio\" name=\"filterPreset\" value=\"center\"> Center\n      <input type=\"radio\" name=\"filterPreset\" value=\"edges\"> Edges\n      <input type=\"radio\" name=\"filterPreset\" value=\"quadrants\"> Quadrants\n    </p>\n  </div>\n  <div class=\"code\">\n    <app-editor [code]=\"code\"></app-editor>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/demos/combinations/combinations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombinationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CombinationsComponent = (function () {
    function CombinationsComponent() {
    }
    CombinationsComponent.prototype.ngOnInit = function () {
        var w = 500;
        var h = 300;
        var padding = 40;
        var dataset = [];
        var numDataPoints = 200;
        var xRange = 1000;
        var yRange = 1000;
        for (var i = 0; i < numDataPoints; i++) {
            var newNumber1 = Math.floor(Math.random() * xRange);
            var newNumber2 = Math.floor(Math.random() * yRange);
            dataset.push([newNumber1, newNumber2]);
        }
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, xRange])
            .range([padding, w - padding / 2]);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, yRange])
            .range([h - padding, padding / 2]);
        var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]()
            .scale(xScale)
            .ticks(5);
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"]()
            .scale(yScale)
            .ticks(5);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        var allCircles = svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('cx', function (d) {
            return xScale(d[0]);
        })
            .attr('cy', function (d) {
            return yScale(d[1]);
        })
            .attr('r', 2.5);
        svg.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(0,' + (h - padding) + ')')
            .call(xAxis);
        svg.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(' + padding + ',0)')
            .call(yAxis);
        __WEBPACK_IMPORTED_MODULE_1_d3__["selectAll"]('input')
            .on('click', function () {
            var view = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).node().value;
            allCircles.attr('fill', 'black');
            var midpoint = 500;
            var colors = __WEBPACK_IMPORTED_MODULE_1_d3__["schemeCategory10"];
            switch (view) {
                case 'center':
                    allCircles.filter(function (d) {
                        return Math.abs(midpoint - d[0]) < 300 && Math.abs(midpoint - d[1]) < 300;
                    })
                        .attr('fill', colors[1]);
                    break;
                case 'edges':
                    allCircles.filter(function (d) {
                        return Math.abs(midpoint - d[0]) > 300 || Math.abs(midpoint - d[1]) > 300;
                    })
                        .attr('fill', colors[3]);
                    break;
                case 'quadrants':
                    allCircles.filter(function (d) {
                        return d[0] <= midpoint && d[1] >= midpoint;
                    })
                        .attr('fill', colors[0]);
                    allCircles.filter(function (d) {
                        return d[0] > midpoint && d[1] >= midpoint;
                    })
                        .attr('fill', colors[1]);
                    allCircles.filter(function (d) {
                        return d[0] > midpoint && d[1] < midpoint;
                    })
                        .attr('fill', colors[2]);
                    allCircles.filter(function (d) {
                        return d[0] <= midpoint && d[1] < midpoint;
                    })
                        .attr('fill', colors[3]);
                    break;
                case 'none':
                default:
            }
        });
        this.code = "const w = 500;\nconst h = 300;\nconst padding = 40;\nconst dataset = [];\nconst numDataPoints = 200;\nconst xRange = 1000;\nconst yRange = 1000;\nfor (let i = 0; i < numDataPoints; i++) {\n  const newNumber1 = Math.floor(Math.random() * xRange);\n  const newNumber2 = Math.floor(Math.random() * yRange);\n  dataset.push([newNumber1, newNumber2]);\n}\n\nconst xScale = d3.scaleLinear()\n  .domain([0, xRange])\n  .range([padding, w - padding / 2]);\n\nconst yScale = d3.scaleLinear()\n  .domain([0, yRange])\n  .range([h - padding, padding / 2]);\n\nconst xAxis = d3.axisBottom()\n  .scale(xScale)\n  .ticks(5);\n\nconst yAxis = d3.axisLeft()\n  .scale(yScale)\n  .ticks(5);\n\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\nconst allCircles = svg.selectAll('circle')\n  .data(dataset)\n  .enter()\n  .append('circle')\n  .attr('cx', function (d) {\n    return xScale(d[0]);\n  })\n  .attr('cy', function (d) {\n    return yScale(d[1]);\n  })\n  .attr('r', 2.5);\n\nsvg.append('g')\n  .attr('class', 'axis')\n  .attr('transform', 'translate(0,' + (h - padding) + ')')\n  .call(xAxis);\n\nsvg.append('g')\n  .attr('class', 'axis')\n  .attr('transform', 'translate(' + padding + ',0)')\n  .call(yAxis);\n\nd3.selectAll('input')\n  .on('click', function () {\n    const view = d3.select(this).node().value;\n    allCircles.attr('fill', 'black');\n    const midpoint = 500;\n    const colors = d3.schemeCategory10;\n    switch (view) {\n      case 'center':\n        allCircles.filter(function (d) {\n          return Math.abs(midpoint - d[0]) < 300 && Math.abs(midpoint - d[1]) < 300;\n        })\n          .attr('fill', colors[1]);\n        break;\n      case 'edges':\n        allCircles.filter(function (d) {\n          return Math.abs(midpoint - d[0]) > 300 || Math.abs(midpoint - d[1]) > 300;\n        })\n          .attr('fill', colors[3]);\n        break;\n      case 'quadrants':\n        allCircles.filter(function (d) {\n          return d[0] <= midpoint && d[1] >= midpoint;\n        })\n          .attr('fill', colors[0]);\n\n        allCircles.filter(function (d) {\n          return d[0] > midpoint && d[1] >= midpoint;\n        })\n          .attr('fill', colors[1]);\n        allCircles.filter(function (d) {\n          return d[0] > midpoint && d[1] < midpoint;\n        })\n          .attr('fill', colors[2]);\n        allCircles.filter(function (d) {\n          return d[0] <= midpoint && d[1] < midpoint;\n        })\n          .attr('fill', colors[3]);\n        break;\n      case 'none':\n        break;\n      default:\n    }\n  });";
    };
    return CombinationsComponent;
}());
CombinationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-combinations',
        template: __webpack_require__("./src/app/demos/combinations/combinations.component.html"),
        styles: [__webpack_require__("./src/app/common/common.css"), __webpack_require__("./src/app/demos/combinations/combinations.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CombinationsComponent);

//# sourceMappingURL=combinations.component.js.map

/***/ }),

/***/ "./src/app/demos/delaydynamic/delaydynamic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelaydynamicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DelaydynamicComponent = (function () {
    function DelaydynamicComponent() {
    }
    DelaydynamicComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 250;
        var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
            11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
            25, 16, 10, 18, 19, 14, 11, 15, 18, 19];
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleBand"]()
            .domain(__WEBPACK_IMPORTED_MODULE_1_d3__["range"](dataset.length))
            .rangeRound([0, w])
            .paddingInner(0.05);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset)])
            .range([0, h]);
        // Create SVG element
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        // Create bars
        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', function (d, i) {
            return xScale(i);
        })
            .attr('y', function (d) {
            return h - yScale(d);
        })
            .attr('width', xScale.bandwidth())
            .attr('height', function (d) {
            return yScale(d);
        })
            .attr('fill', function (d) {
            return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
        });
        // Create labels
        svg.selectAll('text')
            .data(dataset)
            .enter()
            .append('text')
            .text(function (d) {
            return d;
        })
            .attr('text-anchor', 'middle')
            .attr('x', function (d, i) {
            return xScale(i) + xScale.bandwidth() / 2;
        })
            .attr('y', function (d) {
            return h - yScale(d) + 14;
        })
            .attr('font-family', 'sans-serif')
            .attr('font-size', '11px')
            .attr('fill', 'white');
        // On click, update with new data
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result').append('p').text('click me!');
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('p')
            .on('click', function () {
            // New values for dataset
            dataset = [25, 16, 10, 18, 19, 14, 11, 15, 18, 19,
                5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
            // Update all rects
            svg.selectAll('rect')
                .data(dataset)
                .transition()
                .delay(function (d, i) {
                return i / dataset.length * 10000;
            })
                .duration(500)
                .attr('y', function (d) {
                return h - yScale(d);
            })
                .attr('height', function (d) {
                return yScale(d);
            })
                .attr('fill', function (d) {
                return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
            });
            // Update all labels
            svg.selectAll('text')
                .data(dataset)
                .transition()
                .delay(function (d, i) {
                return i / dataset.length * 10000;
            })
                .duration(500)
                .text(function (d) {
                return d;
            })
                .attr('x', function (d, i) {
                return xScale(i) + xScale.bandwidth() / 2;
            })
                .attr('y', function (d) {
                return h - yScale(d) + 14;
            });
        });
        this.code = "// Width and height\nconst w = 500;\nconst h = 250;\n\nlet dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,\n  11, 12, 15, 20, 18, 17, 16, 18, 23, 25,\n  25, 16, 10, 18, 19, 14, 11, 15, 18, 19];\n\nconst xScale = d3.scaleBand()\n  .domain(d3.range(dataset.length))\n  .rangeRound([0, w])\n  .paddingInner(0.05);\n\nconst yScale = d3.scaleLinear()\n  .domain([0, d3.max(dataset)])\n  .range([0, h]);\n\n// Create SVG element\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\n// Create bars\nsvg.selectAll('rect')\n  .data(dataset)\n  .enter()\n  .append('rect')\n  .attr('x', function (d, i) {\n    return xScale(i);\n  })\n  .attr('y', function (d) {\n    return h - yScale(d);\n  })\n  .attr('width', xScale.bandwidth())\n  .attr('height', function (d) {\n    return yScale(d);\n  })\n  .attr('fill', function (d) {\n    return 'rgb(0, 0, ' + Math.round(d * 10) + ')';\n  });\n\n// Create labels\nsvg.selectAll('text')\n  .data(dataset)\n  .enter()\n  .append('text')\n  .text(function (d) {\n    return d;\n  })\n  .attr('text-anchor', 'middle')\n  .attr('x', function (d, i) {\n    return xScale(i) + xScale.bandwidth() / 2;\n  })\n  .attr('y', function (d) {\n    return h - yScale(d) + 14;\n  })\n  .attr('font-family', 'sans-serif')\n  .attr('font-size', '11px')\n  .attr('fill', 'white');\n\n// On click, update with new data\nd3.select('.result').append('p').text('click me!');\nd3.select('p')\n  .on('click', function () {\n    // New values for dataset\n    dataset = [25, 16, 10, 18, 19, 14, 11, 15, 18, 19,\n      5, 10, 13, 19, 21, 25, 22, 18, 15, 13,\n      11, 12, 15, 20, 18, 17, 16, 18, 23, 25];\n\n    // Update all rects\n    svg.selectAll('rect')\n      .data(dataset)\n      .transition()\n      .delay(function (d, i) {\n        return i / dataset.length * 1000;\n      })\n      .duration(500)\n      .attr('y', function (d) {\n        return h - yScale(d);\n      })\n      .attr('height', function (d) {\n        return yScale(d);\n      })\n      .attr('fill', function (d) {\n        return 'rgb(0, 0, ' + Math.round(d * 10) + ')';\n      });\n\n    // Update all labels\n    svg.selectAll('text')\n      .data(dataset)\n      .transition()\n      .delay(function (d, i) {\n        return i / dataset.length * 1000;\n      })\n      .duration(500)\n      .text(function (d) {\n        return d;\n      })\n      .attr('x', function (d, i) {\n        return xScale(i) + xScale.bandwidth() / 2;\n      })\n      .attr('y', function (d) {\n        return h - yScale(d) + 14;\n      });\n  });";
    };
    return DelaydynamicComponent;
}());
DelaydynamicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-delaydynamic',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], DelaydynamicComponent);

//# sourceMappingURL=delaydynamic.component.js.map

/***/ }),

/***/ "./src/app/demos/delaydynamicrandom/delaydynamicrandom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelaydynamicrandomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DelaydynamicrandomComponent = (function () {
    function DelaydynamicrandomComponent() {
    }
    DelaydynamicrandomComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 250;
        var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
            11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleBand"]()
            .domain(__WEBPACK_IMPORTED_MODULE_1_d3__["range"](dataset.length))
            .rangeRound([0, w])
            .paddingInner(0.05);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset)])
            .range([0, h]);
        // Create SVG element
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        // Create bars
        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', function (d, i) {
            return xScale(i);
        })
            .attr('y', function (d) {
            return h - yScale(d);
        })
            .attr('width', xScale.bandwidth())
            .attr('height', function (d) {
            return yScale(d);
        })
            .attr('fill', function (d) {
            return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
        });
        // Create labels
        svg.selectAll('text')
            .data(dataset)
            .enter()
            .append('text')
            .text(function (d) {
            return d;
        })
            .attr('text-anchor', 'middle')
            .attr('x', function (d, i) {
            return xScale(i) + xScale.bandwidth() / 2;
        })
            .attr('y', function (d) {
            return h - yScale(d) + 14;
        })
            .attr('font-family', 'sans-serif')
            .attr('font-size', '11px')
            .attr('fill', 'white');
        // On click, update with new data
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result').append('p').text('click me!');
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('p')
            .on('click', function () {
            // New values for dataset
            var numValues = dataset.length; // Count original length of dataset
            var tdataset = []; // Initialize empty array
            for (var i = 0; i < numValues; i++) {
                var newNumber = Math.floor(Math.random() * 25); // New random integer (0-24)
                tdataset.push(newNumber); // Add new number to array
            }
            // Update all rects
            svg.selectAll('rect')
                .data(tdataset)
                .transition()
                .delay(function (d, i) {
                return i / tdataset.length * 1000;
            })
                .duration(500)
                .attr('y', function (d) {
                return h - yScale(d);
            })
                .attr('height', function (d) {
                return yScale(d);
            })
                .attr('fill', function (d) {
                return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
            });
            // Update all labels
            svg.selectAll('text')
                .data(tdataset)
                .transition()
                .delay(function (d, i) {
                return i / tdataset.length * 1000;
            })
                .duration(500)
                .text(function (d) {
                return d;
            })
                .attr('x', function (d, i) {
                return xScale(i) + xScale.bandwidth() / 2;
            })
                .attr('y', function (d) {
                return h - yScale(d) + 14;
            });
        });
        this.code = "// Width and height\nconst w = 500;\nconst h = 250;\n\nconst dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,\n  11, 12, 15, 20, 18, 17, 16, 18, 23, 25];\n\nconst xScale = d3.scaleBand()\n  .domain(d3.range(dataset.length))\n  .rangeRound([0, w])\n  .paddingInner(0.05);\n\nconst yScale = d3.scaleLinear()\n  .domain([0, d3.max(dataset)])\n  .range([0, h]);\n\n// Create SVG element\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\n// Create bars\nsvg.selectAll('rect')\n  .data(dataset)\n  .enter()\n  .append('rect')\n  .attr('x', function (d, i) {\n    return xScale(i);\n  })\n  .attr('y', function (d) {\n    return h - yScale(d);\n  })\n  .attr('width', xScale.bandwidth())\n  .attr('height', function (d) {\n    return yScale(d);\n  })\n  .attr('fill', function (d) {\n    return 'rgb(0, 0, ' + Math.round(d * 10) + ')';\n  });\n\n// Create labels\nsvg.selectAll('text')\n  .data(dataset)\n  .enter()\n  .append('text')\n  .text(function (d) {\n    return d;\n  })\n  .attr('text-anchor', 'middle')\n  .attr('x', function (d, i) {\n    return xScale(i) + xScale.bandwidth() / 2;\n  })\n  .attr('y', function (d) {\n    return h - yScale(d) + 14;\n  })\n  .attr('font-family', 'sans-serif')\n  .attr('font-size', '11px')\n  .attr('fill', 'white');\n// On click, update with new data\nd3.select('.result').append('p').text('click me!');\nd3.select('p')\n  .on('click', function () {\n    // New values for dataset\n    const numValues = dataset.length;\t\t\t\t\t\t// Count original length of dataset\n    const tdataset = [];  \t\t\t\t\t\t \t\t\t\t// Initialize empty array\n    for (let i = 0; i < numValues; i++) {\t\t\t\t// Loop numValues times\n      const newNumber = Math.floor(Math.random() * 25); // New random integer (0-24)\n      tdataset.push(newNumber);\t\t\t \t\t\t// Add new number to array\n    }\n\n    // Update all rects\n    svg.selectAll('rect')\n      .data(tdataset)\n      .transition()\n      .delay(function (d, i) {\n        return i / tdataset.length * 1000;\n      })\n      .duration(500)\n      .attr('y', function (d) {\n        return h - yScale(d);\n      })\n      .attr('height', function (d) {\n        return yScale(d);\n      })\n      .attr('fill', function (d) {\n        return 'rgb(0, 0, ' + Math.round(d * 10) + ')';\n      });\n\n    // Update all labels\n    svg.selectAll('text')\n      .data(tdataset)\n      .transition()\n      .delay(function (d, i) {\n        return i / tdataset.length * 1000;\n      })\n      .duration(500)\n      .text(function (d) {\n        return d;\n      })\n      .attr('x', function (d, i) {\n        return xScale(i) + xScale.bandwidth() / 2;\n      })\n      .attr('y', function (d) {\n        return h - yScale(d) + 14;\n      });\n  });";
    };
    return DelaydynamicrandomComponent;
}());
DelaydynamicrandomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-delaydynamicrandom',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], DelaydynamicrandomComponent);

//# sourceMappingURL=delaydynamicrandom.component.js.map

/***/ }),

/***/ "./src/app/demos/demo.json":
/***/ (function(module, exports) {

module.exports = {"demos":[{"id":34,"name":"linear-area-map","description":"a linear area map with interactive effects"},{"id":33,"name":"map-mercator","description":"mercator projection applied to oceans"},{"id":32,"name":"map-oceans","description":"loading oceans GeoJSON data"},{"id":31,"name":"map","description":"mini map"},{"id":30,"name":"path-scaled","description":"scaling the Albers USA projection"},{"id":29,"name":"path-projection","description":"applying a projection to SVG paths"},{"id":28,"name":"path","description":"loading GeoJSON data and generating SVG paths"},{"id":27,"name":"force_draggable","description":"force layout, can draggable"},{"id":26,"name":"stacked_area","description":"stacked area chart"},{"id":25,"name":"stacked_bar_anchored","description":"stack layout stacked bar chart, anchored at bottom"},{"id":24,"name":"doughnut","description":"pie layout doughnut chart"},{"id":23,"name":"pie","description":"pie layout pie chart"},{"id":22,"name":"each","description":"using each() to run an arbitrary function on each element in a selection"},{"id":21,"name":"combinations","description":"using radio buttons to trigger different combinations of filters"},{"id":20,"name":"radios","description":"using radio buttons to set filter threshold value"},{"id":19,"name":"slider","description":"filtering selections based on slider input values"},{"id":18,"name":"line-area-chart","description":"show line and average area"},{"id":17,"name":"tooltip","description":"show tooltip"},{"id":16,"name":"sort","description":"click to sort datas"},{"id":15,"name":"add-and-remove","description":"add data item and remove data item"},{"id":14,"name":"on","description":"using on() at transitions' start and end"},{"id":13,"name":"axis-scatter-plot-dynamic","description":"transitioning points to randomized values"},{"id":12,"name":"delay-dynamic-random-data","description":"update data with dynamic delay and random data"},{"id":11,"name":"delay-dynamic","description":"update data with dynamic delay"},{"id":10,"name":"[type]-easing","description":"update data with [type] easing"},{"id":9,"name":"transition-duration","description":"update data with tarnsition and duration"},{"id":8,"name":"axis-time-format","description":"show format time with axis"},{"id":7,"name":"axis-time","description":"show time with axis"},{"id":6,"name":"axis-scatterplot","description":"Random number scatter plot with axis"},{"id":5,"name":"scale","description":"how to use base scale"},{"id":4,"name":"scatterplot","description":"use svg draw a scatterplot"},{"id":3,"name":"making_a_bar_chart_aligned","description":"use svg draw a histogram with show num"},{"id":2,"name":"drawing_svgs_color","description":"use svg draw circle with color"},{"id":1,"name":"power_of_data_rounded","description":"use a histogram to display random arrays"}]}

/***/ }),

/***/ "./src/app/demos/doughnut/doughnut.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoughnutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoughnutComponent = (function () {
    function DoughnutComponent() {
    }
    DoughnutComponent.prototype.ngOnInit = function () {
        var w = 300;
        var h = 300;
        var dataset = [5, 10, 20, 45, 6, 25];
        var outerRadius = w / 2;
        var innerRadius = w / 3;
        var arc = __WEBPACK_IMPORTED_MODULE_1_d3__["arc"]()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);
        var pie = __WEBPACK_IMPORTED_MODULE_1_d3__["pie"]();
        // Easy colors accessible via a 10-step ordinal scale
        var color = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleOrdinal"](__WEBPACK_IMPORTED_MODULE_1_d3__["schemeCategory10"]);
        // Create SVG element
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        // Set up groups
        var arcs = svg.selectAll('g.arc')
            .data(pie(dataset))
            .enter()
            .append('g')
            .attr('class', 'arc')
            .attr('transform', 'translate(' + outerRadius + ',' + outerRadius + ')');
        // Draw arc paths
        arcs.append('path')
            .attr('fill', function (d, i) {
            return color(i);
        })
            .attr('d', arc);
        // Labels
        arcs.append('text')
            .attr('transform', function (d) {
            return 'translate(' + arc.centroid(d) + ')';
        })
            .attr('text-anchor', 'middle')
            .attr('fill', 'white')
            .text(function (d) {
            return d.value;
        });
        this.code = "const w = 300;\nconst h = 300;\nconst dataset = [5, 10, 20, 45, 6, 25];\n\nconst outerRadius = w / 2;\nconst innerRadius = w / 3;\nconst arc = d3.arc()\n  .innerRadius(innerRadius)\n  .outerRadius(outerRadius);\n\nconst pie = d3.pie();\n\n// Easy colors accessible via a 10-step ordinal scale\nconst color = d3.scaleOrdinal(d3.schemeCategory10);\n\n// Create SVG element\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\n// Set up groups\nconst arcs = svg.selectAll('g.arc')\n  .data(pie(dataset))\n  .enter()\n  .append('g')\n  .attr('class', 'arc')\n  .attr('transform', 'translate(' + outerRadius + ',' + outerRadius + ')');\n\n// Draw arc paths\narcs.append('path')\n  .attr('fill', function (d, i) {\n    return color(i);\n  })\n  .attr('d', arc);\n\n// Labels\narcs.append('text')\n  .attr('transform', function (d) {\n    return 'translate(' + arc.centroid(d) + ')';\n  })\n  .attr('text-anchor', 'middle')\n  .attr('fill', 'white')\n  .text(function (d) {\n    return d.value;\n  });";
    };
    return DoughnutComponent;
}());
DoughnutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-doughnut',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], DoughnutComponent);

//# sourceMappingURL=doughnut.component.js.map

/***/ }),

/***/ "./src/app/demos/drawingsvgscolor/drawingsvgscolor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingsvgscolorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrawingsvgscolorComponent = (function () {
    function DrawingsvgscolorComponent() {
    }
    DrawingsvgscolorComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 100;
        // Data
        var dataset = [5, 10, 15, 20, 25];
        // Create SVG element
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        var circles = svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle');
        circles.attr('cx', function (d, i) {
            return (i * 50) + 25;
        })
            .attr('cy', h / 2)
            .attr('r', function (d) {
            return d;
        })
            .attr('fill', 'yellow')
            .attr('stroke', 'orange')
            .attr('stroke-width', function (d) {
            return d / 2;
        });
        this.code = "//Width and height\nconst w = 500;\nconst h = 100;\n\n//Data\nconst dataset = [5, 10, 15, 20, 25];\n\n//Create SVG element\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\nconst circles = svg.selectAll('circle')\n  .data(dataset)\n  .enter()\n  .append('circle');\n\ncircles.attr('cx', function (d, i) {\n  return (i * 50) + 25;\n})\n  .attr('cy', h / 2)\n  .attr('r', function (d) {\n    return d;\n  })\n  .attr('fill', 'yellow')\n  .attr('stroke', 'orange')\n  .attr('stroke-width', function (d) {\n    return d / 2;\n  });";
    };
    return DrawingsvgscolorComponent;
}());
DrawingsvgscolorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-drawingsvgscolor',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], DrawingsvgscolorComponent);

//# sourceMappingURL=drawingsvgscolor.component.js.map

/***/ }),

/***/ "./src/app/demos/each/each.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".result {\n  margin-right: 10px;\n  margin-bottom: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/demos/each/each.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"result\">\n    <p>\n      <input type=\"button\" value=\"Do something for each circle\">\n    </p>\n  </div>\n  <div class=\"code\">\n    <app-editor [code]=\"code\"></app-editor>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/demos/each/each.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EachComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EachComponent = (function () {
    function EachComponent() {
    }
    EachComponent.prototype.ngOnInit = function () {
        var w = 500;
        var h = 300;
        var padding = 40;
        var dataset = [];
        var numDataPoints = 200;
        var xRange = 1000;
        var yRange = 1000;
        for (var i = 0; i < numDataPoints; i++) {
            var newNumber1 = Math.floor(Math.random() * xRange);
            var newNumber2 = Math.floor(Math.random() * yRange);
            dataset.push([newNumber1, newNumber2]);
        }
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, xRange])
            .range([padding, w - padding / 2]);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, yRange])
            .range([h - padding, padding / 2]);
        var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]()
            .scale(xScale)
            .ticks(5);
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"]()
            .scale(yScale)
            .ticks(5);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        var allCircles = svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('cx', function (d) {
            return xScale(d[0]);
        })
            .attr('cy', function (d) {
            return yScale(d[1]);
        })
            .attr('r', 2.5)
            .attr('fill', 'black');
        svg.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(0,' + (h - padding) + ')')
            .call(xAxis);
        svg.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(' + padding + ',0)')
            .call(yAxis);
        __WEBPACK_IMPORTED_MODULE_1_d3__["selectAll"]('input')
            .on('click', function () {
            allCircles.each(freakOut);
        });
        var freakOut = function (d, i) {
            var colors = __WEBPACK_IMPORTED_MODULE_1_d3__["schemeCategory20"];
            var colorIndex = Math.round(Math.random() * 20);
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this)
                .transition()
                .delay(i * 25)
                .duration(2000)
                .ease(__WEBPACK_IMPORTED_MODULE_1_d3__["easeElasticOut"])
                .attr('fill', colors[colorIndex])
                .attr('r', 25);
        };
        this.code = "const w = 500;\nconst h = 300;\nconst padding = 40;\nconst dataset = [];\nconst numDataPoints = 200;\nconst xRange = 1000;\nconst yRange = 1000;\nfor (let i = 0; i < numDataPoints; i++) {\n  const newNumber1 = Math.floor(Math.random() * xRange);\n  const newNumber2 = Math.floor(Math.random() * yRange);\n  dataset.push([newNumber1, newNumber2]);\n}\n\nconst xScale = d3.scaleLinear()\n  .domain([0, xRange])\n  .range([padding, w - padding / 2]);\n\nconst yScale = d3.scaleLinear()\n  .domain([0, yRange])\n  .range([h - padding, padding / 2]);\n\nconst xAxis = d3.axisBottom()\n  .scale(xScale)\n  .ticks(5);\n\nconst yAxis = d3.axisLeft()\n  .scale(yScale)\n  .ticks(5);\n\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\nconst allCircles = svg.selectAll('circle')\n  .data(dataset)\n  .enter()\n  .append('circle')\n  .attr('cx', function (d) {\n    return xScale(d[0]);\n  })\n  .attr('cy', function (d) {\n    return yScale(d[1]);\n  })\n  .attr('r', 2.5)\n  .attr('fill', 'black');\n\nsvg.append('g')\n  .attr('class', 'axis')\n  .attr('transform', 'translate(0,' + (h - padding) + ')')\n  .call(xAxis);\n\nsvg.append('g')\n  .attr('class', 'axis')\n  .attr('transform', 'translate(' + padding + ',0)')\n  .call(yAxis);\n\nd3.selectAll('input')\n  .on('click', function () {\n    allCircles.each(freakOut);\n  });\n\nconst freakOut = function (d, i) {\n  const colors = d3.schemeCategory20;\n  const colorIndex = Math.round(Math.random() * 20);\n  d3.select(this)\n    .transition()\n    .delay(i * 25)\n    .duration(2000)\n    .ease(d3.easeElasticOut)\n    .attr('fill', colors[colorIndex])\n    .attr('r', 25);\n};";
    };
    return EachComponent;
}());
EachComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-each',
        template: __webpack_require__("./src/app/demos/each/each.component.html"),
        styles: [__webpack_require__("./src/app/common/common.css"), __webpack_require__("./src/app/demos/each/each.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EachComponent);

//# sourceMappingURL=each.component.js.map

/***/ }),

/***/ "./src/app/demos/easing/easing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EasingComponent = (function () {
    function EasingComponent() {
    }
    EasingComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 250;
        var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
            11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleBand"]()
            .domain(__WEBPACK_IMPORTED_MODULE_1_d3__["range"](dataset.length))
            .rangeRound([0, w])
            .paddingInner(0.05);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset)])
            .range([0, h]);
        // Create SVG element
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        // Create bars
        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', function (d, i) {
            return xScale(i);
        })
            .attr('y', function (d) {
            return h - yScale(d);
        })
            .attr('width', xScale.bandwidth())
            .attr('height', function (d) {
            return yScale(d);
        })
            .attr('fill', function (d) {
            return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
        });
        // Create labels
        svg.selectAll('text')
            .data(dataset)
            .enter()
            .append('text')
            .text(function (d) {
            return d;
        })
            .attr('text-anchor', 'middle')
            .attr('x', function (d, i) {
            return xScale(i) + xScale.bandwidth() / 2;
        })
            .attr('y', function (d) {
            return h - yScale(d) + 14;
        })
            .attr('font-family', 'sans-serif')
            .attr('font-size', '11px')
            .attr('fill', 'white');
        // On click, update with new data
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result').append('p').text('click me!');
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('p')
            .on('click', function () {
            // New values for dataset
            dataset = [11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
                5, 10, 13, 19, 21, 25, 22, 18, 15, 13];
            // Update all rects
            svg.selectAll('rect')
                .data(dataset)
                .transition()
                .duration(2000)
                .ease(__WEBPACK_IMPORTED_MODULE_1_d3__["easeLinear"])
                .attr('y', function (d) {
                return h - yScale(d);
            })
                .attr('height', function (d) {
                return yScale(d);
            })
                .attr('fill', function (d) {
                return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
            });
            // Update all labels
            svg.selectAll('text')
                .data(dataset)
                .transition()
                .duration(2000)
                .ease(__WEBPACK_IMPORTED_MODULE_1_d3__["easeLinear"])
                .text(function (d) {
                return d;
            })
                .attr('x', function (d, i) {
                return xScale(i) + xScale.bandwidth() / 2;
            })
                .attr('y', function (d) {
                return h - yScale(d) + 14;
            });
        });
        this.code = "// .ease(d3.easeLinear) | d3.easeCircleIn | d3.easeElasticOut | d3.easeBounceOut\n// Width and height\nconst w = 500;\nconst h = 250;\n\nlet dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,\n  11, 12, 15, 20, 18, 17, 16, 18, 23, 25];\n\nconst xScale = d3.scaleBand()\n  .domain(d3.range(dataset.length))\n  .rangeRound([0, w])\n  .paddingInner(0.05);\n\nconst yScale = d3.scaleLinear()\n  .domain([0, d3.max(dataset)])\n  .range([0, h]);\n\n// Create SVG element\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\n// Create bars\nsvg.selectAll('rect')\n  .data(dataset)\n  .enter()\n  .append('rect')\n  .attr('x', function (d, i) {\n    return xScale(i);\n  })\n  .attr('y', function (d) {\n    return h - yScale(d);\n  })\n  .attr('width', xScale.bandwidth())\n  .attr('height', function (d) {\n    return yScale(d);\n  })\n  .attr('fill', function (d) {\n    return 'rgb(0, 0, ' + Math.round(d * 10) + ')';\n  });\n\n// Create labels\nsvg.selectAll('text')\n  .data(dataset)\n  .enter()\n  .append('text')\n  .text(function (d) {\n    return d;\n  })\n  .attr('text-anchor', 'middle')\n  .attr('x', function (d, i) {\n    return xScale(i) + xScale.bandwidth() / 2;\n  })\n  .attr('y', function (d) {\n    return h - yScale(d) + 14;\n  })\n  .attr('font-family', 'sans-serif')\n  .attr('font-size', '11px')\n  .attr('fill', 'white');\n\n// On click, update with new data\nd3.select('.result').append('p').text('click me!');\nd3.select('p')\n  .on('click', function () {\n\n    // New values for dataset\n    dataset = [11, 12, 15, 20, 18, 17, 16, 18, 23, 25,\n      5, 10, 13, 19, 21, 25, 22, 18, 15, 13];\n\n    // Update all rects\n    svg.selectAll('rect')\n      .data(dataset)\n      .transition()\n      .duration(2000)\n      .ease(d3.easeLinear)\n      .attr('y', function (d) {\n        return h - yScale(d);\n      })\n      .attr('height', function (d) {\n        return yScale(d);\n      })\n      .attr('fill', function (d) {\n        return 'rgb(0, 0, ' + Math.round(d * 10) + ')';\n      });\n\n    // Update all labels\n    svg.selectAll('text')\n      .data(dataset)\n      .transition()\n      .duration(2000)\n      .ease(d3.easeLinear)\n      .text(function (d) {\n        return d;\n      })\n      .attr('x', function (d, i) {\n        return xScale(i) + xScale.bandwidth() / 2;\n      })\n      .attr('y', function (d) {\n        return h - yScale(d) + 14;\n      });\n  });";
    };
    return EasingComponent;
}());
EasingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-easing',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")],
    }),
    __metadata("design:paramtypes", [])
], EasingComponent);

//# sourceMappingURL=easing.component.js.map

/***/ }),

/***/ "./src/app/demos/forcedraggable/forcedraggable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForcedraggableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForcedraggableComponent = (function () {
    function ForcedraggableComponent() {
    }
    ForcedraggableComponent.prototype.ngOnInit = function () {
        var w = 500;
        var h = 300;
        var dataset = {
            nodes: [
                { name: 'Adam' },
                { name: 'Bob' },
                { name: 'Carrie' },
                { name: 'Donovan' },
                { name: 'Edward' },
                { name: 'Felicity' },
                { name: 'George' },
                { name: 'Hannah' },
                { name: 'Iris' },
                { name: 'Jerry' }
            ],
            edges: [
                { source: 0, target: 1 },
                { source: 0, target: 2 },
                { source: 0, target: 3 },
                { source: 0, target: 4 },
                { source: 1, target: 5 },
                { source: 2, target: 5 },
                { source: 2, target: 5 },
                { source: 3, target: 4 },
                { source: 5, target: 8 },
                { source: 5, target: 9 },
                { source: 6, target: 7 },
                { source: 7, target: 8 },
                { source: 8, target: 9 }
            ]
        };
        var force = __WEBPACK_IMPORTED_MODULE_1_d3__["forceSimulation"](dataset.nodes)
            .force('charge', __WEBPACK_IMPORTED_MODULE_1_d3__["forceManyBody"]())
            .force('link', __WEBPACK_IMPORTED_MODULE_1_d3__["forceLink"](dataset.edges))
            .force('center', __WEBPACK_IMPORTED_MODULE_1_d3__["forceCenter"]().x(w / 2).y(h / 2));
        var colors = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleOrdinal"](__WEBPACK_IMPORTED_MODULE_1_d3__["schemeCategory10"]);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        var edges = svg.selectAll('line')
            .data(dataset.edges)
            .enter()
            .append('line')
            .style('stroke', '#ccc')
            .style('stroke-width', 1);
        var nodes = svg.selectAll('circle')
            .data(dataset.nodes)
            .enter()
            .append('circle')
            .attr('r', 10)
            .style('fill', function (d, i) {
            return colors(i);
        })
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["drag"]()
            .on('start', dragStarted)
            .on('drag', dragging)
            .on('end', dragEnded));
        nodes.append('title')
            .text(function (d) {
            return d.name;
        });
        force.on('tick', function () {
            edges.attr('x1', function (d) { return d.source.x; })
                .attr('y1', function (d) { return d.source.y; })
                .attr('x2', function (d) { return d.target.x; })
                .attr('y2', function (d) { return d.target.y; });
            nodes.attr('cx', function (d) { return d.x; })
                .attr('cy', function (d) { return d.y; });
        });
        function dragStarted(d) {
            if (!__WEBPACK_IMPORTED_MODULE_1_d3__["event"].active) {
                force.alphaTarget(0.3).restart();
            }
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragging(d) {
            d.fx = __WEBPACK_IMPORTED_MODULE_1_d3__["event"].x;
            d.fy = __WEBPACK_IMPORTED_MODULE_1_d3__["event"].y;
        }
        function dragEnded(d) {
            if (!__WEBPACK_IMPORTED_MODULE_1_d3__["event"].active) {
                force.alphaTarget(0);
            }
            d.fx = null;
            d.fy = null;
        }
        this.code = "const w = 500;\nconst h = 300;\nconst dataset = {\n  nodes: [\n    { name: 'Adam' },\n    { name: 'Bob' },\n    { name: 'Carrie' },\n    { name: 'Donovan' },\n    { name: 'Edward' },\n    { name: 'Felicity' },\n    { name: 'George' },\n    { name: 'Hannah' },\n    { name: 'Iris' },\n    { name: 'Jerry' }\n  ],\n  edges: [\n    { source: 0, target: 1 },\n    { source: 0, target: 2 },\n    { source: 0, target: 3 },\n    { source: 0, target: 4 },\n    { source: 1, target: 5 },\n    { source: 2, target: 5 },\n    { source: 2, target: 5 },\n    { source: 3, target: 4 },\n    { source: 5, target: 8 },\n    { source: 5, target: 9 },\n    { source: 6, target: 7 },\n    { source: 7, target: 8 },\n    { source: 8, target: 9 }\n  ]\n};\n\nconst force = d3.forceSimulation(dataset.nodes)\n  .force('charge', d3.forceManyBody())\n  .force('link', d3.forceLink(dataset.edges))\n  .force('center', d3.forceCenter().x(w / 2).y(h / 2));\n\nconst colors = d3.scaleOrdinal(d3.schemeCategory10);\n\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\nconst edges = svg.selectAll('line')\n  .data(dataset.edges)\n  .enter()\n  .append('line')\n  .style('stroke', '#ccc')\n  .style('stroke-width', 1);\n\nconst nodes = svg.selectAll('circle')\n  .data(dataset.nodes)\n  .enter()\n  .append('circle')\n  .attr('r', 10)\n  .style('fill', function (d, i) {\n    return colors(i);\n  })\n  .call(d3.drag()\n    .on('start', dragStarted)\n    .on('drag', dragging)\n    .on('end', dragEnded));\n\nnodes.append('title')\n  .text(function (d) {\n    return d.name;\n  });\n\nforce.on('tick', function () {\n\n  edges.attr('x1', function (d) { return d.source.x; })\n    .attr('y1', function (d) { return d.source.y; })\n    .attr('x2', function (d) { return d.target.x; })\n    .attr('y2', function (d) { return d.target.y; });\n\n  nodes.attr('cx', function (d) { return d.x; })\n    .attr('cy', function (d) { return d.y; });\n\n});\n\nfunction dragStarted(d) {\n  if (!d3.event.active) {\n    force.alphaTarget(0.3).restart();\n  }\n  d.fx = d.x;\n  d.fy = d.y;\n}\n\nfunction dragging(d) {\n  d.fx = d3.event.x;\n  d.fy = d3.event.y;\n}\n\nfunction dragEnded(d) {\n  if (!d3.event.active) {\n    force.alphaTarget(0);\n  }\n  d.fx = null;\n  d.fy = null;\n}";
    };
    return ForcedraggableComponent;
}());
ForcedraggableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-forcedraggable',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")],
    }),
    __metadata("design:paramtypes", [])
], ForcedraggableComponent);

//# sourceMappingURL=forcedraggable.component.js.map

/***/ }),

/***/ "./src/app/demos/linearareamap/linearareamap.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".linearareamap-area {\n  stroke: none;\n  cursor: pointer;\n}\n\n.linearareamap-area:hover {\n  fill: rgb(175, 240, 91);\n}\n\n#backButton {\n  cursor: pointer;\n}\n\n#backButton rect {\n  fill: rgb(175, 240, 91);\n}\n\n#backButton text {\n  font-family: Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  fill: black;\n}\n\n#backButton:hover rect {\n  fill: rgb(26, 199, 194);\n}\n\n#backButton:hover text {\n  fill: white;\n}\n\n.unclickable {\n  pointer-events: none;\n}\n\n.result {\n  width: 700px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/demos/linearareamap/linearareamap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinearareamapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable */


var LinearareamapComponent = (function () {
    function LinearareamapComponent() {
    }
    LinearareamapComponent.prototype.ngOnInit = function () {
        var w = 700;
        var h = 300;
        var padding = 20;
        // Tracks view state.  Possible values:
        // 0 = default (vehicle types)
        // 1 = vehicles (of one type)
        // 2 = vehicle (singular)
        var viewState = 0;
        // Tracks most recently viewed/clicked 'type'.  Possible values:
        // 'HEV', 'PHEV', 'BEV', 'FCEV', or undefined
        var viewType;
        var dataset, thisTypeDataset, xScale, yScale, xAxis, yAxis, area; // Empty, for now
        // For converting strings to Dates
        var parseTime = __WEBPACK_IMPORTED_MODULE_1_d3__["timeParse"]('%Y-%m');
        // For converting Dates to strings
        var formatTime = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y');
        // Define key function, to be used when binding data
        var key = function (d) {
            return d.key;
        };
        // Set up stack methods
        var vehicleStack = __WEBPACK_IMPORTED_MODULE_1_d3__["stack"]();
        var typeStack = __WEBPACK_IMPORTED_MODULE_1_d3__["stack"]();
        // Load in data
        __WEBPACK_IMPORTED_MODULE_1_d3__["request"]('assets/vehicle_sales_data.csv')
            .mimeType('text/csv')
            .get(function (response) {
            // 
            // DATA PARSING
            // 
            // Parse each row of the CSV into an array of string values
            var rows = __WEBPACK_IMPORTED_MODULE_1_d3__["csvParseRows"](response.responseText);
            // console.log(rows);
            // Make dataset an empty array, so we can start adding values
            dataset = [];
            // Loop once for each row of the CSV, starting at row 3,
            // since rows 0-2 contain only vehicle info, not sales values.
            for (var i = 3; i < rows.length; i++) {
                // Create a new object
                dataset[i - 3] = {
                    date: parseTime(rows[i][0]) // Make a new Date object for each year + month
                };
                // Loop once for each vehicle in this row (i.e., for this date)
                for (var j = 1; j < rows[i].length; j++) {
                    var make = rows[0][j]; // 'Make' from 1st row in CSV
                    var model = rows[1][j]; // 'Model' from 2nd row in CSV
                    var makeModel = rows[0][j] + ' ' + rows[1][j]; // 'Make' + 'Model' will serve as our key
                    var type = rows[2][j]; // 'Type' from 3rd row in CSV
                    var sales = rows[i][j]; // Sales value for this vehicle and month
                    // If sales value exists…
                    if (sales) {
                        sales = parseInt(sales, 10); // Convert from string to int
                    }
                    else {
                        sales = 0; // Set to zero
                    }
                    // Append a new object with data for this vehicle and month
                    dataset[i - 3][makeModel] = {
                        'make': make,
                        'model': model,
                        'type': type,
                        'sales': sales
                    };
                }
            }
            // Log out the final state of dataset
            // console.log(dataset);
            // 
            // STACKING (removed here, now happens only after click…)
            // 
            // 
            // 	TYPE DATA SERIES
            // 
            // The goal here is to make a totally separate data set that
            // includes just monthly totals for each `type` (HEV, PHEV, BEV, FCEV).
            // Make typeDataset an empty array, so we can start adding values
            var typeDataset = [];
            // Loop once for each row of the CSV, starting at row 3,
            // since rows 0-2 contain only vehicle info, not sales values.
            for (var i = 3; i < rows.length; i++) {
                // Create a new object
                typeDataset[i - 3] = {
                    date: parseTime(rows[i][0]),
                    'HEV': 0,
                    'PHEV': 0,
                    'BEV': 0,
                    'FCEV': 0
                };
                // Loop once for each vehicle in this row (i.e., for this date)
                for (var j = 1; j < rows[i].length; j++) {
                    var type = rows[2][j]; // 'Type' from 3rd row in CSV
                    var sales = rows[i][j]; // Sales value for this vehicle and month
                    // If sales value exists…
                    if (sales) {
                        sales = parseInt(sales, 10); // Convert from string to int
                    }
                    else {
                        sales = 0; // Set to zero
                    }
                    // Add sales value to existing sum
                    typeDataset[i - 3][type] += sales;
                }
            }
            // Log out the final state of dataset
            // console.log(typeDataset);
            // 
            // STACKING
            // 
            // Tell stack function where to find the keys
            var types = ['HEV', 'PHEV', 'BEV', 'FCEV'];
            typeStack.keys(types);
            // Stack the data and log it out
            var typeSeries = typeStack(typeDataset);
            // console.log(typeSeries);
            // 
            // MAKE THE CHART
            // 
            // Create scale functions
            xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleTime"]()
                .domain([
                __WEBPACK_IMPORTED_MODULE_1_d3__["min"](dataset, function (d) { return d.date; }),
                __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d.date; })
            ])
                .range([padding, w - padding * 2]);
            yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
                .domain([
                0,
                __WEBPACK_IMPORTED_MODULE_1_d3__["max"](typeDataset, function (d) {
                    var sum = 0;
                    // Loops once for each row, to calculate
                    // the total (sum) of sales of all vehicles
                    for (var i = 0; i < types.length; i++) {
                        sum += d[types[i]];
                    }
                    return sum;
                })
            ])
                .range([h - padding, padding / 2])
                .nice();
            // Define axes
            xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]()
                .scale(xScale)
                .ticks(10)
                .tickFormat(formatTime);
            // Define Y axis
            yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisRight"]()
                .scale(yScale)
                .ticks(5);
            // Define area generator
            area = __WEBPACK_IMPORTED_MODULE_1_d3__["area"]()
                .x(function (d) { return xScale(d.data.date); })
                .y0(function (d) { return yScale(d[0]); })
                .y1(function (d) { return yScale(d[1]); });
            // Create SVG element
            var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
                .append('svg')
                .attr('width', w)
                .attr('height', h);
            // Create areas for individual VEHICLES
            // 
            // (Removed here, now happens only after click…)
            // 
            svg.append('g')
                .attr('id', 'vehicles');
            // Create areas for TYPES
            svg.append('g')
                .attr('id', 'types')
                .selectAll('path')
                .data(typeSeries, key)
                .enter()
                .append('path')
                .attr('class', 'linearareamap-area')
                .attr('opacity', 1)
                .attr('d', area)
                .attr('fill', function (d) {
                // Which type is this?
                var thisType = d.key;
                // New color var
                var color;
                switch (thisType) {
                    case 'HEV':
                        color = 'rgb(110, 64, 170)';
                        break;
                    case 'PHEV':
                        color = 'rgb(76, 110, 219)';
                        break;
                    case 'BEV':
                        color = 'rgb(35, 171, 216)';
                        break;
                    case 'FCEV':
                        color = 'rgb(29, 223, 163)';
                        break;
                }
                return color;
            })
                .on('click', function (d) {
                // Update view state
                viewState++;
                // 
                // TYPES
                // 
                // Which type was clicked?
                var thisType = d.key;
                // Update this for later reference
                viewType = thisType;
                // Generate a new data set with all-zero values, 
                // except for this type's data
                thisTypeDataset = [];
                for (var i = 0; i < typeDataset.length; i++) {
                    thisTypeDataset[i] = (_a = {
                            date: typeDataset[i].date,
                            HEV: 0,
                            PHEV: 0,
                            BEV: 0,
                            FCEV: 0
                        },
                        _a[thisType] = typeDataset[i][thisType] // Overwrites the appropriate zero value above
                    ,
                        _a);
                }
                // console.log(thisTypeDataset);
                // Stack the data (even though there's now just one 'layer') and log it out
                var thisTypeSeries = typeStack(thisTypeDataset);
                // console.log(thisTypeSeries);
                // Bind the new data set to paths, overwriting old bound data.
                var paths = __WEBPACK_IMPORTED_MODULE_1_d3__["selectAll"]('#types path')
                    .data(thisTypeSeries, key)
                    .classed('unclickable', true);
                // Transition areas into new positions (i.e., thisType's area
                // will go to a zero baseline; all others will flatten out).
                // 
                // Store this transition in a new variable for later reference.
                var areaTransitions = paths.transition()
                    .duration(1000)
                    .attr('d', area);
                // Update scale
                yScale.domain([
                    0,
                    __WEBPACK_IMPORTED_MODULE_1_d3__["max"](thisTypeDataset, function (d) {
                        var sum = 0;
                        // Calculate the total (sum) of sales of this type,
                        // ignoring the others (for now)
                        sum += d[thisType];
                        return sum;
                    })
                ]);
                // Append this transition to the one already in progress
                // (from above).  Transition areas to newly updated scale.
                areaTransitions.transition()
                    .delay(200)
                    .on('start', function () {
                    // Transition axis to new scale concurrently
                    __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('g.axis.y')
                        .transition()
                        .duration(1000)
                        .call(yAxis);
                })
                    .duration(1000)
                    .attr('d', area)
                    .transition()
                    .on('start', function () {
                    // Make vehicles visible instantly, so 
                    // they are revealed when this fades out
                    __WEBPACK_IMPORTED_MODULE_1_d3__["selectAll"]('g#vehicles path')
                        .attr('opacity', 1);
                })
                    .duration(1000)
                    .attr('opacity', 0)
                    .on('end', function (d, i) {
                    // Reveal back button
                    if (i === 0) {
                        toggleBackButton();
                    }
                });
                // 
                // VEHICLES
                // 
                // Get all possible keys (make + model), but toss out 'date'
                var keysAll = Object.keys(dataset[0]).slice(1);
                // console.log(keysAll);
                // Loop once for each key, and save out just the ones of thisType (e.g. BEVs)
                var keysOfThisType = [];
                for (var i = 0; i < keysAll.length; i++) {
                    if (dataset[0][keysAll[i]].type == thisType) {
                        keysOfThisType.push(keysAll[i]);
                    }
                }
                // console.log(keysOfThisType);
                // Give the new keys to the stack function
                vehicleStack.keys(keysOfThisType)
                    .value(function value(d, key) {
                    return d[key].sales;
                });
                // Stack the data and log it out
                var vehicleSeries = vehicleStack(dataset);
                // console.log(vehicleSeries);
                // Create areas for individual VEHICLES
                svg.select('g#vehicles')
                    .selectAll('path')
                    .data(vehicleSeries, key)
                    .enter()
                    .append('path')
                    .attr('class', 'linearareamap-area')
                    .attr('opacity', 0)
                    .attr('d', area)
                    .attr('fill', function (d, i) {
                    // Which vehicle is this?
                    var thisKey = d.key;
                    // What 'type' is this vehicle?
                    var thisType = d[0].data[thisKey].type;
                    // console.log(thisType);
                    // Used to find a cool color below
                    var spread = 0.2;
                    var startingPoint;
                    // Choose where in the color spectrum we start, based on type
                    switch (thisType) {
                        case 'HEV':
                            startingPoint = 0;
                            break;
                        case 'PHEV':
                            startingPoint = 0.2;
                            break;
                        case 'BEV':
                            startingPoint = 0.4;
                            break;
                        case 'FCEV':
                            startingPoint = 0.6;
                            break;
                    }
                    // How many cars?
                    var numVehicles = keysOfThisType.length;
                    // Get a value between 0.0 and 1.0
                    var normalized = startingPoint + ((i / numVehicles) * spread);
                    // Get that color on the spectrum
                    return __WEBPACK_IMPORTED_MODULE_1_d3__["interpolateCool"](normalized);
                })
                    .on('click', function (d) {
                    // Update view state
                    viewState++;
                    // Hide the back button during this view transition
                    toggleBackButton();
                    // Which vehicle was clicked?
                    var thisType = d.key;
                    // Fade out all other vehicle areas
                    __WEBPACK_IMPORTED_MODULE_1_d3__["selectAll"]('g#vehicles path')
                        .classed('unclickable', true) // Prevent future clicks
                        .filter(function (d) {
                        if (d.key !== thisType) {
                            return true;
                        }
                    })
                        .transition()
                        .duration(1000)
                        .attr('opacity', 0);
                    // Define area generator that will be used just this one time
                    var singleVehicleArea = __WEBPACK_IMPORTED_MODULE_1_d3__["area"]()
                        .x(function (d) { return xScale(d.data.date); })
                        .y0(function (d) { return yScale(0); }) // Note zero baseline
                        .y1(function (d) { return yScale(d.data[thisType].sales); });
                    // Note y1 uses the raw 'sales' value for 'this' vehicle,
                    // not the stacked data values (e.g., d[0] or d[1]).
                    // Use this new area generator to transition the area downward,
                    // to have a flat (zero) baseline.
                    var thisAreaTransition = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this)
                        .transition()
                        .delay(1000)
                        .duration(1000)
                        .attr('d', singleVehicleArea);
                    // Update y scale domain, based on the sales for this vehicle only
                    yScale.domain([
                        0,
                        __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) {
                            return d[thisType].sales;
                        })
                    ]);
                    // Transitions the clicked area and y axis into place, to fit the new domain
                    thisAreaTransition
                        .transition()
                        .duration(1000)
                        .attr('d', singleVehicleArea)
                        .on('start', function () {
                        // Transition axis to new scale concurrently
                        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('g.axis.y')
                            .transition()
                            .duration(1000)
                            .call(yAxis);
                    })
                        .on('end', function () {
                        // Restore clickability (is that a word?)
                        __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).classed('unclickable', 'false');
                        // Reveal back button
                        toggleBackButton();
                    });
                })
                    .append('title') // Make tooltip
                    .text(function (d) {
                    return d.key;
                });
                var _a;
            })
                .append('title') // Make tooltip
                .text(function (d) {
                return d.key;
            });
            // Create axes
            svg.append('g')
                .attr('class', 'axis x')
                .attr('transform', 'translate(0,' + (h - padding) + ')')
                .call(xAxis);
            svg.append('g')
                .attr('class', 'axis y')
                .attr('transform', 'translate(' + (w - padding * 2) + ',0)')
                .call(yAxis);
            // Create back button
            var backButton = svg.append('g')
                .attr('id', 'backButton')
                .attr('opacity', 0) // Initially hidden
                .classed('unclickable', true) // Initially not clickable
                .attr('transform', 'translate(' + xScale.range()[0] + ',' + yScale.range()[1] + ')');
            backButton.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('rx', 5)
                .attr('rx', 5)
                .attr('width', 70)
                .attr('height', 30);
            backButton.append('text')
                .attr('x', 7)
                .attr('y', 20)
                .html('&larr; Back');
            // Define click behavior
            backButton.on('click', function () {
                // Hide the back button, as it was just clicked
                toggleBackButton();
                if (viewState == 1) {
                    // Go back to default view
                    // Update view state
                    viewState--;
                    // Re-bind type data and fade in types
                    var typeAreaTransitions = __WEBPACK_IMPORTED_MODULE_1_d3__["selectAll"]('g#types path')
                        .data(typeSeries, key)
                        .transition()
                        .duration(250)
                        .attr('opacity', 1)
                        .on('end', function () {
                        // Remove all vehicles once this fades in;
                        // they will be recreated later as needed.
                        __WEBPACK_IMPORTED_MODULE_1_d3__["selectAll"]('g#vehicles path').remove();
                    });
                    // Set y scale back to original domain
                    yScale.domain([
                        0,
                        __WEBPACK_IMPORTED_MODULE_1_d3__["max"](typeDataset, function (d) {
                            var sum = 0;
                            // Loops once for each row, to calculate
                            // the total (sum) of sales of all vehicles
                            for (var i = 0; i < types.length; i++) {
                                sum += d[types[i]];
                            }
                            return sum;
                        })
                    ]);
                    // Transition type areas and y scale back into place
                    typeAreaTransitions.transition()
                        .duration(1000)
                        .on('start', function () {
                        // Transition axis to new scale concurrently
                        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('g.axis.y')
                            .transition()
                            .duration(1000)
                            .call(yAxis);
                    })
                        .attr('d', area)
                        .on('end', function () {
                        __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).classed('unclickable', false);
                    });
                }
                else if (viewState == 2) {
                    // Go back to vehicles view
                    // Update view state
                    viewState--;
                    // Restore the old y scale
                    yScale.domain([
                        0,
                        __WEBPACK_IMPORTED_MODULE_1_d3__["max"](thisTypeDataset, function (d) {
                            var sum = 0;
                            // Calculate the total (sum) of sales of this type
                            sum += d[viewType];
                            return sum;
                        })
                    ]);
                    // Transition the y axis and visible area back into place
                    __WEBPACK_IMPORTED_MODULE_1_d3__["selectAll"]('g#vehicles path')
                        .transition()
                        .on('start', function () {
                        // Transition y axis to new scale concurrently
                        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('g.axis.y')
                            .transition()
                            .duration(1000)
                            .call(yAxis);
                    })
                        .duration(1000)
                        .attr('d', area) // Effectively changes only the selected area
                        .transition()
                        .duration(1000)
                        .attr('opacity', 1) // Fade in all areas
                        .on('end', function (d, i) {
                        // Restore clickability
                        __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).classed('unclickable', false);
                        // Reveal back button
                        if (i === 0) {
                            toggleBackButton();
                        }
                    });
                }
            });
        });
        var toggleBackButton = function () {
            // Select the button
            var backButton = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('#backButton');
            // Is the button hidden right now?
            var hidden = backButton.classed('unclickable');
            // Decide whether to reveal or hide it
            if (hidden) {
                // Reveal it
                // Set up dynamic button text
                var buttonText = '&larr; Back to ';
                // Text varies by mode and type
                if (viewState == 1) {
                    buttonText += 'all types';
                }
                else if (viewState == 2) {
                    buttonText += 'all ' + viewType + ' vehicles';
                }
                // Set text
                backButton.select('text').html(buttonText);
                // Resize button depending on text width
                var rectWidth = Math.round(backButton.select('text').node().getBBox().width + 16);
                backButton.select('rect').attr('width', rectWidth);
                // Fade button in
                backButton.classed('unclickable', false)
                    .transition()
                    .duration(500)
                    .attr('opacity', 1);
            }
            else {
                // Hide it
                backButton.classed('unclickable', true)
                    .transition()
                    .duration(200)
                    .attr('opacity', 0);
            }
        };
        this.code = "const w = 700;\nconst h = 300;\nconst padding = 20;\n\n// Tracks view state.  Possible values:\n// 0 = default (vehicle types)\n// 1 = vehicles (of one type)\n// 2 = vehicle (singular)\nlet viewState = 0;\n\n// Tracks most recently viewed/clicked 'type'.  Possible values:\n// 'HEV', 'PHEV', 'BEV', 'FCEV', or undefined\nlet viewType;\n\nlet dataset, thisTypeDataset, xScale, yScale, xAxis, yAxis, area;  // Empty, for now\n\n// For converting strings to Dates\nconst parseTime = d3.timeParse('%Y-%m');\n\n// For converting Dates to strings\nconst formatTime = d3.timeFormat('%Y');\n\n// Define key function, to be used when binding data\nconst key = function (d) {\n  return d.key;\n};\n\n// Set up stack methods\nconst vehicleStack = d3.stack();\nconst typeStack = d3.stack();\n\n// Load in data\nd3.request('assets/vehicle_sales_data.csv')\n  .mimeType('text/csv')\n  .get(function (response) {\n\n    // \n    // DATA PARSING\n    // \n\n    // Parse each row of the CSV into an array of string values\n    const rows = d3.csvParseRows(response.responseText);\n    // console.log(rows);\n\n    // Make dataset an empty array, so we can start adding values\n    dataset = [];\n\n    // Loop once for each row of the CSV, starting at row 3,\n    // since rows 0-2 contain only vehicle info, not sales values.\n    for (let i = 3; i < rows.length; i++) {\n\n      // Create a new object\n      dataset[i - 3] = {\n        date: parseTime(rows[i][0])  // Make a new Date object for each year + month\n      };\n\n      // Loop once for each vehicle in this row (i.e., for this date)\n      for (let j = 1; j < rows[i].length; j++) {\n\n        const make = rows[0][j];  // 'Make' from 1st row in CSV\n        const model = rows[1][j];  // 'Model' from 2nd row in CSV\n        const makeModel = rows[0][j] + ' ' + rows[1][j];  // 'Make' + 'Model' will serve as our key\n        const type = rows[2][j];  // 'Type' from 3rd row in CSV\n        let sales = rows[i][j];  // Sales value for this vehicle and month\n\n        // If sales value exists\u2026\n        if (sales) {\n          sales = parseInt(sales, 10);  // Convert from string to int\n        } else {  // Otherwise\u2026\n          sales = 0;  // Set to zero\n        }\n\n        // Append a new object with data for this vehicle and month\n        dataset[i - 3][makeModel] = {\n          'make': make,\n          'model': model,\n          'type': type,\n          'sales': sales\n        };\n      }\n    }\n\n    // Log out the final state of dataset\n    // console.log(dataset);\n    // \n    // STACKING (removed here, now happens only after click\u2026)\n    // \n    // \n    // \tTYPE DATA SERIES\n    // \n\n    // The goal here is to make a totally separate data set that\n    // includes just monthly totals for each 'type' (HEV, PHEV, BEV, FCEV).\n\n    // Make typeDataset an empty array, so we can start adding values\n    let typeDataset = [];\n\n    // Loop once for each row of the CSV, starting at row 3,\n    // since rows 0-2 contain only vehicle info, not sales values.\n    for (let i = 3; i < rows.length; i++) {\n\n      // Create a new object\n      typeDataset[i - 3] = {\n        date: parseTime(rows[i][0]),  // Make a new Date object for each year + month\n        'HEV': 0,\n        'PHEV': 0,\n        'BEV': 0,\n        'FCEV': 0\n      };\n\n      // Loop once for each vehicle in this row (i.e., for this date)\n      for (let j = 1; j < rows[i].length; j++) {\n\n        const type = rows[2][j];  // 'Type' from 3rd row in CSV\n        let sales = rows[i][j];  // Sales value for this vehicle and month\n\n        // If sales value exists\u2026\n        if (sales) {\n          sales = parseInt(sales, 10);  // Convert from string to int\n        } else {  // Otherwise\u2026\n          sales = 0;  // Set to zero\n        }\n        // Add sales value to existing sum\n        typeDataset[i - 3][type] += sales;\n      }\n\n    }\n\n    // Log out the final state of dataset\n    // console.log(typeDataset);\n\n    // \n    // STACKING\n    // \n\n    // Tell stack function where to find the keys\n    const types = ['HEV', 'PHEV', 'BEV', 'FCEV'];\n    typeStack.keys(types);\n\n    // Stack the data and log it out\n    const typeSeries = typeStack(typeDataset);\n    // console.log(typeSeries);\n\n    // \n    // MAKE THE CHART\n    // \n\n    // Create scale functions\n    xScale = d3.scaleTime()\n      .domain([\n        d3.min(dataset, function (d) { return d.date; }),\n        d3.max(dataset, function (d) { return d.date; })\n      ])\n      .range([padding, w - padding * 2]);\n\n    yScale = d3.scaleLinear()\n      .domain([\n        0,\n        d3.max(typeDataset, function (d) {\n          let sum = 0;\n\n          // Loops once for each row, to calculate\n          // the total (sum) of sales of all vehicles\n          for (let i = 0; i < types.length; i++) {\n            sum += d[types[i]];\n          }\n\n          return sum;\n        })\n      ])\n      .range([h - padding, padding / 2])\n      .nice();\n\n    // Define axes\n    xAxis = d3.axisBottom()\n      .scale(xScale)\n      .ticks(10)\n      .tickFormat(formatTime);\n\n    // Define Y axis\n    yAxis = d3.axisRight()\n      .scale(yScale)\n      .ticks(5);\n\n    // Define area generator\n    area = d3.area()\n      .x(function (d) { return xScale(d.data.date); })\n      .y0(function (d) { return yScale(d[0]); })\n      .y1(function (d) { return yScale(d[1]); });\n\n    // Create SVG element\n    var svg = d3.select('.result')\n      .append('svg')\n      .attr('width', w)\n      .attr('height', h);\n\n    // Create areas for individual VEHICLES\n    // \n    // (Removed here, now happens only after click\u2026)\n    // \n    svg.append('g')\n      .attr('id', 'vehicles');\n\n    // Create areas for TYPES\n    svg.append('g')\n      .attr('id', 'types')\n      .selectAll('path')\n      .data(typeSeries, key)\n      .enter()\n      .append('path')\n      .attr('class', 'linearareamap-area')\n      .attr('opacity', 1)\n      .attr('d', area)\n      .attr('fill', function (d) {\n\n        // Which type is this?\n        const thisType = d.key;\n\n        // New color var\n        let color;\n\n        switch (thisType) {\n          case 'HEV':\n            color = 'rgb(110, 64, 170)';\n            break;\n          case 'PHEV':\n            color = 'rgb(76, 110, 219)';\n            break;\n          case 'BEV':\n            color = 'rgb(35, 171, 216)';\n            break;\n          case 'FCEV':\n            color = 'rgb(29, 223, 163)';\n            break;\n        }\n\n        return color;\n      })\n      .on('click', function (d) {\n\n        // Update view state\n        viewState++;\n\n        // \n        // TYPES\n        // \n\n        // Which type was clicked?\n        var thisType = d.key;\n\n        // Update this for later reference\n        viewType = thisType;\n\n        // Generate a new data set with all-zero values, \n        // except for this type's data\n        thisTypeDataset = [];\n\n        for (var i = 0; i < typeDataset.length; i++) {\n          thisTypeDataset[i] = {\n            date: typeDataset[i].date,\n            HEV: 0,\n            PHEV: 0,\n            BEV: 0,\n            FCEV: 0,\n            [thisType]: typeDataset[i][thisType]  // Overwrites the appropriate zero value above\n          }\n        }\n\n        // console.log(thisTypeDataset);\n\n        // Stack the data (even though there's now just one 'layer') and log it out\n        var thisTypeSeries = typeStack(thisTypeDataset);\n        // console.log(thisTypeSeries);\n\n        // Bind the new data set to paths, overwriting old bound data.\n        var paths = d3.selectAll('#types path')\n          .data(thisTypeSeries, key)\n          .classed('unclickable', true);\n\n        // Transition areas into new positions (i.e., thisType's area\n        // will go to a zero baseline; all others will flatten out).\n        // \n        // Store this transition in a new variable for later reference.\n        var areaTransitions = paths.transition()\n          .duration(1000)\n          .attr('d', area);\n\n        // Update scale\n        yScale.domain([\n          0,\n          d3.max(thisTypeDataset, function (d) {\n            var sum = 0;\n\n            // Calculate the total (sum) of sales of this type,\n            // ignoring the others (for now)\n            sum += d[thisType];\n\n            return sum;\n          })\n        ]);\n\n        // Append this transition to the one already in progress\n        // (from above).  Transition areas to newly updated scale.\n        areaTransitions.transition()\n          .delay(200)\n          .on('start', function () {\n\n            // Transition axis to new scale concurrently\n            d3.select('g.axis.y')\n              .transition()\n              .duration(1000)\n              .call(yAxis);\n\n          })\n          .duration(1000)\n          .attr('d', area)\n          .transition()\n          .on('start', function () {\n            // Make vehicles visible instantly, so \n            // they are revealed when this fades out\n            d3.selectAll('g#vehicles path')\n              .attr('opacity', 1);\n          })\n          .duration(1000)\n          .attr('opacity', 0)\n          .on('end', function (d, i) {\n            // Reveal back button\n            if (i === 0) {\n              toggleBackButton();\n            }\n          });\n\n        // \n        // VEHICLES\n        // \n\n        // Get all possible keys (make + model), but toss out 'date'\n        var keysAll = Object.keys(dataset[0]).slice(1);\n        // console.log(keysAll);\n\n        // Loop once for each key, and save out just the ones of thisType (e.g. BEVs)\n        var keysOfThisType = [];\n        for (var i = 0; i < keysAll.length; i++) {\n          if (dataset[0][keysAll[i]].type == thisType) {\n            keysOfThisType.push(keysAll[i]);\n          }\n        }\n        // console.log(keysOfThisType);\n\n        // Give the new keys to the stack function\n        vehicleStack.keys(keysOfThisType)\n          .value(function value(d, key) {\n            return d[key].sales;\n          });\n\n        // Stack the data and log it out\n        var vehicleSeries = vehicleStack(dataset);\n        // console.log(vehicleSeries);\n\n        // Create areas for individual VEHICLES\n        svg.select('g#vehicles')\n          .selectAll('path')\n          .data(vehicleSeries, key)\n          .enter()\n          .append('path')\n          .attr('class', 'linearareamap-area')\n          .attr('opacity', 0)\n          .attr('d', area)\n          .attr('fill', function (d, i) {\n\n            // Which vehicle is this?\n            var thisKey = d.key;\n\n            // What 'type' is this vehicle?\n            var thisType = d[0].data[thisKey].type;\n            // console.log(thisType);\n\n            // Used to find a cool color below\n            var spread = 0.2;\n            var startingPoint;\n\n            // Choose where in the color spectrum we start, based on type\n            switch (thisType) {\n              case 'HEV':\n                startingPoint = 0;\n                break;\n              case 'PHEV':\n                startingPoint = 0.2;\n                break;\n              case 'BEV':\n                startingPoint = 0.4;\n                break;\n              case 'FCEV':\n                startingPoint = 0.6;\n                break;\n            }\n\n            // How many cars?\n            var numVehicles = keysOfThisType.length;\n\n            // Get a value between 0.0 and 1.0\n            var normalized = startingPoint + ((i / numVehicles) * spread);\n\n            // Get that color on the spectrum\n            return d3.interpolateCool(normalized);\n          })\n          .on('click', function (d) {\n\n            // Update view state\n            viewState++;\n\n            // Hide the back button during this view transition\n            toggleBackButton();\n\n            // Which vehicle was clicked?\n            const thisType = d.key;\n\n            // Fade out all other vehicle areas\n            d3.selectAll('g#vehicles path')\n              .classed('unclickable', true)  // Prevent future clicks\n              .filter(function (d) {  // Filter out 'this' one\n                if (d.key !== thisType) {\n                  return true;\n                }\n              })\n              .transition()\n              .duration(1000)\n              .attr('opacity', 0);\n\n            // Define area generator that will be used just this one time\n            const singleVehicleArea = d3.area()\n              .x(function (d) { return xScale(d.data.date); })\n              .y0(function (d) { return yScale(0); })  // Note zero baseline\n              .y1(function (d) { return yScale(d.data[thisType].sales); });\n            // Note y1 uses the raw 'sales' value for 'this' vehicle,\n            // not the stacked data values (e.g., d[0] or d[1]).\n\n            // Use this new area generator to transition the area downward,\n            // to have a flat (zero) baseline.\n            const thisAreaTransition = d3.select(this)\n              .transition()\n              .delay(1000)\n              .duration(1000)\n              .attr('d', singleVehicleArea);\n\n            // Update y scale domain, based on the sales for this vehicle only\n            yScale.domain([\n              0,\n              d3.max(dataset, function (d) {\n                return d[thisType].sales;\n              })\n            ]);\n\n            // Transitions the clicked area and y axis into place, to fit the new domain\n            thisAreaTransition\n              .transition()\n              .duration(1000)\n              .attr('d', singleVehicleArea)\n              .on('start', function () {\n\n                // Transition axis to new scale concurrently\n                d3.select('g.axis.y')\n                  .transition()\n                  .duration(1000)\n                  .call(yAxis);\n\n              })\n              .on('end', function () {\n                // Restore clickability (is that a word?)\n                d3.select(this).classed('unclickable', 'false');\n\n                // Reveal back button\n                toggleBackButton();\n              });\n\n          })\n          .append('title')  // Make tooltip\n          .text(function (d) {\n            return d.key;\n          });\n\n      })\n      .append('title')  // Make tooltip\n      .text(function (d) {\n        return d.key;\n      });\n\n    // Create axes\n    svg.append('g')\n      .attr('class', 'axis x')\n      .attr('transform', 'translate(0,' + (h - padding) + ')')\n      .call(xAxis);\n\n    svg.append('g')\n      .attr('class', 'axis y')\n      .attr('transform', 'translate(' + (w - padding * 2) + ',0)')\n      .call(yAxis);\n\n    // Create back button\n    const backButton = svg.append('g')\n      .attr('id', 'backButton')\n      .attr('opacity', 0)\t\t\t\t// Initially hidden\n      .classed('unclickable', true)\t// Initially not clickable\n      .attr('transform', 'translate(' + xScale.range()[0] + ',' + yScale.range()[1] + ')');\n\n    backButton.append('rect')\n      .attr('x', 0)\n      .attr('y', 0)\n      .attr('rx', 5)\n      .attr('rx', 5)\n      .attr('width', 70)\n      .attr('height', 30);\n\n    backButton.append('text')\n      .attr('x', 7)\n      .attr('y', 20)\n      .html('&larr; Back');\n\n    // Define click behavior\n    backButton.on('click', function () {\n\n      // Hide the back button, as it was just clicked\n      toggleBackButton();\n\n      if (viewState == 1) {\n        // Go back to default view\n\n        // Update view state\n        viewState--;\n\n        // Re-bind type data and fade in types\n        var typeAreaTransitions = d3.selectAll('g#types path')\n          .data(typeSeries, key)\n          .transition()\n          .duration(250)\n          .attr('opacity', 1)\n          .on('end', function () {\n            // Remove all vehicles once this fades in;\n            // they will be recreated later as needed.\n            d3.selectAll('g#vehicles path').remove();\n          });\n\n        // Set y scale back to original domain\n        yScale.domain([\n          0,\n          d3.max(typeDataset, function (d) {\n            let sum = 0;\n\n            // Loops once for each row, to calculate\n            // the total (sum) of sales of all vehicles\n            for (let i = 0; i < types.length; i++) {\n              sum += d[types[i]];\n            }\n\n            return sum;\n          })\n        ]);\n\n        // Transition type areas and y scale back into place\n        typeAreaTransitions.transition()\n          .duration(1000)\n          .on('start', function () {\n\n            // Transition axis to new scale concurrently\n            d3.select('g.axis.y')\n              .transition()\n              .duration(1000)\n              .call(yAxis);\n\n          })\n          .attr('d', area)\n          .on('end', function () {\n            d3.select(this).classed('unclickable', false);\n          });\n\n      } else if (viewState == 2) {\n        // Go back to vehicles view\n\n        // Update view state\n        viewState--;\n\n        // Restore the old y scale\n        yScale.domain([\n          0,\n          d3.max(thisTypeDataset, function (d) {\n            let sum = 0;\n\n            // Calculate the total (sum) of sales of this type\n            sum += d[viewType];\n\n            return sum;\n          })\n        ]);\n\n        // Transition the y axis and visible area back into place\n        d3.selectAll('g#vehicles path')\n          .transition()\n          .on('start', function () {\n\n            // Transition y axis to new scale concurrently\n            d3.select('g.axis.y')\n              .transition()\n              .duration(1000)\n              .call(yAxis);\n\n          })\n          .duration(1000)\n          .attr('d', area)  // Effectively changes only the selected area\n          .transition()\n          .duration(1000)\n          .attr('opacity', 1)  // Fade in all areas\n          .on('end', function (d, i) {\n\n            // Restore clickability\n            d3.select(this).classed('unclickable', false);\n\n            // Reveal back button\n            if (i === 0) {\n              toggleBackButton();\n            }\n\n          });\n\n      }\n\n    });\n\n  });\n\n\n\nconst toggleBackButton = function () {\n\n  // Select the button\n  const backButton = d3.select('#backButton');\n\n  // Is the button hidden right now?\n  const hidden = backButton.classed('unclickable');\n\n  // Decide whether to reveal or hide it\n  if (hidden) {\n\n    // Reveal it\n\n    // Set up dynamic button text\n    var buttonText = '&larr; Back to ';\n\n    // Text varies by mode and type\n    if (viewState == 1) {\n      buttonText += 'all types';\n    } else if (viewState == 2) {\n      buttonText += 'all ' + viewType + ' vehicles';\n    }\n\n    // Set text\n    backButton.select('text').html(buttonText);\n\n    // Resize button depending on text width\n    const rectWidth = Math.round(backButton.select('text').node().getBBox().width + 16);\n    backButton.select('rect').attr('width', rectWidth);\n\n    // Fade button in\n    backButton.classed('unclickable', false)\n      .transition()\n      .duration(500)\n      .attr('opacity', 1);\n\n  } else {\n\n    // Hide it\n    backButton.classed('unclickable', true)\n      .transition()\n      .duration(200)\n      .attr('opacity', 0);\n  }\n};";
    };
    return LinearareamapComponent;
}());
LinearareamapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-linearareamap',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css"), __webpack_require__("./src/app/demos/linearareamap/linearareamap.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], LinearareamapComponent);

/* tslint:enable */
//# sourceMappingURL=linearareamap.component.js.map

/***/ }),

/***/ "./src/app/demos/lineareachart/lineareachart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line-area {\n  fill: teal;\n  stroke: none;\n}\n\n.line-line {\n  fill: none;\n  stroke: teal;\n  stroke-width: 0.5;\n}\n\n.line-safeLevel {\n  stroke: red;\n  stroke-dasharray: 2, 3;\n}\n\n.line-danger {\n  fill: red;\n}\n\n.line-dangerLabel {\n  font-family: Helvetica, sans-serif;\n  font-size: 12px;\n  fill: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/demos/lineareachart/lineareachart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineareachartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineareachartComponent = (function () {
    function LineareachartComponent() {
    }
    LineareachartComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 300;
        var padding = 40;
        var xScale, yScale, xAxis, yAxis, area, dangerArea; // Empty, for now
        // For converting Dates to strings
        var formatTime = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y');
        // Function for converting CSV values from strings to Dates and numbers
        var rowConverter = function (d) {
            return {
                date: new Date(+d.year, (+d.month - 1)),
                average: parseFloat(d.average) // Convert from string to float
            };
        };
        // Load in data
        __WEBPACK_IMPORTED_MODULE_1_d3__["csv"]('assets/mauna_loa_co2_monthly_averages.csv', rowConverter, function (data) {
            var dataset = data;
            // Print data to console as table, for verification
            // console.table(dataset, ['date', 'average']);
            // Create scale functions
            xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleTime"]()
                .domain([
                __WEBPACK_IMPORTED_MODULE_1_d3__["min"](dataset, function (d) { return d.date; }),
                __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d.date; })
            ])
                .range([padding, w]);
            yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
                .domain([
                __WEBPACK_IMPORTED_MODULE_1_d3__["min"](dataset, function (d) {
                    if (d.average >= 0) {
                        return d.average;
                    }
                }) - 10,
                __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d.average; })
            ])
                .range([h - padding, 0]);
            // Define axes
            xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]()
                .scale(xScale)
                .ticks(10)
                .tickFormat(formatTime);
            // Define Y axis
            yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"]()
                .scale(yScale)
                .ticks(10);
            // Define area generators
            area = __WEBPACK_IMPORTED_MODULE_1_d3__["area"]()
                .defined(function (d) { return d.average >= 0; })
                .x(function (d) { return xScale(d.date); })
                .y0(function () { return yScale.range()[0]; })
                .y1(function (d) { return yScale(d.average); });
            dangerArea = __WEBPACK_IMPORTED_MODULE_1_d3__["area"]()
                .defined(function (d) { return d.average >= 350; })
                .x(function (d) { return xScale(d.date); })
                .y0(function () { return yScale(350); })
                .y1(function (d) { return yScale(d.average); });
            // Create SVG element
            var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
                .append('svg')
                .attr('width', w)
                .attr('height', h);
            // Create areas
            svg.append('path')
                .datum(dataset)
                .attr('class', 'line-area')
                .attr('d', area);
            svg.append('path')
                .datum(dataset)
                .attr('class', 'line-area line-danger')
                .attr('d', dangerArea);
            // Create axes
            svg.append('g')
                .attr('class', 'line-axis')
                .attr('transform', 'translate(0,' + (h - padding) + ')')
                .call(xAxis);
            svg.append('g')
                .attr('class', 'line-axis')
                .attr('transform', 'translate(' + padding + ',0)')
                .call(yAxis);
            // Draw 350 ppm line
            svg.append('line')
                .attr('class', 'line-line line-safeLevel')
                .attr('x1', padding)
                .attr('x2', w)
                .attr('y1', yScale(350))
                .attr('y2', yScale(350));
            // Label 350 ppm line
            svg.append('text')
                .attr('class', 'line-dangerLabel')
                .attr('x', padding + 20)
                .attr('y', yScale(350) - 7)
                .text('350 ppm “safe” level');
        });
        this.code = "// Width and height\nconst w = 500;\nconst h = 300;\nconst padding = 40;\n\nlet xScale, yScale, xAxis, yAxis, area, dangerArea;  // Empty, for now\n// For converting Dates to strings\nconst formatTime = d3.timeFormat('%Y');\n\n// Function for converting CSV values from strings to Dates and numbers\nconst rowConverter = function (d) {\n  return {\n    date: new Date(+d.year, (+d.month - 1)),  // Make a new Date object for each year + month\n    average: parseFloat(d.average)  // Convert from string to float\n  };\n};\n\n// Load in data\nd3.csv('assets/mauna_loa_co2_monthly_averages.csv', rowConverter, function (data) {\n  const dataset = data;\n  // Print data to console as table, for verification\n  // console.table(dataset, ['date', 'average']);\n\n  // Create scale functions\n  xScale = d3.scaleTime()\n    .domain([\n      d3.min(dataset, function (d) { return d.date; }),\n      d3.max(dataset, function (d) { return d.date; })\n    ])\n    .range([padding, w]);\n\n  yScale = d3.scaleLinear()\n    .domain([\n      d3.min(dataset, function (d) {\n        if (d.average >= 0) {\n          return d.average;\n        }\n      }) - 10,\n      d3.max(dataset, function (d) { return d.average; })\n    ])\n    .range([h - padding, 0]);\n\n  // Define axes\n  xAxis = d3.axisBottom()\n    .scale(xScale)\n    .ticks(10)\n    .tickFormat(formatTime);\n\n  // Define Y axis\n  yAxis = d3.axisLeft()\n    .scale(yScale)\n    .ticks(10);\n\n  // Define area generators\n  area = d3.area()\n    .defined(function (d) { return d.average >= 0; })\n    .x(function (d) { return xScale(d.date); })\n    .y0(function () { return yScale.range()[0]; })\n    .y1(function (d) { return yScale(d.average); });\n\n  dangerArea = d3.area()\n    .defined(function (d) { return d.average >= 350; })\n    .x(function (d) { return xScale(d.date); })\n    .y0(function () { return yScale(350); })\n    .y1(function (d) { return yScale(d.average); });\n\n  // Create SVG element\n  const svg = d3.select('.result')\n    .append('svg')\n    .attr('width', w)\n    .attr('height', h);\n\n  // Create areas\n  svg.append('path')\n    .datum(dataset)\n    .attr('class', 'line-area')\n    .attr('d', area);\n\n  svg.append('path')\n    .datum(dataset)\n    .attr('class', 'line-area line-danger')\n    .attr('d', dangerArea);\n\n  // Create axes\n  svg.append('g')\n    .attr('class', 'line-axis')\n    .attr('transform', 'translate(0,' + (h - padding) + ')')\n    .call(xAxis);\n\n  svg.append('g')\n    .attr('class', 'line-axis')\n    .attr('transform', 'translate(' + padding + ',0)')\n    .call(yAxis);\n\n  // Draw 350 ppm line\n  svg.append('line')\n    .attr('class', 'line-line line-safeLevel')\n    .attr('x1', padding)\n    .attr('x2', w)\n    .attr('y1', yScale(350))\n    .attr('y2', yScale(350));\n\n  // Label 350 ppm line\n  svg.append('text')\n    .attr('class', 'line-dangerLabel')\n    .attr('x', padding + 20)\n    .attr('y', yScale(350) - 7)\n    .text('350 ppm \u201Csafe\u201D level');\n});";
    };
    return LineareachartComponent;
}());
LineareachartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-lineareachart',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css"), __webpack_require__("./src/app/demos/lineareachart/lineareachart.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], LineareachartComponent);

//# sourceMappingURL=lineareachart.component.js.map

/***/ }),

/***/ "./src/app/demos/makingbarchart/makingbarchart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakingbarchartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MakingbarchartComponent = (function () {
    function MakingbarchartComponent() {
    }
    MakingbarchartComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 100;
        var barPadding = 1;
        var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
            11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
        // Create SVG element
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', function (d, i) {
            return i * (w / dataset.length);
        })
            .attr('y', function (d) {
            return h - (d * 4);
        })
            .attr('width', w / dataset.length - barPadding)
            .attr('height', function (d) {
            return d * 4;
        })
            .attr('fill', function (d) {
            return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
        });
        svg.selectAll('text')
            .data(dataset)
            .enter()
            .append('text')
            .text(function (d) {
            return d;
        })
            .attr('text-anchor', 'middle')
            .attr('x', function (d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
        })
            .attr('y', function (d) {
            return h - (d * 4) + 14;
        })
            .attr('font-family', 'sans-serif')
            .attr('font-size', '11px')
            .attr('fill', 'white');
        this.code = "// Width and height\nconst w = 500;\nconst h = 100;\nconst barPadding = 1;\n\nconst dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,\n11, 12, 15, 20, 18, 17, 16, 18, 23, 25];\n\n// Create SVG element\nconst svg = d3.select('.result')\n.append('svg')\n.attr('width', w)\n.attr('height', h);\n\nsvg.selectAll('rect')\n.data(dataset)\n.enter()\n.append('rect')\n.attr('x', function (d, i) {\n  return i * (w / dataset.length);\n})\n.attr('y', function (d) {\n  return h - (d * 4);\n})\n.attr('width', w / dataset.length - barPadding)\n.attr('height', function (d) {\n  return d * 4;\n})\n.attr('fill', function (d) {\n  return 'rgb(0, 0, ' + Math.round(d * 10) + ')';\n});\n\nsvg.selectAll('text')\n.data(dataset)\n.enter()\n.append('text')\n.text(function (d) {\n  return d;\n})\n.attr('text-anchor', 'middle')\n.attr('x', function (d, i) {\n  return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;\n})\n.attr('y', function (d) {\n  return h - (d * 4) + 14;\n})\n.attr('font-family', 'sans-serif')\n.attr('font-size', '11px')\n.attr('fill', 'white');";
    };
    return MakingbarchartComponent;
}());
MakingbarchartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-makingbarchart',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], MakingbarchartComponent);

//# sourceMappingURL=makingbarchart.component.js.map

/***/ }),

/***/ "./src/app/demos/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pan rect,\n.zoom rect {\n  fill: black;\n  opacity: 0.2;\n}\n\n.zoom rect {\n  rx: 5;\n  /* Rounded corners */\n  ry: 5;\n}\n\n.pan text,\n.zoom text {\n  fill: black;\n  font-size: 18px;\n  text-anchor: middle;\n}\n\n.pan:hover rect,\n.pan:hover text,\n.zoom:hover rect,\n.zoom:hover text {\n  fill: blue;\n}\n\n.label {\n  font-family: Helvetica, sans-serif;\n  font-size: 11px;\n  fill: black;\n  text-anchor: middle;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/demos/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"result\"></div>\n  <div class=\"code\">\n    <app-editor [code]=\"code\"></app-editor>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/demos/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
        var w = 500;
        var h = 300;
        // Define map projection
        var projection = __WEBPACK_IMPORTED_MODULE_1_d3__["geoAlbersUsa"]()
            .translate([0, 0]);
        // Define path generator
        var path = __WEBPACK_IMPORTED_MODULE_1_d3__["geoPath"]()
            .projection(projection);
        // Define quantize scale to sort data values into buckets of color
        var color = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleQuantize"]()
            .range(['rgb(237,248,233)', 'rgb(186,228,179)', 'rgb(116,196,118)', 'rgb(49,163,84)', 'rgb(0,109,44)']);
        // Colors taken from colorbrewer.js, included in the D3 download
        // Number formatting for population values
        var formatAsThousands = __WEBPACK_IMPORTED_MODULE_1_d3__["format"](','); // e.g. converts 123456 to '123,456'
        // Number formatting for ag productivity values
        var formatDecimals = __WEBPACK_IMPORTED_MODULE_1_d3__["format"]('.3'); // e.g. converts 1.23456 to '1.23'
        // Create SVG element
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        // Define what to do when panning or zooming
        var zooming = function (d) {
            // Log out d3.event.transform, so you can see all the goodies inside
            // console.log(d3.event.transform);
            // New offset array
            var offset = [__WEBPACK_IMPORTED_MODULE_1_d3__["event"].transform.x, __WEBPACK_IMPORTED_MODULE_1_d3__["event"].transform.y];
            // Calculate new scale
            var newScale = __WEBPACK_IMPORTED_MODULE_1_d3__["event"].transform.k * 2000;
            // Update projection with new offset and scale
            projection.translate(offset)
                .scale(newScale);
            // Update all paths and circles
            svg.selectAll('path')
                .attr('d', path);
            svg.selectAll('circle')
                .attr('cx', function (dd) {
                return projection([dd.lon, dd.lat])[0];
            })
                .attr('cy', function (dd) {
                return projection([dd.lon, dd.lat])[1];
            });
            svg.selectAll('.label')
                .attr('x', function (dd) {
                return path.centroid(dd)[0];
            })
                .attr('y', function (dd) {
                return path.centroid(dd)[1];
            });
        };
        // Then define the zoom behavior
        var zoom = __WEBPACK_IMPORTED_MODULE_1_d3__["zoom"]()
            .scaleExtent([0.2, 2.0])
            .translateExtent([[-1200, -700], [1200, 700]])
            .on('zoom', zooming);
        // The center of the country, roughly
        var center = projection([-97.0, 39.0]);
        // Create a container in which all zoom-able elements will live
        var map = svg.append('g')
            .attr('id', 'map')
            .call(zoom) // Bind the zoom behavior
            .call(zoom.transform, __WEBPACK_IMPORTED_MODULE_1_d3__["zoomIdentity"] // Then apply the initial transform
            .translate(w / 2, h / 2)
            .scale(0.25)
            .translate(-center[0], -center[1]));
        // Create a new, invisible background rect to catch zoom events
        map.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', w)
            .attr('height', h)
            .attr('opacity', 0);
        // Load in agriculture data
        __WEBPACK_IMPORTED_MODULE_1_d3__["csv"]('assets/us-ag-productivity.csv', function (data) {
            // Set input domain for color scale
            color.domain([
                __WEBPACK_IMPORTED_MODULE_1_d3__["min"](data, function (d) { return d.value; }),
                __WEBPACK_IMPORTED_MODULE_1_d3__["max"](data, function (d) { return d.value; })
            ]);
            // Load in GeoJSON data
            __WEBPACK_IMPORTED_MODULE_1_d3__["json"]('assets/us-states.json', function (json) {
                // Merge the ag. data and GeoJSON
                // Loop through once for each ag. data value
                for (var i = 0; i < data.length; i++) {
                    var dataState = data[i].state; // Grab state name
                    var dataValue = parseFloat(data[i].value); // Grab data value, and convert from string to float
                    // Find the corresponding state inside the GeoJSON
                    for (var j = 0; j < json.features.length; j++) {
                        var jsonState = json.features[j].properties.name;
                        if (dataState === jsonState) {
                            // Copy the data value into the JSON
                            json.features[j].properties.value = dataValue;
                            // Stop looking through the JSON
                            break;
                        }
                    }
                }
                // Bind data and create one path per GeoJSON feature
                map.selectAll('path')
                    .data(json.features)
                    .enter()
                    .append('path')
                    .attr('d', path)
                    .style('fill', function (d) {
                    // Get data value
                    var value = d.properties.value;
                    if (value) {
                        // If value exists…
                        return color(value);
                    }
                    else {
                        // If value is undefined…
                        return '#ccc';
                    }
                });
                // Create one label per state
                map.selectAll('text')
                    .data(json.features)
                    .enter()
                    .append('text')
                    .attr('class', 'label')
                    .attr('x', function (d) {
                    return path.centroid(d)[0];
                })
                    .attr('y', function (d) {
                    return path.centroid(d)[1];
                })
                    .text(function (d) {
                    if (d.properties.value) {
                        return formatDecimals(d.properties.value);
                    }
                });
                // Load in cities data
                __WEBPACK_IMPORTED_MODULE_1_d3__["csv"]('assets/us-cities.csv', function (result) {
                    map.selectAll('circle')
                        .data(result)
                        .enter()
                        .append('circle')
                        .attr('cx', function (d) {
                        return projection([d.lon, d.lat])[0];
                    })
                        .attr('cy', function (d) {
                        return projection([d.lon, d.lat])[1];
                    })
                        .attr('r', function (d) {
                        return Math.sqrt(parseInt(d.population, 10) * 0.00004);
                    })
                        .style('fill', 'yellow')
                        .style('stroke', 'gray')
                        .style('stroke-width', 0.25)
                        .style('opacity', 0.75)
                        .append('title') // Simple tooltip
                        .text(function (d) {
                        return d.place + ': Pop. ' + formatAsThousands(d.population);
                    });
                    createPanButtons();
                    createZoomButtons();
                });
            });
        });
        // Create panning buttons
        var createPanButtons = function () {
            // Create the clickable groups
            // North
            var north = svg.append('g')
                .attr('class', 'pan') // All share the 'pan' class
                .attr('id', 'north'); // The ID will tell us which direction to head
            north.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', w)
                .attr('height', 30);
            north.append('text')
                .attr('x', w / 2)
                .attr('y', 20)
                .html('&uarr;');
            // South
            var south = svg.append('g')
                .attr('class', 'pan')
                .attr('id', 'south');
            south.append('rect')
                .attr('x', 0)
                .attr('y', h - 30)
                .attr('width', w)
                .attr('height', 30);
            south.append('text')
                .attr('x', w / 2)
                .attr('y', h - 10)
                .html('&darr;');
            // West
            var west = svg.append('g')
                .attr('class', 'pan')
                .attr('id', 'west');
            west.append('rect')
                .attr('x', 0)
                .attr('y', 30)
                .attr('width', 30)
                .attr('height', h - 60);
            west.append('text')
                .attr('x', 15)
                .attr('y', h / 2)
                .html('&larr;');
            // East
            var east = svg.append('g')
                .attr('class', 'pan')
                .attr('id', 'east');
            east.append('rect')
                .attr('x', w - 30)
                .attr('y', 30)
                .attr('width', 30)
                .attr('height', h - 60);
            east.append('text')
                .attr('x', w - 15)
                .attr('y', h / 2)
                .html('&rarr;');
            // Panning interaction
            __WEBPACK_IMPORTED_MODULE_1_d3__["selectAll"]('.pan')
                .on('click', function () {
                // Set how much to move on each click
                var moveAmount = 50;
                // Set x/y to zero for now
                var x = 0;
                var y = 0;
                // Which way are we headed?
                var direction = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('id');
                // Modify the offset, depending on the direction
                switch (direction) {
                    case 'north':
                        y += moveAmount; // Increase y offset
                        break;
                    case 'south':
                        y -= moveAmount; // Decrease y offset
                        break;
                    case 'west':
                        x += moveAmount; // Increase x offset
                        break;
                    case 'east':
                        x -= moveAmount; // Decrease x offset
                        break;
                    default:
                        break;
                }
                // This triggers a zoom event, translating by x, y
                map.transition()
                    .call(zoom.translateBy, x, y);
            });
        };
        // Create zoom buttons
        var createZoomButtons = function () {
            // Create the clickable groups
            // Zoom in button
            var zoomIn = svg.append('g')
                .attr('class', 'zoom') // All share the 'zoom' class
                .attr('id', 'in') // The ID will tell us which direction to head
                .attr('transform', 'translate(' + (w - 110) + ',' + (h - 70) + ')');
            zoomIn.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', 30)
                .attr('height', 30);
            zoomIn.append('text')
                .attr('x', 15)
                .attr('y', 20)
                .text('+');
            // Zoom out button
            var zoomOut = svg.append('g')
                .attr('class', 'zoom')
                .attr('id', 'out')
                .attr('transform', 'translate(' + (w - 70) + ',' + (h - 70) + ')');
            zoomOut.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', 30)
                .attr('height', 30);
            zoomOut.append('text')
                .attr('x', 15)
                .attr('y', 20)
                .html('&ndash;');
            // Zooming interaction
            __WEBPACK_IMPORTED_MODULE_1_d3__["selectAll"]('.zoom')
                .on('click', function () {
                // Set how much to scale on each click
                var scaleFactor;
                // Which way are we headed?
                var direction = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('id');
                // Modify the k scale value, depending on the direction
                switch (direction) {
                    case 'in':
                        scaleFactor = 1.5;
                        break;
                    case 'out':
                        scaleFactor = 0.75;
                        break;
                    default:
                        break;
                }
                // This triggers a zoom event, scaling by 'scaleFactor'
                map.transition()
                    .call(zoom.scaleBy, scaleFactor);
            });
        };
        // Bind 'Pacific Northwest' button behavior
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('#pnw')
            .on('click', function () {
            map.transition()
                .call(zoom.transform, __WEBPACK_IMPORTED_MODULE_1_d3__["zoomIdentity"]
                .translate(w / 2, h / 2)
                .scale(0.9)
                .translate(600, 300));
        });
        // Bind 'Reset' button behavior
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('#reset')
            .on('click', function () {
            map.transition()
                .call(zoom.transform, __WEBPACK_IMPORTED_MODULE_1_d3__["zoomIdentity"] // Same as the initial transform
                .translate(w / 2, h / 2)
                .scale(0.25)
                .translate(-center[0], -center[1]));
        });
        this.code = "const w = 500;\nconst h = 300;\n\n// Define map projection\nconst projection = d3.geoAlbersUsa()\n  .translate([0, 0]);\n\n// Define path generator\nconst path = d3.geoPath()\n  .projection(projection);\n\n// Define quantize scale to sort data values into buckets of color\nconst color = d3.scaleQuantize()\n  .range(['rgb(237,248,233)', 'rgb(186,228,179)', 'rgb(116,196,118)', 'rgb(49,163,84)', 'rgb(0,109,44)']);\n// Colors taken from colorbrewer.js, included in the D3 download\n\n// Number formatting for population values\nconst formatAsThousands = d3.format(',');  // e.g. converts 123456 to '123,456'\n\n// Number formatting for ag productivity values\nconst formatDecimals = d3.format('.3');  // e.g. converts 1.23456 to '1.23'\n\n// Create SVG element\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\n// Define what to do when panning or zooming\nconst zooming = function (d) {\n\n  // Log out d3.event.transform, so you can see all the goodies inside\n  // console.log(d3.event.transform);\n\n  // New offset array\n  const offset = [d3.event.transform.x, d3.event.transform.y];\n\n  // Calculate new scale\n  const newScale = d3.event.transform.k * 2000;\n\n  // Update projection with new offset and scale\n  projection.translate(offset)\n    .scale(newScale);\n\n  // Update all paths and circles\n  svg.selectAll('path')\n    .attr('d', path);\n\n  svg.selectAll('circle')\n    .attr('cx', function (dd) {\n      return projection([dd.lon, dd.lat])[0];\n    })\n    .attr('cy', function (dd) {\n      return projection([dd.lon, dd.lat])[1];\n    });\n\n  svg.selectAll('.label')\n    .attr('x', function (dd) {\n      return path.centroid(dd)[0];\n    })\n    .attr('y', function (dd) {\n      return path.centroid(dd)[1];\n    });\n};\n\n// Then define the zoom behavior\nconst zoom = d3.zoom()\n  .scaleExtent([0.2, 2.0])\n  .translateExtent([[-1200, -700], [1200, 700]])\n  .on('zoom', zooming);\n\n// The center of the country, roughly\nconst center = projection([-97.0, 39.0]);\n\n// Create a container in which all zoom-able elements will live\nconst map = svg.append('g')\n  .attr('id', 'map')\n  .call(zoom)  // Bind the zoom behavior\n  .call(zoom.transform, d3.zoomIdentity  // Then apply the initial transform\n    .translate(w / 2, h / 2)\n    .scale(0.25)\n    .translate(-center[0], -center[1]));\n\n// Create a new, invisible background rect to catch zoom events\nmap.append('rect')\n  .attr('x', 0)\n  .attr('y', 0)\n  .attr('width', w)\n  .attr('height', h)\n  .attr('opacity', 0);\n\n// Load in agriculture data\nd3.csv('assets/us-ag-productivity.csv', function (data) {\n\n  // Set input domain for color scale\n  color.domain([\n    d3.min(data, function (d) { return d.value; }),\n    d3.max(data, function (d) { return d.value; })\n  ]);\n\n  // Load in GeoJSON data\n  d3.json('assets/us-states.json', function (json) {\n\n    // Merge the ag. data and GeoJSON\n    // Loop through once for each ag. data value\n    for (let i = 0; i < data.length; i++) {\n\n      const dataState = data[i].state;\t\t\t\t// Grab state name\n      const dataValue = parseFloat(data[i].value);\t// Grab data value, and convert from string to float\n\n      // Find the corresponding state inside the GeoJSON\n      for (let j = 0; j < json.features.length; j++) {\n\n        const jsonState = json.features[j].properties.name;\n\n        if (dataState === jsonState) {\n\n          // Copy the data value into the JSON\n          json.features[j].properties.value = dataValue;\n\n          // Stop looking through the JSON\n          break;\n\n        }\n      }\n    }\n\n    // Bind data and create one path per GeoJSON feature\n    map.selectAll('path')\n      .data(json.features)\n      .enter()\n      .append('path')\n      .attr('d', path)\n      .style('fill', function (d) {\n        // Get data value\n        const value = d.properties.value;\n\n        if (value) {\n          // If value exists\u2026\n          return color(value);\n        } else {\n          // If value is undefined\u2026\n          return '#ccc';\n        }\n      });\n\n    // Create one label per state\n    map.selectAll('text')\n      .data(json.features)\n      .enter()\n      .append('text')\n      .attr('class', 'label')\n      .attr('x', function (d) {\n        return path.centroid(d)[0];\n      })\n      .attr('y', function (d) {\n        return path.centroid(d)[1];\n      })\n      .text(function (d) {\n        if (d.properties.value) {\n          return formatDecimals(d.properties.value);\n        }\n      });\n\n    // Load in cities data\n    d3.csv('assets/us-cities.csv', function (result) {\n\n      map.selectAll('circle')\n        .data(result)\n        .enter()\n        .append('circle')\n        .attr('cx', function (d) {\n          return projection([d.lon, d.lat])[0];\n        })\n        .attr('cy', function (d) {\n          return projection([d.lon, d.lat])[1];\n        })\n        .attr('r', function (d) {\n          return Math.sqrt(parseInt(d.population, 10) * 0.00004);\n        })\n        .style('fill', 'yellow')\n        .style('stroke', 'gray')\n        .style('stroke-width', 0.25)\n        .style('opacity', 0.75)\n        .append('title')\t\t\t// Simple tooltip\n        .text(function (d) {\n          return d.place + ': Pop. ' + formatAsThousands(d.population);\n        });\n\n      createPanButtons();\n      createZoomButtons();\n\n    });\n\n\n  });\n\n});\n\n// Create panning buttons\nconst createPanButtons = function () {\n\n  // Create the clickable groups\n\n  // North\n  const north = svg.append('g')\n    .attr('class', 'pan')\t// All share the 'pan' class\n    .attr('id', 'north');\t// The ID will tell us which direction to head\n\n  north.append('rect')\n    .attr('x', 0)\n    .attr('y', 0)\n    .attr('width', w)\n    .attr('height', 30);\n\n  north.append('text')\n    .attr('x', w / 2)\n    .attr('y', 20)\n    .html('&uarr;');\n\n  // South\n  const south = svg.append('g')\n    .attr('class', 'pan')\n    .attr('id', 'south');\n\n  south.append('rect')\n    .attr('x', 0)\n    .attr('y', h - 30)\n    .attr('width', w)\n    .attr('height', 30);\n\n  south.append('text')\n    .attr('x', w / 2)\n    .attr('y', h - 10)\n    .html('&darr;');\n\n  // West\n  const west = svg.append('g')\n    .attr('class', 'pan')\n    .attr('id', 'west');\n\n  west.append('rect')\n    .attr('x', 0)\n    .attr('y', 30)\n    .attr('width', 30)\n    .attr('height', h - 60);\n\n  west.append('text')\n    .attr('x', 15)\n    .attr('y', h / 2)\n    .html('&larr;');\n\n  // East\n  const east = svg.append('g')\n    .attr('class', 'pan')\n    .attr('id', 'east');\n\n  east.append('rect')\n    .attr('x', w - 30)\n    .attr('y', 30)\n    .attr('width', 30)\n    .attr('height', h - 60);\n\n  east.append('text')\n    .attr('x', w - 15)\n    .attr('y', h / 2)\n    .html('&rarr;');\n\n  // Panning interaction\n\n  d3.selectAll('.pan')\n    .on('click', function () {\n\n      // Set how much to move on each click\n      const moveAmount = 50;\n\n      // Set x/y to zero for now\n      let x = 0;\n      let y = 0;\n\n      // Which way are we headed?\n      const direction = d3.select(this).attr('id');\n\n      // Modify the offset, depending on the direction\n      switch (direction) {\n        case 'north':\n          y += moveAmount;  // Increase y offset\n          break;\n        case 'south':\n          y -= moveAmount;  // Decrease y offset\n          break;\n        case 'west':\n          x += moveAmount;  // Increase x offset\n          break;\n        case 'east':\n          x -= moveAmount;  // Decrease x offset\n          break;\n        default:\n          break;\n      }\n\n      // This triggers a zoom event, translating by x, y\n      map.transition()\n        .call(zoom.translateBy, x, y);\n\n    });\n\n};\n\n// Create zoom buttons\nconst createZoomButtons = function () {\n\n  // Create the clickable groups\n\n  // Zoom in button\n  const zoomIn = svg.append('g')\n    .attr('class', 'zoom')\t// All share the 'zoom' class\n    .attr('id', 'in')\t\t// The ID will tell us which direction to head\n    .attr('transform', 'translate(' + (w - 110) + ',' + (h - 70) + ')');\n\n  zoomIn.append('rect')\n    .attr('x', 0)\n    .attr('y', 0)\n    .attr('width', 30)\n    .attr('height', 30);\n\n  zoomIn.append('text')\n    .attr('x', 15)\n    .attr('y', 20)\n    .text('+');\n\n  // Zoom out button\n  const zoomOut = svg.append('g')\n    .attr('class', 'zoom')\n    .attr('id', 'out')\n    .attr('transform', 'translate(' + (w - 70) + ',' + (h - 70) + ')');\n\n  zoomOut.append('rect')\n    .attr('x', 0)\n    .attr('y', 0)\n    .attr('width', 30)\n    .attr('height', 30);\n\n  zoomOut.append('text')\n    .attr('x', 15)\n    .attr('y', 20)\n    .html('&ndash;');\n\n  // Zooming interaction\n\n  d3.selectAll('.zoom')\n    .on('click', function () {\n\n      // Set how much to scale on each click\n      let scaleFactor;\n\n      // Which way are we headed?\n      const direction = d3.select(this).attr('id');\n\n      // Modify the k scale value, depending on the direction\n      switch (direction) {\n        case 'in':\n          scaleFactor = 1.5;\n          break;\n        case 'out':\n          scaleFactor = 0.75;\n          break;\n        default:\n          break;\n      }\n\n      // This triggers a zoom event, scaling by 'scaleFactor'\n      map.transition()\n        .call(zoom.scaleBy, scaleFactor);\n\n    });\n\n};\n\n// Bind 'Pacific Northwest' button behavior\nd3.select('#pnw')\n  .on('click', function () {\n\n    map.transition()\n      .call(zoom.transform, d3.zoomIdentity\n        .translate(w / 2, h / 2)\n        .scale(0.9)\n        .translate(600, 300));\n\n  });\n\n// Bind 'Reset' button behavior\nd3.select('#reset')\n  .on('click', function () {\n\n    map.transition()\n      .call(zoom.transform, d3.zoomIdentity  // Same as the initial transform\n        .translate(w / 2, h / 2)\n        .scale(0.25)\n        .translate(-center[0], -center[1]));\n\n  });";
    };
    return MapComponent;
}());
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-map',
        template: __webpack_require__("./src/app/demos/map/map.component.html"),
        styles: [__webpack_require__("./src/app/common/common.css"), __webpack_require__("./src/app/demos/map/map.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewEncapsulation */].None,
    }),
    __metadata("design:paramtypes", [])
], MapComponent);

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "./src/app/demos/mapmeractor/mapmeractor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapmeractorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapmeractorComponent = (function () {
    function MapmeractorComponent() {
    }
    MapmeractorComponent.prototype.ngOnInit = function () {
        var w = 500;
        var h = 300;
        // https://devdocs.io/d3~4/d3-geo-projection#geoMercator (d3-geo)
        var projection = __WEBPACK_IMPORTED_MODULE_1_d3__["geoMercator"]()
            .translate([w / 2, h / 2])
            .scale([w * 0.16]);
        var path = __WEBPACK_IMPORTED_MODULE_1_d3__["geoPath"]()
            .projection(projection);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        __WEBPACK_IMPORTED_MODULE_1_d3__["json"]('assets/oceans.json', function (json) {
            svg.selectAll('path')
                .data(json.features)
                .enter()
                .append('path')
                .attr('d', path)
                .style('fill', 'steelblue');
        });
        this.code = "const w = 500;\nconst h = 300;\n\n// https://devdocs.io/d3~4/d3-geo-projection#geoMercator (d3-geo)\nconst projection = d3.geoMercator()\n  .translate([w / 2, h / 2])\n  .scale([w * 0.16]);\n\nconst path = d3.geoPath()\n  .projection(projection);\n\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\nd3.json('assets/oceans.json', function (json) {\n\n  svg.selectAll('path')\n    .data(json.features)\n    .enter()\n    .append('path')\n    .attr('d', path)\n    .style('fill', 'steelblue');\n});";
    };
    return MapmeractorComponent;
}());
MapmeractorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-mapmeractor',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], MapmeractorComponent);

//# sourceMappingURL=mapmeractor.component.js.map

/***/ }),

/***/ "./src/app/demos/mapoceans/mapoceans.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapoceansComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapoceansComponent = (function () {
    function MapoceansComponent() {
    }
    MapoceansComponent.prototype.ngOnInit = function () {
        var w = 500;
        var h = 300;
        var projection = __WEBPACK_IMPORTED_MODULE_1_d3__["geoAlbersUsa"]()
            .translate([w / 2, h / 2])
            .scale([w]);
        var path = __WEBPACK_IMPORTED_MODULE_1_d3__["geoPath"]()
            .projection(projection);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        __WEBPACK_IMPORTED_MODULE_1_d3__["json"]('assets/oceans.json', function (json) {
            svg.selectAll('path')
                .data(json.features)
                .enter()
                .append('path')
                .attr('d', path)
                .style('fill', 'steelblue');
        });
        this.code = "const w = 500;\nconst h = 300;\n\nconst projection = d3.geoAlbersUsa()\n  .translate([w / 2, h / 2])\n  .scale([w]);\n\nconst path = d3.geoPath()\n  .projection(projection);\n\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\nd3.json('assets/oceans.json', function (json) {\n  svg.selectAll('path')\n    .data(json.features)\n    .enter()\n    .append('path')\n    .attr('d', path)\n    .style('fill', 'steelblue');\n});";
    };
    return MapoceansComponent;
}());
MapoceansComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-mapoceans',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], MapoceansComponent);

//# sourceMappingURL=mapoceans.component.js.map

/***/ }),

/***/ "./src/app/demos/on/on.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OnComponent = (function () {
    function OnComponent() {
    }
    OnComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 300;
        var padding = 30;
        // Dynamic, random dataset
        var dataset = []; // Initialize empty array
        var numDataPoints = 50; // Number of dummy data points to create
        var maxRange = Math.random() * 1000; // Max range of new values
        for (var i = 0; i < numDataPoints; i++) {
            var newNumber1 = Math.floor(Math.random() * maxRange); // New random integer
            var newNumber2 = Math.floor(Math.random() * maxRange); // New random integer
            dataset.push([newNumber1, newNumber2]); // Add new number to array
        }
        // Create scale functions
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d[0]; })])
            .range([padding, w - padding * 2]);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d[1]; })])
            .range([h - padding, padding]);
        // Define X axis
        var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]()
            .scale(xScale)
            .ticks(5);
        // Define Y axis
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"]()
            .scale(yScale)
            .ticks(5);
        // Create SVG element
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        // Create circles
        svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('cx', function (d) {
            return xScale(d[0]);
        })
            .attr('cy', function (d) {
            return yScale(d[1]);
        })
            .attr('r', 2);
        // Create X axis
        svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + (h - padding) + ')')
            .call(xAxis);
        // Create Y axis
        svg.append('g')
            .attr('class', 'y axis')
            .attr('transform', 'translate(' + padding + ',0)')
            .call(yAxis);
        // On click, update with new data
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result').append('p').text('click me!');
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('p')
            .on('click', function () {
            // New values for dataset
            var numValues = dataset.length; // constCount original length of dataset
            var tdataset = []; // Initialize empty array
            for (var i = 0; i < numValues; i++) {
                var newNumber1 = Math.floor(Math.random() * Math.random() * 1000); // New random integer
                var newNumber2 = Math.floor(Math.random() * Math.random() * 1000); // New random integer
                tdataset.push([newNumber1, newNumber2]); // Add new number to array
            }
            // Update scale domains
            xScale.domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](tdataset, function (d) { return d[0]; })]);
            yScale.domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](tdataset, function (d) { return d[1]; })]);
            // Update all circles
            svg.selectAll('circle')
                .data(tdataset)
                .transition()
                .duration(1000)
                .on('start', function () {
                __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this)
                    .attr('fill', 'magenta')
                    .attr('r', 3);
            })
                .attr('cx', function (d) {
                return xScale(d[0]);
            })
                .attr('cy', function (d) {
                return yScale(d[1]);
            })
                .on('end', function () {
                __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this)
                    .attr('fill', 'black')
                    .attr('r', 2);
            });
            // Update X axis
            svg.select('.x.axis')
                .transition()
                .duration(1000)
                .call(xAxis);
            // Update Y axis
            svg.select('.y.axis')
                .transition()
                .duration(1000)
                .call(yAxis);
        });
        this.code = "// Width and height\nconst w = 500;\nconst h = 300;\nconst padding = 30;\n\n// Dynamic, random dataset\nconst dataset = [];\t\t\t\t\t\t\t\t\t\t\t// Initialize empty array\nconst numDataPoints = 50;\t\t\t\t\t\t\t\t\t\t// Number of dummy data points to create\nconst maxRange = Math.random() * 1000;\t\t\t\t\t\t// Max range of new values\nfor (let i = 0; i < numDataPoints; i++) {\t\t\t\t\t// Loop numDataPoints times\n  const newNumber1 = Math.floor(Math.random() * maxRange);\t// New random integer\n  const newNumber2 = Math.floor(Math.random() * maxRange);\t// New random integer\n  dataset.push([newNumber1, newNumber2]);\t\t\t\t\t// Add new number to array\n}\n\n// Create scale functions\nconst xScale = d3.scaleLinear()\n  .domain([0, d3.max(dataset, function (d) { return d[0]; })])\n  .range([padding, w - padding * 2]);\n\nconst yScale = d3.scaleLinear()\n  .domain([0, d3.max(dataset, function (d) { return d[1]; })])\n  .range([h - padding, padding]);\n\n// Define X axis\nconst xAxis = d3.axisBottom()\n  .scale(xScale)\n  .ticks(5);\n\n// Define Y axis\nconst yAxis = d3.axisLeft()\n  .scale(yScale)\n  .ticks(5);\n\n// Create SVG element\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\n// Create circles\nsvg.selectAll('circle')\n  .data(dataset)\n  .enter()\n  .append('circle')\n  .attr('cx', function (d) {\n    return xScale(d[0]);\n  })\n  .attr('cy', function (d) {\n    return yScale(d[1]);\n  })\n  .attr('r', 2);\n\n// Create X axis\nsvg.append('g')\n  .attr('class', 'x axis')\n  .attr('transform', 'translate(0,' + (h - padding) + ')')\n  .call(xAxis);\n\n// Create Y axis\nsvg.append('g')\n  .attr('class', 'y axis')\n  .attr('transform', 'translate(' + padding + ',0)')\n  .call(yAxis);\n\n// On click, update with new data\nd3.select('.result').append('p').text('click me!');\nd3.select('p')\n  .on('click', function () {\n    // New values for dataset\n    const numValues = dataset.length;\t\t\t\t\t\t \t\t// constCount original length of dataset\n    let tdataset = [];  \t\t\t\t\t\t \t\t\t\t \t\t// Initialize empty array\n    for (let i = 0; i < numValues; i++) {\t\t\t\t \t\t// Loop numValues times\n      const newNumber1 = Math.floor(Math.random() * Math.random() * 1000);\t// New random integer\n      const newNumber2 = Math.floor(Math.random() * Math.random() * 1000);\t// New random integer\n      tdataset.push([newNumber1, newNumber2]);\t\t\t\t\t// Add new number to array\n    }\n\n    // Update scale domains\n    xScale.domain([0, d3.max(tdataset, function (d) { return d[0]; })]);\n    yScale.domain([0, d3.max(tdataset, function (d) { return d[1]; })]);\n\n    // Update all circles\n    svg.selectAll('circle')\n      .data(tdataset)\n      .transition()\n      .duration(1000)\n      .on('start', function () {\n        d3.select(this)\n          .attr('fill', 'magenta')\n          .attr('r', 3);\n      })\n      .attr('cx', function (d) {\n        return xScale(d[0]);\n      })\n      .attr('cy', function (d) {\n        return yScale(d[1]);\n      })\n      .on('end', function () {\n        d3.select(this)\n          // .transition()\n          // .duration(1000)\n          .attr('fill', 'black')\n          .attr('r', 2);\n      });\n\n    // Update X axis\n    svg.select('.x.axis')\n      .transition()\n      .duration(1000)\n      .call(xAxis);\n\n    // Update Y axis\n    svg.select('.y.axis')\n      .transition()\n      .duration(1000)\n      .call(yAxis);\n\n  });";
    };
    return OnComponent;
}());
OnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-on',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], OnComponent);

//# sourceMappingURL=on.component.js.map

/***/ }),

/***/ "./src/app/demos/path/path.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PathComponent = (function () {
    function PathComponent() {
    }
    PathComponent.prototype.ngOnInit = function () {
        var w = 500;
        var h = 300;
        var path = __WEBPACK_IMPORTED_MODULE_1_d3__["geoPath"]()
            .projection(__WEBPACK_IMPORTED_MODULE_1_d3__["geoAlbersUsa"]());
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        __WEBPACK_IMPORTED_MODULE_1_d3__["json"]('assets/us-states.json', function (json) {
            svg.selectAll('path')
                .data(json.features)
                .enter()
                .append('path')
                .attr('d', path);
        });
        this.code = "const w = 500;\nconst h = 300;\nconst path = d3.geoPath()\n  .projection(d3.geoAlbersUsa());\n\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\nd3.json('assets/us-states.json', function (json) {\n  svg.selectAll('path')\n    .data(json.features)\n    .enter()\n    .append('path')\n    .attr('d', path);\n});";
    };
    return PathComponent;
}());
PathComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-path',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], PathComponent);

//# sourceMappingURL=path.component.js.map

/***/ }),

/***/ "./src/app/demos/pathprojection/pathprojection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathprojectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PathprojectionComponent = (function () {
    function PathprojectionComponent() {
    }
    PathprojectionComponent.prototype.ngOnInit = function () {
        var w = 500;
        var h = 300;
        var projection = __WEBPACK_IMPORTED_MODULE_1_d3__["geoAlbersUsa"]()
            .translate([w / 2, h / 2]);
        var path = __WEBPACK_IMPORTED_MODULE_1_d3__["geoPath"]()
            .projection(projection);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        __WEBPACK_IMPORTED_MODULE_1_d3__["json"]('assets/us-states.json', function (json) {
            svg.selectAll('path')
                .data(json.features)
                .enter()
                .append('path')
                .attr('d', path);
        });
        this.code = "const w = 500;\nconst h = 300;\nconst projection = d3.geoAlbersUsa()\n  .translate([w / 2, h / 2]);\n\nconst path = d3.geoPath()\n  .projection(projection);\n\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\nd3.json('assets/us-states.json', function (json) {\n  svg.selectAll('path')\n    .data(json.features)\n    .enter()\n    .append('path')\n    .attr('d', path);\n});";
    };
    return PathprojectionComponent;
}());
PathprojectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-pathprojection',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], PathprojectionComponent);

//# sourceMappingURL=pathprojection.component.js.map

/***/ }),

/***/ "./src/app/demos/pathscaled/pathscaled.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathscaledComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PathscaledComponent = (function () {
    function PathscaledComponent() {
    }
    PathscaledComponent.prototype.ngOnInit = function () {
        var w = 500;
        var h = 300;
        var projection = __WEBPACK_IMPORTED_MODULE_1_d3__["geoAlbersUsa"]()
            .translate([w / 2, h / 2])
            .scale([w]);
        var path = __WEBPACK_IMPORTED_MODULE_1_d3__["geoPath"]()
            .projection(projection);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        __WEBPACK_IMPORTED_MODULE_1_d3__["json"]('assets/us-states.json', function (json) {
            svg.selectAll('path')
                .data(json.features)
                .enter()
                .append('path')
                .attr('d', path);
        });
        this.code = "const w = 500;\nconst h = 300;\n\nconst projection = d3.geoAlbersUsa()\n  .translate([w / 2, h / 2])\n  .scale([w]);\n\nconst path = d3.geoPath()\n  .projection(projection);\n\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\nd3.json('assets/us-states.json', function (json) {\n  svg.selectAll('path')\n    .data(json.features)\n    .enter()\n    .append('path')\n    .attr('d', path);\n});";
    };
    return PathscaledComponent;
}());
PathscaledComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-pathscaled',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], PathscaledComponent);

//# sourceMappingURL=pathscaled.component.js.map

/***/ }),

/***/ "./src/app/demos/pie/pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PieComponent = (function () {
    function PieComponent() {
    }
    PieComponent.prototype.ngOnInit = function () {
        var w = 300;
        var h = 300;
        var dataset = [5, 10, 20, 45, 6, 25];
        var outerRadius = w / 2;
        var innerRadius = 0;
        var arc = __WEBPACK_IMPORTED_MODULE_1_d3__["arc"]()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);
        var pie = __WEBPACK_IMPORTED_MODULE_1_d3__["pie"]();
        var color = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleOrdinal"](__WEBPACK_IMPORTED_MODULE_1_d3__["schemeCategory10"]);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        var arcs = svg.selectAll('g.arc')
            .data(pie(dataset))
            .enter()
            .append('g')
            .attr('class', 'arc')
            .attr('transform', 'translate(' + outerRadius + ',' + outerRadius + ')');
        arcs.append('path')
            .attr('fill', function (d, i) {
            return color(i);
        })
            .attr('d', arc);
        arcs.append('text')
            .attr('transform', function (d) {
            return 'translate(' + arc.centroid(d) + ')';
        })
            .attr('text-anchor', 'middle')
            .text(function (d) {
            return d.value;
        });
        this.code = "const w = 300;\nconst h = 300;\nconst dataset = [5, 10, 20, 45, 6, 25];\nconst outerRadius = w / 2;\nconst innerRadius = 0;\nconst arc = d3.arc()\n  .innerRadius(innerRadius)\n  .outerRadius(outerRadius);\nconst pie = d3.pie();\nconst color = d3.scaleOrdinal(d3.schemeCategory10);\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\nconst arcs = svg.selectAll('g.arc')\n  .data(pie(dataset))\n  .enter()\n  .append('g')\n  .attr('class', 'arc')\n  .attr('transform', 'translate(' + outerRadius + ',' + outerRadius + ')');\n\narcs.append('path')\n  .attr('fill', function (d, i) {\n    return color(i);\n  })\n  .attr('d', arc);\n\narcs.append('text')\n  .attr('transform', function (d) {\n    return 'translate(' + arc.centroid(d) + ')';\n  })\n  .attr('text-anchor', 'middle')\n  .text(function (d) {\n    return d.value;\n  });";
    };
    return PieComponent;
}());
PieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-pie',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], PieComponent);

//# sourceMappingURL=pie.component.js.map

/***/ }),

/***/ "./src/app/demos/powerofdatarounded/powerofdatarounded.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PowerofdataroundedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PowerofdataroundedComponent = (function () {
    function PowerofdataroundedComponent() {
    }
    PowerofdataroundedComponent.prototype.ngOnInit = function () {
        var dataset = []; // Initialize empty array
        for (var i = 0; i < 25; i++) {
            var newNumber = Math.floor(Math.random() * 30); // New random integer (0-29)
            dataset.push(newNumber); // Add new number to array
        }
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result').append('div').attr('class', 'tmp');
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.tmp').selectAll('div')
            .data(dataset)
            .enter()
            .append('div')
            .attr('class', 'bar')
            .style('height', function (d) {
            var barHeight = d * 5;
            return barHeight + 'px';
        });
        this.code = "\nconst dataset = [];  \t\t\t\t\t\t // Initialize empty array\nfor (let i = 0; i < 25; i++) {\t\t\t // Loop 25 times\n  const newNumber = Math.floor(Math.random() * 30);  // New random integer (0-29)\n  dataset.push(newNumber);\t\t\t // Add new number to array\n}\n\nd3.select('.result').selectAll('div')\n  .data(dataset)\n  .enter()\n  .append('div')\n  .attr('class', 'bar')\n  .style('height', function (d) {\n    const barHeight = d * 5;\n    return barHeight + 'px';\n  });";
    };
    return PowerofdataroundedComponent;
}());
PowerofdataroundedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-powerofdatarounded',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewEncapsulation */].None,
    }),
    __metadata("design:paramtypes", [])
], PowerofdataroundedComponent);

//# sourceMappingURL=powerofdatarounded.component.js.map

/***/ }),

/***/ "./src/app/demos/radios/radios.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  font-family: Helvetica, sans-serif;\n  font-size: 12px;\n}\n\ninput[type=radio] {\n  margin-left: 40px;\n}\n\n.result {\n  margin-right: 10px;\n  margin-bottom: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/demos/radios/radios.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"result\">\n    <p>\n      <input type=\"radio\" name=\"filterPreset\" value=\"0\" checked=\"true\"> 0\n      <input type=\"radio\" name=\"filterPreset\" value=\"200\"> 200\n      <input type=\"radio\" name=\"filterPreset\" value=\"500\"> 500\n      <input type=\"radio\" name=\"filterPreset\" value=\"800\"> 800\n    </p>\n  </div>\n  <div class=\"code\">\n    <app-editor [code]=\"code\"></app-editor>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/demos/radios/radios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadiosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RadiosComponent = (function () {
    function RadiosComponent() {
    }
    RadiosComponent.prototype.ngOnInit = function () {
        var w = 500;
        var h = 300;
        var padding = 40;
        var dataset = [];
        var numDataPoints = 200;
        var xRange = 1000;
        var yRange = 1000;
        for (var i = 0; i < numDataPoints; i++) {
            var newNumber1 = Math.floor(Math.random() * xRange);
            var newNumber2 = Math.floor(Math.random() * yRange);
            dataset.push([newNumber1, newNumber2]);
        }
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, xRange])
            .range([padding, w - padding / 2]);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, yRange])
            .range([h - padding, padding / 2]);
        var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]()
            .scale(xScale)
            .ticks(5);
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"]()
            .scale(yScale)
            .ticks(5);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        var allCircles = svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('cx', function (d) {
            return xScale(d[0]);
        })
            .attr('cy', function (d) {
            return yScale(d[1]);
        })
            .attr('r', 2.5);
        svg.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(0,' + (h - padding) + ')')
            .call(xAxis);
        svg.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(' + padding + ',0)')
            .call(yAxis);
        __WEBPACK_IMPORTED_MODULE_1_d3__["selectAll"]('input')
            .on('click', function () {
            var threshold = +__WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).node().value;
            allCircles.attr('fill', 'black')
                .filter(function (d) {
                return d[0] <= threshold;
            })
                .attr('fill', 'red');
        });
        this.code = "const w = 500;\nconst h = 300;\nconst padding = 40;\nconst dataset = [];\nconst numDataPoints = 200;\nconst xRange = 1000;\nconst yRange = 1000;\nfor (let i = 0; i < numDataPoints; i++) {\n  const newNumber1 = Math.floor(Math.random() * xRange);\n  const newNumber2 = Math.floor(Math.random() * yRange);\n  dataset.push([newNumber1, newNumber2]);\n}\n\nconst xScale = d3.scaleLinear()\n  .domain([0, xRange])\n  .range([padding, w - padding / 2]);\n\nconst yScale = d3.scaleLinear()\n  .domain([0, yRange])\n  .range([h - padding, padding / 2]);\n\nconst xAxis = d3.axisBottom()\n  .scale(xScale)\n  .ticks(5);\nconst yAxis = d3.axisLeft()\n  .scale(yScale)\n  .ticks(5);\n\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\nconst allCircles = svg.selectAll('circle')\n  .data(dataset)\n  .enter()\n  .append('circle')\n  .attr('cx', function (d) {\n    return xScale(d[0]);\n  })\n  .attr('cy', function (d) {\n    return yScale(d[1]);\n  })\n  .attr('r', 2.5);\nsvg.append('g')\n  .attr('class', 'axis')\n  .attr('transform', 'translate(0,' + (h - padding) + ')')\n  .call(xAxis);\nsvg.append('g')\n  .attr('class', 'axis')\n  .attr('transform', 'translate(' + padding + ',0)')\n  .call(yAxis);\nd3.selectAll('input')\n  .on('click', function () {\n    const threshold = +d3.select(this).node().value;\n    allCircles.attr('fill', 'black')\n      .filter(function (d) {\n        return d[0] <= threshold;\n      })\n      .attr('fill', 'red');\n  });";
    };
    return RadiosComponent;
}());
RadiosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-radios',
        template: __webpack_require__("./src/app/demos/radios/radios.component.html"),
        styles: [__webpack_require__("./src/app/common/common.css"), __webpack_require__("./src/app/demos/radios/radios.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RadiosComponent);

//# sourceMappingURL=radios.component.js.map

/***/ }),

/***/ "./src/app/demos/scale/scale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScaleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScaleComponent = (function () {
    function ScaleComponent() {
    }
    ScaleComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 300;
        var padding = 40;
        var dataset, xScale, yScale; // Empty, for now
        // For converting strings to Dates
        var parseTime = __WEBPACK_IMPORTED_MODULE_1_d3__["timeParse"]('%m/%d/%y');
        // For converting Dates to strings
        var formatTime = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%b %e');
        // Function for converting CSV values from strings to Dates and numbers
        var rowConverter = function (d) {
            return {
                Date: parseTime(d.Date),
                Amount: parseInt(d.Amount, 10)
            };
        };
        // Load in the data
        __WEBPACK_IMPORTED_MODULE_1_d3__["csv"]('assets/time_scale_data.csv', rowConverter, function (data) {
            // Copy data into global dataset
            dataset = data;
            // Create scale functions
            xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleTime"]()
                .domain([
                __WEBPACK_IMPORTED_MODULE_1_d3__["min"](dataset, function (d) { return d.Date; }),
                __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d.Date; })
            ])
                .range([padding, w - padding]);
            yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
                .domain([
                __WEBPACK_IMPORTED_MODULE_1_d3__["min"](dataset, function (d) { return d.Amount; }),
                __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d.Amount; })
            ])
                .range([h - padding, padding]);
            // Create SVG element
            var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
                .append('svg')
                .attr('width', w)
                .attr('height', h);
            // Generate date labels first, so they are in back
            svg.selectAll('text')
                .data(dataset)
                .enter()
                .append('text')
                .text(function (d) {
                return formatTime(d.Date);
            })
                .attr('x', function (d) {
                return xScale(d.Date) + 4;
            })
                .attr('y', function (d) {
                return yScale(d.Amount) + 4;
            })
                .attr('font-family', 'sans-serif')
                .attr('font-size', '11px')
                .attr('fill', '#bbb');
            // Generate circles last, so they appear in front
            svg.selectAll('circle')
                .data(dataset)
                .enter()
                .append('circle')
                .attr('cx', function (d) {
                return xScale(d.Date);
            })
                .attr('cy', function (d) {
                return yScale(d.Amount);
            })
                .attr('r', 2);
        });
        this.code = "// Width and height\nconst w = 500;\nconst h = 300;\nconst padding = 40;\n\nlet dataset, xScale, yScale;  // Empty, for now\n\n// For converting strings to Dates\nconst parseTime = d3.timeParse('%m/%d/%y');\n\n// For converting Dates to strings\nconst formatTime = d3.timeFormat('%b %e');\n\n// Function for converting CSV values from strings to Dates and numbers\nconst rowConverter = function (d) {\n  return {\n    Date: parseTime(d.Date),\n    Amount: parseInt(d.Amount, 10)\n  };\n};\n\n// Load in the data\nd3.csv('assets/time_scale_data.csv', rowConverter, function (data) {\n\n  // Copy data into global dataset\n  dataset = data;\n\n  // Create scale functions\n  xScale = d3.scaleTime()\n    .domain([\n      d3.min(dataset, function (d) { return d.Date; }),\n      d3.max(dataset, function (d) { return d.Date; })\n    ])\n    .range([padding, w - padding]);\n\n  yScale = d3.scaleLinear()\n    .domain([\n      d3.min(dataset, function (d) { return d.Amount; }),\n      d3.max(dataset, function (d) { return d.Amount; })\n    ])\n    .range([h - padding, padding]);\n\n  // Create SVG element\n  const svg = d3.select('.result')\n    .append('svg')\n    .attr('width', w)\n    .attr('height', h);\n\n  // Generate date labels first, so they are in back\n  svg.selectAll('text')\n    .data(dataset)\n    .enter()\n    .append('text')\n    .text(function (d) {\n      return formatTime(d.Date);\n    })\n    .attr('x', function (d) {\n      return xScale(d.Date) + 4;\n    })\n    .attr('y', function (d) {\n      return yScale(d.Amount) + 4;\n    })\n    .attr('font-family', 'sans-serif')\n    .attr('font-size', '11px')\n    .attr('fill', '#bbb');\n\n  // Generate circles last, so they appear in front\n  svg.selectAll('circle')\n    .data(dataset)\n    .enter()\n    .append('circle')\n    .attr('cx', function (d) {\n      return xScale(d.Date);\n    })\n    .attr('cy', function (d) {\n      return yScale(d.Amount);\n    })\n    .attr('r', 2);\n});";
    };
    return ScaleComponent;
}());
ScaleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-scale',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], ScaleComponent);

//# sourceMappingURL=scale.component.js.map

/***/ }),

/***/ "./src/app/demos/scatterplot/scatterplot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScatterplotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScatterplotComponent = (function () {
    function ScatterplotComponent() {
    }
    ScatterplotComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 100;
        var dataset = [
            [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
            [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
        ];
        // Create SVG element
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('cx', function (d) {
            return d[0];
        })
            .attr('cy', function (d) {
            return d[1];
        })
            .attr('r', function (d) {
            return Math.sqrt(h - d[1]);
        });
        svg.selectAll('text')
            .data(dataset)
            .enter()
            .append('text')
            .text(function (d) {
            return d[0] + ',' + d[1];
        })
            .attr('x', function (d) {
            return d[0];
        })
            .attr('y', function (d) {
            return d[1];
        })
            .attr('font-family', 'sans-serif')
            .attr('font-size', '11px')
            .attr('fill', 'rgba(122, 122, 122, .8)');
        this.code = "// Width and height\nconst w = 500;\nconst h = 100;\n\nconst dataset = [\n  [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],\n  [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]\n];\n\n// Create SVG element\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\nsvg.selectAll('circle')\n  .data(dataset)\n  .enter()\n  .append('circle')\n  .attr('cx', function (d) {\n    return d[0];\n  })\n  .attr('cy', function (d) {\n    return d[1];\n  })\n  .attr('r', function (d) {\n    return Math.sqrt(h - d[1]);\n  });\n\nsvg.selectAll('text')\n  .data(dataset)\n  .enter()\n  .append('text')\n  .text(function (d) {\n    return d[0] + ',' + d[1];\n  })\n  .attr('x', function (d) {\n    return d[0];\n  })\n  .attr('y', function (d) {\n    return d[1];\n  })\n  .attr('font-family', 'sans-serif')\n  .attr('font-size', '11px')\n  .attr('fill', 'rgba(122, 122, 122, .8)');";
    };
    return ScatterplotComponent;
}());
ScatterplotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-scatterplot',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")],
    }),
    __metadata("design:paramtypes", [])
], ScatterplotComponent);

//# sourceMappingURL=scatterplot.component.js.map

/***/ }),

/***/ "./src/app/demos/slider/slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  display: inline-block;\n}\n\ninput {\n  height: 250px;\n  width: 30px;\n  /* Orient vertically */\n  -webkit-appearance: slider-vertical;\n  -webkit-writing-mode: bt-lr;\n      -ms-writing-mode: bt-lr;\n          writing-mode: bt-lr;\n}\n\n.result {\n  margin-right: 10px;\n  margin-bottom: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/demos/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"result\">\n    <p>\n      <input id=\"slider\" type=\"range\" min=\"0\" max=\"25\" step=\"1\" value=\"0\" orient=\"vertical\">\n    </p>\n  </div>\n  <div class=\"code\">\n    <app-editor [code]=\"code\"></app-editor>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/demos/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
        var w = 400;
        var h = 250;
        var dataset = [
            { key: 0, value: 5 },
            { key: 1, value: 10 },
            { key: 2, value: 13 },
            { key: 3, value: 19 },
            { key: 4, value: 21 },
            { key: 5, value: 25 },
            { key: 6, value: 22 },
            { key: 7, value: 18 },
            { key: 8, value: 15 },
            { key: 9, value: 13 },
            { key: 10, value: 11 },
            { key: 11, value: 12 },
            { key: 12, value: 15 },
            { key: 13, value: 20 },
            { key: 14, value: 18 },
            { key: 15, value: 17 },
            { key: 16, value: 16 },
            { key: 17, value: 18 },
            { key: 18, value: 23 },
            { key: 19, value: 25 }
        ];
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleBand"]()
            .domain(__WEBPACK_IMPORTED_MODULE_1_d3__["range"](dataset.length))
            .rangeRound([0, w])
            .paddingInner(0.05);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d.value; })])
            .range([0, h]);
        var key = function (d) {
            return d.key;
        };
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        svg.selectAll('rect')
            .data(dataset, key)
            .enter()
            .append('rect')
            .attr('x', function (d, i) {
            return xScale(i);
        })
            .attr('y', function (d) {
            return h - yScale(d.value);
        })
            .attr('width', xScale.bandwidth())
            .attr('height', function (d) {
            return yScale(d.value);
        })
            .attr('fill', function (d) {
            return 'rgb(0, 0, ' + (d.value * 10) + ')';
        });
        svg.selectAll('text')
            .data(dataset, key)
            .enter()
            .append('text')
            .text(function (d) {
            return d.value;
        })
            .attr('text-anchor', 'middle')
            .attr('x', function (d, i) {
            return xScale(i) + xScale.bandwidth() / 2;
        })
            .attr('y', function (d) {
            return h - yScale(d.value) + 14;
        })
            .attr('font-family', 'sans-serif')
            .attr('font-size', '11px')
            .attr('fill', 'white');
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('input')
            .on('change', function () {
            var threshold = +__WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).node().value;
            svg.selectAll('rect')
                .attr('fill', function (d) {
                return 'rgb(0, 0, ' + (d.value * 10) + ')';
            })
                .filter(function (d) {
                return d.value <= threshold;
            })
                .attr('fill', 'red');
        });
        this.code = "const w = 400;\nconst h = 250;\n\nconst dataset = [\n  { key: 0, value: 5 },\n  { key: 1, value: 10 },\n  { key: 2, value: 13 },\n  { key: 3, value: 19 },\n  { key: 4, value: 21 },\n  { key: 5, value: 25 },\n  { key: 6, value: 22 },\n  { key: 7, value: 18 },\n  { key: 8, value: 15 },\n  { key: 9, value: 13 },\n  { key: 10, value: 11 },\n  { key: 11, value: 12 },\n  { key: 12, value: 15 },\n  { key: 13, value: 20 },\n  { key: 14, value: 18 },\n  { key: 15, value: 17 },\n  { key: 16, value: 16 },\n  { key: 17, value: 18 },\n  { key: 18, value: 23 },\n  { key: 19, value: 25 }];\nconst xScale = d3.scaleBand()\n  .domain(d3.range(dataset.length))\n  .rangeRound([0, w])\n  .paddingInner(0.05);\nconst yScale = d3.scaleLinear()\n  .domain([0, d3.max(dataset, function (d) { return d.value; })])\n  .range([0, h]);\nconst key = function (d) {\n  return d.key;\n};\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\nsvg.selectAll('rect')\n  .data(dataset, key)\n  .enter()\n  .append('rect')\n  .attr('x', function (d, i) {\n    return xScale(i);\n  })\n  .attr('y', function (d) {\n    return h - yScale(d.value);\n  })\n  .attr('width', xScale.bandwidth())\n  .attr('height', function (d) {\n    return yScale(d.value);\n  })\n  .attr('fill', function (d) {\n    return 'rgb(0, 0, ' + (d.value * 10) + ')';\n  });\nsvg.selectAll('text')\n  .data(dataset, key)\n  .enter()\n  .append('text')\n  .text(function (d) {\n    return d.value;\n  })\n  .attr('text-anchor', 'middle')\n  .attr('x', function (d, i) {\n    return xScale(i) + xScale.bandwidth() / 2;\n  })\n  .attr('y', function (d) {\n    return h - yScale(d.value) + 14;\n  })\n  .attr('font-family', 'sans-serif')\n  .attr('font-size', '11px')\n  .attr('fill', 'white');\nd3.select('input')\n  .on('change', function () {\n    const threshold = +d3.select(this).node().value;\n    svg.selectAll('rect')\n      .attr('fill', function (d) {\n        return 'rgb(0, 0, ' + (d.value * 10) + ')';\n      })\n      .filter(function (d) {\n        return d.value <= threshold;\n      })\n      .attr('fill', 'red');\n  });";
    };
    return SliderComponent;
}());
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-slider',
        template: __webpack_require__("./src/app/demos/slider/slider.component.html"),
        styles: [__webpack_require__("./src/app/common/common.css"), __webpack_require__("./src/app/demos/slider/slider.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);

//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ "./src/app/demos/sort/sort.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortComponent = (function () {
    function SortComponent() {
    }
    SortComponent.prototype.ngOnInit = function () {
        var w = 500;
        var h = 250;
        var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
            11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleBand"]()
            .domain(__WEBPACK_IMPORTED_MODULE_1_d3__["range"](dataset.length))
            .rangeRound([0, w])
            .paddingInner(0.05);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset)])
            .range([0, h]);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', function (d, i) {
            return xScale(i);
        })
            .attr('y', function (d) {
            return h - yScale(d);
        })
            .attr('width', xScale.bandwidth())
            .attr('height', function (d) {
            return yScale(d);
        })
            .attr('fill', function (d) {
            return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
        })
            .on('mouseover', function (d) {
            var xPosition = parseFloat(__WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('x')) + xScale.bandwidth() / 2;
            var yPosition = parseFloat(__WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('y')) + 14;
            svg.append('text')
                .attr('id', 'tooltip')
                .attr('x', xPosition)
                .attr('y', yPosition)
                .attr('text-anchor', 'middle')
                .attr('font-family', 'sans-serif')
                .attr('font-size', '11px')
                .attr('font-weight', 'bold')
                .attr('fill', 'white')
                .text(d);
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this)
                .attr('fill', 'orange');
        })
            .on('mouseout', function (d) {
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this)
                .attr('fill', 'rgb(0, 0, ' + (d * 10) + ')');
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('#tooltip').remove();
        })
            .on('click', function (d) {
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this)
                .attr('fill', 'rgb(0, 0, ' + (d * 10) + ')');
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('#tooltip').remove();
            sortBars();
        });
        var sortOrder = false;
        function sortBars() {
            sortOrder = !sortOrder;
            svg.selectAll('rect')
                .sort(function (a, b) {
                if (sortOrder) {
                    return __WEBPACK_IMPORTED_MODULE_1_d3__["ascending"](a, b);
                }
                else {
                    return __WEBPACK_IMPORTED_MODULE_1_d3__["descending"](a, b);
                }
            })
                .transition()
                .delay(function (d, i) {
                return i * 50;
            })
                .duration(1000)
                .attr('x', function (d, i) {
                return xScale(i);
            });
        }
        this.code = "const w = 500;\nconst h = 250;\n\nconst dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,\n  11, 12, 15, 20, 18, 17, 16, 18, 23, 25];\n\nconst xScale = d3.scaleBand()\n  .domain(d3.range(dataset.length))\n  .rangeRound([0, w])\n  .paddingInner(0.05);\n\nconst yScale = d3.scaleLinear()\n  .domain([0, d3.max(dataset)])\n  .range([0, h]);\n\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\nsvg.selectAll('rect')\n  .data(dataset)\n  .enter()\n  .append('rect')\n  .attr('x', function (d, i) {\n    return xScale(i);\n  })\n  .attr('y', function (d) {\n    return h - yScale(d);\n  })\n  .attr('width', xScale.bandwidth())\n  .attr('height', function (d) {\n    return yScale(d);\n  })\n  .attr('fill', function (d) {\n    return 'rgb(0, 0, ' + Math.round(d * 10) + ')';\n  })\n  .on('mouseover', function (d) {\n    const xPosition = parseFloat(d3.select(this).attr('x')) + xScale.bandwidth() / 2;\n    const yPosition = parseFloat(d3.select(this).attr('y')) + 14;\n\n    svg.append('text')\n      .attr('id', 'tooltip')\n      .attr('x', xPosition)\n      .attr('y', yPosition)\n      .attr('text-anchor', 'middle')\n      .attr('font-family', 'sans-serif')\n      .attr('font-size', '11px')\n      .attr('font-weight', 'bold')\n      .attr('fill', 'white')\n      .text(d);\n    d3.select(this)\n      .attr('fill', 'orange');\n  })\n  .on('mouseout', function (d) {\n    d3.select(this)\n      .attr('fill', 'rgb(0, 0, ' + (d * 10) + ')');\n    d3.select('#tooltip').remove();\n  })\n  .on('click', function (d) {\n    d3.select(this)\n      .attr('fill', 'rgb(0, 0, ' + (d * 10) + ')');\n    d3.select('#tooltip').remove();\n    sortBars();\n  });\nlet sortOrder = false;\nfunction sortBars() {\n  sortOrder = !sortOrder;\n  svg.selectAll('rect')\n    .sort(function (a, b) {\n      if (sortOrder) {\n        return d3.ascending(a, b);\n      } else {\n        return d3.descending(a, b);\n      }\n    })\n    .transition()\n    .delay(function (d, i) {\n      return i * 50;\n    })\n    .duration(1000)\n    .attr('x', function (d, i) {\n      return xScale(i);\n    });\n}";
    };
    return SortComponent;
}());
SortComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-sort',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")],
    }),
    __metadata("design:paramtypes", [])
], SortComponent);

//# sourceMappingURL=sort.component.js.map

/***/ }),

/***/ "./src/app/demos/stackedarea/stackedarea.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".area {\n  stroke: none;\n}\n\n.area:hover {\n  fill: yellow;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/demos/stackedarea/stackedarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackedareaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StackedareaComponent = (function () {
    function StackedareaComponent() {
    }
    StackedareaComponent.prototype.ngOnInit = function () {
        var w = 500;
        var h = 400;
        var padding = 20;
        var xScale, yScale, xAxis, yAxis, area;
        var parseTime = __WEBPACK_IMPORTED_MODULE_1_d3__["timeParse"]('%Y-%m');
        var formatTime = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%b %Y');
        var rowConverter = function (d, i, cols) {
            var row = {
                date: parseTime(d.Date),
            };
            for (var j = 1; j < cols.length; j++) {
                var col = cols[j];
                if (d[cols[j]]) {
                    row[cols[j]] = +d[cols[j]];
                }
                else {
                    row[cols[j]] = 0;
                }
            }
            return row;
        };
        var stack = __WEBPACK_IMPORTED_MODULE_1_d3__["stack"]()
            .order(__WEBPACK_IMPORTED_MODULE_1_d3__["stackOrderDescending"]);
        __WEBPACK_IMPORTED_MODULE_1_d3__["csv"]('assets/ev_sales_data.csv', rowConverter, function (data) {
            var dataset = data;
            var keys = dataset.columns;
            keys.shift();
            stack.keys(keys);
            var series = stack(dataset);
            xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleTime"]()
                .domain([
                __WEBPACK_IMPORTED_MODULE_1_d3__["min"](dataset, function (d) { return d.date; }),
                __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) { return d.date; })
            ])
                .range([padding, w - padding * 2]);
            yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
                .domain([
                0,
                __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) {
                    var sum = 0;
                    for (var i = 0; i < keys.length; i++) {
                        sum += d[keys[i]];
                    }
                    return sum;
                })
            ])
                .range([h - padding, padding / 2])
                .nice();
            xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]()
                .scale(xScale)
                .ticks(10)
                .tickFormat(formatTime);
            yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisRight"]()
                .scale(yScale)
                .ticks(5);
            area = __WEBPACK_IMPORTED_MODULE_1_d3__["area"]()
                .x(function (d) { return xScale(d.data.date); })
                .y0(function (d) { return yScale(d[0]); })
                .y1(function (d) { return yScale(d[1]); });
            var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
                .append('svg')
                .attr('width', w)
                .attr('height', h);
            svg.selectAll('path')
                .data(series)
                .enter()
                .append('path')
                .attr('class', 'area')
                .attr('d', area)
                .attr('fill', function (d, i) {
                return __WEBPACK_IMPORTED_MODULE_1_d3__["schemeCategory20"][i];
            })
                .append('title')
                .text(function (d) {
                return d.key;
            });
            svg.append('g')
                .attr('class', 'axis')
                .attr('transform', 'translate(0,' + (h - padding) + ')')
                .call(xAxis);
            svg.append('g')
                .attr('class', 'axis')
                .attr('transform', 'translate(' + (w - padding * 2) + ',0)')
                .call(yAxis);
        });
        this.code = "const w = 500;\nconst h = 400;\nconst padding = 20;\nlet xScale, yScale, xAxis, yAxis, area;\nconst parseTime = d3.timeParse('%Y-%m');\nconst formatTime = d3.timeFormat('%b %Y');\nconst rowConverter = function (d, i, cols) {\n  const row = {\n    date: parseTime(d.Date),\n  };\n  for (let j = 1; j < cols.length; j++) {\n    const col = cols[j];\n    if (d[cols[j]]) {\n      row[cols[j]] = +d[cols[j]];\n    } else {\n      row[cols[j]] = 0;\n    }\n  }\n  return row;\n};\n\nconst stack = d3.stack()\n  .order(d3.stackOrderDescending);\n\nd3.csv('assets/ev_sales_data.csv', rowConverter, function (data) {\n  const dataset = data;\n  const keys = dataset.columns;\n  keys.shift();\n  stack.keys(keys);\n  const series = stack(dataset);\n  xScale = d3.scaleTime()\n    .domain([\n      d3.min(dataset, function (d) { return d.date; }),\n      d3.max(dataset, function (d) { return d.date; })\n    ])\n    .range([padding, w - padding * 2]);\n\n  yScale = d3.scaleLinear()\n    .domain([\n      0,\n      d3.max(dataset, function (d) {\n        let sum = 0;\n        for (let i = 0; i < keys.length; i++) {\n          sum += d[keys[i]];\n        }\n        return sum;\n      })\n    ])\n    .range([h - padding, padding / 2])\n    .nice();\n\n  xAxis = d3.axisBottom()\n    .scale(xScale)\n    .ticks(10)\n    .tickFormat(formatTime);\n\n  yAxis = d3.axisRight()\n    .scale(yScale)\n    .ticks(5);\n\n  area = d3.area()\n    .x(function (d) { return xScale(d.data.date); })\n    .y0(function (d) { return yScale(d[0]); })\n    .y1(function (d) { return yScale(d[1]); });\n\n  const svg = d3.select('.result')\n    .append('svg')\n    .attr('width', w)\n    .attr('height', h);\n\n  svg.selectAll('path')\n    .data(series)\n    .enter()\n    .append('path')\n    .attr('class', 'area')\n    .attr('d', area)\n    .attr('fill', function (d, i) {\n      return d3.schemeCategory20[i];\n    })\n    .append('title')\n    .text(function (d) {\n      return d.key;\n    });\n\n  svg.append('g')\n    .attr('class', 'axis')\n    .attr('transform', 'translate(0,' + (h - padding) + ')')\n    .call(xAxis);\n\n  svg.append('g')\n    .attr('class', 'axis')\n    .attr('transform', 'translate(' + (w - padding * 2) + ',0)')\n    .call(yAxis);\n});";
    };
    return StackedareaComponent;
}());
StackedareaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-stackedarea',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css"), __webpack_require__("./src/app/demos/stackedarea/stackedarea.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], StackedareaComponent);

//# sourceMappingURL=stackedarea.component.js.map

/***/ }),

/***/ "./src/app/demos/stackedbaranchored/stackedbaranchored.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackedbaranchoredComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StackedbaranchoredComponent = (function () {
    function StackedbaranchoredComponent() {
    }
    StackedbaranchoredComponent.prototype.ngOnInit = function () {
        var w = 500;
        var h = 300;
        var dataset = [
            { apples: 5, oranges: 10, grapes: 22 },
            { apples: 4, oranges: 12, grapes: 28 },
            { apples: 2, oranges: 19, grapes: 32 },
            { apples: 7, oranges: 23, grapes: 35 },
            { apples: 23, oranges: 17, grapes: 43 }
        ];
        var stack = __WEBPACK_IMPORTED_MODULE_1_d3__["stack"]()
            .keys(['apples', 'oranges', 'grapes'])
            .order(__WEBPACK_IMPORTED_MODULE_1_d3__["stackOrderDescending"]);
        // Also try:
        // d3.stackOrderNone (the default, uses the order in which keys are specified)
        // d3.stackOrderReverse
        // d3.stackOrderAscending
        // d3.stackOrderDescending
        var series = stack(dataset);
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleBand"]()
            .domain(__WEBPACK_IMPORTED_MODULE_1_d3__["range"](dataset.length))
            .range([0, w])
            .paddingInner(0.05);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0,
            __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset, function (d) {
                return d.apples + d.oranges + d.grapes;
            })
        ])
            .range([h, 0]);
        // .range([0, h]);
        var colors = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleOrdinal"](__WEBPACK_IMPORTED_MODULE_1_d3__["schemeCategory10"]);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        var groups = svg.selectAll('g')
            .data(series)
            .enter()
            .append('g')
            .style('fill', function (d, i) {
            return colors(i);
        });
        var rects = groups.selectAll('rect')
            .data(function (d) { return d; })
            .enter()
            .append('rect')
            .attr('x', function (d, i) {
            return xScale(i);
        })
            .attr('y', function (d) {
            return yScale(d[1]);
            // return yScale(d[0]);
        })
            .attr('height', function (d) {
            return yScale(d[0]) - yScale(d[1]);
            // return yScale(d[1]) - yScale(d[0]);
        })
            .attr('width', xScale.bandwidth());
        this.code = "const w = 500;\nconst h = 300;\nconst dataset = [\n  { apples: 5, oranges: 10, grapes: 22 },\n  { apples: 4, oranges: 12, grapes: 28 },\n  { apples: 2, oranges: 19, grapes: 32 },\n  { apples: 7, oranges: 23, grapes: 35 },\n  { apples: 23, oranges: 17, grapes: 43 }\n];\n\nconst stack = d3.stack()\n  .keys(['apples', 'oranges', 'grapes'])\n  .order(d3.stackOrderDescending);\n// Also try:\n// d3.stackOrderNone (the default, uses the order in which keys are specified)\n// d3.stackOrderReverse\n// d3.stackOrderAscending\n// d3.stackOrderDescending\n\nconst series = stack(dataset);\n\nconst xScale = d3.scaleBand()\n  .domain(d3.range(dataset.length))\n  .range([0, w])\n  .paddingInner(0.05);\n\nconst yScale = d3.scaleLinear()\n  .domain([0,\n    d3.max(dataset, function (d) {\n      return d.apples + d.oranges + d.grapes;\n    })\n  ])\n  .range([h, 0]);\n// .range([0, h]);\n\nconst colors = d3.scaleOrdinal(d3.schemeCategory10);\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\nconst groups = svg.selectAll('g')\n  .data(series)\n  .enter()\n  .append('g')\n  .style('fill', function (d, i) {\n    return colors(i);\n  });\nconst rects = groups.selectAll('rect')\n  .data(function (d) { return d; })\n  .enter()\n  .append('rect')\n  .attr('x', function (d, i) {\n    return xScale(i);\n  })\n  .attr('y', function (d) {\n    return yScale(d[1]);\n    // return yScale(d[0]);\n  })\n  .attr('height', function (d) {\n    return yScale(d[0]) - yScale(d[1]);\n    // return yScale(d[1]) - yScale(d[0]);\n  })\n  .attr('width', xScale.bandwidth());";
    };
    return StackedbaranchoredComponent;
}());
StackedbaranchoredComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-stackedbaranchored',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")]
    }),
    __metadata("design:paramtypes", [])
], StackedbaranchoredComponent);

//# sourceMappingURL=stackedbaranchored.component.js.map

/***/ }),

/***/ "./src/app/demos/tooltip/tooltip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-top: 20px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.result,\n.code {\n  width: 500px;\n  height: 400px;\n  border: 1px solid #eee;\n  overflow: auto;\n}\n\n.result {\n  margin-right: 10px;\n  margin-bottom: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n\n.code {\n  overflow: auto;\n}\n\n.bar {\n  display: inline-block;\n  width: 20px;\n  height: 75px;\n  /* Gets overriden by D3-assigned height below */\n  margin-right: 2px;\n  background-color: teal;\n}\n\n.tooltip-rect:hover {\n  fill: orange;\n}\n\n#tooltip {\n  position: absolute;\n  width: 200px;\n  height: auto;\n  padding: 10px;\n  background-color: white;\n  border-radius: 10px;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);\n  pointer-events: none;\n}\n\n#tooltip.hidden {\n  display: none;\n}\n\n#tooltip p {\n  margin: 0;\n  font-family: sans-serif;\n  font-size: 16px;\n  line-height: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/demos/tooltip/tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"result\"></div>\n  <div class=\"code\">\n    <app-editor [code]=\"code\"></app-editor>\n  </div>\n</div>\n<div id=\"tooltip\" class=\"hidden\">\n  <p><strong>Important Label Heading</strong></p>\n  <p><span id=\"value\">100</span>%</p>\n</div>"

/***/ }),

/***/ "./src/app/demos/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipComponent = (function () {
    function TooltipComponent() {
    }
    TooltipComponent.prototype.ngOnInit = function () {
        var w = 500;
        var h = 250;
        var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
            11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleBand"]()
            .domain(__WEBPACK_IMPORTED_MODULE_1_d3__["range"](dataset.length))
            .rangeRound([0, w])
            .paddingInner(0.05);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset)])
            .range([0, h]);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', function (d, i) {
            return xScale(i);
        })
            .attr('y', function (d) {
            return h - yScale(d);
        })
            .attr('width', xScale.bandwidth())
            .attr('height', function (d) {
            return yScale(d);
        })
            .attr('fill', function (d) {
            return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
        })
            .attr('class', 'tooltip-rect')
            .on('mouseover', function (d) {
            var xPosition = parseFloat(__WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('x')) + xScale.bandwidth() / 2;
            var yPosition = parseFloat(__WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('y')) / 2 + h / 2;
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('#tooltip')
                .style('left', xPosition + 'px')
                .style('top', yPosition + 'px')
                .select('#value')
                .text(d);
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('#tooltip').classed('hidden', false);
        })
            .on('mouseout', function () {
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('#tooltip').classed('hidden', true);
        })
            .on('click', function () {
            sortBars();
        });
        var sortOrder = false;
        var sortBars = function () {
            sortOrder = !sortOrder;
            svg.selectAll('rect')
                .sort(function (a, b) {
                if (sortOrder) {
                    return __WEBPACK_IMPORTED_MODULE_1_d3__["ascending"](a, b);
                }
                else {
                    return __WEBPACK_IMPORTED_MODULE_1_d3__["descending"](a, b);
                }
            })
                .transition()
                .delay(function (d, i) {
                return i * 50;
            })
                .duration(1000)
                .attr('x', function (d, i) {
                return xScale(i);
            });
        };
        this.code = "const w = 500;\nconst h = 250;\n\nconst dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,\n  11, 12, 15, 20, 18, 17, 16, 18, 23, 25];\n\nconst xScale = d3.scaleBand()\n  .domain(d3.range(dataset.length))\n  .rangeRound([0, w])\n  .paddingInner(0.05);\n\nconst yScale = d3.scaleLinear()\n  .domain([0, d3.max(dataset)])\n  .range([0, h]);\n\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\nsvg.selectAll('rect')\n  .data(dataset)\n  .enter()\n  .append('rect')\n  .attr('x', function (d, i) {\n    return xScale(i);\n  })\n  .attr('y', function (d) {\n    return h - yScale(d);\n  })\n  .attr('width', xScale.bandwidth())\n  .attr('height', function (d) {\n    return yScale(d);\n  })\n  .attr('fill', function (d) {\n    return 'rgb(0, 0, ' + Math.round(d * 10) + ')';\n  })\n  .on('mouseover', function (d) {\n    const xPosition = parseFloat(d3.select(this).attr('x')) + xScale.bandwidth() / 2;\n    const yPosition = parseFloat(d3.select(this).attr('y')) / 2 + h / 2;\n\n    d3.select('#tooltip')\n      .style('left', xPosition + 'px')\n      .style('top', yPosition + 'px')\n      .select('#value')\n      .text(d);\n    d3.select('#tooltip').classed('hidden', false);\n  })\n  .on('mouseout', function () {\n    d3.select('#tooltip').classed('hidden', true);\n  })\n  .on('click', function () {\n    sortBars();\n  });\n\nlet sortOrder = false;\nconst sortBars = function () {\n  sortOrder = !sortOrder;\n\n  svg.selectAll('rect')\n    .sort(function (a, b) {\n      if (sortOrder) {\n        return d3.ascending(a, b);\n      } else {\n        return d3.descending(a, b);\n      }\n    })\n    .transition()\n    .delay(function (d, i) {\n      return i * 50;\n    })\n    .duration(1000)\n    .attr('x', function (d, i) {\n      return xScale(i);\n    });\n};";
    };
    return TooltipComponent;
}());
TooltipComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-tooltip',
        template: __webpack_require__("./src/app/demos/tooltip/tooltip.component.html"),
        styles: [__webpack_require__("./src/app/demos/tooltip/tooltip.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewEncapsulation */].None,
    }),
    __metadata("design:paramtypes", [])
], TooltipComponent);

//# sourceMappingURL=tooltip.component.js.map

/***/ }),

/***/ "./src/app/demos/transitionduration/transitionduration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransitiondurationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransitiondurationComponent = (function () {
    function TransitiondurationComponent() {
    }
    TransitiondurationComponent.prototype.ngOnInit = function () {
        // Width and height
        var w = 500;
        var h = 250;
        var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
            11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleBand"]()
            .domain(__WEBPACK_IMPORTED_MODULE_1_d3__["range"](dataset.length))
            .rangeRound([0, w])
            .paddingInner(0.05);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](dataset)])
            .range([0, h]);
        // Create SVG element
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
        // Create bars
        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', function (d, i) {
            return xScale(i);
        })
            .attr('y', function (d) {
            return h - yScale(d);
        })
            .attr('width', xScale.bandwidth())
            .attr('height', function (d) {
            return yScale(d);
        })
            .attr('fill', function (d) {
            return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
        });
        // Create labels
        svg.selectAll('text')
            .data(dataset)
            .enter()
            .append('text')
            .text(function (d) {
            return d;
        })
            .attr('text-anchor', 'middle')
            .attr('x', function (d, i) {
            return xScale(i) + xScale.bandwidth() / 2;
        })
            .attr('y', function (d) {
            return h - yScale(d) + 14;
        })
            .attr('font-family', 'sans-serif')
            .attr('font-size', '11px')
            .attr('fill', 'white');
        // On click, update with new data
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.result')
            .append('p')
            .text('clicl me!')
            .on('click', function () {
            // New values for dataset
            dataset = [11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
                5, 10, 13, 19, 21, 25, 22, 18, 15, 13];
            // Update all rects
            svg.selectAll('rect')
                .data(dataset)
                .transition()
                .duration(5000)
                .attr('y', function (d) {
                return h - yScale(d);
            })
                .attr('height', function (d) {
                return yScale(d);
            })
                .attr('fill', function (d) {
                return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
            });
            // Update all labels
            svg.selectAll('text')
                .data(dataset)
                .transition() // <-- Now with
                .duration(5000) //     label transitions!
                .text(function (d) {
                return d;
            })
                .attr('x', function (d, i) {
                return xScale(i) + xScale.bandwidth() / 2;
            })
                .attr('y', function (d) {
                return h - yScale(d) + 14;
            });
        });
        this.code = "// Width and height\nconst w = 500;\nconst h = 250;\n\nlet dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,\n  11, 12, 15, 20, 18, 17, 16, 18, 23, 25];\n\nconst xScale = d3.scaleBand()\n  .domain(d3.range(dataset.length))\n  .rangeRound([0, w])\n  .paddingInner(0.05);\n\nconst yScale = d3.scaleLinear()\n  .domain([0, d3.max(dataset)])\n  .range([0, h]);\n\n// Create SVG element\nconst svg = d3.select('.result')\n  .append('svg')\n  .attr('width', w)\n  .attr('height', h);\n\n// Create bars\nsvg.selectAll('rect')\n  .data(dataset)\n  .enter()\n  .append('rect')\n  .attr('x', function (d, i) {\n    return xScale(i);\n  })\n  .attr('y', function (d) {\n    return h - yScale(d);\n  })\n  .attr('width', xScale.bandwidth())\n  .attr('height', function (d) {\n    return yScale(d);\n  })\n  .attr('fill', function (d) {\n    return 'rgb(0, 0, ' + Math.round(d * 10) + ')';\n  });\n\n// Create labels\nsvg.selectAll('text')\n  .data(dataset)\n  .enter()\n  .append('text')\n  .text(function (d) {\n    return d;\n  })\n  .attr('text-anchor', 'middle')\n  .attr('x', function (d, i) {\n    return xScale(i) + xScale.bandwidth() / 2;\n  })\n  .attr('y', function (d) {\n    return h - yScale(d) + 14;\n  })\n  .attr('font-family', 'sans-serif')\n  .attr('font-size', '11px')\n  .attr('fill', 'white');\n\n// On click, update with new data\nd3.select('.result')\n  .append('p')\n  .text('clicl me!')\n  .on('click', function () {\n\n    // New values for dataset\n    dataset = [11, 12, 15, 20, 18, 17, 16, 18, 23, 25,\n      5, 10, 13, 19, 21, 25, 22, 18, 15, 13];\n\n    // Update all rects\n    svg.selectAll('rect')\n      .data(dataset)\n      .transition()\n      .duration(5000)\n      .attr('y', function (d) {\n        return h - yScale(d);\n      })\n      .attr('height', function (d) {\n        return yScale(d);\n      })\n      .attr('fill', function (d) {\n        return 'rgb(0, 0, ' + Math.round(d * 10) + ')';\n      });\n\n    // Update all labels\n    svg.selectAll('text')\n      .data(dataset)\n      .transition()\t\t\t\t\t\t\t\t// <-- Now with\n      .duration(5000)\t\t\t\t\t\t\t\t//     label transitions!\n      .text(function (d) {\n        return d;\n      })\n      .attr('x', function (d, i) {\n        return xScale(i) + xScale.bandwidth() / 2;\n      })\n      .attr('y', function (d) {\n        return h - yScale(d) + 14;\n      });\n  });";
    };
    return TransitiondurationComponent;
}());
TransitiondurationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-transitionduration',
        template: __webpack_require__("./src/app/common/common.html"),
        styles: [__webpack_require__("./src/app/common/common.css")],
    }),
    __metadata("design:paramtypes", [])
], TransitiondurationComponent);

//# sourceMappingURL=transitionduration.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map