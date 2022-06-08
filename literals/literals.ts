function add(
  input1: number | string,
  input2: number | string,
  resultType: "is-number" | "is-text"
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "is-number"
  ) {
    return +input1 + +input2;
  } else if (typeof input1 === "string" && typeof input2 === "string") {
    return input1.toString() + input2.toString();
  } else {
    throw Error("correct the input types!");
  }
}

console.log(add(5, 10, "is-number"));

console.log(add("wel", "come", "is-text"));
