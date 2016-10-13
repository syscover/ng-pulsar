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
var cms_routing_module_1 = require('./cms-routing.module');
var article_list_compoment_1 = require('./articles/article-list.compoment');
var CmsModule = (function () {
    function CmsModule() {
    }
    CmsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                cms_routing_module_1.CmsRoutingModule
            ],
            declarations: [
                article_list_compoment_1.ArticleListComponent
            ],
            bootstrap: []
        }), 
        __metadata('design:paramtypes', [])
    ], CmsModule);
    return CmsModule;
}());
exports.CmsModule = CmsModule;
//# sourceMappingURL=cms.module.js.map