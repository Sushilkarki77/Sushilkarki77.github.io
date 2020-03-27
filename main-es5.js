function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/actions/global-report.actions.ts":
  /*!**************************************************!*\
    !*** ./src/app/actions/global-report.actions.ts ***!
    \**************************************************/

  /*! exports provided: GlobalReportData, GlobalReportDataSuccess, GlobalReportDataFailure */

  /***/
  function srcAppActionsGlobalReportActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalReportData", function () {
      return GlobalReportData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalReportDataSuccess", function () {
      return GlobalReportDataSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalReportDataFailure", function () {
      return GlobalReportDataFailure;
    });
    /* harmony import */


    var _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../enum/map.enum */
    "./src/app/enum/map.enum.ts");

    var GlobalReportData = function GlobalReportData() {
      _classCallCheck(this, GlobalReportData);

      this.type = _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].global_report;
    };

    var GlobalReportDataSuccess = function GlobalReportDataSuccess(payload) {
      _classCallCheck(this, GlobalReportDataSuccess);

      this.payload = payload;
      this.type = _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].global_report_success;
    };

    var GlobalReportDataFailure = function GlobalReportDataFailure(payload) {
      _classCallCheck(this, GlobalReportDataFailure);

      this.payload = payload;
      this.type = _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].global_report_failure;
    };
    /***/

  },

  /***/
  "./src/app/actions/map.actions.ts":
  /*!****************************************!*\
    !*** ./src/app/actions/map.actions.ts ***!
    \****************************************/

  /*! exports provided: LoadData, LoadDataSuccess, LoadDataFailure */

  /***/
  function srcAppActionsMapActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadData", function () {
      return LoadData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadDataSuccess", function () {
      return LoadDataSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadDataFailure", function () {
      return LoadDataFailure;
    });
    /* harmony import */


    var _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../enum/map.enum */
    "./src/app/enum/map.enum.ts");

    var LoadData = function LoadData(payload) {
      _classCallCheck(this, LoadData);

      this.payload = payload;
      this.type = _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].get;
    };

    var LoadDataSuccess = function LoadDataSuccess(payload) {
      _classCallCheck(this, LoadDataSuccess);

      this.payload = payload;
      this.type = _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].get_success;
    };

    var LoadDataFailure = function LoadDataFailure(payload) {
      _classCallCheck(this, LoadDataFailure);

      this.payload = payload;
      this.type = _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].get_failure;
    };
    /***/

  },

  /***/
  "./src/app/actions/report.actions.ts":
  /*!*******************************************!*\
    !*** ./src/app/actions/report.actions.ts ***!
    \*******************************************/

  /*! exports provided: ReportData, ReportDataSuccess, ReportDataFailure */

  /***/
  function srcAppActionsReportActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportData", function () {
      return ReportData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportDataSuccess", function () {
      return ReportDataSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportDataFailure", function () {
      return ReportDataFailure;
    });
    /* harmony import */


    var _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../enum/map.enum */
    "./src/app/enum/map.enum.ts");

    var ReportData = function ReportData(payload) {
      _classCallCheck(this, ReportData);

      this.payload = payload;
      this.type = _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].report;
    };

    var ReportDataSuccess = function ReportDataSuccess(payload) {
      _classCallCheck(this, ReportDataSuccess);

      this.payload = payload;
      this.type = _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].report_success;
    };

    var ReportDataFailure = function ReportDataFailure(payload) {
      _classCallCheck(this, ReportDataFailure);

      this.payload = payload;
      this.type = _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].report_failure;
    };
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/topbar/topbar.component */
    "./src/app/components/topbar/topbar.component.ts");
    /* harmony import */


    var _components_updateblock_updateblock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/updateblock/updateblock.component */
    "./src/app/components/updateblock/updateblock.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'covid19';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-updateblock");
        }
      },
      directives: [_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__["TopbarComponent"], _components_updateblock_updateblock_component__WEBPACK_IMPORTED_MODULE_2__["UpdateblockComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/topbar/topbar.component */
    "./src/app/components/topbar/topbar.component.ts");
    /* harmony import */


    var _components_updateblock_updateblock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/updateblock/updateblock.component */
    "./src/app/components/updateblock/updateblock.component.ts");
    /* harmony import */


    var _components_tableblock_tableblock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/tableblock/tableblock.component */
    "./src/app/components/tableblock/tableblock.component.ts");
    /* harmony import */


    var _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/map/map.component */
    "./src/app/components/map/map.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _reducers_map_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./reducers/map.reducers */
    "./src/app/reducers/map.reducers.ts");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _effects_map_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./effects/map.effects */
    "./src/app/effects/map.effects.ts");
    /* harmony import */


    var _reducers_report_reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./reducers/report.reducers */
    "./src/app/reducers/report.reducers.ts");
    /* harmony import */


    var _effects_report_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./effects/report.effects */
    "./src/app/effects/report.effects.ts");
    /* harmony import */


    var _core_http_interceptor_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./core/http-interceptor.core */
    "./src/app/core/http-interceptor.core.ts");
    /* harmony import */


    var _reducers_global_report_reducers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./reducers/global-report.reducers */
    "./src/app/reducers/global-report.reducers.ts");
    /* harmony import */


    var _effects_global_report_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./effects/global-report.effects */
    "./src/app/effects/global-report.effects.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_core_http_interceptor_core__WEBPACK_IMPORTED_MODULE_17__["HttpConfigInterceptorProvider"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({
        map: _reducers_map_reducers__WEBPACK_IMPORTED_MODULE_10__["mapReducer"],
        report: _reducers_report_reducers__WEBPACK_IMPORTED_MODULE_15__["reportReducer"],
        global_report: _reducers_global_report_reducers__WEBPACK_IMPORTED_MODULE_18__["globalReportReducer"]
      }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_effects_map_effects__WEBPACK_IMPORTED_MODULE_14__["MapEffects"], _effects_report_effects__WEBPACK_IMPORTED_MODULE_16__["ReportEffects"], _effects_global_report_effects__WEBPACK_IMPORTED_MODULE_19__["GlobalReportEffects"]])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_4__["TopbarComponent"], _components_updateblock_updateblock_component__WEBPACK_IMPORTED_MODULE_5__["UpdateblockComponent"], _components_tableblock_tableblock_component__WEBPACK_IMPORTED_MODULE_6__["TableblockComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsRootModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_4__["TopbarComponent"], _components_updateblock_updateblock_component__WEBPACK_IMPORTED_MODULE_5__["UpdateblockComponent"], _components_tableblock_tableblock_component__WEBPACK_IMPORTED_MODULE_6__["TableblockComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({
            map: _reducers_map_reducers__WEBPACK_IMPORTED_MODULE_10__["mapReducer"],
            report: _reducers_report_reducers__WEBPACK_IMPORTED_MODULE_15__["reportReducer"],
            global_report: _reducers_global_report_reducers__WEBPACK_IMPORTED_MODULE_18__["globalReportReducer"]
          }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_effects_map_effects__WEBPACK_IMPORTED_MODULE_14__["MapEffects"], _effects_report_effects__WEBPACK_IMPORTED_MODULE_16__["ReportEffects"], _effects_global_report_effects__WEBPACK_IMPORTED_MODULE_19__["GlobalReportEffects"]])],
          providers: [_core_http_interceptor_core__WEBPACK_IMPORTED_MODULE_17__["HttpConfigInterceptorProvider"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/map/map.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/map/map.component.ts ***!
    \*************************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppComponentsMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MapComponent =
    /*#__PURE__*/
    function () {
      function MapComponent() {
        _classCallCheck(this, MapComponent);

        this.markerSource = new ol.source.Vector();
        this.latitude = 85.01220703125;
        this.longitude = 28.594168506232606;
        this.mapClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // const tiles_url = `https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png`;
          var tiles_url = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png";
          var markerStyle = new ol.style.Style({
            image: new ol.style.Icon({
              anchorXUnits: 'fraction',
              anchorYUnits: 'pixels',
              anchor: [0.5, 23],
              opacity: 1,
              src: './assets/images/marker.png'
            })
          });
          var layerVector = new ol.layer.Vector({
            source: this.markerSource,
            style: markerStyle
          });
          this.map = new ol.Map({
            target: 'map',
            layers: [new ol.layer.Tile({
              source: new ol.source.OSM({
                'url': tiles_url
              })
            }), layerVector],
            view: new ol.View({
              center: ol.proj.fromLonLat([this.latitude, this.longitude]),
              zoom: 5,
              minZoom: 3,
              maxZoom: 6
            })
          });
          this.map.on('singleclick', function (event) {
            _this.markerSource.clear();

            var lonLat = ol.proj.toLonLat(event.coordinate);
            var iconFeature = new ol.Feature({
              geometry: new ol.geom.Point(ol.proj.transform([lonLat[0], lonLat[1]], 'EPSG:4326', 'EPSG:3857'))
            });

            _this.markerSource.addFeature(iconFeature);

            _this.mapClickEvent.emit(lonLat);
          });
          this.map.on('pointermove', function (e) {
            e.map.getTargetElement().style.cursor = this ? ' url(\'./assets/images/marker.png\') 12 24, auto' : '';
          });
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ɵfac = function MapComponent_Factory(t) {
      return new (t || MapComponent)();
    };

    MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapComponent,
      selectors: [["app-map"]],
      outputs: {
        mapClickEvent: "mapClickEvent"
      },
      decls: 4,
      vars: 0,
      consts: [[1, "mt-3", "row"], [1, "col-sm-12"], [1, "rounded", "bg-bluelight", "px-3", "py-4"], ["id", "map", 1, "map"]],
      template: function MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".map[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-map',
          templateUrl: './map.component.html',
          styleUrls: ['./map.component.css']
        }]
      }], null, {
        mapClickEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/tableblock/tableblock.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/tableblock/tableblock.component.ts ***!
    \***************************************************************/

  /*! exports provided: TableblockComponent */

  /***/
  function srcAppComponentsTableblockTableblockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableblockComponent", function () {
      return TableblockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TableblockComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedProvince);
      }
    }

    function TableblockComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Select Province");
      }
    }

    function TableblockComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableblockComponent_div_15_Template_li_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.selectProvince("");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableblockComponent_div_15_Template_li_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.selectProvince("province one");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "province one");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableblockComponent_div_15_Template_li_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.selectProvince("province two");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "province two");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableblockComponent_div_15_Template_li_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.selectProvince("province three");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "province three");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Select Province");
      }
    }

    function TableblockComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.selectedDistrict);
      }
    }

    function TableblockComponent_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Select District");
      }
    }

    function TableblockComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableblockComponent_div_23_Template_li_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.selectDistrict("");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableblockComponent_div_23_Template_li_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.selectDistrict("district one");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "District one");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableblockComponent_div_23_Template_li_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.selectDistrict("district two");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "District two");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableblockComponent_div_23_Template_li_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.selectDistrict("district three");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "District three");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Select District");
      }
    }

    var TableblockComponent =
    /*#__PURE__*/
    function () {
      function TableblockComponent() {
        _classCallCheck(this, TableblockComponent);

        this.showProvince = false;
        this.showDistrict = false;
        this.selectedProvince = '';
        this.selectedDistrict = '';
      }

      _createClass(TableblockComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectProvince",
        value: function selectProvince(data) {
          this.selectedProvince = data;
          this.showProvince = false;
        }
      }, {
        key: "selectDistrict",
        value: function selectDistrict(data) {
          this.selectedDistrict = data;
          this.showDistrict = false;
        }
      }]);

      return TableblockComponent;
    }();

    TableblockComponent.ɵfac = function TableblockComponent_Factory(t) {
      return new (t || TableblockComponent)();
    };

    TableblockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableblockComponent,
      selectors: [["app-tableblock"]],
      decls: 433,
      vars: 6,
      consts: [[1, "mt-3", "row"], [1, "col-sm-12"], [1, "rounded", "bg-bluelight", "px-3", "py-4"], [1, "d-md-flex", "filter-wrapper"], [1, "h5", "font-weight-bold", "mb-3", "mr-auto", "head-color"], [1, "ml-auto"], [1, "row"], [1, "col-lg-6"], [1, "form-search-icon"], ["type", "text", "placeholder", "Select", 1, "form-control", "input-design", 3, "click"], [1, "form-control", "input-design", 3, "click"], ["class", "option", 4, "ngIf", "ngIfElse"], ["provincePlaceholder", ""], ["class", "dropdown", 4, "ngIf"], ["districtPlaceholder", ""], [1, "small", "mb-3", "mt-1"], ["href", "/join-us", 1, "text-white"], [1, "table-responsive"], [1, "text-white", "table"], [2, "cursor", "pointer"], ["xmlns", "http://www.w3.org/2000/svg", "width", "7.454", "height", "10", "viewBox", "0 0 7.454 10"], ["id", "Path_652", "data-name", "Path 652", "d", "M235.11,340.85c-.655-.886-1.3-1.739-1.921-2.6a18.066,18.066,0,0,1-1.358-1.957,3.685,3.685,0,0,1,2.733-5.4,3.766,3.766,0,0,1,4.256,3.3,3.7,3.7,0,0,1-.689,2.539C237.154,338.11,236.138,339.455,235.11,340.85Zm0-4.342a1.927,1.927,0,0,0,1.949-1.933,1.947,1.947,0,0,0-3.893-.008A1.932,1.932,0,0,0,235.112,336.509Z", "transform", "translate(-231.382 -330.85)", "fill", "#fff"], [1, "ml-2"], ["href", "tel:01-4253395", 1, "text-white"], ["href", "tel:01-4221119", 1, "text-white"], ["href", "tel:01-4262027", 1, "text-white"], ["href", "tel:01-443 5232", 1, "text-white"], ["href", "tel:01-4163500", 1, "text-white"], ["href", "tel:01-5159266", 1, "text-white"], ["href", "tel:01-4411140", 1, "text-white"], ["href", "tel:01-4476152", 1, "text-white"], ["href", "tel:01-4240806", 1, "text-white"], ["href", "tel:01-4412430", 1, "text-white"], ["href", "tel:01-4412303", 1, "text-white"], ["href", "tel:01-4286428", 1, "text-white"], [1, "option"], [1, "dropdown"], [1, "dropdown-menu"], [1, "select-item", 3, "click"]],
      template: function TableblockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hospital Capacity Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableblockComponent_Template_input_click_10_listener() {
            return ctx.showProvince = !ctx.showProvince;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableblockComponent_Template_div_click_11_listener() {
            return ctx.showProvince = !ctx.showProvince;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableblockComponent_div_12_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableblockComponent_ng_template_13_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableblockComponent_div_15_Template, 10, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableblockComponent_Template_input_click_18_listener() {
            return ctx.showDistrict = !ctx.showDistrict;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableblockComponent_Template_div_click_19_listener() {
            return ctx.showDistrict = !ctx.showDistrict;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TableblockComponent_div_20_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TableblockComponent_ng_template_21_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TableblockComponent_div_23_Template, 10, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "*Disclaimer: We are sourcing this data from various sources such as government website, situation report, hospital operators, doctors, etc. We need your help to continue gathering this information across all hospitals in Nepal. If you would like to help collect data, please sign up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "table", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Name of Hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "No. of Beds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "No. of ICU Beds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "No. of Ventilators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "No. of Isolation Beds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sukraraj Tropical And Infectious Disease Hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Teku");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "01-4253395 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Bir Hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Kanti Path");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "svg", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "01-4221119 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "458");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Blue Cross Hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Tripureshwor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "svg", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "01-4262027 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "CIWEC Hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "British-Indian Embassy Road, Lainchaur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "svg", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "01-443 5232 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Grande City Hospital and Clinic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Jyoti Bhawan, Jamal, Kantipath, Kathmandu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "svg", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "01-4163500 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Grande International Hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Dhapasi, Kathmandu, Nepal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "svg", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "01-5159266 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Kanti Childrens Hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Maharajgunj, Kathmandu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "svg", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "01-4411140 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Kathmandu Medical College Teaching Hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Clinical Science Complex, Sinamangal, Kathmandu, Nepal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "svg", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "01-4476152 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Kathmandu Model Hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Bagbazar, Kathmandu Nepal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "svg", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "01-4240806 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Nepal Police Hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Maharajgunj, Kathmandu , Nepal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "svg", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "01-4412430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "TU Teaching Hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Maharagunj, Bagmati, Kathmandu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "svg", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "01-4412303 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "571");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Vayodha Hospitals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Balkhu Chowk, Kathmandu, Nepal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "svg", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "01-4286428 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "NA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "(sourcing info)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedProvince)("ngIfElse", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProvince);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedDistrict)("ngIfElse", _r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDistrict);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".filter-wrapper[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\r\n  max-width: 112px;\r\n  display: inline-block;\r\n  font-size: 12px;\r\n  width: 112px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.filter-wrapper[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]   .css-1pahdxg-control[_ngcontent-%COMP%], .filter-wrapper[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]   .css-yk16xz-control[_ngcontent-%COMP%] {\r\n  min-height: 26px;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n  color: #B0BAC9;\r\n  font-size: 12px;\r\n  letter-spacing: 1.12px;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.form-search-icon[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border: 1px solid #E0E7FF;\r\n  border-radius: 5px;\r\n  position: relative;\r\n}\r\n\r\n.input-design[_ngcontent-%COMP%] {\r\n  width: 183px;\r\n  height: 38px;\r\n  border: none;\r\n  font-size: 15px;\r\n  color: #BFC5D2;\r\n}\r\n\r\n.input-design.form-control[_ngcontent-%COMP%] {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  width: 220px;\r\n  border-color: #BFC5D2;;\r\n  background: url(/assets/icons/blue_arrow_down.svg) no-repeat;\r\n  background-position-x: calc(100% - 6px), right;\r\n  background-position-y: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.input-design.form-control[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px\r\n}\r\n\r\n\r\n\r\n.form-search-icon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 5px 0 0 0;\r\n  display: block;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  border: 1px solid #E0E7FF;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 20px 0 rgba(46, 91, 255, 0.07);\r\n  background: #F9FAFF;\r\n  max-height: 280px;\r\n  overflow-y: auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 4px;\r\n  height: 4px;\r\n\r\n}\r\n\r\n\r\n\r\n.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: rgba(46, 91, 255, 0.08);\r\n  border-radius: 1px;\r\n}\r\n\r\n\r\n\r\n.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #2E5BFF;\r\n  border-radius: 1px;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  font-size: 15px;\r\n  color: #2E384D;\r\n  letter-spacing: 0;\r\n  font-weight: 400;\r\n  text-align: left;\r\n  height: 39px;\r\n  padding: 10px 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  background: #2E5BFF;\r\n  color: #FFFFFF;\r\n  border-radius: 5px;\r\n}\r\n\r\n.option[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  color: #2E384D;\r\n  letter-spacing: 0;\r\n  font-weight: 400;\r\n}\r\n\r\n.form-group-invalid[_ngcontent-%COMP%] {\r\n  border: 1px solid #D63649;\r\n}\r\n\r\n.select-control-invalid[_ngcontent-%COMP%] {\r\n  background-size: auto !important;\r\n  cursor: pointer;\r\n  background: white !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWJsZWJsb2NrL3RhYmxlYmxvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLDREQUE0RDtFQUM1RCw4Q0FBOEM7RUFDOUMsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakI7QUFDRjs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsOENBQThDO0VBQzlDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBLGtCQUFrQjs7QUFDbEIsVUFBVTs7QUFDVjtFQUNFLFVBQVU7RUFDVixXQUFXOztBQUViOztBQUVBLFVBQVU7O0FBQ1Y7RUFDRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGVibG9jay90YWJsZWJsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLXdyYXBwZXIgLmZpbHRlciAuZmlsdGVyLXNlbGVjdCB7XHJcbiAgbWF4LXdpZHRoOiAxMTJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiAxMTJweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZmlsdGVyLXdyYXBwZXIgLmZpbHRlciAuZmlsdGVyLXNlbGVjdCAuY3NzLTFwYWhkeGctY29udHJvbCwgLmZpbHRlci13cmFwcGVyIC5maWx0ZXIgLmZpbHRlci1zZWxlY3QgLmNzcy15azE2eHotY29udHJvbCB7XHJcbiAgbWluLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgY29sb3I6ICNCMEJBQzk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uZm9ybS1zZWFyY2gtaWNvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0UwRTdGRjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5wdXQtZGVzaWduIHtcclxuICB3aWR0aDogMTgzcHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICNCRkM1RDI7XHJcbn1cclxuXHJcblxyXG4uaW5wdXQtZGVzaWduLmZvcm0tY29udHJvbCB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBib3JkZXItY29sb3I6ICNCRkM1RDI7O1xyXG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb25zL2JsdWVfYXJyb3dfZG93bi5zdmcpIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDZweCksIHJpZ2h0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1kZXNpZ24uZm9ybS1jb250cm9sIG9wdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHhcclxufVxyXG5cclxuLyogY3VzdG9tIGRyb3Bkb3duIGZvciBzZWxlY3QgaW5wdXQgKi9cclxuLmZvcm0tc2VhcmNoLWljb24gaW5wdXQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDVweCAwIDAgMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duIHVsIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEU3RkY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSg0NiwgOTEsIDI1NSwgMC4wNyk7XHJcbiAgYmFja2dyb3VuZDogI0Y5RkFGRjtcclxuICBtYXgtaGVpZ2h0OiAyODBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vKiBmb3Igc2Nyb2xsYmFyICovXHJcbi8qIHdpZHRoICovXHJcbi5kcm9wZG93biB1bDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcblxyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG4uZHJvcGRvd24gdWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDQ2LCA5MSwgMjU1LCAwLjA4KTtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG4uZHJvcGRvd24gdWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjMkU1QkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxufVxyXG5cclxuLmRyb3Bkb3duIHVsIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzJFMzg0RDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgaGVpZ2h0OiAzOXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kcm9wZG93biB1bCBsaTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzJFNUJGRjtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzJFMzg0RDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cC1pbnZhbGlkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRDYzNjQ5O1xyXG59XHJcblxyXG4uc2VsZWN0LWNvbnRyb2wtaW52YWxpZCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableblockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tableblock',
          templateUrl: './tableblock.component.html',
          styleUrls: ['./tableblock.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/topbar/topbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/topbar/topbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: TopbarComponent */

  /***/
  function srcAppComponentsTopbarTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopbarComponent", function () {
      return TopbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TopbarComponent =
    /*#__PURE__*/
    function () {
      function TopbarComponent() {
        _classCallCheck(this, TopbarComponent);
      }

      _createClass(TopbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopbarComponent;
    }();

    TopbarComponent.ɵfac = function TopbarComponent_Factory(t) {
      return new (t || TopbarComponent)();
    };

    TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopbarComponent,
      selectors: [["app-topbar"]],
      decls: 16,
      vars: 0,
      consts: [[1, "text-center", "bg-bluelight", "covid-alert", "d-flex"], ["href", "https://www.who.int/emergencies/diseases/novel-coronavirus-2019", "target", "blank", 1, "small", "mx-auto"], [1, "d-none", "d-sm-none", "d-md-block", "social-link"], ["href", "https://www.facebook.com/", "target", "_blank"], ["xmlns", "http://www.w3.org/2000/svg", "width", "6.574", "height", "14.166", "viewBox", "0 0 6.574 14.166"], ["id", "Path_675", "data-name", "Path 675", "d", "M201.008,217.719h-2.939v-7.07h-1.035c-.363,0-.363,0-.363-.366v-2.14h1.4c0-.077,0-.139,0-.2.008-.6-.017-1.2.032-1.8a2.577,2.577,0,0,1,2.439-2.548c.874-.07,1.758-.026,2.637-.033,0,0,.009.005.024.015v2.414h-.167c-.454,0-.907,0-1.361,0a.567.567,0,0,0-.649.572c-.028.517-.007,1.036-.007,1.57h2.228c-.013.159-.023.3-.037.443-.065.651-.134,1.3-.2,1.953-.011.114-.072.124-.163.123-.545,0-1.091,0-1.636,0h-.205Z", "transform", "translate(-196.672 -203.553)", "fill", "#fff"], ["href", "https://twitter.com", "target", "_blank"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14.655", "height", "11.726", "viewBox", "0 0 14.655 11.726"], ["id", "Path_676", "data-name", "Path 676", "d", "M111.4,279.778h-1.531c-.418-.072-.84-.129-1.254-.221A8.786,8.786,0,0,1,106,278.481v-.038a5.944,5.944,0,0,0,4.346-1.18,3.251,3.251,0,0,1-1.662-.628,2.856,2.856,0,0,1-1.036-1.435,4.335,4.335,0,0,0,1.2-.076,3.221,3.221,0,0,1-1.622-1.072,2.953,2.953,0,0,1-.644-1.864,2.924,2.924,0,0,0,1.234.317,3.135,3.135,0,0,1-1.136-1.784,2.736,2.736,0,0,1,.373-2.12c.066.049.091.129.143.181a13.987,13.987,0,0,0,1.014.98,8.387,8.387,0,0,0,4.695,1.9c.282.023.289.024.254-.261a2.867,2.867,0,0,1,.837-2.457,3.056,3.056,0,0,1,4.223-.081.294.294,0,0,0,.327.084l1.485-.548c.055-.021.108-.048.162-.073l.036.042a3.111,3.111,0,0,1-1.155,1.5,5.277,5.277,0,0,0,1.585-.424v.076a.576.576,0,0,0-.084.076,6.625,6.625,0,0,1-1.292,1.316.4.4,0,0,0-.108.263c-.023.322-.01.648-.043.969a8.513,8.513,0,0,1-2.237,4.991,8.077,8.077,0,0,1-5.006,2.575C111.721,279.729,111.558,279.754,111.4,279.778Z", "transform", "translate(-106 -268.052)", "fill", "#fff"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top"], ["href", "#"], [1, "font-weight-bold", "navbar-brand"], [1, "mr-2", "head-color"], [1, "navbar-nav"]],
      template: function TopbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Help us keep data reliable!Latest news and updates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".covid-alert[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0px;\r\n  width: 100%;\r\n  z-index: 1031;\r\n  padding: 5px 2px 8px;\r\n  display: block;\r\n  line-height: 1;\r\n}\r\n\r\n.bg-bluelight[_ngcontent-%COMP%] {\r\n  background-color: #2E5BFF;\r\n\r\n}\r\n\r\n.covid-alert[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  line-height: 1.2;\r\n  font-weight: 600;\r\n  color: #07ff95;\r\n}\r\n\r\n.social-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  margin: 0 15px 0 0;\r\n}\r\n\r\n.covid-alert[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  line-height: 1.2;\r\n  font-weight: 600;\r\n  color: #07ff95;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: underline;\r\n}\r\n\r\n.navbar-dark[_ngcontent-%COMP%] {\r\n  background: white !important;\r\n  top: 26px !important;\r\n}\r\n\r\n.fixed-top[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n  color: #8798AD;\r\n}\r\n\r\n.font-weight-bold[_ngcontent-%COMP%] {\r\n  font-weight: 700 !important;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding-top: .3125rem;\r\n  padding-bottom: .3125rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.25rem;\r\n  line-height: inherit;\r\n  white-space: nowrap;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: .5rem 1rem;\r\n}\r\n\r\n.navbar-expand-lg[_ngcontent-%COMP%] {\r\n  flex-flow: row nowrap;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-left: auto;\r\n}\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\r\n  color: #2E5BFF;\r\n}\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  position: relative;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  margin-right: 25px;\r\n}\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  color: #8798AD;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: .5rem 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBRUUsYUFBYTtFQUViLGVBQWU7RUFFZixtQkFBbUI7RUFFbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUVFLHFCQUFxQjtFQUVyQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBOzs7O0VBSUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdmlkLWFsZXJ0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxMDMxO1xyXG4gIHBhZGRpbmc6IDVweCAycHggOHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4uYmctYmx1ZWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkU1QkZGO1xyXG5cclxufVxyXG5cclxuLmNvdmlkLWFsZXJ0IGEge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzA3ZmY5NTtcclxufVxyXG5cclxuLnNvY2lhbC1saW5rIGEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDAgMTVweCAwIDA7XHJcbn1cclxuXHJcbi5jb3ZpZC1hbGVydCBhIHtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwN2ZmOTU7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAyNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maXhlZC10b3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6ICM4Nzk4QUQ7XHJcbn1cclxuXHJcbi5mb250LXdlaWdodC1ib2xkIHtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLXRvcDogLjMxMjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IC4zMTI1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxufVxyXG5cclxuLm5hdmJhci1leHBhbmQtbGcge1xyXG4gIC1tcy1mbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5hY3RpdmUgPiAubmF2LWxpbmssXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlLFxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rLnNob3csXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAuc2hvdyA+IC5uYXYtbGluayB7XHJcbiAgY29sb3I6ICMyRTVCRkY7XHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjODc5OEFEO1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-topbar',
          templateUrl: './topbar.component.html',
          styleUrls: ['./topbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/updateblock/updateblock.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/updateblock/updateblock.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UpdateblockComponent */

  /***/
  function srcAppComponentsUpdateblockUpdateblockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateblockComponent", function () {
      return UpdateblockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_map_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../actions/map.actions */
    "./src/app/actions/map.actions.ts");
    /* harmony import */


    var _selectors_map_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../selectors/map.selectors */
    "./src/app/selectors/map.selectors.ts");
    /* harmony import */


    var _actions_report_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../actions/report.actions */
    "./src/app/actions/report.actions.ts");
    /* harmony import */


    var _selectors_report_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../selectors/report.selectors */
    "./src/app/selectors/report.selectors.ts");
    /* harmony import */


    var _selectors_global_report_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../selectors/global-report.selectors */
    "./src/app/selectors/global-report.selectors.ts");
    /* harmony import */


    var _actions_global_report_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../actions/global-report.actions */
    "./src/app/actions/global-report.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../map/map.component */
    "./src/app/components/map/map.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UpdateblockComponent_div_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
      }
    }

    function UpdateblockComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UpdateblockComponent_div_2_div_3_Template, 1, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Covid-19 Cases ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateblockComponent_div_2_Template_span_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.showInfo = !ctx_r2.showInfo;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Total Tested");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "687");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Total Confirmed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Total Recovered");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Total Deaths");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Global Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "(WHO reported numbers)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Total Tested");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 471,518");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Total Confirmed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Total Recovered");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Total Deaths");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "*Disclaimer: These numbers are obtained from ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Johns Hopkins University");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " and being updated as the numbers from these sources get updated.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, ctx_r0.loading$ && ctx_r0.RLoading$ && ctx_r0.GRLoading$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.information.error !== "Unable to geocode" ? ctx_r0.information["address"]["country"] : "", " Update ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r0.information.error !== "Unable to geocode" ? ctx_r0.information["address"]["country"] : "", " Govt. reported numbers) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.report["confirmed"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.report["recovered"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.report["deaths"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.globalReport["confirmed"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.globalReport["recovered"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.globalReport["deaths"], "");
      }
    }

    var UpdateblockComponent =
    /*#__PURE__*/
    function () {
      function UpdateblockComponent(store) {
        _classCallCheck(this, UpdateblockComponent);

        this.store = store;
        this.showInfo = false;
      }

      _createClass(UpdateblockComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          //  for map data
          this.store.select(_selectors_map_selectors__WEBPACK_IMPORTED_MODULE_2__["getListState"]).subscribe(function (data) {
            _this2.information = data;
            console.log(_this2.information.error !== 'Unable to geocode');

            if (_this2.information.error !== 'Unable to geocode' && data.length !== 0) {
              _this2.store.dispatch(new _actions_report_actions__WEBPACK_IMPORTED_MODULE_3__["ReportData"](data['address'].country));

              _this2.store.dispatch(new _actions_global_report_actions__WEBPACK_IMPORTED_MODULE_6__["GlobalReportData"]());

              _this2.RLoading$ = _this2.store.select(_selectors_report_selectors__WEBPACK_IMPORTED_MODULE_4__["getRLoadingState"]);
              _this2.GRLoading$ = _this2.store.select(_selectors_global_report_selectors__WEBPACK_IMPORTED_MODULE_5__["getGRLoadingState"]);
            }
          });
          this.loading$ = this.store.select(_selectors_map_selectors__WEBPACK_IMPORTED_MODULE_2__["getLoadingState"]);
          this.store.dispatch(new _actions_map_actions__WEBPACK_IMPORTED_MODULE_1__["LoadData"]([85.01220703125, 28.594168506232606])); //for report

          this.store.select(_selectors_report_selectors__WEBPACK_IMPORTED_MODULE_4__["getRListState"]).subscribe(function (data) {
            _this2.report = data;
          }); //for global report

          this.store.select(_selectors_global_report_selectors__WEBPACK_IMPORTED_MODULE_5__["getGRListState"]).subscribe(function (data) {
            _this2.globalReport = data;
          });
        }
      }, {
        key: "mapClicked",
        value: function mapClicked($event) {
          this.report = {};
          this.globalReport = {};
          this.store.dispatch(new _actions_map_actions__WEBPACK_IMPORTED_MODULE_1__["LoadData"]($event));
          this.showInfo = true;
        }
      }]);

      return UpdateblockComponent;
    }();

    UpdateblockComponent.ɵfac = function UpdateblockComponent_Factory(t) {
      return new (t || UpdateblockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]));
    };

    UpdateblockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateblockComponent,
      selectors: [["app-updateblock"]],
      decls: 3,
      vars: 1,
      consts: [[1, "container-fluid", "mt-3"], [3, "mapClickEvent"], ["class", "mt-2 col-lg-6 col-md-12 information", 4, "ngIf"], [1, "mt-2", "col-lg-6", "col-md-12", "information"], [1, "rounded", "bg-bluelight", "h-100", "overflow-hidden"], [1, "mt-2", "col-lg-12", "col-md-12"], ["class", "loader", 4, "ngIf"], [1, "rounded", "bg-bluelight", "p-4", "h-100"], [1, "mb-3", "border-bottom", "pb-2"], [1, "d-inline-block", "wi-100"], [1, "h5", "mb-0", "font-weight-bold", "head-color"], [1, "cross", 3, "click"], [1, "clearfix"], [1, "mb-3", "row"], [1, "col-6"], [1, "font-weight-bold", "h5"], [1, "mb-3", "small-xs"], [1, "invisible"], [1, ""], [1, "h3", "m-0", "font-weight-bold", "d-inline-block"], [1, "mt-3"], [1, "invisible", "small-xs", "mb-3"], ["target", "_blank", "href", "https://coronavirus.jhu.edu/map.html", 1, "text-blue"], [1, "loader"]],
      template: function UpdateblockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-map", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClickEvent", function UpdateblockComponent_Template_app_map_mapClickEvent_1_listener($event) {
            return ctx.mapClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UpdateblockComponent_div_2_Template, 63, 11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showInfo);
        }
      },
      directives: [_map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
      styles: [".nav.nav-tabs.nav-fill[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav.nav-tabs.nav-fill[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\r\n  color: #2E384D;\r\n  background-color: #EEF3F5;\r\n  border-bottom: 2px solid #2E5BFF;\r\n}\r\n\r\n.nav.nav-tabs.nav-fill[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  outline: none;\r\n  border-radius: 0;\r\n  color: #8798AD;\r\n  border-color: transparent;\r\n  text-decoration: none;\r\n}\r\n\r\n.h5[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.hospital-title[_ngcontent-%COMP%], .info-title[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n}\r\n\r\n.info-title[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n}\r\n\r\n.align-self-center[_ngcontent-%COMP%] {\r\n  align-self: center !important;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n  border-style: none;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  background-color: #EEF3F5 !important;\r\n}\r\n\r\n.text-danger[_ngcontent-%COMP%] {\r\n  color: rgb(51, 172, 46);\r\n}\r\n\r\n.align-self-center[_ngcontent-%COMP%] {\r\n  align-self: center !important;\r\n}\r\n\r\n.media-body[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.nav-tabs[_ngcontent-%COMP%] {\r\n  border-bottom: none;\r\n}\r\n\r\n.information[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.information-head[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n}\r\n\r\n.cross[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  cursor: pointer;\r\n  color: red;\r\n  float: right;\r\n}\r\n\r\n.wi-100[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.cross[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.text-blue[_ngcontent-%COMP%] {\r\n  color: #2E5BFF;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%] {\r\n  border: 5px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 5px solid #3498db;\r\n  width: 50px;\r\n  height: 50px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;\r\n  position: absolute;\r\n  top: 1%;\r\n  left: 50%;\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGVibG9jay91cGRhdGVibG9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFFRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBRUUsNkJBQTZCO0FBQy9COztBQUVBO0VBRUUsT0FBTztBQUNUOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztBQUNYOztBQUVBLFdBQVc7O0FBQ1g7RUFDRTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VwZGF0ZWJsb2NrL3VwZGF0ZWJsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2Lm5hdi10YWJzLm5hdi1maWxsIC5uYXYtbGluay5hY3RpdmUsIC5uYXYubmF2LXRhYnMubmF2LWZpbGwgLm5hdi1saW5rOmhvdmVyIHtcclxuICBjb2xvcjogIzJFMzg0RDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVGM0Y1O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMkU1QkZGO1xyXG59XHJcblxyXG4ubmF2Lm5hdi10YWJzLm5hdi1maWxsIC5uYXYtbGluayB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGNvbG9yOiAjODc5OEFEO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uaDUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmhvc3BpdGFsLXRpdGxlLCAuaW5mby10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5pbmZvLXRpdGxlIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5hbGlnbi1zZWxmLWNlbnRlciB7XHJcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5iZy13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRjNGNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXIge1xyXG4gIGNvbG9yOiByZ2IoNTEsIDE3MiwgNDYpO1xyXG59XHJcblxyXG4uYWxpZ24tc2VsZi1jZW50ZXIge1xyXG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVkaWEtYm9keSB7XHJcbiAgLW1zLWZsZXg6IDE7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLm5hdi10YWJzIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbi1oZWFkIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uY3Jvc3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLndpLTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jcm9zczpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLnRleHQtYmx1ZSB7XHJcbiAgY29sb3I6ICMyRTVCRkY7XHJcbn1cclxuXHJcblxyXG4ubG9hZGVyIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgIzM0OThkYjtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMSU7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4vKiBTYWZhcmkgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateblockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-updateblock',
          templateUrl: './updateblock.component.html',
          styleUrls: ['./updateblock.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/http-interceptor.core.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/http-interceptor.core.ts ***!
    \***********************************************/

  /*! exports provided: HttpConfigInterceptor, HttpConfigInterceptorProvider */

  /***/
  function srcAppCoreHttpInterceptorCoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function () {
      return HttpConfigInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptorProvider", function () {
      return HttpConfigInterceptorProvider;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HttpConfigInterceptor =
    /*#__PURE__*/
    function () {
      function HttpConfigInterceptor() {
        _classCallCheck(this, HttpConfigInterceptor);
      }

      _createClass(HttpConfigInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          req = req.clone({
            headers: req.headers.set('x-rapidapi-host', 'covid-19-data.p.rapidapi.com')
          });
          req = req.clone({
            headers: req.headers.set('x-rapidapi-key', '56fe406eacmsh9dcc7ea73142b62p12d551jsn1efdb0391da9')
          });
          return next.handle(req);
        }
      }]);

      return HttpConfigInterceptor;
    }();

    HttpConfigInterceptor.ɵfac = function HttpConfigInterceptor_Factory(t) {
      return new (t || HttpConfigInterceptor)();
    };

    HttpConfigInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpConfigInterceptor,
      factory: HttpConfigInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpConfigInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();

    var HttpConfigInterceptorProvider = {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: HttpConfigInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/effects/global-report.effects.ts":
  /*!**************************************************!*\
    !*** ./src/app/effects/global-report.effects.ts ***!
    \**************************************************/

  /*! exports provided: GlobalReportEffects */

  /***/
  function srcAppEffectsGlobalReportEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalReportEffects", function () {
      return GlobalReportEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _enum_map_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../enum/map.enum */
    "./src/app/enum/map.enum.ts");
    /* harmony import */


    var _actions_global_report_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../actions/global-report.actions */
    "./src/app/actions/global-report.actions.ts");
    /* harmony import */


    var _services_global_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/global-report.service */
    "./src/app/services/global-report.service.ts");

    var GlobalReportEffects = function GlobalReportEffects(actions$, globalReportService) {
      var _this3 = this;

      _classCallCheck(this, GlobalReportEffects);

      this.actions$ = actions$;
      this.globalReportService = globalReportService;
      this.loadGlobalData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_enum_map_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].report), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
        return _this3.globalReportService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
          return new _actions_global_report_actions__WEBPACK_IMPORTED_MODULE_6__["GlobalReportDataSuccess"](data[0]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_global_report_actions__WEBPACK_IMPORTED_MODULE_6__["GlobalReportDataFailure"](error));
        }));
      }));
    };

    GlobalReportEffects.ɵfac = function GlobalReportEffects_Factory(t) {
      return new (t || GlobalReportEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_global_report_service__WEBPACK_IMPORTED_MODULE_7__["GlobalReportService"]));
    };

    GlobalReportEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GlobalReportEffects,
      factory: GlobalReportEffects.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], GlobalReportEffects.prototype, "loadGlobalData$", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GlobalReportEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
        }, {
          type: _services_global_report_service__WEBPACK_IMPORTED_MODULE_7__["GlobalReportService"]
        }];
      }, {
        loadGlobalData$: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/effects/map.effects.ts":
  /*!****************************************!*\
    !*** ./src/app/effects/map.effects.ts ***!
    \****************************************/

  /*! exports provided: MapEffects */

  /***/
  function srcAppEffectsMapEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapEffects", function () {
      return MapEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _actions_map_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/map.actions */
    "./src/app/actions/map.actions.ts");
    /* harmony import */


    var _enum_map_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../enum/map.enum */
    "./src/app/enum/map.enum.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_map_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/map.service */
    "./src/app/services/map.service.ts");

    var MapEffects = function MapEffects(actions$, mapService) {
      var _this4 = this;

      _classCallCheck(this, MapEffects);

      this.actions$ = actions$;
      this.mapService = mapService;
      this.loadData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_enum_map_enum__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].get), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (data) {
        return _this4.mapService.get(data.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
          return new _actions_map_actions__WEBPACK_IMPORTED_MODULE_3__["LoadDataSuccess"](data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_map_actions__WEBPACK_IMPORTED_MODULE_3__["LoadDataFailure"](error));
        }));
      }));
    };

    MapEffects.ɵfac = function MapEffects_Factory(t) {
      return new (t || MapEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_map_service__WEBPACK_IMPORTED_MODULE_7__["MapService"]));
    };

    MapEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MapEffects,
      factory: MapEffects.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], MapEffects.prototype, "loadData$", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
        }, {
          type: _services_map_service__WEBPACK_IMPORTED_MODULE_7__["MapService"]
        }];
      }, {
        loadData$: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/effects/report.effects.ts":
  /*!*******************************************!*\
    !*** ./src/app/effects/report.effects.ts ***!
    \*******************************************/

  /*! exports provided: ReportEffects */

  /***/
  function srcAppEffectsReportEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportEffects", function () {
      return ReportEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _actions_report_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/report.actions */
    "./src/app/actions/report.actions.ts");
    /* harmony import */


    var _enum_map_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../enum/map.enum */
    "./src/app/enum/map.enum.ts");
    /* harmony import */


    var _services_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/report.service */
    "./src/app/services/report.service.ts");

    var ReportEffects = function ReportEffects(actions$, reportService) {
      var _this5 = this;

      _classCallCheck(this, ReportEffects);

      this.actions$ = actions$;
      this.reportService = reportService;
      this.loadData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_enum_map_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].report), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (data) {
        return _this5.reportService.get(data.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
          return new _actions_report_actions__WEBPACK_IMPORTED_MODULE_5__["ReportDataSuccess"](data[0]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_report_actions__WEBPACK_IMPORTED_MODULE_5__["ReportDataFailure"](error));
        }));
      }));
    };

    ReportEffects.ɵfac = function ReportEffects_Factory(t) {
      return new (t || ReportEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"]));
    };

    ReportEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ReportEffects,
      factory: ReportEffects.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], ReportEffects.prototype, "loadData$", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
        }, {
          type: _services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"]
        }];
      }, {
        loadData$: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/enum/map.enum.ts":
  /*!**********************************!*\
    !*** ./src/app/enum/map.enum.ts ***!
    \**********************************/

  /*! exports provided: ActionTypes */

  /***/
  function srcAppEnumMapEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["get"] = "get";
      ActionTypes["get_success"] = "get success";
      ActionTypes["get_failure"] = "get failure";
      ActionTypes["report"] = "report";
      ActionTypes["report_success"] = "report success";
      ActionTypes["report_failure"] = "report failure";
      ActionTypes["global_report"] = "global report";
      ActionTypes["global_report_success"] = "global report success";
      ActionTypes["global_report_failure"] = "global report failure";
    })(ActionTypes || (ActionTypes = {}));
    /***/

  },

  /***/
  "./src/app/reducers/global-report.reducers.ts":
  /*!****************************************************!*\
    !*** ./src/app/reducers/global-report.reducers.ts ***!
    \****************************************************/

  /*! exports provided: globalReportReducer */

  /***/
  function srcAppReducersGlobalReportReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "globalReportReducer", function () {
      return globalReportReducer;
    });
    /* harmony import */


    var _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../enum/map.enum */
    "./src/app/enum/map.enum.ts");

    var initialState = {
      list: [],
      loading: false,
      error: undefined
    };

    function globalReportReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].global_report:
          return Object.assign(Object.assign({}, state), {
            loading: true
          });

        case _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].global_report_success:
          return Object.assign(Object.assign({}, state), {
            list: action.payload,
            loading: false
          });

        case _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].global_report_failure:
          return Object.assign(Object.assign({}, state), {
            error: action.payload,
            loading: false
          });

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/reducers/map.reducers.ts":
  /*!******************************************!*\
    !*** ./src/app/reducers/map.reducers.ts ***!
    \******************************************/

  /*! exports provided: mapReducer */

  /***/
  function srcAppReducersMapReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mapReducer", function () {
      return mapReducer;
    });
    /* harmony import */


    var _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../enum/map.enum */
    "./src/app/enum/map.enum.ts");

    var initialState = {
      list: [],
      loading: false,
      error: undefined
    };

    function mapReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].get:
          return Object.assign(Object.assign({}, state), {
            loading: true
          });

        case _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].get_success:
          return Object.assign(Object.assign({}, state), {
            list: action.payload,
            loading: false
          });

        case _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].get_failure:
          return Object.assign(Object.assign({}, state), {
            error: action.payload,
            loading: false
          });

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/reducers/report.reducers.ts":
  /*!*********************************************!*\
    !*** ./src/app/reducers/report.reducers.ts ***!
    \*********************************************/

  /*! exports provided: reportReducer */

  /***/
  function srcAppReducersReportReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reportReducer", function () {
      return reportReducer;
    });
    /* harmony import */


    var _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../enum/map.enum */
    "./src/app/enum/map.enum.ts");

    var initialState = {
      list: [],
      loading: false,
      error: undefined
    };

    function reportReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].report:
          return Object.assign(Object.assign({}, state), {
            loading: true
          });

        case _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].report_success:
          return Object.assign(Object.assign({}, state), {
            list: action.payload,
            loading: false
          });

        case _enum_map_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].report_failure:
          return Object.assign(Object.assign({}, state), {
            error: action.payload,
            loading: false
          });

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/selectors/global-report.selectors.ts":
  /*!******************************************************!*\
    !*** ./src/app/selectors/global-report.selectors.ts ***!
    \******************************************************/

  /*! exports provided: getGlobalReportState, getGRListState, getGRLoadingState, getGRErrorState */

  /***/
  function srcAppSelectorsGlobalReportSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getGlobalReportState", function () {
      return getGlobalReportState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getGRListState", function () {
      return getGRListState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getGRLoadingState", function () {
      return getGRLoadingState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getGRErrorState", function () {
      return getGRErrorState;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var getGlobalReportState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('global_report');
    var getGRListState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getGlobalReportState, function (state) {
      return state.list;
    });
    var getGRLoadingState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getGlobalReportState, function (state) {
      return state.loading;
    });
    var getGRErrorState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getGlobalReportState, function (state) {
      return state.error;
    });
    /***/
  },

  /***/
  "./src/app/selectors/map.selectors.ts":
  /*!********************************************!*\
    !*** ./src/app/selectors/map.selectors.ts ***!
    \********************************************/

  /*! exports provided: getMapState, getListState, getLoadingState, getErrorState */

  /***/
  function srcAppSelectorsMapSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMapState", function () {
      return getMapState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getListState", function () {
      return getListState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLoadingState", function () {
      return getLoadingState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getErrorState", function () {
      return getErrorState;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var getMapState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('map');
    var getListState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMapState, function (state) {
      return state.list;
    });
    var getLoadingState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMapState, function (state) {
      return state.loading;
    });
    var getErrorState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMapState, function (state) {
      return state.error;
    });
    /***/
  },

  /***/
  "./src/app/selectors/report.selectors.ts":
  /*!***********************************************!*\
    !*** ./src/app/selectors/report.selectors.ts ***!
    \***********************************************/

  /*! exports provided: getReportState, getRListState, getRLoadingState, getRErrorState */

  /***/
  function srcAppSelectorsReportSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getReportState", function () {
      return getReportState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRListState", function () {
      return getRListState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRLoadingState", function () {
      return getRLoadingState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRErrorState", function () {
      return getRErrorState;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var getReportState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('report');
    var getRListState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportState, function (state) {
      return state.list;
    });
    var getRLoadingState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportState, function (state) {
      return state.loading;
    });
    var getRErrorState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportState, function (state) {
      return state.error;
    });
    /***/
  },

  /***/
  "./src/app/services/global-report.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/global-report.service.ts ***!
    \***************************************************/

  /*! exports provided: GlobalReportService */

  /***/
  function srcAppServicesGlobalReportServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalReportService", function () {
      return GlobalReportService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var GlobalReportService =
    /*#__PURE__*/
    function () {
      function GlobalReportService(http) {
        _classCallCheck(this, GlobalReportService);

        this.http = http;
        this.url = 'https://covid-19-data.p.rapidapi.com/';
      }

      _createClass(GlobalReportService, [{
        key: "get",
        value: function get() {
          return this.http.get(this.url + 'totals').pipe();
        }
      }]);

      return GlobalReportService;
    }();

    GlobalReportService.ɵfac = function GlobalReportService_Factory(t) {
      return new (t || GlobalReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    GlobalReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GlobalReportService,
      factory: GlobalReportService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/map.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/map.service.ts ***!
    \*****************************************/

  /*! exports provided: MapService */

  /***/
  function srcAppServicesMapServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapService", function () {
      return MapService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MapService =
    /*#__PURE__*/
    function () {
      function MapService(http) {
        _classCallCheck(this, MapService);

        this.http = http;
        this.url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&';
      }

      _createClass(MapService, [{
        key: "get",
        value: function get(params) {
          return this.http.get(this.url + 'lon=' + params[0] + '&lat=' + params[1]).pipe();
        }
      }]);

      return MapService;
    }();

    MapService.ɵfac = function MapService_Factory(t) {
      return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MapService,
      factory: MapService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/report.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/report.service.ts ***!
    \********************************************/

  /*! exports provided: ReportService */

  /***/
  function srcAppServicesReportServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportService", function () {
      return ReportService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ReportService =
    /*#__PURE__*/
    function () {
      function ReportService(http) {
        _classCallCheck(this, ReportService);

        this.http = http;
        this.url = 'https://covid-19-data.p.rapidapi.com/';
      }

      _createClass(ReportService, [{
        key: "get",
        value: function get(params) {
          return this.http.get(this.url + 'country?name=' + params).pipe();
        }
      }, {
        key: "global",
        value: function global() {
          return this.http.get(this.url + 'totals').pipe();
        }
      }]);

      return ReportService;
    }();

    ReportService.ɵfac = function ReportService_Factory(t) {
      return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ReportService,
      factory: ReportService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\office_project\covid-19\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map