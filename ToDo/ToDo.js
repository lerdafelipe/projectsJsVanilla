let fecha= new Date();
const date = fecha.getDate() + '/' + (fecha.getMonth() +1) + '/' + fecha.getFullYear();

let innerDate = document.getElementById('date')
innerDate.innerHTML = date;


/* Functions of ToDo*/
let arrTasks = [];
arrTasks.push({task: 'Lorem ipsun tradelkore portumbar', id: (arrTasks.length + 1)})
const innerTask = document.getElementsByClassName('task-section');
console.log(arrTasks);

for (const task of arrTasks) {
    innerTask.innerHTML = `<div class="ToDo-tasks">
                                <button type="button" onclick="taskDone(${task.id})" class="task-button"><input class="Check" type="checkbox"/></button>
                                <p class="task-text">${task.task}</p>
                            </div>`
}
