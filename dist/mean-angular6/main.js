<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-10\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-1\">\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\">\n\t\t\t\t\t\t\t\tLogin\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-1\">\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\">\n\t\t\t\t\t\t\t\tSignup\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n          </div>\n          <div align=\"middle\">\n            <img align=\"middle\" width=\"300px\" alt=\"Plus-One-Logo\" src=\"../assets/plus-one-logo.png\">\n          </div>\n\t\t\t\t</div>\n      </div>\n      <br>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-4\">\n\t\t\t\t\t\t\t<img width=\"340\" alt=\"Sample Preferences\" src=\"../assets/sample-match.png\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t</div>\n          </div>\n          <br>\n          <br>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-6\">\n\t\t\t\t\t\t\t<img width=\"340px\" alt=\"Sample Chat\" src=\"../assets/sample-chat.png\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<br>\n<br>\n<br>\n<br>\n\n\n<!-- <div style=\"text-align:center\">\n  <h1></h1>\n  <img width=\"300px\" alt=\"Plus-One-Logo\" src=\"../assets/plus-one-logo.png\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/os1/Documents/Programming/Javascript/OperationSpark/Immersion/Plus-One/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-10\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-1\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">\n\t\t\t\t\t\t\t\tLogin\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-1\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">\n\t\t\t\t\t\t\t\tSignup\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n          </div>\n          <div align=\"middle\">\n            <img align=\"middle\" width=\"150px\" alt=\"Plus-One-Logo\" src=\"../assets/plus-one-logo.png\">\n          </div>\n\t\t\t\t</div>\n      </div>\n      <br>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-4\">\n\t\t\t\t\t\t\t<img width=\"340\" alt=\"Sample Preferences\" src=\"../assets/sample-match.png\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t</div>\n          </div>\n          <br>\n          <br>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-6\">\n\t\t\t\t\t\t\t<img width=\"340px\" alt=\"Sample Chat\" src=\"../assets/sample-chat.png\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<br>\n<br>\n<br>\n<br>\n<div align=\"middle\"><pre>BELOW IS THE SIGNUP COMPONENT TEMPLATE</pre></div>\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div align=\"middle\" class=\"col-md-12\">\n\t\t\t<img width=\"150px\" alt=\"plus-one-logo\" src=\"../../assets/plus-one-logo.png\" />\n\t\t</div>\n\t</div>\n\t<br>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h5 align=\"middle\" class=\"card-header\">\n\t\t\t\t\tCreate your account\n\t\t\t\t</h5>\n\t\t\t\t<div class=\"card-body\">\n\n          <form role=\"form\">\n\t\t\t\t\t\t<div class=\"form-group\">\n               \n              <label for=\"exampleInputEmail1\">\n                First Name\n              </label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"exampleInputText\" />\n\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">\n                Last Name\n              </label>\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputText\" />\n            </div>\t\n\t\t\t\t\t\t<div class=\"form-group\">\n               \n              <label for=\"exampleInputEmail1\">\n                Email address\n              </label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" />\n            </div>\n            <div class=\"form-group\">          \n              <label for=\"exampleInputPassword1\">\n                Password\n              </label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" />\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">\n              Login\n            </button>\n          </form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t</div>\n\t</div>\n</div>\n<br><br><br><br><br><br>\n<div align=\"middle\"><pre>BELOW IS THE LOGIN COMPONENT TEMPLATE</pre></div>\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div align=\"middle\" class=\"col-md-12\">\n\t\t\t<img width=\"150px\" alt=\"plus-one-logo\" src=\"../../assets/plus-one-logo.png\" />\n\t\t</div>\n\t</div>\n\t<br>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h5 align=\"middle\" class=\"card-header\">\n\t\t\t\t\tSign in to your account\n\t\t\t\t</h5>\n\t\t\t\t<div class=\"card-body\">\n\n          <form role=\"form\">\n            <div class=\"form-group\">\n               \n              <label for=\"exampleInputEmail1\">\n                Email address\n              </label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" />\n            </div>\n            <div class=\"form-group\">\n               \n              <label for=\"exampleInputPassword1\">\n                Password\n              </label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" />\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">\n              Login\n            </button>\n          </form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t</div>\n\t</div>\n</div>\n<br><br><br><br><br>\n<div align=\"middle\"><pre>BELOW IS THE CHAT COMPONENT TEMPLATE</pre></div>\n\n<br>\n<br>\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<h5 align=\"middle\" class=\"card-header\">\n\t\t\t\t\t\t\t\t\tChat\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<p align=\"middle\" class=\"card-text\">\n\t\t\t\t\t\t\t\t\t\tChat from SendBird here\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\tChat from SendBird here\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\tChat from SendBird here\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\tChat from SendBird here\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\tChat from SendBird here\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\tChat from SendBird here\n\t\t\t\t\t\t\t\t\t\t<br>\t\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<form role=\"form\">\n\t\t\t\t\t\t\t\t\t\t<div style=\"display:inline\" class=\"form-group\">\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t<input style=\"display:inline\" type=\"text\" class=\"form-control\" id=\"exampleInputText\" placeholder=\"Your Message Here\" />\n\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t<button style=\"display:inline\" type=\"submit\" class=\"btn btn-primary\">\n\t\t\t\t\t\t\t\t\t\t\t\tSend\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-9\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\t\t\t \n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">\n\t\t\t\t\t\t\t\tKill Chat\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<br>\n<br>\n<br>\n<br>\n<br>\n<div align=\"middle\"><pre>BELOW IS THE LOGGED-IN HOME COMPONENT TEMPLATE</pre></div>\n<br>\n<br>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"row\">\n          <div align=\"middle\" class=\"col-md-12\">\n            <img width=\"150px\" alt=\"plus-one-logo\" src=\"../../assets/plus-one-logo.png\" />\n          </div>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div align=\"middle\" class=\"card\">\n              <h5 class=\"card-header\">\n                Dynamic User Name\n              </h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n            <div align=\"middle\" class=\"card\">\n              <h5 align=\"middle\" class=\"card-header\">\n                Favorite Foods\n              </h5>\n              <div align=\"middle\" class=\"card-body\">\n                <p class=\"card-text\">\n                  Dynamic Favorite Foods By User\n                </p>\n              </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n            <div class=\"card\">\n              <h5 align=\"middle\" class=\"card-header\">\n                Favorite Conversation Topics\n              </h5>\n              <div class=\"card-body\">\n                <p align=\"middle\" class=\"card-text\">\n                  Dynamic Conversation Topics By User\n                </p>\n              </div>             \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n\t\t\t\t<br>\n\t\t\t\t<br>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n          </div>\n          <div class=\"col-md-2\">\n             \n            <button type=\"button\" class=\"btn btn-primary\">\n              Logout\n            </button>\n          </div>\n\t\t\t\t</div>\n\t\t\t\t<br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <h5 align=\"middle\" class=\"card-header\">\n                    Cravings\n                  </h5>\n                </div>\n              </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\tFilipino\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\tPizza\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\tEthiopian\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\t\tMexican\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\t  Vietnamese\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\t\tOther\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <h5 align=\"middle\" class=\"card-header\">\n                    Price\n                  </h5>\n                </div>\n              </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\t$\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\t$$\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\t$$$\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>           \n\t\t\t\t<br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <h5 align=\"middle\" class=\"card-header\">\n                    Attire\n                  </h5>\n                </div>\n              </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button align=\"middle\" type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\tSporty\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button align=\"middle\" type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\tCasual\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button align=\"middle\" type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\tBusiness\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t<br>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n          </div>\n          <div class=\"col-md-2\">\n             \n            <button type=\"button\" class=\"btn btn-primary btn-block\">\n              Match Me\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br><br><br><br><br>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <h5 align=\"middle\" class=\"card-header\">\n                    Chat\n                  </h5>\n                  <div class=\"card-body\">\n                    <p align=\"middle\" class=\"card-text\">\n                      Chat from SendBird here\n                      <br>\n                      Chat from SendBird here\n                      <br>\n                      Chat from SendBird here\n                      <br>\n                      Chat from SendBird here\n                      <br>\n                      Chat from SendBird here\n                      <br>\n                      Chat from SendBird here\n                      <br>\t\n                    </p>\n                  </div>\n                  <div class=\"card-footer\">\n                    \n                    <form role=\"form\">\n                      <div style=\"display:inline\" class=\"form-group\">\t\t\t\t\t\t\t\t\t\t\t \n                        <input style=\"display:inline\" type=\"text\" class=\"form-control\" id=\"exampleInputText\" placeholder=\"Your Message Here\" />\n                        <button style=\"display:inline\" type=\"submit\" class=\"btn btn-primary\">\n                          Send\n                        </button>\n                      </div>\t\t\t\t\t\t\t\t\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-9\">\n              </div>\n              <div class=\"col-md-3\">\t\t\t \n                <button type=\"submit\" class=\"btn btn-primary\">\n                  Kill Chat\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"row\">\n          <div align=\"middle\" class=\"col-md-12\">\n            <img width=\"150px\" alt=\"plus-one-logo\" src=\"../../assets/plus-one-logo.png\" />\n          </div>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div align=\"middle\" class=\"card\">\n              <h5 class=\"card-header\">\n                Dynamic User Name\n              </h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n            <div align=\"middle\" class=\"card\">\n              <h5 align=\"middle\" class=\"card-header\">\n                Favorite Foods\n              </h5>\n              <div align=\"middle\" class=\"card-body\">\n                <p class=\"card-text\">\n                  Dynamic Favorite Foods By User\n                </p>\n              </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n            <div class=\"card\">\n              <h5 align=\"middle\" class=\"card-header\">\n                Favorite Conversation Topics\n              </h5>\n              <div class=\"card-body\">\n                <p align=\"middle\" class=\"card-text\">\n                  Dynamic Conversation Topics By User\n                </p>\n              </div>             \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n\t\t\t\t<br>\n\t\t\t\t<br>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n          </div>\n          <div class=\"col-md-2\">\n             \n            <button type=\"button\" class=\"btn btn-primary\">\n              Logout\n            </button>\n          </div>\n\t\t\t\t</div>\n\t\t\t\t<br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <h5 align=\"middle\" class=\"card-header\">\n                    Cravings\n                  </h5>\n                </div>\n              </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\tFilipino\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\tPizza\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\tEthiopian\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\t\tMexican\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\t  Vietnamese\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\t\tOther\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <h5 align=\"middle\" class=\"card-header\">\n                    Price\n                  </h5>\n                </div>\n              </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\t$\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\t$$\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\t$$$\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>           \n\t\t\t\t<br>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <h5 align=\"middle\" class=\"card-header\">\n                    Attire\n                  </h5>\n                </div>\n              </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button align=\"middle\" type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\tSporty\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button align=\"middle\" type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\tCasual\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div align=\"middle\" class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<button align=\"middle\" type=\"button\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\t\tBusiness\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t<br>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n          </div>\n          <div class=\"col-md-2\">\n             \n            <button type=\"button\" class=\"btn btn-primary btn-block\">\n              Match Me\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br><br><br><br><br>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div align=\"middle\" class=\"col-md-12\">\n\t\t\t<img width=\"150px\" alt=\"plus-one-logo\" src=\"../../assets/plus-one-logo.png\" />\n\t\t</div>\n\t</div>\n\t<br>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h5 align=\"middle\" class=\"card-header\">\n\t\t\t\t\tSign in to your account\n\t\t\t\t</h5>\n\t\t\t\t<div class=\"card-body\">\n\n          <form role=\"form\">\n            <div class=\"form-group\">\n               \n              <label for=\"exampleInputEmail1\">\n                Email address\n              </label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" />\n            </div>\n            <div class=\"form-group\">\n               \n              <label for=\"exampleInputPassword1\">\n                Password\n              </label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" />\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">\n              Login\n            </button>\n          </form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div align=\"middle\" class=\"col-md-12\">\n\t\t\t<img width=\"300px\" alt=\"plus-one-logo\" src=\"../../assets/plus-one-logo.png\" />\n\t\t</div>\n\t</div>\n\t<br>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h5 align=\"middle\" class=\"card-header\">\n\t\t\t\t\tCreate your account\n\t\t\t\t</h5>\n\t\t\t\t<div class=\"card-body\">\n\n          <form role=\"form\">\n\t\t\t\t\t\t<div class=\"form-group\">\n               \n              <label for=\"exampleInputEmail1\">\n                First Name\n              </label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"exampleInputText\" />\n\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">\n                Last Name\n              </label>\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputText\" />\n            </div>\t\n\t\t\t\t\t\t<div class=\"form-group\">\n               \n              <label for=\"exampleInputEmail1\">\n                Email address\n              </label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" />\n            </div>\n            <div class=\"form-group\">          \n              <label for=\"exampleInputPassword1\">\n                Password\n              </label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" />\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">\n              Login\n            </button>\n          </form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t</div>\n\t</div>\n</div>\n<br><br><br><br><br><br>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/os1/Documents/Programming/Javascript/OperationSpark/PLUS-ONE-FINAL/PlusOne/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
>>>>>>> 909386f65979aeead0f2d81197e054e2bac1eda6
//# sourceMappingURL=main.js.map