(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Mais<span>Vendas</span></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"livros\">Livros <span class=\"sr-only\">(current)</span></a>\n        </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"clientes\">Clientes <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"vendas\">Vendas <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"relatorios\">Relatorios <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    \n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>"

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
        this.title = 'ProjetoMaisVendas';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _livros_livros_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./livros/livros.component */ "./src/app/livros/livros.component.ts");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/clientes/clientes.component.ts");
/* harmony import */ var _vendas_vendas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendas/vendas.component */ "./src/app/vendas/vendas.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _fornecedor_fornecedor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fornecedor/fornecedor.component */ "./src/app/fornecedor/fornecedor.component.ts");
/* harmony import */ var _fornecedor_fornecedor_form_fornecedor_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fornecedor/fornecedor-form/fornecedor-form.component */ "./src/app/fornecedor/fornecedor-form/fornecedor-form.component.ts");
/* harmony import */ var _fornecedor_fornecedor_detalhe_fornecedor_detalhe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fornecedor/fornecedor-detalhe/fornecedor-detalhe.component */ "./src/app/fornecedor/fornecedor-detalhe/fornecedor-detalhe.component.ts");
/* harmony import */ var _fornecedor_fornecedor_lista_fornecedor_lista_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fornecedor/fornecedor-lista/fornecedor-lista.component */ "./src/app/fornecedor/fornecedor-lista/fornecedor-lista.component.ts");
/* harmony import */ var _contato_contato_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contato/contato.component */ "./src/app/contato/contato.component.ts");
/* harmony import */ var _relatorios_relatorios_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./relatorios/relatorios.component */ "./src/app/relatorios/relatorios.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _livros_livros_component__WEBPACK_IMPORTED_MODULE_7__["LivrosComponent"],
                _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_8__["ClientesComponent"],
                _vendas_vendas_component__WEBPACK_IMPORTED_MODULE_9__["VendasComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _fornecedor_fornecedor_component__WEBPACK_IMPORTED_MODULE_11__["FornecedorComponent"],
                _fornecedor_fornecedor_form_fornecedor_form_component__WEBPACK_IMPORTED_MODULE_12__["FornecedorFormComponent"],
                _fornecedor_fornecedor_detalhe_fornecedor_detalhe_component__WEBPACK_IMPORTED_MODULE_13__["FornecedorDetalheComponent"],
                _fornecedor_fornecedor_lista_fornecedor_lista_component__WEBPACK_IMPORTED_MODULE_14__["FornecedorListaComponent"],
                _contato_contato_component__WEBPACK_IMPORTED_MODULE_15__["ContatoComponent"],
                _relatorios_relatorios_component__WEBPACK_IMPORTED_MODULE_16__["RelatoriosComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _livros_livros_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./livros/livros.component */ "./src/app/livros/livros.component.ts");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/clientes/clientes.component.ts");
/* harmony import */ var _vendas_vendas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendas/vendas.component */ "./src/app/vendas/vendas.component.ts");
/* harmony import */ var _relatorios_relatorios_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./relatorios/relatorios.component */ "./src/app/relatorios/relatorios.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'livros', component: _livros_livros_component__WEBPACK_IMPORTED_MODULE_4__["LivrosComponent"] },
    { path: 'clientes', component: _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_5__["ClientesComponent"] },
    { path: 'relatorios', component: _relatorios_relatorios_component__WEBPACK_IMPORTED_MODULE_7__["RelatoriosComponent"] },
    { path: 'vendas', component: _vendas_vendas_component__WEBPACK_IMPORTED_MODULE_6__["VendasComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/clientes/clientes.component.css":
/*!*************************************************!*\
  !*** ./src/app/clientes/clientes.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clientes/clientes.component.html":
/*!**************************************************!*\
  !*** ./src/app/clientes/clientes.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <hr>\n    <h2>Menu Clientes</h2>\n    <hr>\n  <div class=\"row\">\n    \n    <!--incio primeira linha-->\n    <div class=\" col-md-4\">\n        <div class=\"card text-white bg-primary mb-3\" style=\"max-width: 16rem;\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\"><i class=\"far fa-edit 5x\"></i>Novo</h2>\n              \n            </div>\n          </div>\n    </div>\n    <div class=\" col-md-4\">\n        <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 16rem;\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\"><i class=\"fas fa-list-ul 5x\"></i> Lista</h2>\n              <p class=\"card-text\"></p>\n            </div>\n          </div>\n    </div>\n    <div class=\" col-md-4\">\n        <div class=\"card text-white bg-success mb-3\" style=\"max-width: 16rem;\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\"><i class=\"fas fa-search\"></i>Pesquisar</h2>\n              <p class=\"card-text\"></p>\n            </div>\n          </div>\n    </div>\n    \n  </div>\n</div>\n\n<div class=\"container\">\n    <h3>Cadastro de Cliente</h3>\n    <hr>  \n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <form>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-12\">\n                    <label for=\"inputNome\">Nome</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputNome\">\n                </div>\n            </div>\n            <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"inputDataNascimento\">Data de Nascimento</label>\n                      <input type=\"text\" class=\"form-control\" id=\"inputDataNascimento\">\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"inputCPF\">CPF</label>\n                      <input type=\"text\" class=\"form-control\" id=\"inputCPF\">\n                    </div>\n            </div>\n            <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"inputMatricula\">Matricula</label>\n                      <input type=\"text\" class=\"form-control\" id=\"inputMatricula\">\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"inputPeríodo\">Período</label>\n                      <input type=\"text\" class=\"form-control\" id=\"inputPeríodo\">\n                    </div>\n            </div>\n            <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"inputTelefone1\">Telefone 1</label>\n                      <input type=\"text\" class=\"form-control\" id=\"inputTelefone1\">\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"inputTelefone2\">Telefone 2</label>\n                      <input type=\"text\" class=\"form-control\" id=\"inputTelefone2\">\n                    </div>\n            </div>\n            <h5>Endereço</h5>\n            <hr>\n            <div class=\"form-row\">\n                    <div class=\"form-group col-md-9\">\n                      <label for=\"inputRua\">Rua</label>\n                      <input type=\"text\" class=\"form-control\" id=\"inputMatricula\">\n                    </div>\n                    <div class=\"form-group col-md-3\">\n                      <label for=\"inputCep\">CEP</label>\n                      <input type=\"text\" class=\"form-control\" id=\"inputCep\">\n                    </div>\n            </div>\n            <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                            <label for=\"inputStatus\">Estado</label>\n                            <select id=\"inputStatus\" class=\"form-control\">\n                                <option selected> </option>\n                                <option value=\"1\">Acre</option>\n                                <option value=\"2\">Alagoas</option>\n                                <option value=\"3\">Amapá</option>\n                                <option value=\"3\">Amazonas</option>\n                                <option value=\"3\">Bahia</option>\n                                <option value=\"3\">Ceará</option>\n                                <option value=\"3\">Distrito Federal</option>\n                                <option value=\"3\">Espríto Santo</option>\n                                <option value=\"3\">Goiás</option>\n                                <option value=\"3\">Maranhão</option>\n                                <option value=\"3\">Mato Grosso</option>\n                                <option value=\"3\">Mato Grosso do Sul</option>\n                                <option value=\"3\">Minas Gerais</option>\n                                <option value=\"3\">Pará</option>\n                                <option value=\"3\">Paraíba</option>\n                                <option value=\"3\">Paraná</option>\n                                <option value=\"3\">Pernambuco</option>\n                                <option value=\"3\">Piauí</option>\n                                <option value=\"3\">Rio de Janeiro</option>\n                                <option value=\"3\">Rio Grande do Norte</option>\n                                <option value=\"3\">Rio Grande do Sul</option>\n                                <option value=\"3\">Rondônia</option>\n                                <option value=\"3\">Santa Cantarina</option>\n                                <option value=\"3\">São Paulo</option>\n                                <option value=\"3\">Sergipe</option>\n                                <option value=\"3\">Tocantins</option>\n                            </select>\n                    </div>\n                    <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                    <label for=\"inputStatus\">Cidade</label>\n                                    <select id=\"inputStatus\" class=\"form-control\">\n                                        <option selected> </option>\n                                        <option value=\"1\">Acre</option>\n                                        <option value=\"2\">Alagoas</option>\n                                        <option value=\"3\">Amapá</option>\n                                        <option value=\"3\">Amazonas</option>\n                                        <option value=\"3\">Bahia</option>\n                                        <option value=\"3\">Ceará</option>\n                                        <option value=\"3\">Distrito Federal</option>\n                                        <option value=\"3\">Espríto Santo</option>\n                                        <option value=\"3\">Goiás</option>\n                                        <option value=\"3\">Maranhão</option>\n                                        <option value=\"3\">Mato Grosso</option>\n                                        <option value=\"3\">Mato Grosso do Sul</option>\n                                        <option value=\"3\">Minas Gerais</option>\n                                        <option value=\"3\">Pará</option>\n                                        <option value=\"3\">Paraíba</option>\n                                        <option value=\"3\">Paraná</option>\n                                        <option value=\"3\">Pernambuco</option>\n                                        <option value=\"3\">Piauí</option>\n                                        <option value=\"3\">Rio de Janeiro</option>\n                                        <option value=\"3\">Rio Grande do Norte</option>\n                                        <option value=\"3\">Rio Grande do Sul</option>\n                                        <option value=\"3\">Rondônia</option>\n                                        <option value=\"3\">Santa Cantarina</option>\n                                        <option value=\"3\">São Paulo</option>\n                                        <option value=\"3\">Sergipe</option>\n                                        <option value=\"3\">Tocantins</option>\n                                    </select>\n                            </div>\n            </div>\n            <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"inputBairro\">Bairro</label>\n                      <input type=\"text\" class=\"form-control\" id=\"inputBairro\">\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"inputReferencia\">Ponto de Referencia</label>\n                      <input type=\"text\" class=\"form-control\" id=\"inputReferencia\">\n                    </div>\n            </div>\n            <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fas fa-sign-out-alt 3x\"></i>Salvar</button>\n                    </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/clientes/clientes.component.ts":
/*!************************************************!*\
  !*** ./src/app/clientes/clientes.component.ts ***!
  \************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
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

var ClientesComponent = /** @class */ (function () {
    function ClientesComponent() {
    }
    ClientesComponent.prototype.ngOnInit = function () {
    };
    ClientesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clientes',
            template: __webpack_require__(/*! ./clientes.component.html */ "./src/app/clientes/clientes.component.html"),
            styles: [__webpack_require__(/*! ./clientes.component.css */ "./src/app/clientes/clientes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientesComponent);
    return ClientesComponent;
}());



/***/ }),

/***/ "./src/app/contato/contato.component.css":
/*!***********************************************!*\
  !*** ./src/app/contato/contato.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contato/contato.component.html":
/*!************************************************!*\
  !*** ./src/app/contato/contato.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contato works!\n</p>\n"

/***/ }),

