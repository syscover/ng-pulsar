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
var TranslatorService = (function () {
    function TranslatorService() {
        this.locale = document['locale'];
        this.collections = [];
        this.isLoading = false;
    }
    TranslatorService.prototype.load = function (moduleName) {
        var _this = this;
        if (this.isLoading)
            return null;
        var routeModule = '';
        if (moduleName !== 'root')
            routeModule = moduleName + '/';
        this.isLoading = true;
        System.import(System.baseURL + 'app/' + routeModule + 'translations/' + this.locale).then(function (response) {
            //this.collections[moduleName] = response.collection;
            _this.collections.push({ module: moduleName, translations: response.translations });
            _this.isLoading = false;
        });
    };
    TranslatorService.prototype.get = function (key) {
        var index = null;
        var moduleName = null;
        if (key.indexOf('::') !== -1) {
            index = key.substring(key.indexOf('::') + 2, key.length);
            moduleName = key.substring(0, key.indexOf('::'));
        }
        else {
            index = key;
            moduleName = 'root';
        }
        this.collections.find();
        if (moduleName in this.collections) {
            this.collections.find(function (object) { return object.module == moduleName; });
            var translation = .find(function (translation) { return translation.key === index; });
            return translation.value;
        }
        else {
            this.load(moduleName);
        }
    };
    TranslatorService.prototype.change = function (lang) {
        this.locale = lang;
        console.log(this.collections);
        var promises = this.collections.map(function (collections) { return console.log(collections); });
        //console.log(promises);
        // Promise.all(promises).then((values)=>{})
        for (var key in this.collections) {
            this.load(key);
        }
        // console.log(this.collections);
    };
    TranslatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TranslatorService);
    return TranslatorService;
}());
exports.TranslatorService = TranslatorService;
//# sourceMappingURL=translator.service.js.map