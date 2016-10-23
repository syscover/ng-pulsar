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
var ActionListComponent = (function () {
    function ActionListComponent(router, route, trans, actionService) {
        this.router = router;
        this.route = route;
        this.trans = trans;
        this.actionService = actionService;
    }
    ActionListComponent.prototype.ngOnInit = function () {
        this.getRecords();
    };
    ActionListComponent.prototype.getRecords = function () {
        var _this = this;
        this.actionService.getRecords()
            .then(function (actions) { return _this.actions = actions; }, function (error) { return _this.errorMessage = error; });
    };
    // function no used, replace by [routerLink]="[action.id_008]" in action-list.component.html
    ActionListComponent.prototype.onSelect = function (action) {
        this.router.navigate([action.id_008], { relativeTo: this.route });
        //console.log('with promise');
        // this.actionService.getRecord(action.id_008)
        //     .then(
        //         actions => this.actions = actions,
        //         error   => this.errorMessage = <any>error
        //     );
    };
    //****************************************
    //* Operations examples with observables
    //****************************************
    ActionListComponent.prototype.getRecords_ob = function () {
        var _this = this;
        this.actionService.getRecords_ob()
            .subscribe(function (actions) { return _this.actions = actions; }, function (error) { return _this.errorMessage = error; });
    };
    ActionListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'action-list.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, translator_service_1.TranslatorService, action_service_1.ActionService])
    ], ActionListComponent);
    return ActionListComponent;
}());
exports.ActionListComponent = ActionListComponent;
//# sourceMappingURL=action-list.compoment.js.map