const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let lostMolesAmount;
let deadMolesAmount;

function getHole(ind) {
  return document.getElementById(`hole${ind}`);
};

for (let ind = 1; ind <10; ind++) {
  getHole(ind).onclick = shoot;
};

function shoot () {
  if(this.classList.contains("hole_has-mole")) {
  deadMolesAmount = parseInt(dead.textContent);
    if (deadMolesAmount == 9) {
      dead.textContent = 0;
      lost.textContent = 0;
      return alert("Вы гроза кротов!");
    }
    else {
      dead.textContent = deadMolesAmount + 1;
    }
  }
  else {
    lostMolesAmount = parseInt(lost.textContent);
    if (lostMolesAmount == 4) {
      dead.textContent = 0;
      lost.textContent = 0;
      return alert("Повезет в следующий раз");
    }
    else {
      lost.textContent = lostMolesAmount + 1;
    }
  };
};