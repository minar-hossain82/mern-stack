const firstInput = prompt("Enter first number:");
const secondInput = prompt("Enter second number:");

if (isNaN(firstInput) || isNaN(secondInput)) {
  throw new SyntaxError("Invalid input: Please enter numeric values only.");
}

const num1 = Number(firstInput);
const num2 = Number(secondInput);
const sum = num1 + num2;

function calculateSum() {
  try {
    console.log("The sum is:", sum);
    return true;
  } catch (error) {
    console.error("An error occurred:", error.message);
    return false;
  } finally {
    console.log("Cleanup complete: resources released.");
  }
}

const result = calculateSum();
