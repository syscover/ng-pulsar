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
var angular2_polymer_1 = require('@vaadin/angular2-polymer');
var shared_module_1 = require('../shared/shared.module');
var dev_vaadin_routing_module_1 = require('./dev-vaadin-routing.module');
var date_picker_component_1 = require('./components/date-picker.component');
var DevVaadinModule = (function () {
    function DevVaadinModule() {
    }
    DevVaadinModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                dev_vaadin_routing_module_1.DevVaadinRoutingModule
            ],
            declarations: [
                angular2_polymer_1.PolymerElement('vaadin-date-picker'),
                date_picker_component_1.DatePickerComponent
            ],
            providers: [],
            bootstrap: []
        }), 
        __metadata('design:paramtypes', [])
    ], DevVaadinModule);
    return DevVaadinModule;
}());
exports.DevVaadinModule = DevVaadinModule;
//# sourceMappingURL=dev-vaadin.module.js.map