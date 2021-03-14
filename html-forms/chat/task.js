const chatActivationButton = document.querySelector(".chat-widget__side");
const userText = document.querySelector("#chat-widget__input");
const messageList = document.querySelector(".chat-widget__messages");
const computerMessages = ["Добрый день!", "Нам не до Вас!", "Напишите позже, например никогда!", "Хорошего вечера, мы уже ушли!"]

chatActivationButton.addEventListener("click", openChat);
userText.addEventListener("keydown", (e) => {if (e.code == "Enter" && userText.value) {
  let date = new Date();
  let messageTime = `${date.getHours()}:${date.getMinutes()}`;
  messageList.innerHTML += `
  <div class="message">
    <div class="message__time">${messageTime}</div>
    <div class="message__text">
      ${userText.value}
    </div>
  </div>
  <div class="message">
    <div class="message__time">${messageTime}</div>
    <div class="message__text">
    ${computerMessages[getRndInteger(0, computerMessages.length)]}
    </div>
  </div>

  `
  userText.value = "";
  messageList.scrollTop = 999999;
}});

function openChat () {
  let date = new Date();
  let messageTime = `${date.getHours()}:${date.getMinutes()}`;
  document.querySelector(".chat-widget").classList.add("chat-widget_active");
  messageList.innerHTML += `
  <div class="message">
    <div class="message__time">${messageTime}</div>
    <div class="message__text">
      Добрый день!
    </div>
  </div>
  `
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}