// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task function
const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create li element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✗';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    // Append buttons to li
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
};

// Event listener for button click
addTaskBtn.addEventListener('click', addTask);

// Allow pressing Enter to add task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
