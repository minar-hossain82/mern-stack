// Get the button element by its ID
let button = document.getElementById("btn");

// List of all mouse events (for reference)
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// Listen for a double-click event on the button
button.addEventListener("dblclick", () => {
  // When the button is double-clicked,
  // change the HTML content of the element with class "box"
  document.querySelector(".box").innerHTML =
    "<b>Yayy you were clicked</b> Enjoy your click!";
});

// Listen for right-click (context menu) event on the button
button.addEventListener("contextmenu", () => {
  // Show an alert message when user right-clicks on the button
  alert("Don't hack us by Right click Please");
});

// Listen for any key press on the entire document
document.addEventListener("keydown", (e) => {
  // Log the full event object, the key pressed, and its key code
  console.log(e, e.key, e.keyCode);
});
