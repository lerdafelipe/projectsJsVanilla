const DATA = [
    {id: 1, question: "¿Lorem ipsun las vaurpñ jaolpeo kashdtw laputn jun?", answers:[{num:1, text: "Lala"},{num:2, text:"Coake"},{num:3, text:"farmin"},{num:4, text:"cuelsai"}], correct: 1, userAnswer: null},
    {id: 1, question: "¿Lorem Ipsum is simply dummy text of the printing and typesetting industry.?", answers:[{num:1, text: "perl"},{num:2, text:"park"},{num:3, text:"ntuest"},{num:4, text:"saiplaska"}], correct: 3, userAnswer: null},
    {id: 1, question: "¿It is a long established fact that a reader will be distracted by the readable content?", answers:[{num:1, text: "Diarios"},{num:2, text:"botellas"},{num:3, text:"fideosn"},{num:4, text:"carne de res"}], correct: 1, userAnswer: null},
    {id: 1, question: "¿here are many variations of passages of Lorem Ipsum available?", answers:[{num:1, text: "akete"},{num:2, text:"fernete"},{num:3, text:"whskae"},{num:4, text:"cacao"}], correct: 4, userAnswer: null},
    {id: 1, question: "¿But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born?", answers:[{num:1, text: "9 de oro"},{num:2, text:"lapicera"},{num:3, text:"cintec"},{num:4, text:"abrochadora"}], correct: 4, userAnswer: null},
    {id: 1, question: "¿A quién vas a contratar?", answers:[{num:1, text: "La correcta es la 2"},{num:2, text:"Felipe Lerda"},{num:3, text:"Pon la 2"},{num:4, text:"2"}], correct: 2, userAnswer: null}
];

//number of the question (ubication in the array)
let num = 0;
//Score of the user
let puntaje = 0;
//Elements of the HTML
const question = document.getElementById('question');
const questionNum = document.getElementById('question-num');
const answers = document.getElementById('question-answer');
//Elements of the HTML
let errores = 0;

//Function to start the game or play again (I show the app and hide the presentation)
const start = ()=>{
    num = 0;
    initizalize();
    document.getElementById('popup').classList.remove('open');
    document.querySelectorAll('.btn-next')[0].innerHTML = "Next Question";
}

//Function to deploy the info in the HTML
const initizalize = ()=>{
    question.innerHTML = DATA[num].question;
    questionNum.innerHTML = `Question ${num+1}`;
    let fragmentAnswer = ''
    for (let e of DATA[num].answers) {
        fragmentAnswer += `<div id="answer${e.num}"" class="answers-div-container">
                                <button onclick=select(${e.num}) type="button" class="back">${e.text}</button>
                            </div>`
    }
    answers.innerHTML = fragmentAnswer;
}

//Function to select an answer
const select = (ans)=>{
    if((document.querySelectorAll('.select')).length > 0){
        document.querySelectorAll('.select')[0].classList.remove('select');
    }
    document.getElementById(`answer${ans}`).classList.add('select');
    DATA[num].userAnswer = ans;
}

//Function to go to the next question
const nextQ = ()=>{
    if((document.querySelectorAll('.select')).length > 0){
        if(num < DATA.length-1){
            num = num +1;
            initizalize();
        }else{
            for (let element  of DATA) {
                if(element.correct == element.userAnswer){
                    puntaje = puntaje+5;
                } 
            }
            document.getElementById('text-pop').innerHTML = `¡Felicidades! Tu puntaje es ${puntaje}`
            document.getElementById('btn-start').innerHTML = `Comenzar de nuevo`;
            document.getElementById('popup').classList.add('open');
        }
    }
    if(num == DATA.length-1){
        document.querySelectorAll('.btn-next')[0].innerHTML = "Finalizar";
    }
}

//Deploy the first question when the app renderize
initizalize();