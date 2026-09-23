const input = document.getElementById("input");
const list = document.getElementById("list");

function addTask() {
    if (input.value.trim() === "") {
        alert("Enter a task!");
        input.focus();
        return;
    }
    const newTask = document.createElement("li");
    const taskText = document.createElement("span");    // for edit function   
    taskText.textContent = input.value.trim();
    newTask.appendChild(taskText);

    const listButtons = document.createElement("div");
    listButtons.className = "list-buttons";

    const editButton = document.createElement("button");
    editButton.className = "edit-button";
    editButton.textContent = "Edit";

    const doneButton = document.createElement("button");
    doneButton.className = "done-button";
    doneButton.textContent = "Done";

    listButtons.appendChild(editButton);
    listButtons.appendChild(doneButton);

    newTask.appendChild(listButtons);

    list.appendChild(newTask);

    input.value = "";

    saveList();
}

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

list.addEventListener("click", function (event) {
    const task = event.target.closest("li");
    
    if (event.target.className === "edit-button") {
        const taskText = task.querySelector("span");
        editTask(taskText);
    }
    if (event.target.className === "done-button") {
        doneTask(task);
    }
});

function editTask(taskText) {
    const editedText = prompt("Edit your task:", taskText.textContent);

    if (editedText === null || editedText.trim() === "") {
        return;
    }
    taskText.textContent = editedText.trim();

    saveList();
}

function doneTask(task) {
    task.remove();

    saveList();
}

function saveList() {
    localStorage.setItem("savedList", list.innerHTML);
}

function loadList() {
    list.innerHTML = localStorage.getItem("savedList") || "";
}

loadList();