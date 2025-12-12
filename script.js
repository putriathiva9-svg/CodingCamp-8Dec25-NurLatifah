/// Initial an empty array to hold todo items
let todo = [];

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    ///validation to ensure both fields are filled
    if (todoInput.value === "" || todoDate.value === "") {
        alert("Please fill in both the todo item and the date.");
    } else {
        const todoObject = {
            item: todoInput.value,
            date: todoDate.value
        };

        todo.push(todoObject);
    }

        renderTodos();
    // Clear input fields after adding
    todoInput.value = "";
    todoDate.value = "";
}
///  Function to reset/clear all todo items
function resetTodos() {
    todo = [];
    renderTodos();
}


/// Function to render todo items to the DOM
function renderTodos() {
    const todoList = document.getElementById("todo-list");

    // Cek apakah elemen ditemukan
    if (!todoList) {
        console.error("Element #todo-list tidak ditemukan.");
        return;
    }

    // Clear existing list
    todoList.innerHTML = "";

    // Render each todo item
    todo.forEach((todoItem, index) => {
        todoList.innerHTML += `
            <li>
                <p class="text-2xl">${todoItem.item} 
                    <span class="text-gray-500">(${todoItem.date})</span>
                </p>
                <hr />
            </li>
        `;
    });
}

function filterTodos(){
}
