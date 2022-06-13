"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    else {
        throw Error("correct the input types!");
    }
}
console.log(add(5, 10));
console.log(add("wel", "come"));
console.log(add(5, "come"));
exports.default = {};
