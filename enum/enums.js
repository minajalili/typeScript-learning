"use strict";
// in js
// const BLUE = 1;
// const GREEN = 2;
// const RED = 3;
exports.__esModule = true;
var Color;
(function (Color) {
    Color[Color["BLUE"] = 0] = "BLUE";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["RED"] = 2] = "RED";
})(Color || (Color = {}));
var product = {
    title: "phone",
    price: 99,
    discount: ["atm", "smr"],
    // before color: "blue",
    color: Color.BLUE
};
if (product.color === Color.BLUE) {
    console.log("product not exist");
}
exports["default"] = {};
