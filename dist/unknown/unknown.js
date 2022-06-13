"use strict";
let input; //: unknown
input = 4;
input = "text";
let text = "string";
//Type 'unknown' is not assignable to type 'string'
//text = input
if (typeof input === "string") {
    text = input;
}
// unknown which is the type-safe counterpart of any.
//Anything is assignable to unknown, but unknown isn't assignable to anything but itself and any
//   without a type assertion or a control flow based narrowing.
//Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.
// A few examples:
let vAny = 10; // We can assign anything to any
let vUnknown = 10; // We can assign anything to unknown just like any
let s1 = vAny; // Any is assignable to anything
// let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)
vAny.method(); // Ok; anything goes with any
// vUnknown.method(); // Not ok; we don't know anything about this variable
// The suggested usage is:
//     There are often times where we want to describe the least-capable type in TypeScript.
//This is useful for APIs that want to signal “this can be any value, so you must perform
//   some type of checking before you use it”. This forces users to safely introspect returned values.
