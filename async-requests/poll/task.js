function  getPoll() {
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange',() => {if (xhr.readyState === xhr.DONE) {
  let poll = JSON.parse(xhr.responseText);
  let answer;
  let pollId = poll.id;
  document.querySelector(".poll__title").textContent = poll.data.title;
  poll.data.answers.forEach((el) => {
    let answerInd = poll.data.answers.indexOf(el);
    answer = document.createElement("button");
    answer.classList.add("poll__answer");
    answer.addEventListener("click", () => {getResults(pollId, answerInd)});
    answer.textContent = el;
    document.querySelector(".poll__answers").append(answer);
  });
}});
};

function getResults (Id, Ind) {
  const xhrRes = new XMLHttpRequest;
  xhrRes.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
  xhrRes.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
  xhrRes.send( `vote=${Id}&answer=${Ind}`);
  xhrRes.addEventListener('readystatechange',() => {if (xhrRes.readyState === xhrRes.DONE) {
    let results = JSON.parse(xhrRes.responseText);
    let resultAlert = "Результаты голосования: ";
    results.stat.forEach((el) => {
      resultAlert += `${el.answer}: ${el.votes}; `;
    });
    alert(resultAlert);  
  };});
};

getPoll();
