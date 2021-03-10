const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const showSuccess = document.querySelector(".show-success");

modalMain.classList.add("modal_active");

const modalCloseEls = Array.from(document.querySelectorAll(".modal__close"));

for (let i = 0; i < modalCloseEls.length; i++) {
  modalCloseEls[i].onclick = closeModal;
}

function closeModal () {
  this.closest(".modal").classList.remove("modal_active");
};

showSuccess.onclick = openSuccessModal;

function openSuccessModal () {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
};
