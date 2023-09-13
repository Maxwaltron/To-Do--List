// Define an array to store tasks
let tasks = [];

// Function to add a new task
function addTask(taskText) {
    tasks.push(taskText);
    updateTaskList();
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

// Function to update the task list
function updateTaskList() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button class="btn btn-danger btn-sm float-right" onclick="removeTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Add event listener for form submission
const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTaskInput = document.getElementById('new-task');
    const newTaskText = newTaskInput.value.trim();
    if (newTaskText !== '') {
        addTask(newTaskText);
        newTaskInput.value = '';
    }
});
