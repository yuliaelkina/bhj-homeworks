const hasTooltipElements = document.querySelectorAll(".has-tooltip");
const tooltips = [];

for (let i = 0; i< hasTooltipElements.length; i++){
  let text = hasTooltipElements[i].getAttribute("title");
  let tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerText = `${text}`;
  tooltip.dataset.left = hasTooltipElements[i].getBoundingClientRect().left;
  tooltips.push(tooltip);
  hasTooltipElements[i].append(tooltip);
  hasTooltipElements[i].addEventListener("click", (e) => {e.preventDefault();
    showTooltip(i);});
}


function showTooltip (ind) {
  tooltips.forEach(element => {element.classList.remove("tooltip_active");
  });
  tooltips[ind].classList.toggle("tooltip_active");
  tooltips[ind].style = `left: ${tooltips[ind].dataset.left}px`;
};
