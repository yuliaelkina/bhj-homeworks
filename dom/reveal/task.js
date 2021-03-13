const reveals = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener("scroll", showReveal);

function showReveal () {
  let yPosition;
  let maxCoordinate;
  for (let i = 0; i < reveals.length; i++) {
  yPosition = reveals[i].getBoundingClientRect().y;
  maxCoordinate = window.innerHeight - reveals[i].getBoundingClientRect().height;
  if(yPosition > 0 & yPosition < maxCoordinate) {
    reveals[i].classList.add("reveal_active");
  }
  else {
    reveals[i].classList.remove("reveal_active");
  };
  };
};