console.log("=== Strings Tutorial ===");

const name = "Harry";

console.log("First Character:", name[0]);
console.log("Second Character:", name[1]);
console.log("Third Character:", name[2]);
console.log("Fourth Character:", name[3]);
console.log("Fifth Character:", name[4]);

console.log("Length:", name.length);

const realName = "Harry";
const friend = "Rohan";

console.log("His name is " + realName + " and his friend's name is " + friend);

console.log(`His name is ${realName} and his friend's name is ${friend}`);

const text = "ShivamSh";

console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());
console.log("Length:", text.length);

console.log("Slice (1, 5):", text.slice(1, 5));
console.log("Slice (1):", text.slice(1));

console.log("Replace 'Sh' with '77':", text.replace("Sh", "77"));

console.log(
  "Concatenated String:",
  text.concat(name, "Aishwariya", "Rahul", "Priya"),
);

console.log("Original String:", text);
