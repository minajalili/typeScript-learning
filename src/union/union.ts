function add(input1: number | string, input2: number | string) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else if (typeof input1 === "string" && typeof input2 === "string") {
    return input1.toString() + input2.toString();
  } else {
    throw Error("correct the input types!");
  }
}

console.log(add(5, 10));

console.log(add("wel", "come"));

console.log(add(5, "come"));

export default {};
