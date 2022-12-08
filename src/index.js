import './style.css';

const list = document.getElementById('tasks-list');

const toDoTasks = [
  {
    description: 'Task 1',
    completed: false,
    index: 1,
  },

  {
    description: 'Task 2',
    completed: false,
    index: 2,
  },

  {
    description: 'Task 3',
    completed: false,
    index: 3,
  },
];

toDoTasks.forEach((item) => {
  list.innerHTML += `
    <div class="items-list">
    <label for="${item.index}" class="each-item"><input type="checkbox"><div class="task-text">${item.description}</div><button class="change-task-btn"><i class="fa-solid fa-ellipsis-vertical"></i></button></label>
    <hr class="division-line">
    </div>
    `;
});