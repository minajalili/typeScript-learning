"use strict";
// const product: {
//   title: string;
//   price: number;
// } = {
//   title: "Book",
//   price: 75,
// };
// console.log(product.title, typeof product.title);
const product = {
    title: "Book",
    price: 75,
    discount: ["atm", "srm"],
    cat: [20, "test"],
};
let mydiscount;
mydiscount = ["atm", "2020"];
product.cat.push("limitation!!"); // the limitation of tuples
// product.cat[3] = "tessst";
product.cat.pop(); // the limitation of tuples
product.cat.pop();
