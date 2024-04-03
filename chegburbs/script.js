// Lista de tarefas
let tasks = [];

// Elementos do DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Função para adicionar tarefa
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        renderTasks();
        taskInput.value = '';
    }
}

// Função para renderizar as tarefas na lista
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

// Adicionar evento de clique ao botão de adicionar
addTaskBtn.addEventListener('click', addTask);

// Chamar renderTasks para exibir as tarefas iniciais
renderTasks();