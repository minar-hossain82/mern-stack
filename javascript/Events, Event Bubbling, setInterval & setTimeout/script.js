const button = document.getElementById("btn");

button.addEventListener("dblclick", () => {
  const box = document.querySelector(".box");
  if (box) {
    box.innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!";
  }
});

button.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("Don't hack us by right-clicking!");
});

document.addEventListener("keydown", (event) => {
  console.log("Key:", event.key, "Code:", event.keyCode);
});
