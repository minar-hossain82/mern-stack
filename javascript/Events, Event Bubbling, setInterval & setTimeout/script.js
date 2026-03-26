// Select button element
const button = document.getElementById("btn");

// Handle double click event
button.addEventListener("dblclick", () => {
  const box = document.querySelector(".box");
  if (box) {
    box.innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!";
  }
});

// Prevent right-click (context menu)
button.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("Don't hack us by right-clicking!");
});

// Log key press events
document.addEventListener("keydown", (event) => {
  console.log("Key:", event.key, "Code:", event.keyCode);
});
