const StartButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')

const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
console.log('Started')
startButton.classlist.add('hide')
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer() {

}

const question = [
  {
    question:'What is 2 + 2',
    answers: [
        { Text:'4', correct: true},
        {Text:'22', correct:false}
    ]
  }
]
