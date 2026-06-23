const button = document.getElementById("btn");
const box = document.querySelector(".box");

function handleDoubleClick() {
  if (!box) return;

  box.innerHTML = `
    <strong>Yayy! You were clicked.</strong>
    Enjoy your click!
  `;
}

function handleRightClick(event) {
  event.preventDefault();
  alert("Don't hack us by right-clicking!");
}

function handleKeyDown(event) {
  console.log(`Key: ${event.key}, Code: ${event.code}`);
}

if (button) {
  button.addEventListener("dblclick", handleDoubleClick);
  button.addEventListener("contextmenu", handleRightClick);
}

document.addEventListener("keydown", handleKeyDown);
