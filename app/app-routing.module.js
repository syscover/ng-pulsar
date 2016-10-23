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
var config = require('./shared/app-globals');
exports.routes = [
    // bootstrap route
    { path: config.appUrlPrefix, redirectTo: config.appUrlPrefix + '/admin', pathMatch: 'full' },
    { path: config.appUrlPrefix + '/admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: config.appUrlPrefix + '/cms', loadChildren: 'app/cms/cms.module#CmsModule' },
    { path: config.appUrlPrefix + '/material', loadChildren: 'app/dev-material/dev-material.module#DevMaterialModule' },
    { path: config.appUrlPrefix + '/vaadin', loadChildren: 'app/dev-vaadin/dev-vaadin.module#DevVaadinModule' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(exports.routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map