document.addEventListener("DOMContentLoaded", showModal);


function getCookie (name) {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
  return false
};

function showModal () {
  if (getCookie("ismodalshown") == false) {
    document.getElementById("subscribe-modal").classList.add("modal_active");
  }
}

document.querySelector(".modal__close").addEventListener("click", closeModal);
function closeModal () {
  document.cookie="ismodalshown=true";
  document.getElementById("subscribe-modal").classList.remove("modal_active");
}

