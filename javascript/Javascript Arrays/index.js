const arr = [1, 2, 4, 5, 7];

arr[0] = 5666;

console.log(arr.toString());
console.log(arr.join(" and "));

const numbers = [1, 2, 3, 4, 5];

numbers.splice(1, 3, 222, 333);

console.log(numbers);
