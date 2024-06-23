document.addEventListener("DOMContentLoaded", function() {
    loadTodos();
    applyTheme(); // Uygulama yüklendiğinde temayı uygula
});

const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const toast = document.getElementById("toast");
const toastBody = toast.querySelector(".toast-body");
const themeToggleBtn = document.getElementById("theme-toggle");

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

themeToggleBtn.addEventListener("click", toggleTheme);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") {
        showToast("Please enter a task!");
        return;
    }
    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
    saveTodos();
    todoInput.value = "";
}

function createTodoItem(text) {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = text;

    const doneBtn = document.createElement("button");
    doneBtn.className = "btn btn-success btn-sm";
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", markDone);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", deleteTodo);

    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    return li;
}

function markDone(event) {
    const todoItem = event.target.parentElement;
    todoItem.classList.toggle("completed");
    saveTodos();
}

function deleteTodo(event) {
    const todoItem = event.target.parentElement;
    todoList.removeChild(todoItem);
    saveTodos();
}

function showToast(message) {
    toastBody.textContent = message;
    $(toast).toast("show");
}

function saveTodos() {
    const todos = [];
    todoList.querySelectorAll(".list-group-item").forEach(item => {
        todos.push({
            text: item.firstChild.textContent,
            completed: item.classList.contains("completed")
        });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => {
        const todoItem = createTodoItem(todo.text);
        if (todo.completed) {
            todoItem.classList.add("completed");
        }
        todoList.appendChild(todoItem);
    });
}

function toggleTheme() {
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
}

function applyTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme);
}
