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
 *  Translator service
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
     * @param       module          Module name to load translations, if module if empty, record TranslationCollection with root index
     * @param       checkOverload   Flag to manage overload, and first angular 2 load, are many request, by hooks lifecycle, to render views, this request cause overload, if we don't control
     */
    TranslatorService.prototype.load = function (module, checkOverload) {
        var _this = this;
        console.log('llamada');
        if (this.isLoading && checkOverload)
            return null;
        var urlModule = '';
        if (module !== 'root')
            urlModule = module + '/';
        if (checkOverload)
            this.isLoading = true;
        System.import(System.baseURL + 'app/' + urlModule + 'translations/' + this.locale).then(function (response) {
            console.log('carga');
            // Search translationCollection in collections array
            var isFound = false;
            _this.collections.find(function (translationCollection, index) {
                if (translationCollection.module === module) {
                    _this.collections[index] = { module: module, translations: response.translations };
                    return isFound = true;
                }
            });
            // Add new translationCollection
            if (!isFound)
                _this.collections.push({ module: module, translations: response.translations });
            if (checkOverload)
                _this.isLoading = false;
            return true;
        });
    };
    /**
     * Function to get translation from a key
     */
    TranslatorService.prototype.get = function (key) {
        return this.getTranslation(key);
    };
    /**
     * Function to get translation from a keys with pluralization
     */
    TranslatorService.prototype.getChoice = function (key, n) {
        var translation = this.getTranslation(key);
        if (typeof translation == 'string') {
            var choices = translation.split('|');
            if (n > 1) {
                return choices[1];
            }
            else {
                return choices[0];
            }
        }
        return null;
    };
    /**
     * Function to change language
     *
     * @param lang
     */
    TranslatorService.prototype.change = function (lang) {
        if (this.locale === lang)
            return true;
        // change locale selection
        this.locale = lang;
        for (var _i = 0, _a = this.collections; _i < _a.length; _i++) {
            var translationCollection = _a[_i];
            this.load(translationCollection.module, false);
        }
        return true;
    };
    /**
     * Function to get translation
     */
    TranslatorService.prototype.getTranslation = function (key) {
        var translationParameters = this.getTranslationParameters(key);
        // get translations from module
        var translationCollection = this.collections.find(function (translationCollection) { return translationCollection.module == translationParameters.module; });
        if (translationCollection) {
            var translation = translationCollection.translations.find(function (translation) { return translation.key === translationParameters.index; });
            return translation.value;
        }
        else {
            this.load(translationParameters.module, true);
            return null;
        }
    };
    /**
     * Function to get parameters module and key, from initial key
     */
    TranslatorService.prototype.getTranslationParameters = function (key) {
        var index = null;
        var module = null;
        if (key.indexOf('::') !== -1) {
            index = key.substring(key.indexOf('::') + 2, key.length);
            module = key.substring(0, key.indexOf('::'));
        }
        else {
            index = key;
            module = 'root';
        }
        return {
            index: index,
            module: module
        };
    };
    TranslatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TranslatorService);
    return TranslatorService;
}());
exports.TranslatorService = TranslatorService;
//# sourceMappingURL=translator.service.js.map