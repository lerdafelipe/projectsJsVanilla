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

//Get ID Random
function randomId(){
    let idRand = Math.floor(Math.random() * (1000-1) + 1)
    let arrayRepete = arrTasks.filter(task => task.id === idRand);
    if(arrayRepete.length === 0){
        return idRand;
    }else{
        let idRand2 = Math.floor(Math.random() * (1000-1) + 1)
        let arrayRepete2 = arrTasks.filter(task => task.id === idRand2);
        if(arrayRepete2.length === 0){return idRand2;}
    }
}


//Function add new task
const AddTask = ()=>{
    if((newTask.value.length) > 5){
        //new Task with the task and the ID
        let taskObj = {'task': newTask.value, 'id': randomId()};
        //Push the new task to the list of tasks
        arrTasks.push(taskObj);
        //Send task to localstorage
        localStorage.setItem('Tasks', JSON.stringify(arrTasks));
        //Hide the form
        hideForm();
        //render of the tasks
        renderTask();
        //Cleaning the input of tasks
        newTask.value = '';
    }
}

const renderTask = ()=>{
    //Declaring a fragment to insert the task
    let fragment = ''
    //Pushing Html of tasks
    arrTasks.forEach(task =>{
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
    localStorage.setItem('Tasks', JSON.stringify(arrTasks));
    renderTask(arrTasks);
}

//Get tasks from localStorage
const recuperarTasks = ()=>{
    if((JSON.parse(localStorage.getItem('Tasks'))) !== null){
        arrTasks = JSON.parse(localStorage.getItem('Tasks'));
        renderTask(arrTasks);
    }
}
recuperarTasks();


newTask.addEventListener('keyup', (keyup)=>{
    if((keyup.key).toString() === 'Enter'){
        AddTask();
    }
})