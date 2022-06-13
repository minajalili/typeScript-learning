"use strict";
console.log("hello typeScript!!");
function addFunc(num1, num2) {
    //   if (typeof num1 !== "number" || typeof num2 !== "number") {
    //     throw Error("invalid type!!");
    //   }
    return num1 + num2;
}
const number1 = 4;
const number2 = 2;
const result = addFunc(number1, number2);
console.log(result);
