function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

merge([1, 2, 3], { name: "Alisa" });
merge(() => {}, { age: 32 });
merge(new Date(), { age: 32 });

export {};
