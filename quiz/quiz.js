const DATA = [
    {id: 1, question: "¿Lorem ipsun las vaurpñ jaolpeo kashdtw laputn jun?", answers:[{num:1, text: "Lala"},{num:2, text:"Coake"},{num:3, text:"farmin"},{num:4, text:"cuelsai"}], correct: 1, userAnswer: 1},
    {id: 2, question: "¿Lorem ipsun las vaurpñ jaolpeo kashdtw laputn jun?", answers:[{1: "Lala"},{2: "Coake"},{3: "farmin"},{4: "cuelsai"}], correct: 1, userAnswer: 1},
    {id: 3, question: "¿Lorem ipsun las vaurpñ jaolpeo kashdtw laputn jun?", answers:[{1: "Lala"},{2: "Coake"},{3: "farmin"},{4: "cuelsai"}], correct: 1, userAnswer: 1},
    {id: 4, question: "¿Lorem ipsun las vaurpñ jaolpeo kashdtw laputn jun?", answers:[{1: "Lala"},{2: "Coake"},{3: "farmin"},{4: "cuelsai"}], correct: 1, userAnswer: 1},
    {id: 5, question: "¿Lorem ipsun las vaurpñ jaolpeo kashdtw laputn jun?", answers:[{1: "Lala"},{2: "Coake"},{3: "farmin"},{4: "cuelsai"}], correct: 1, userAnswer: 1},
    {id: 6, question: "¿Lorem ipsun las vaurpñ jaolpeo kashdtw laputn jun?", answers:[{1: "Lala"},{2: "Coake"},{3: "farmin"},{4: "cuelsai"}], correct: 1, userAnswer: 1}
];

let num = 0;
const question = document.getElementById('question');
const questionNum = document.getElementById('question-num');
const answers = document.getElementById('question-answer');

const initizalize = ()=>{
    question.innerHTML = DATA[0].question;
    questionNum.innerHTML = `Question ${num+1}`;
    let fragmentAnswer = ''
    for (let e of DATA[0].answers) {
        fragmentAnswer += `<div class="answers-div-container">
                                <button type="button" class="back">${e.text}</button>
                            </div>`
    }
    answers.innerHTML = fragmentAnswer;
}

initizalize();