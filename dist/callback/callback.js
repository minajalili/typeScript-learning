"use strict";
function addnum(a, b, cb) {
    const result = a + b;
    cb(result);
}
addnum(4, 5, (result) => {
    console.log(result);
});
