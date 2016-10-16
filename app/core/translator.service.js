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
var Observable_1 = require('rxjs/Observable');
var TranslatorService = (function () {
    function TranslatorService() {
        this.locale = document['locale'];
        this.apiRestUrl = './admin/actions';
        this.initTranslations();
    }
    TranslatorService.prototype.initTranslations = function () {
        var _this = this;
        System.import('/ng-pulsar/app/core/translations/' + document['locale']).then(function (lang) {
            _this.collection = lang.trans;
        });
    };
    TranslatorService.prototype.getTrans = function (key) {
        if (this.collection != null)
            return this.collection[key];
    };
    TranslatorService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    TranslatorService.prototype.handleError = function (error) {
        var errorMsg = (error.message) ?
            error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errorMsg);
        return Observable_1.Observable.throw(errorMsg);
    };
    TranslatorService.prototype.getTranslationsWithSystemJs = function (file) {
        return System.import(file + '!text'); // relies on text plugin
    };
    TranslatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TranslatorService);
    return TranslatorService;
}());
exports.TranslatorService = TranslatorService;
//# sourceMappingURL=translator.service.js.map