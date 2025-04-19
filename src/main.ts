import "./style.css";

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge([1, 2, 3], { name: "Alisa" }));
console.log(merge(() => {}, { age: 32 }));
console.log(merge(new Date(), { age: 32 }));
