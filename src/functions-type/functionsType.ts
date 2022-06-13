function sub(input1: number, input2: number): number {
  return +input1 - +input2;
}

function result(input: number): void {
  console.log(input);
}

// let combine: Function;  we have trubble in console result!!

let combine: (a: number, b: number) => number;

combine = sub;
// combine = result;  so we have an error  in here not console :)

console.log(combine(8, 2));

export default {};
