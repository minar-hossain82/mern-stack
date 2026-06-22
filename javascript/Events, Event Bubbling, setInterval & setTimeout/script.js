const button = document.getElementById("btn");
const box = document.querySelector(".box");

if (button) {
  button.addEventListener("dblclick", () => {
    if (!box) return;

    box.innerHTML = `
      <b>Yayy! You were clicked.</b>
      Enjoy your click!
    `;
  });

  button.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("Don't hack us by right-clicking!");
  });
}

document.addEventListener("keydown", (event) => {
  console.log(`Key: ${event.key}, Code: ${event.keyCode}`);
});
