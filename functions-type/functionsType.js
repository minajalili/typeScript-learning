"use strict";
exports.__esModule = true;
function sub(input1, input2) {
    return +input1 - +input2;
}
function result(input) {
    console.log(input);
}
// let combine: Function;  we have trubble in console result!!
var combine;
combine = sub;
combine = result;
console.log(combine(8, 2));
exports["default"] = {};
