const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
cookie.onclick = clicker;

function clicker () {
  let amount = parseInt(counter.textContent);
  counter.textContent = amount + 1;
  if (cookie.width == 200) {
    cookie.width = 400;
  }
  else {cookie.width = 200;};
};