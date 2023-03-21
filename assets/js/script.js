//var anie = "anie"

// setting variables
var quizButton = document.querySelector("#startQuiz");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var quizQuestions = document.getElementById("questionView");
var timerElement = document.getElementById("timer-count");
var scoreView = document.getElementById("highscores");
var startButton = document.getElementById("startQuiz");
var timerCount

//creating questions
var questions = [
    {
        question: "What does 'JS' stand for in JavaScript?",
        choices: [
            "Just Saying",
            "Java Script",
            "JavaScript",
            "Jolt Script",],
        answer: "JavaScript",
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        choices: [
            "let",
            "var",
            "const",
            "all of the above",],
        answer: "all of the above",
    },
    {
        question: "What is the difference between == and === in JavaScript?",
        choices: [
            "There is no difference",
            "== compares the value and type, while === compares only the value",
            "=== compares the value and type, while == compares only the value",
            "== compares only the type, while === compares the value and type",],
        answer: "=== compares the value and type, while == compares only the value",
    },
    {
        question: "Which of the following is NOT a primitive data type in JavaScript?",
        choices: [
            "string",
            "boolean",
            "array",
            "number",],
        answer: "array",
    },
    {
        question: "Which of the following is used to add an element to the end of an array in JavaScript?",
        choices: [
            "push()",
            "unshift()",
            "shift()",
            "pop()",],
        answer: "push()",
    },
    {
        question: "What does the term 'callback function mean in JavaScript?",
        choices: [
            "A function that is called at the beginning of a script",
            "A function that is called when an event occurs",
            "A function that is passed as an argument to another function",
            "A function that is called when an error occurs",],
        answer: "A function that is passed as an argument to another function",
    },
    {
        question: "Which of the following is used to declare a function in JavaScript?",
        choices: [
            "def",
            "func",
            "function",
            "fn",],
        answer: "function",
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        choices: [
            "It refers to the current object",
            "It refers to the global object",
            "It refers to the parent object",
            "It refers to the child object",],
        answer: "It refers to the current object",
    },
    {
        question: "Which of the following is NOT a looping structure in JavaScript?",
        choices: [
            "while",
            "do-while",
            "for",
            "repeat-until",],
        answer: "repeat-until",
    },
    {
        question: "Which of the following is used to prevent a variable from being modified in JavaScript?",
        choices: [
            "let",
            "var",
            "const",
            "none of the above",],
        answer: "const",
    }
];

//more variables
var lastQuestion = questions.length - 1
var runningQuestion = 0;
timerElement;
let score = 0;

//function for quiz button
quizButton.addEventListener("click", function () {
    document.querySelector("#questionView").style.display = "block";
    document.querySelector("#introView").style.display = "none";
});


// displaying the question
function displayQuestion() {
    var q = questions[runningQuestion];

    question.innerText = "Question: " + q.question
    choiceA.innerText = q.choices[0]
    choiceB.innerText = q.choices[1]
    choiceC.innerText = q.choices[2]
    choiceD.innerText = q.choices[3]
}


startButton.addEventListener("click", startQuiz);

//starting quiz
function startQuiz() {
    quizButton.style.display = "none";
    displayQuestion();
    questionView.style.display = "block";
    timerCount = 75;
    displayTime();
}
//tracking correct and incorrect answers





//setting the timer for the quiz
//var count
//timerElement = 75; //75 seconds for the whole quiz


function displayTime() {
    console.log("startingtimer");
    timerElement.textContent = timerCount;
    timer = setInterval(function () {
        timerCount--;
        console.log("timer-count", timerCount);
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
            // Tests if win condition is met
            // Clears interval and stops timer
            clearInterval(timer);
        }
    }, 1000);

}



// setting the function to check for answers

var choiceEl = document.getElementById('choices')

function checkAnswer(event) {

    var answerButton = event.target
    //console.log(answerButton.textContent)
    console.log(questions[runningQuestion].answer)
    // if (!answerButton.matches('.choice')) {
    //     console.log('no')
    //     return
    // }

    if (answerButton.textContent !== questions[runningQuestion].answer) {
        console.log("wrong")

    } else {
        console.log("right")
    }

    runningQuestion++;

    displayQuestion();
}

choiceEl.onclick = checkAnswer;

//need a function to handle the end of the quiz
//stop the timer
//display text input for high scores
//take the value and put it into local storage
//run score display
// scoring
function scoreDisplay() {

}




















