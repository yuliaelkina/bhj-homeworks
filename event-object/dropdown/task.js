const dropDownValues = Array.from(document.querySelectorAll(".dropdown__value"));
const dropDownItems = Array.from(document.querySelectorAll(".dropdown__item"));
const links = Array.from(document.querySelectorAll(".dropdown__link"));

dropDownValues.forEach((el) => {el.addEventListener("click", showList)});
dropDownItems.forEach((el) => {el.addEventListener("click", chooseItem)});
links.forEach((el) => {el.addEventListener("click", (e) => {e.preventDefault()})});


function showList () {
this.closest(".dropdown").querySelector(".dropdown__list").classList.toggle("dropdown__list_active");
};

function chooseItem () {
  this.closest(".dropdown").querySelector(".dropdown__value").textContent = this.textContent;
  this.closest(".dropdown").querySelector(".dropdown__list").classList.remove("dropdown__list_active");
};