/***/ "./src/app/contato/contato.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contato/contato.component.ts ***!
  \**********************************************/
/*! exports provided: ContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoComponent", function() { return ContatoComponent; });
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

var ContatoComponent = /** @class */ (function () {
    function ContatoComponent() {
    }
    ContatoComponent.prototype.ngOnInit = function () {
    };
    ContatoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contato',
            template: __webpack_require__(/*! ./contato.component.html */ "./src/app/contato/contato.component.html"),
            styles: [__webpack_require__(/*! ./contato.component.css */ "./src/app/contato/contato.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContatoComponent);
    return ContatoComponent;
}());



/***/ }),

/***/ "./src/app/fornecedor/fornecedor-detalhe/fornecedor-detalhe.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/fornecedor/fornecedor-detalhe/fornecedor-detalhe.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fornecedor/fornecedor-detalhe/fornecedor-detalhe.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/fornecedor/fornecedor-detalhe/fornecedor-detalhe.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  fornecedor-detalhe works!\n</p>\n"

/***/ }),

/***/ "./src/app/fornecedor/fornecedor-detalhe/fornecedor-detalhe.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/fornecedor/fornecedor-detalhe/fornecedor-detalhe.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FornecedorDetalheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorDetalheComponent", function() { return FornecedorDetalheComponent; });
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

