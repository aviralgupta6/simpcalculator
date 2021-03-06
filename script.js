"use strict";
console.log("debigging mat kar tere se naa hoga lavde");
let x = "";
let str = "";
let y = "";
const buttons = document.querySelectorAll(".column");
for (let button of buttons) {
  button.addEventListener("click", function () {
    let b = button.value;
    if (b !== "=" && b !== "AC" && b !== "C" && b !== "back") {
      x += b;
      str += button.textContent;
      document.querySelector(".input").textContent = str;
    } else if (b === "=") {
      let y = eval(x);
      document.querySelector(".output").textContent = `= ${y}`;
      alert("haa bhosdk pata hai");
    } else if (b === "AC") {
      str = "";
      x = "";
      y = "";
      document.querySelector(".input").textContent = 0;
      document.querySelector(".output").textContent = 0;
    } else if (b === "back") {
      str = str.slice(0, -1);
      document.querySelector(".input").textContent = str;
    }
  });
}
