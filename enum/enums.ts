// in js
// const BLUE = 1;
// const GREEN = 2;
// const RED = 3;

enum Color {
  BLUE, //index 0
  GREEN, //index 1
  RED, //index 2
}

const product = {
  title: "phone",
  price: 99,
  discount: ["atm", "smr"],
  // before color: "blue",
  color: Color.BLUE,
};

if (product.color === Color.BLUE) {
  console.log("product not exist");
}

export default {};
