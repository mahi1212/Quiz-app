// Dom Selection
const startButton = document.querySelector('#start-btn');
const nextButton = document.querySelector('#next-btn');
const questionContainer = document.querySelector('#question-container');
const questionElement = document.querySelector('#question')
const answerButtonsElement = document.querySelector('#answer-buttons');


let shuffleQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame(){
    startButton.classList.add('hide'); // hiding button at click
    questionContainer.classList.remove('hide'); //hiding hide class from container 
    // Shuffling question
    shuffleQuestions = questions.sort(() =>Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body); //to remove bg color after appearing new que
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct);
    });
    if(shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide');
    }else{
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    }else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: "What is correct for 2! ?",
        answers : [
            { text : '2', correct: true},
            { text : '22', correct: false},
            { text : '8', correct: false},
            { text : '6', correct: false},
        ]
    },
    {
        question: "What is a scientist ?",
        answers : [
            { text : 'Newton', correct: true},
            { text : 'Sakib', correct: false},
            { text : 'Mark', correct: false},
            { text : 'Elon', correct: false}
        ]
    },
    {
        question: "What does mean by WIFI ?",
        answers : [
            { text : 'Wireless Fidelity', correct: true},
            { text : 'Wireless Fraction', correct: false},
            { text : 'Wireless Fast-Iteration', correct: false},
            { text : 'Network Invalid', correct: false}
        ]
    },
    {
        question: "What is 5 * 6 ?",
        answers : [
            { text : '30', correct: true},
            { text : '15', correct: false},
            { text : '45', correct: false},
            { text : '60', correct: false}
        ]
    }
]