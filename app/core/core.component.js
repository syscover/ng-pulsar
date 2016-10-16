"use strict";
var CoreComponent = (function () {
    function CoreComponent() {
    }
    CoreComponent.prototype.applyMixins = function (derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    };
    return CoreComponent;
}());
exports.CoreComponent = CoreComponent;
//# sourceMappingURL=core.component.js.map