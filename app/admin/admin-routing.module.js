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
var main_layout_component_1 = require('../shared/layouts/main-layout.component');
var auth_guard_service_1 = require('../shared/auth/auth-guard.service');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var lang_list_compoment_1 = require('./langs/lang-list.compoment');
var lang_detail_component_1 = require('./langs/lang-detail.component');
var action_list_compoment_1 = require('./actions/action-list.compoment');
var action_detail_component_1 = require('./actions/action-detail.component');
var routes = [
    // Login
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: '', component: main_layout_component_1.MainLayoutComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            // Dashboard
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent, data: { resource: 'hola-mundo' } },
            // Langs
            { path: 'langs', component: lang_list_compoment_1.LangListComponent },
            { path: 'langs/:id', component: lang_detail_component_1.LangDetailComponent },
            // Actions
            { path: 'actions', component: action_list_compoment_1.ActionListComponent, data: { resource: 'actions-resource' } },
            { path: 'actions/:id', component: action_detail_component_1.ActionDetailComponent, data: { resource: 'actions-resource2' } }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;
//# sourceMappingURL=admin-routing.module.js.map