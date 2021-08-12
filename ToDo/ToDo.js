let fecha= new Date();
const date = fecha.getDate() + '/' + (fecha.getMonth() +1) + '/' + fecha.getFullYear();

let innerDate = document.getElementById('date')
innerDate.innerHTML = date;


/* Functions of ToDo*/
//TODO in HTML
const innerTask = document.getElementById('task-section');
//Popup in HTML
const popup = document.getElementById('popup');
//Input for new task in HTML
const newTask = document.getElementById('newTask')

//Start of list of tasks.
let arrTasks = [];


//Function add new task
const AddTask = ()=>{
    //new Task with the task and the ID
    let taskObj = {'task': newTask.value, 'id': (arrTasks.length + 1)};
    //Push the new task to the list of tasks
    arrTasks.push(taskObj);
    //Hide the form
    hideForm();
    //render of the tasks
    renderTask(arrTasks);
    //Cleaning the input of tasks
    newTask.value = '';
}

const renderTask = (array)=>{
    //Declaring a fragment to insert the task
    let fragment = ''
    //Pushing Html of tasks
    array.forEach(task =>{
        fragment += `<div class="ToDo-tasks">
                            <button type="button" onclick="taskDone(${task.id})" class="task-button"><input class="Check" type="checkbox"/></button>
                            <p class="task-text">${task.task}</p>
                    </div>`
    });
    //Inserting the tasks in HTML
    innerTask.innerHTML = fragment;
}

//Function to show the form
const showForm = ()=>{
    popup.classList.add('active');
}
//Function to hide the form
const hideForm = ()=>{
    popup.classList.remove('active');
}


//Remove Task
const taskDone = (ID)=>{
    arrTasks = arrTasks.filter(task => task.id !== ID);
    renderTask(arrTasks);
}