const leftButton = document.querySelector(".slider__arrow_prev");
const rightButton = document.querySelector(".slider__arrow_next");
const slider = Array.from(document.querySelectorAll(".slider__item"));
const dots = Array.from(document.querySelectorAll(".slider__dot"));

leftButton.onclick = function() {moveTo("left"); };
rightButton.onclick = function() {moveTo("right"); };

function moveTo(direction) {
  const activeSliderItem = document.querySelector(".slider__item_active");
  activeSliderItemIndex = slider.indexOf(activeSliderItem, 0);
  console.log(activeSliderItemIndex);
  let newActiveItemIndex;
  if (direction == "left") {
    if (activeSliderItemIndex == 0) {
      newActiveItemIndex = slider.length - 1;
    }
    else {
      newActiveItemIndex = activeSliderItemIndex - 1;
    };
  };
  if (direction == "right") {
    if (activeSliderItemIndex == (slider.length - 1)) {
      newActiveItemIndex = 0;
    }
    else {
      newActiveItemIndex = activeSliderItemIndex + 1;
    };
  };
  const newActiveItem = slider[newActiveItemIndex];
  activeSliderItem.classList.remove("slider__item_active");
  newActiveItem.classList.add("slider__item_active");
};

for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function () {changeSlider(i);};
};

function changeSlider(index) {
  document.querySelector(".slider__item_active").classList.remove("slider__item_active");
  slider[index].classList.add("slider__item_active");
};