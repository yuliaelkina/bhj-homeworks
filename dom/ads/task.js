const rotators = Array.from(document.querySelectorAll(".rotator"));
const rotatingInterval = setInterval(rotation, 1000);
const colorList = ["red", "blue", "green", "yellow", "brown", "black"];

function rotation () {
  let rotationElements;
  let activeElement;
  let activeIndex;
  let newIndex;
  for (let i = 0; i < rotators.length; i++) {
    rotationElements = Array.from(rotators[i].querySelectorAll(".rotator__case"));
    activeElement = rotators[i].querySelector(".rotator__case_active");
    activeIndex = rotationElements.indexOf(activeElement);
    activeElement.classList.remove("rotator__case_active");
    if (activeIndex == rotationElements.length - 1) {
      newIndex = 0;
    }
    else {
      newIndex = activeIndex + 1;
    }
    rotationElements[newIndex].classList.add("rotator__case_active");
    rotationElements[newIndex].style.color = colorList[newIndex];
  };
};