var FornecedorDetalheComponent = /** @class */ (function () {
    function FornecedorDetalheComponent() {
    }
    FornecedorDetalheComponent.prototype.ngOnInit = function () {
    };
    FornecedorDetalheComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fornecedor-detalhe',
            template: __webpack_require__(/*! ./fornecedor-detalhe.component.html */ "./src/app/fornecedor/fornecedor-detalhe/fornecedor-detalhe.component.html"),
            styles: [__webpack_require__(/*! ./fornecedor-detalhe.component.css */ "./src/app/fornecedor/fornecedor-detalhe/fornecedor-detalhe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FornecedorDetalheComponent);
    return FornecedorDetalheComponent;
}());



/***/ }),

/***/ "./src/app/fornecedor/fornecedor-form/fornecedor-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/fornecedor/fornecedor-form/fornecedor-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fornecedor/fornecedor-form/fornecedor-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/fornecedor/fornecedor-form/fornecedor-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  fornecedor-form works!\n</p>\n"

/***/ }),

/***/ "./src/app/fornecedor/fornecedor-form/fornecedor-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/fornecedor/fornecedor-form/fornecedor-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: FornecedorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorFormComponent", function() { return FornecedorFormComponent; });
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

var FornecedorFormComponent = /** @class */ (function () {
    function FornecedorFormComponent() {
    }
    FornecedorFormComponent.prototype.ngOnInit = function () {
    };
    FornecedorFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fornecedor-form',
            template: __webpack_require__(/*! ./fornecedor-form.component.html */ "./src/app/fornecedor/fornecedor-form/fornecedor-form.component.html"),
            styles: [__webpack_require__(/*! ./fornecedor-form.component.css */ "./src/app/fornecedor/fornecedor-form/fornecedor-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FornecedorFormComponent);
    return FornecedorFormComponent;
}());



/***/ }),

