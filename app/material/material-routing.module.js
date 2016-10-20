"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // Login
    { path: 'login', component: LoginComponent },
    // Dashboard
    { path: 'dashboard', component: DashboardComponent },
    // Langs
    { path: 'langs', component: LangListComponent },
    { path: 'langs/:id', component: LangDetailComponent },
    // Actions
    { path: 'actions', component: ActionListComponent },
    { path: 'actions/:id', component: ActionDetailComponent }
];
var MaterialRoutingModule = (function () {
    function MaterialRoutingModule() {
    }
    MaterialRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialRoutingModule);
    return MaterialRoutingModule;
}());
exports.MaterialRoutingModule = MaterialRoutingModule;
//# sourceMappingURL=material-routing.module.js.map