const form = document.getElementById('form');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);
  xhr.upload.onprogress = function(event) {
    console.log(event.loaded + ' / ' + event.total);
  };
  
});