/***/ "./src/app/fornecedor/fornecedor-lista/fornecedor-lista.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/fornecedor/fornecedor-lista/fornecedor-lista.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fornecedor/fornecedor-lista/fornecedor-lista.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/fornecedor/fornecedor-lista/fornecedor-lista.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  fornecedor-lista works!\n</p>\n"

/***/ }),

/***/ "./src/app/fornecedor/fornecedor-lista/fornecedor-lista.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/fornecedor/fornecedor-lista/fornecedor-lista.component.ts ***!
  \***************************************************************************/
/*! exports provided: FornecedorListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorListaComponent", function() { return FornecedorListaComponent; });
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

var FornecedorListaComponent = /** @class */ (function () {
    function FornecedorListaComponent() {
    }
    FornecedorListaComponent.prototype.ngOnInit = function () {
    };
    FornecedorListaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fornecedor-lista',
            template: __webpack_require__(/*! ./fornecedor-lista.component.html */ "./src/app/fornecedor/fornecedor-lista/fornecedor-lista.component.html"),
            styles: [__webpack_require__(/*! ./fornecedor-lista.component.css */ "./src/app/fornecedor/fornecedor-lista/fornecedor-lista.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FornecedorListaComponent);
    return FornecedorListaComponent;
}());



/***/ }),

/***/ "./src/app/fornecedor/fornecedor.component.css":
/*!*****************************************************!*\
  !*** ./src/app/fornecedor/fornecedor.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fornecedor/fornecedor.component.html":
/*!******************************************************!*\
  !*** ./src/app/fornecedor/fornecedor.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  fornecedor works!\n</p>\n"

/***/ }),

/***/ "./src/app/fornecedor/fornecedor.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fornecedor/fornecedor.component.ts ***!
  \****************************************************/
