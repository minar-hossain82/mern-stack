console.log("JavaScript Variables and Data Types");

let a = 5;
let b = 6;
let c = "Harry";
let alternateName = "Shubham";

{
  console.log("Inside block:", a);
}

console.log("Outside block:", a);

let name = "Harry Bhai";
let age = 22;
let height = 3.55;
const isStudent = true;
let undefinedValue;
let nullValue = null;

console.log(name, age, height, isStudent, undefinedValue, nullValue);

console.log(
  typeof name,
  typeof age,
  typeof height,
  typeof isStudent,
  typeof undefinedValue,
  typeof nullValue,
);

let person = {
  name: "Harry",
  jobCode: 5600,
  isHandsome: true,
};

console.log(person);

person.salary = "100 Crores";
console.log(person);

person.salary = "500 Crores";
console.log(person);
