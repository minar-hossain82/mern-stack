function nice(name) {
  console.log(`Hey ${name}, you are nice!`);
  console.log(`Hey ${name}, you are good!`);
  console.log(`Hey ${name}, your t-shirt is nice!`);
  console.log(`Hey ${name}, your course is good too!`);
}

function sum(a, b, c = 3) {
  console.log("Inputs:", a, b, c);
  return a + b + c;
}

const result1 = sum(3, 2);
const result2 = sum(7, 5);
const result3 = sum(3, 13, 1);

console.log("The sum of these numbers is:", result1);
console.log("The sum of these numbers is:", result2);
console.log("The sum of these numbers is:", result3);

const func1 = (x) => {
  console.log("I am an arrow function:", x);
};

func1(34);
func1(66);
func1(84);
