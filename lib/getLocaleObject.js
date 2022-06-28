"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleObject = void 0;
var pl_1 = require("./pl");
function getLocaleObject(locale) {
    // tslint:disable-next-line:no-unnecessary-initializer
    var r = undefined;
    if (locale.toLocaleLowerCase() === 'pl') {
        r = pl_1.localeText_pl;
    }
    return r;
}
exports.getLocaleObject = getLocaleObject;
//# sourceMappingURL=getLocaleObject.js.map