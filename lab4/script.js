// --- 1. Define Classes ---

/**
 * Task Class: A blueprint for creating task objects.
 * This class holds the task's data.
 */
class Task {
    // constructor is used to initialize object properties
    constructor(description) {
        this.description = description;
        this.completed = false;
        // Add a timestamp as required by "Pro" feature
        this.createdAt = new Date(); 
    }
}

/**
 * TaskManager Class: Manages all task-related logic.
 * This class holds the array of tasks and methods to change them.
 */
class TaskManager {
    constructor() {
        // Store tasks in an array
        this.tasks = []; 
        this.filter = 'all'; // 'all', 'active', 'completed'
        this.sort = 'date'; // 'date', 'name'
    }

    // Method to add a new task
    addTask(description) {
        if (!description) return; // Ignore empty input
        const newTask = new Task(description); // Create new instance
        this.tasks.push(newTask); // Add to array
    }

    // Method to delete a task
    deleteTask(index) {
        // Use .splice() to mutate (change) the original array
        this.tasks.splice(index, 1);
    }

    // Method to edit a task
    editTask(index, newDescription) {
        if (!newDescription) return;
        this.tasks[index].description = newDescription;
    }

    // Method to toggle completion state
    toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
    }
    
    // Method to get tasks based on current filters/sorting
    getTasksToRender() {
        // Use spread operator to create a copy for sorting/filtering
        let tasksToRender = [...this.tasks];

        // 1. Apply Filter
        // Use .filter() which returns a new array
        if (this.filter === 'active') {
            tasksToRender = tasksToRender.filter(task => !task.completed);
        } else if (this.filter === 'completed') {
            tasksToRender = tasksToRender.filter(task => task.completed);
        }

        // 2. Apply Sort
        // Use .sort() to mutate the copied array
        if (this.sort === 'name') {
            tasksToRender.sort((a, b) => a.description.localeCompare(b.description));
        } else {
            // Default sort by creation time
            tasksToRender.sort((a, b) => a.createdAt - b.createdAt);
        }
        
        return tasksToRender;
    }
}


// --- 2. Initialize App and DOM Elements ---

// Create the single instance of our TaskManager
const app = new TaskManager();

// Get all DOM elements we need to interact with
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Filter buttons
const filterAllBtn = document.getElementById('filter-all');
const filterActiveBtn = document.getElementById('filter-active');
const filterCompletedBtn = document.getElementById('filter-completed');

// Sort buttons
const sortNameBtn = document.getElementById('sort-name');
const sortDateBtn = document.getElementById('sort-date');


// --- 3. Render Function ---

/**
 * render: Updates the <ul> with the current tasks.
 * This is called every time the data changes.
 */
function render() {
    const tasksToRender = app.getTasksToRender();
    
    // Clear the list first
    taskList.innerHTML = ''; //

    // Use .map() to transform the array into HTML strings
    const taskElements = tasksToRender.map((task, index) => {
        // Use ternary operator (inline if) to set the class
        const completedClass = task.completed ? 'completed' : '';
        
        // Use template literals to build the HTML
        // We add data-index to know which task to act on
        //
        // *** EDITED THIS BLOCK ***
        return `
            <li class="task-item ${completedClass}" data-index="${index}">
                <span class="description">${task.description}</span>
                
                <button class="toggle-btn">✅</button>
                <button class="edit-btn">✏️</button>
                <button class="delete-btn">❌</button>

                <span class="timestamp">Created: ${task.createdAt.toLocaleString()}</span>
            </li>
        `;
    }).join(''); // Join all array elements into one big string
    
    // Add the new HTML to the page
    taskList.innerHTML = taskElements;
}


// --- 4. Attach Event Listeners ---

// Add Task Button
addBtn.addEventListener('click', () => { //
    const description = taskInput.value;
    app.addTask(description);
    render();
    taskInput.value = ''; // Clear input
});

// Event Delegation for the task list (toggle, edit, delete)
// One listener on the parent <ul> handles clicks for all children.
taskList.addEventListener('click', (event) => {
    const target = event.target; // The element that was clicked
    
    // Find the closest <li> parent to get the index
    const taskItem = target.closest('.task-item');
    if (!taskItem) return; // Clicked in empty space

    // Get the index from the data-index attribute
    const index = parseInt(taskItem.dataset.index, 10);
    
    // Check which button was clicked using classList
    if (target.classList.contains('delete-btn')) {
        app.deleteTask(index);
    } 
    else if (target.classList.contains('toggle-btn')) {
        app.toggleTask(index);
    } 
    else if (target.classList.contains('edit-btn')) {
        // Use prompt() to get new description
        const currentDesc = app.tasks[index].description;
        const newDescription = prompt('Enter new task description:', currentDesc);
        app.editTask(index, newDescription);
    }
    
    render(); // Re-render the list after any change
});


// Listeners for Filter Buttons
filterAllBtn.addEventListener('click', () => {
    app.filter = 'all';
    render();
});

filterActiveBtn.addEventListener('click', () => {
    app.filter = 'active';
    render();
});

filterCompletedBtn.addEventListener('click', () => {
    app.filter = 'completed';
    render();
});


// Listeners for Sort Buttons
sortNameBtn.addEventListener('click', () => {
    app.sort = 'name';
    render();
});

sortDateBtn.addEventListener('click', () => {
    app.sort = 'date';
    render();
});


// --- 5. Initial Render ---
// Call render() once on page load to show any initial tasks (if we had any)
render();