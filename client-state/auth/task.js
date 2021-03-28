const signingForm = document.getElementById("signin__form");
document.addEventListener("DOMContentLoaded", showPage)

function showPage () {
  if (!localStorage.user_id) {
    document.querySelector(".signin").classList.add("signin_active");
  }
  else {
    document.getElementById("welcome").classList.add("welcome_active");
    document.getElementById("user_id").innerText = localStorage.getItem("user_id");
  }
}
signingForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let data = new FormData(signingForm);
  let xhr = new XMLHttpRequest();
  let answer;
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  xhr.send(data);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4){
      answer = JSON.parse(xhr.responseText);
      if (answer.success == false) {
        alert("Неверный логин/пароль");
        document.querySelectorAll(".control").forEach((el)=>{el.value = "";});
      }
      else if (answer.success == true) {
        document.querySelector(".signin").classList.remove("signin_active");
        document.getElementById("welcome").classList.add("welcome_active");
        document.getElementById("user_id").innerText = `${answer.user_id}`;
        localStorage.setItem("user_id", answer.user_id);
      }
    };
  }
});

document.getElementById("logout_btn").addEventListener("click", logOutFn);

function logOutFn () {
  localStorage.removeItem("user_id");
  location.reload();
}