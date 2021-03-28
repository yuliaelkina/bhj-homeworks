const form = document.getElementById('form');
const progress = document.getElementById('progress');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let data = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.upload.onprogress = function(event) {
    progress.value = Math.round((event.loaded/event.total)*100)/100;
  };
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(data);
});

