import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Трекер завдань</h1>

    <div class="task-form">
      <input id="taskInput" type="text" placeholder="Введіть завдання" />
      <button id="addTaskBtn">Додати</button>
    </div>

    <ul id="taskList"></ul>
  </div>
`;

const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Введіть завдання!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
});