function getProperty<F, H extends keyof F>(obj: F, key: H) {
  return obj[key];
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
