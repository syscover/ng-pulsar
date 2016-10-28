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
var action_service_1 = require('./action.service');
var translator_service_1 = require('../../shared/translator/translator.service');
var middleware_service_1 = require("../../shared/middleware.service");
var ActionDetailComponent = (function () {
    function ActionDetailComponent(route, actionService, trans, middleeareService) {
        this.route = route;
        this.actionService = actionService;
        this.trans = trans;
        this.middleeareService = middleeareService;
    }
    ActionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.actionService.getRecord(params['id'])
                .then(function (action) { return _this.action = action; });
        });
    };
    ActionDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'action-detail.component.html',
            providers: [middleware_service_1.MiddlewareService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, action_service_1.ActionService, translator_service_1.TranslatorService, middleware_service_1.MiddlewareService])
    ], ActionDetailComponent);
    return ActionDetailComponent;
}());
exports.ActionDetailComponent = ActionDetailComponent;
//# sourceMappingURL=action-detail.component.js.map