let task = document.querySelector(".todo-add > input");
let add_btn = document.querySelector(".todo-add > div");
let todo_list = document.querySelector(".todo-list");
let temp;

if (localStorage.getItem("item") === null) {
  temp = "";
} else {
  temp = localStorage.getItem("item");
}

function press_Enter() {
  task.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      add_btn.click();
    }
  });
}

press_Enter();

function delete_todo(dlt) {
  dlt.forEach((el) => {
    el.addEventListener("click", () => {
      let item = el.parentElement;
      item.remove();
      localStorage.removeItem("item");
      temp = todo_list.innerHTML;
      localStorage.setItem("item", temp);
    });
  });
}

function addItems() {
  if (task.value === "") alert("Please enter your Task...");
  else {
    let listitem = `<div class='task'>${
      task.value
    }<div class=${'"dlt-btn"'}></div></div>`;
    temp += listitem;
    localStorage.setItem("item", temp);
    todo_list.innerHTML += listitem;
    task.value = "";
    let dlt = document.querySelectorAll(".dlt-btn");
    delete_todo(dlt);
  }
}

add_btn.addEventListener("click", addItems);

window.onload = () => {
  if (localStorage.getItem == null) {
  } else {
    todo_list.innerHTML = localStorage.getItem("item");
    let dlt = document.querySelectorAll(".dlt-btn");
    delete_todo(dlt);
  }
};
