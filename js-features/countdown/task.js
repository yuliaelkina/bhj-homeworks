function runTimer () {
  let timerValue = parseInt(document.getElementById("timer").textContent);
  if (timerValue === 0) {
    clearTimeout(timer1);
    return alert("Вы победили в конкурсе!");
  }
  else {
    document.getElementById("timer").textContent = timerValue - 1;
  };
};

////const timer1 = setInterval(runTimer, 1000);
const timer2 = setInterval(runLongTimer, 1000);

function runLongTimer () {
  let hoursValue = parseInt(document.getElementById("timer").textContent.substring(0, 2));
  let minutesValue = parseInt(document.getElementById("timer").textContent.substring(3, 5));
  let secValue = parseInt(document.getElementById("timer").textContent.substring(6, 8));
  let newHoursValue; 
  let newMinutesValue; 
  let newSecValue; 

  if (hoursValue == 0 & minutesValue == 0 & secValue == 0) {
    clearTimeout(timer2);
    return alert("Вы победили в конкурсе!");
  }
  else {
    newHoursValue = hoursValue;
    newSecValue = secValue - 1;
    newMinutesValue = minutesValue;
    if (secValue == 0) {
     newSecValue = 59;
     newMinutesValue = minutesValue - 1;
    }
    else if (minutesValue == 0 & hoursValue != 0) {
      newMinutesValue = 59;
      newHoursValue = hoursValue - 1;
    };
  };
  document.getElementById("timer").textContent = `${newHoursValue.toString().padStart(2, '0')}:${newMinutesValue.toString().padStart(2, '0')}:${newSecValue.toString().padStart(2, '0')}`;
};
