function addnum(a, b, cb) {
    var result = a + b;
    cb(result);
}
addnum(4, 5, function (result) {
    console.log(result);
});
