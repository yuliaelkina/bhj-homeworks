document.addEventListener("DOMContentLoaded", useSavedText);
window.addEventListener("unload", saveText);
document.getElementById("clear__btn").addEventListener("click", clearArea)

function useSavedText () {
  document.getElementById("editor").value = localStorage.getItem("user_text");
}

function saveText () {
  localStorage.setItem("user_text", `${document.getElementById("editor").value}`);
  console.log(document.getElementById("editor").value);
};

function clearArea () {
  document.getElementById("editor").value = "";
  localStorage.removeItem("user_text");
}


