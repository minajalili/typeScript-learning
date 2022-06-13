type Combine = number | string;
type CombineLiteral = "is-number" | "is-text";

function add(input1: Combine, input2: Combine, resultType: CombineLiteral) {
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

export default {};
