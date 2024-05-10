let todos = [];

function addTodo() {
  const input = document.getElementById("todoInput");
  const todoText = input.value.trim();

  if (todoText !== "") {
    todos.push(todoText);
    input.value = "";
    displayTodos();
    saveTodos();
  }
}

function displayTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${todo} 
      <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
    `;
    todoList.appendChild(li);
  });
}

function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodos();
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
    displayTodos();
  }
}

loadTodos();