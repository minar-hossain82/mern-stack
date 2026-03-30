"use strict";

(function () {
  alert("Hello World");

  console.log("Code is running...");
  console.log("Code is also running...");
  console.log("Code is looking like wow...");

  const userInput = prompt("Enter your number:");

  const isConfirmed = confirm("Are you sure you want to leave this page?");

  if (isConfirmed) {
    console.log("User chose to leave the page");
  } else {
    console.log("User stayed on the page");
  }

  console.log(`Your number is: ${userInput}`);

  document.title = "Hey I am good";

  // document.body.style.backgroundColor = "red";
})();
