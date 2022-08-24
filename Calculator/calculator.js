const displayUp = document.getElementById('initial-value');
const displayDown = document.getElementById('live-value');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');

const display = new Display(displayUp, displayDown);

numbers.forEach(number =>{
    number.addEventListener('click', ()=> {
        display.addNumber(number.innerHTML)
    });
});

operations.forEach(op =>{
    op.addEventListener('click', ()=> {
        display.choice(op.value);
    });
})