const taskList = document.querySelector(".tasks__list");
const addButton = document.querySelector(".tasks__add");

addButton.addEventListener("click", (e) => {e.preventDefault();
  addTask();});

  window.addEventListener("keydown", (e) => {
  if (e.code == "enter") {
    addTask();
  }
});

function addTask () {
  if (document.querySelector(".tasks__input").value.trim()) {
  let newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.innerHTML = `
      <div class="task__title">
      ${document.querySelector(".tasks__input").value}
      </div>
    <a href="#" class="task__remove">&times;</a>
  `;
  newTask.querySelector("a").addEventListener("click", removeTask);
  taskList.append(newTask);
  document.querySelector(".tasks__input").value = "";
  }
};

function removeTask () {
  this.closest(".task").remove();
};