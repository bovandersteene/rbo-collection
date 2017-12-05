"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// snippet from: https://github.com/ngrx/example-app/blob/master/src/app/util.ts
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type '" + label + "' is not unqiue'");
    }
    typeCache[label] = true;
    return label;
}
exports.type = type;
