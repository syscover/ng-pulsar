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
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var config = require('../app-globals');
var CryptoJS = require('crypto-js');
var SessionService = (function () {
    function SessionService() {
    }
    SessionService.set = function (name, value) {
        var encryptValue = ng2_cookies_1.Cookie.get('pulsar_session');
        var pulsarSession = {};
        if (encryptValue !== '') {
            pulsarSession = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));
        }
        pulsarSession[name] = value;
        encryptValue = CryptoJS.AES.encrypt(JSON.stringify(pulsarSession), config.key);
        ng2_cookies_1.Cookie.set(SessionService.cookieName, encryptValue, 1, '/');
    };
    SessionService.get = function (name) {
        var encryptValue = ng2_cookies_1.Cookie.get(SessionService.cookieName);
        if (encryptValue === '')
            return null;
        var pulsarSession = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));
        if (typeof pulsarSession[name] === 'undefined') {
            return null;
        }
        else {
            return pulsarSession[name];
        }
    };
    SessionService.delete = function (name) {
        var encryptValue = ng2_cookies_1.Cookie.get(SessionService.cookieName);
        if (encryptValue === '')
            return false;
        var pulsarSession = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));
        if (typeof pulsarSession[name] === 'undefined') {
            return false;
        }
        else {
            delete pulsarSession[name];
            encryptValue = CryptoJS.AES.encrypt(JSON.stringify(pulsarSession), config.key);
            ng2_cookies_1.Cookie.set(SessionService.cookieName, encryptValue, 1, '/');
            return true;
        }
    };
    SessionService.destroy = function () {
        ng2_cookies_1.Cookie.delete(SessionService.cookieName);
    };
    SessionService.has = function (name) {
        var encryptValue = ng2_cookies_1.Cookie.get(SessionService.cookieName);
        if (encryptValue === '')
            return false;
        var pulsarSession = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));
        return typeof pulsarSession[name] === 'undefined';
    };
    SessionService.all = function () {
        var encryptValue = ng2_cookies_1.Cookie.get(SessionService.cookieName);
        if (encryptValue === '')
            return null;
        var pulsarSession = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));
        if (typeof pulsarSession[name] === 'undefined') {
            return null;
        }
        else {
            return pulsarSession;
        }
    };
    SessionService.cookieName = 'pulsar_session';
    SessionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map