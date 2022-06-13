"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sub(input1, input2) {
    return +input1 - +input2;
}
function result(input) {
    console.log(input);
}
// let combine: Function;  we have trubble in console result!!
let combine;
combine = sub;
// combine = result;  so we have an error  in here not console :)
console.log(combine(8, 2));
exports.default = {};
