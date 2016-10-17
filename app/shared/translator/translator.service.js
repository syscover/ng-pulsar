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
/**
 *  Services to get translator
 */
var TranslatorService = (function () {
    function TranslatorService() {
        this.locale = document['locale'];
        this.collections = [];
        this.isLoading = false;
    }
    /**
     * Load translations files
     *
     * @param       moduleName        Module name to load translations, if module if empty, record TranslationCollection with root index
     * @param       checkOverload     Flag to manage overload, and first angular 2 load, are many request to render views, this request cause overload, if we don't control
     * @returns     {null}
     */
    TranslatorService.prototype.load = function (moduleName, checkOverload) {
        var _this = this;
        if (this.isLoading && checkOverload)
            return null;
        var routeModule = '';
        if (moduleName !== 'root')
            routeModule = moduleName + '/';
        if (checkOverload)
            this.isLoading = true;
        System.import(System.baseURL + 'app/' + routeModule + 'translations/' + this.locale).then(function (response) {
            // Search translationCollection in collections array
            var isFound = false;
            _this.collections.find(function (translationCollection, index) {
                if (translationCollection.module === moduleName) {
                    _this.collections[index] = { module: moduleName, translations: response.translations };
                    return isFound = true;
                }
            });
            // Add new translationCollection
            if (!isFound)
                _this.collections.push({ module: moduleName, translations: response.translations });
            if (checkOverload)
                _this.isLoading = false;
        });
    };
    /**
     * Function to get translation from a kay
     *
     * @param       key
     * @returns     {string}
     */
    TranslatorService.prototype.get = function (key) {
        // console.log('do request');
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
        var translationCollection = this.collections.find(function (translationCollection) { return translationCollection.module == moduleName; });
        if (translationCollection) {
            var translation = translationCollection.translations.find(function (translation) { return translation.key === index; });
            return translation.value;
        }
        else {
            this.load(moduleName, true);
        }
    };
    /**
     * Function to change lang
     *
     * @param lang
     */
    TranslatorService.prototype.change = function (lang) {
        this.locale = lang;
        for (var _i = 0, _a = this.collections; _i < _a.length; _i++) {
            var translationCollection = _a[_i];
            this.load(translationCollection.module, false);
        }
    };
    TranslatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TranslatorService);
    return TranslatorService;
}());
exports.TranslatorService = TranslatorService;
//# sourceMappingURL=translator.service.js.map