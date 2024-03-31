const input = document.querySelector("#toDoInput");
const addButton = document.querySelector("#addButton");
const list = document.querySelector("#toDoList");
let todos = [];

// Function to render todo list
function renderTodos() {
    list.innerHTML = "";
    for (let index = 0; index < todos.length; index++) {
        const todo = todos[index];
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${todo}</span>
            <button class="delete">Delete</button>
            <button class="edit">Edit</button>
        `;
        const deleteButton = listItem.querySelector('.delete');
        deleteButton.addEventListener("click", function() {
            deleteTodo(index);
        });
        const editButton = listItem.querySelector('.edit');
        editButton.addEventListener("click", function() {
            editTodoText(index);
        });
        list.appendChild(listItem);
    }
}

// Function to add todo
function addTodo() {
    const todoText = input.value.trim();
    if (todoText) {
        todos.push(todoText);
        renderTodos();
        input.value = "";
    }
}

addButton.addEventListener("click", addTodo);

// Function to delete todo
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Function to edit todo text
function editTodoText(index) {
    const newText = prompt("Enter new todo text:");
    if (newText !== null) {
        todos[index] = newText;
        renderTodos();
    }
}

// Function to handle keypress
function handleKeyPress(event) {
    if (event.key === "Enter") {
        addTodo();
    }
}

// Event listener for Enter key press
input.addEventListener("keypress", handleKeyPress);
