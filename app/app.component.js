"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var inheritable_core_component_1 = require("./shared/inheritable-core.component");
var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        _super.apply(this, arguments);
        this.title = 'NG PULSAR';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.applyMixins(AppComponent, [inheritable_core_component_1.Translator]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pulsar-app',
            templateUrl: 'ng-pulsar/app/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}(inheritable_core_component_1.Core));
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map