const sizeButtons = Array.from(document.querySelectorAll(".font-size"));
const book = document.querySelector(".book");

sizeButtons.forEach((el) => {el.addEventListener("click", (e) => {e.preventDefault();})});
sizeButtons.forEach((el) => {el.addEventListener("click", changeSize)});
function changeSize () {
  let newSize = this.dataset.size;
  sizeButtons.forEach((el) => (el.classList.remove("font-size_active")));
  this.classList.add("font-size_active");
  book.classList.remove("book_fs-big", "book_fs-small");
  if (newSize == "small") {
    book.classList.add("book_fs-small");
  }
  else if(newSize == "big") {
    book.classList.add("book_fs-big");
  };
};
const colorButtons = Array.from(document.querySelectorAll(".color"));
colorButtons.forEach((el) => {el.addEventListener("click", (e) => {e.preventDefault();})});
colorButtons.forEach((el) => {el.addEventListener("click", changeColor)});

function changeColor () {
  let newColor;
  if (this.closest(".book__control").classList.contains("book__control_color")) {
    newColor = this.dataset.textColor;
    this.closest(".book__control").querySelectorAll(".color").forEach((el) => (el.classList.remove("color_active")));
    this.classList.add("color_active");
    book.classList.remove("book_color-gray", "book_color-whitesmoke", "book_color-black");
    if (newColor == "black") {
      book.classList.add("book_color-black");
    }
    else if (newColor == "gray") {
      book.classList.add("book_color-gray");
    }
    else if (newColor == "whitesmoke") {
      book.classList.add("book_color-whitesmoke");
    }
  }
  else if (this.closest(".book__control").classList.contains("book__control_background")) {
    newColor = this.dataset.bgColor;
    this.closest(".book__control").querySelectorAll(".color").forEach((el) => (el.classList.remove("color_active")));
    this.classList.add("color_active");
    book.classList.remove("book_bg-gray", "book_bg-white", "book_bg-black");
    if (newColor == "black") {
      book.classList.add("book_bg-black");
    }
    else if (newColor == "gray") {
      book.classList.add("book_bg-gray");
    }
    else if (newColor == "white") {
      book.classList.add("book_bg-white");
    }
  };
};