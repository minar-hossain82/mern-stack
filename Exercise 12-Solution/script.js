console.log("Script.js initializing"); // Log to confirm that the script file is loaded

// Select all child elements inside the container (all 5 boxes)
// let boxes = document.getElementsByClassName("box")  // (Old method)
// Using children gives an HTMLCollection of all elements inside .container
let boxes = document.querySelector(".container").children;

// Function to generate a random RGB color
function getRandomColor() {
  let val1 = Math.ceil(Math.random() * 255); // Random value for Red (0–255)
  let val2 = Math.ceil(Math.random() * 255); // Random value for Green (0–255)
  let val3 = Math.ceil(Math.random() * 255); // Random value for Blue (0–255)

  return `rgb(${val1}, ${val2}, ${val3})`; // Return an RGB color string
}

// Convert HTMLCollection to array and apply random colors to each box
Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor(); // Assign random background color
  e.style.color = getRandomColor(); // Assign random text color
});
