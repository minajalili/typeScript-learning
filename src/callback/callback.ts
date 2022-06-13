function addnum(a: number, b: number, cb: (input: number) => void) {
  const result = a + b;
  cb(result);
}

addnum(4, 5, (result) => {
  console.log(result);
});
