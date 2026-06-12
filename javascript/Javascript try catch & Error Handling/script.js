try {
  const firstInput = prompt("Enter first number:");
  const secondInput = prompt("Enter second number:");

  if (isNaN(firstInput) || isNaN(secondInput)) {
    throw new SyntaxError("Invalid input: Please enter numeric values only.");
  }

  const num1 = Number(firstInput);
  const num2 = Number(secondInput);

  function calculateSum(a, b) {
    return a + b;
  }

  const sum = calculateSum(num1, num2);
  console.log("The sum is:", sum);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Cleanup complete: resources released.");
}
