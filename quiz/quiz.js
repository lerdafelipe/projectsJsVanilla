const DATA = [
    {id: 1, question: "¿Lorem ipsun las vaurpñ jaolpeo kashdtw laputn jun?", answers:[{num:1, text: "Lala"},{num:2, text:"Coake"},{num:3, text:"farmin"},{num:4, text:"cuelsai"}], correct: 1, userAnswer: null},
    {id: 1, question: "¿Quién es la persona más linda e lnteligente?", answers:[{num:1, text: "perl"},{num:2, text:"park"},{num:3, text:"ntuest"},{num:4, text:"saiplaska"}], correct: 3, userAnswer: null},
    {id: 1, question: "¿Éxito total en la presentación del Chopo de la novela?", answers:[{num:1, text: "Diarios"},{num:2, text:"botellas"},{num:3, text:"fideosn"},{num:4, text:"carne de res"}], correct: 1, userAnswer: null},
    {id: 1, question: "¿cambia la configuración del día?", answers:[{num:1, text: "akete"},{num:2, text:"fernete"},{num:3, text:"whskae"},{num:4, text:"cacao"}], correct: 4, userAnswer: null},
    {id: 1, question: "¿aparece como si se hubiera ido?", answers:[{num:1, text: "9 de oro"},{num:2, text:"lapicera"},{num:3, text:"cintec"},{num:4, text:"abrochadora"}], correct: 4, userAnswer: null},
    {id: 1, question: "¿A quién vas a contratar?", answers:[{num:1, text: "La correcta es la 2"},{num:2, text:"Felipe Lerda"},{num:3, text:"Pon la 2"},{num:4, text:"2"}], correct: 2, userAnswer: null}
];

let num = 0;
let puntaje = 0;
const question = document.getElementById('question');
const questionNum = document.getElementById('question-num');
const answers = document.getElementById('question-answer');

const start = ()=>{
    num = 0;
    initizalize();
    document.getElementById('popup').classList.remove('open');
}

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

const select = (ans)=>{
    if((document.querySelectorAll('.select')).length > 0){
        document.querySelectorAll('.select')[0].classList.remove('select');
    }
    document.getElementById(`answer${ans}`).classList.add('select');
    DATA[num].userAnswer = ans;
}

const nextQ = ()=>{
    if((document.querySelectorAll('.select')).length > 0){
        if(num < DATA.length-1){
            num = num +1;
            initizalize();
        }else{
            for (let element  of DATA) {
                if(element.correct == element.userAnswer){
                    puntaje = puntaje+5;
                }else{
                    puntaje = puntaje;
                }  
            }
            document.getElementById('text-pop').innerHTML = `¡Felicidades! Tu puntaje es ${puntaje}`
            document.getElementById('btn-start').innerHTML = `Comenzar de nuevo`
            document.getElementById('popup').classList.add('open');
        }
    }
    if(num == DATA.length-1){
        document.querySelectorAll('.btn-next')[0].innerHTML = "Finalizar";
    }
}

initizalize();