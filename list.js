const input = document.getElementById("input");
const list = document.getElementById("list");

function addTask() {
    if (input.value.trim() === "") {
        alert("Enter a task!");
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
    editButton.onclick = function () {
        editTask(taskText);
    };

    const doneButton = document.createElement("button");
    doneButton.className = "done-button";
    doneButton.textContent = "Done";
    doneButton.onclick = function () {
        doneTask(newTask);
    };

    listButtons.appendChild(editButton);
    listButtons.appendChild(doneButton);

    newTask.appendChild(listButtons);

    list.appendChild(newTask);

    input.value = "";
}

function editTask(taskText) {
    const editedText = prompt("Edit your task:", taskText.textContent);

    if (editedText === null || editedText.trim() === "") {
        return;
    }

    taskText.textContent = editedText.trim();
}

function doneTask(task) {
    task.remove();
}

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});