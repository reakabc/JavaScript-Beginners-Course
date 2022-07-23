let todoInput = document.getElementsByTagName("input");
let table = document.getElementById("table");
let table_dom = document.getElementsByClassName("todos-table");

let storage = localStorage;
let todos = [];
todos = JSON.parse(storage.getItem("todos"));

function addTodo() {
  let todos = JSON.parse(storage.getItem("todos"));
  if (todos) {
    todos.push({
      id: new Date().getTime(),
      todo: todoInput[0].value,
      isCompleted: false,
    });
  } else {
    todos = [
      {
        id: new Date().getTime(),
        todo: todoInput[0].value,
        isCompleted: false,
      },
    ];
  }
  storage.setItem("todos", JSON.stringify(todos));
  location.reload();
  populateTodos();
}

function deleteTodo(id) {
  let todos = JSON.parse(storage.getItem("todos"));
  letFreshTodo = todos.filter((item) => {
    return item.id != id;
  });
  storage.setItem("todos", JSON.stringify(letFreshTodo));
  // location.reload();
  populateTodos();
}

function markAsDone(id) {
  let todos = JSON.parse(storage.getItem("todos"));
  letFreshTodo = todos.map((item) => {
    return item.id == id ? { ...item, isCompleted: !item.isCompleted } : item;
  });
  storage.setItem("todos", JSON.stringify(letFreshTodo));
  // location.reload();
  populateTodos();
}

// dom manupulation

function createTodoItem(todo) {
  let row = document.createElement("tr");
  row.classList.add("item");

  let todoData = document.createElement("td");
  todoData.classList.add("todo_item");
  todoData.innerHTML = todo.isCompleted
    ? "<strike>" + todo.todo + "</strike>"
    : todo.todo;

  let markBtnData = document.createElement("td");
  let markBtn = document.createElement("button");
  markBtn.setAttribute("id", "done_btn");
  markBtn.innerText = !todo.isCompleted ? "Done" : "Undo";
  markBtn.addEventListener("click", function () {
    console.log("MARK BTN", todo.id);
    markAsDone(todo.id);
  });

  markBtnData.appendChild(markBtn);

  let deleteBtnData = document.createElement("td");
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "delete_btn");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", function () {
    console.log("DELETE BTN", todo.id);
    deleteTodo(todo.id);
  });

  deleteBtnData.appendChild(deleteBtn);
  row.append(todoData, markBtnData, deleteBtnData);

  return row;
}

function populateTodos() {
  let todos2 = [];
  todos2 = JSON.parse(storage.getItem("todos"));

  table_dom[0].innerHTML = "";

  todos2.forEach((todo) => {
    table_dom[0].appendChild(createTodoItem(todo));
  });
}

