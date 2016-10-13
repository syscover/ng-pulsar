"use strict";
var Core = (function () {
    function Core() {
    }
    Core.prototype.applyMixins = function (derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    };
    return Core;
}());
exports.Core = Core;
var Translator = (function () {
    function Translator() {
    }
    Translator.prototype.trans = function () {
        return 'lanza el mensaje from abstract class 3';
    };
    return Translator;
}());
exports.Translator = Translator;
//# sourceMappingURL=inheritable-core.component.js.map