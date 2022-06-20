function identify<Type>(arg: Type): Type {
  return arg;
}

console.log(identify<string>("Hello World!!"));
console.log(identify(202020));
console.log(identify(["sads", 2020]));

//__________________________________________________
function identifyArrays<Type>(arg: Type[]): Type[] {
  // function identifyArrays<Type>(arg: Array<Type>): Array<Type> {

  console.log(arg.length); // if use top format we have this erro :Property 'length' does not exist on type 'Type'.

  return arg;
}

//We could also have used a different name for the generic type parameter in the type
function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Type>(arg: Type) => Type = identity;

function identityNew<Type>(arg: Type): Type {
  return arg;
}

let myIdentityNew: <Input>(arg: Input) => Input = identityNew;

//Generic interfase

interface GenericInterfaceFn {
  <Type>(arg: Type): Type;
}

function identifyFn<Type>(arg: Type): Type {
  return arg;
}

let myIdentify: GenericInterfaceFn = identify;
