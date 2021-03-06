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
var shared_module_1 = require('../shared/shared.module');
var admin_routing_module_1 = require('./admin-routing.module');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var lang_list_compoment_1 = require('./langs/lang-list.compoment');
var lang_detail_component_1 = require('./langs/lang-detail.component');
var action_list_compoment_1 = require('./actions/action-list.compoment');
var action_detail_component_1 = require('./actions/action-detail.component');
var action_service_1 = require('./actions/action.service');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                admin_routing_module_1.AdminRoutingModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                lang_list_compoment_1.LangListComponent,
                lang_detail_component_1.LangDetailComponent,
                action_list_compoment_1.ActionListComponent,
                action_detail_component_1.ActionDetailComponent
            ],
            providers: [
                action_service_1.ActionService
            ],
            bootstrap: []
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map