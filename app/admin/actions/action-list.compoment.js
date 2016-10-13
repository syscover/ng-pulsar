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
var action_service_1 = require('./action.service');
var ActionListComponent = (function () {
    function ActionListComponent(actionService) {
        this.actionService = actionService;
    }
    ActionListComponent.prototype.ngOnInit = function () {
        this.getRecords();
    };
    ActionListComponent.prototype.getRecords = function () {
        var _this = this;
        console.log('with observables');
        this.actionService.getRecords()
            .subscribe(function (actions) { return _this.actions = actions; }, function (error) { return _this.errorMessage = error; });
    };
    ActionListComponent.prototype.getRecords2 = function () {
        var _this = this;
        console.log('with promise');
        this.actionService.getRecords2()
            .then(function (actions) { return _this.actions = actions; }, function (error) { return _this.errorMessage = error; });
    };
    ActionListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            //selector: 'pulsar-actions-list',
            templateUrl: 'action-list.component.html'
        }), 
        __metadata('design:paramtypes', [action_service_1.ActionService])
    ], ActionListComponent);
    return ActionListComponent;
}());
exports.ActionListComponent = ActionListComponent;
//# sourceMappingURL=action-list.compoment.js.map