/*! exports provided: FornecedorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorComponent", function() { return FornecedorComponent; });
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

var FornecedorComponent = /** @class */ (function () {
    function FornecedorComponent() {
    }
    FornecedorComponent.prototype.ngOnInit = function () {
    };
    FornecedorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fornecedor',
            template: __webpack_require__(/*! ./fornecedor.component.html */ "./src/app/fornecedor/fornecedor.component.html"),
            styles: [__webpack_require__(/*! ./fornecedor.component.css */ "./src/app/fornecedor/fornecedor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FornecedorComponent);
    return FornecedorComponent;
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

module.exports = ""

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

/***/ "./src/app/livros/livros.component.css":
/*!*********************************************!*\
  !*** ./src/app/livros/livros.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/livros/livros.component.html":
/*!**********************************************!*\
  !*** ./src/app/livros/livros.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <hr>\n    <h2>Menu Livros</h2>\n    <hr>\n  <div class=\"row\">\n    \n    <!--incio primeira linha-->\n    <div class=\" col-md-4\">\n        <div class=\"card text-white bg-primary mb-3\" style=\"max-width: 16rem;\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\"><i class=\"far fa-edit 5x\"></i>Novo</h2>\n              \n            </div>\n          </div>\n    </div>\n    <div class=\" col-md-4\">\n        <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 16rem;\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\"><i class=\"fas fa-list-ul 5x\"></i> Lista</h2>\n              <p class=\"card-text\"></p>\n            </div>\n          </div>\n    </div>\n    <div class=\" col-md-4\">\n        <div class=\"card text-white bg-success mb-3\" style=\"max-width: 16rem;\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\"><i class=\"fas fa-search\"></i>Pesquisar</h2>\n              <p class=\"card-text\"></p>\n            </div>\n          </div>\n    </div>\n    \n  </div>\n</div>\n\n  \n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/livros/livros.component.ts":
/*!********************************************!*\
  !*** ./src/app/livros/livros.component.ts ***!
  \********************************************/
/*! exports provided: LivrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivrosComponent", function() { return LivrosComponent; });
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

var LivrosComponent = /** @class */ (function () {
    function LivrosComponent() {
    }
    LivrosComponent.prototype.ngOnInit = function () {
    };
    LivrosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-livros',
            template: __webpack_require__(/*! ./livros.component.html */ "./src/app/livros/livros.component.html"),
            styles: [__webpack_require__(/*! ./livros.component.css */ "./src/app/livros/livros.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LivrosComponent);
    return LivrosComponent;
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

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4\">\n                <div class=\"content\">\n                    <hr>\n                    <h1><i class=\"fas fa-user fa 5x\"></i>Login</h1>\n                    <hr>\n                        <form>\n                            <div class=\"form-group\">\n                                <label for=\"inputEmail1\">Email </label>\n                                <input type=\"email\" class=\"form-control\" id=\"inputEmail1\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"inputPassword1\">Password</label>\n                                <input type=\"password\" class=\"form-control\" id=\"inputPassword1\">\n                            </div>\n                                <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fas fa-sign-out fa 5x\"></i>Entrar</button>\n                        </form>\n                    <hr>\n                </div>\n            </div>\n            <div class=\"col-md-4\"></div>\n        </div>\n    </div>\n</div>\n\n"

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

/***/ "./src/app/relatorios/relatorios.component.css":
/*!*****************************************************!*\
  !*** ./src/app/relatorios/relatorios.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/relatorios/relatorios.component.html":
/*!******************************************************!*\
  !*** ./src/app/relatorios/relatorios.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <hr>\n    <h2>Relatorios</h2>\n    <hr>\n  <div class=\"row\">\n    \n    <!--incio primeira linha-->\n    <div class=\" col-md-4\">\n        <div class=\"card text-white bg-primary mb-3\" style=\"max-width: 16rem;\">\n            <div class=\"card-header\"><h2 class=\"card-title\"><i class=\"far fa-edit 5x\"></i>Livros</h2></div>\n          </div>\n          \n    </div>\n    <div class=\" col-md-4\">\n        <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 16rem;\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\"><i class=\"fas fa-users\"></i> Clientes</h2>\n              <p class=\"card-text\"></p>\n            </div>\n          </div>\n    </div>\n    <div class=\" col-md-4\">\n        <div class=\"card text-white bg-success mb-3\" style=\"max-width: 16rem;\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\"><i class=\"fas fa-truck-loading\"></i> Vendas</h2>\n              <p class=\"card-text\"></p>\n            </div>\n          </div>\n    </div>\n\n    \n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/relatorios/relatorios.component.ts":
/*!****************************************************!*\
  !*** ./src/app/relatorios/relatorios.component.ts ***!
  \****************************************************/
/*! exports provided: RelatoriosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatoriosComponent", function() { return RelatoriosComponent; });
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

var RelatoriosComponent = /** @class */ (function () {
    function RelatoriosComponent() {
    }
    RelatoriosComponent.prototype.ngOnInit = function () {
    };
    RelatoriosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-relatorios',
            template: __webpack_require__(/*! ./relatorios.component.html */ "./src/app/relatorios/relatorios.component.html"),
            styles: [__webpack_require__(/*! ./relatorios.component.css */ "./src/app/relatorios/relatorios.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RelatoriosComponent);
    return RelatoriosComponent;
}());



/***/ }),

/***/ "./src/app/vendas/vendas.component.css":
/*!*********************************************!*\
  !*** ./src/app/vendas/vendas.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vendas/vendas.component.html":
/*!**********************************************!*\
  !*** ./src/app/vendas/vendas.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <h3>Vendas</h3>\n    <hr>\n    <form>\n        <div ></div>\n    </form>\n    \n\n</div>\n\n"

/***/ }),

/***/ "./src/app/vendas/vendas.component.ts":
/*!********************************************!*\
  !*** ./src/app/vendas/vendas.component.ts ***!
  \********************************************/
/*! exports provided: VendasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendasComponent", function() { return VendasComponent; });
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

var VendasComponent = /** @class */ (function () {
    function VendasComponent() {
    }
    VendasComponent.prototype.ngOnInit = function () {
    };
    VendasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vendas',
            template: __webpack_require__(/*! ./vendas.component.html */ "./src/app/vendas/vendas.component.html"),
            styles: [__webpack_require__(/*! ./vendas.component.css */ "./src/app/vendas/vendas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VendasComponent);
    return VendasComponent;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/cassio/workspace/ProjetoMaisVendas/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /home/cassio/workspace/ProjetoMaisVendas/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map