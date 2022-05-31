console.log("hello typeScript!!");

function addFunc(num1: number, num2: number) {
  //   if (typeof num1 !== "number" || typeof num2 !== "number") {
  //     throw Error("invalid type!!");
  //   }
  return num1 + num2;
}

const number1: number = 4;
const number2: number = 2;

const result: number = addFunc(number1, number2);

console.log(result);
