const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')

function addTask(){
    const taskText = taskInput.value.trim()

    if (taskText !== ""){
        const li = document.createElement('li')

        li.innerHTML = `
            <input type="checkbox" class="task-check">
            <span>${taskText}</span>
        `;

        taskList.appendChild(li)
        taskInput.value = ""
        taskInput.focus()
    }
}

addTaskBtn.addEventListener('click', addTask)

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask()
});

taskList.addEventListener('click', function(event){
    if (event.target.tagName === 'Li' || event.target.tagName === 'Span'){
        const itemParaRemover = event.target.closest('li');
        itemParaRemover.remove();
    }

    if (event.target.classList.contains('task-check')){
        event.target.parentElement.classList.toggle('done')

        event.stopPropagation()
    }
});