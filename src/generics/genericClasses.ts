class GenericClass<Type> {
  data: Type;
  add: (x: Type, y: Type) => Type;
}

let GenericAdder = new GenericClass<string>();
GenericAdder.data = "";
GenericAdder.add = function (x, y) {
  return x + y;
};

console.log(GenericAdder.add(GenericAdder.data, "test"));
