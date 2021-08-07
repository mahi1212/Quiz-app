// Dom Selection
const startButton = document.querySelector('#start-btn');
const nextButton = document.querySelector('#next-btn');
const questionContainer = document.querySelector('#question-container');
const questionElement = document.querySelector('#question')
const answerButtonsElement = document.querySelector('#answer-buttons');


let shuffleQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

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
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(){

}

const questions = [
    {
        question: "What is 2 + 2 ?",
        answers : [
            { text : '4', correct: true},
            { text : '22', correct: false}
        ]
    }
]