const StartButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
  currentQuestionIndex++
  setNextQuestion()
})


function startGame() {
console.log('Started')
startButton.classlist.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer =>{
    const button = document.createElement('button')
    button.innerText = answer.Text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButon.classList.add('hide')
  while (answerButtonElement.FirstChild) 
  answerButtonElement.removeChild
  (answerButtonElement.firstChild)
}

function selectAnswer() {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonsElement.children).forEach(button =>{
  setStatusClass(button, button.dataset.correct)
 })
 if (shuffledQuestions.length > currentQuestionIndex + 1){
  nextButton.classList.remove('hide')
 } else {
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')
 }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classlist.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const question = [
  {
    question:'What is 2 + 2?',
    answers: [
        { Text:'4', correct: true},
        {Text:'22', correct:false}
    ]
  },
]
