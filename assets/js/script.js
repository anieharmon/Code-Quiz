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

//creating questions
let questions = [
    {
        question : "What does 'JS' stand for in JavaScript?",
        choiceA : "Just Saying",
        choiceB : "Java Script",
        choiceC : "JavaScript",
        choiceD : "Jolt Script",
        correct : "C",
    },
    {
        question : "Which keyword is used to declare a variable in JavaScript?",
        choiceA : "let",
        choiceB : "var",
        choiceC : "const",
        choiceD : "all of the above",
        correct : "D",
    },
    {   
        question : "What is the difference between == and === in JavaScript?",
        choiceA : "There is no difference",
        choiceB : "== compares the value and type, while === compares only the value",
        choiceC : "=== compares the value and type, while == compares only the value",
        choiceD : "== compares only the type, while === compares the value and type",
        correct : "C",
    }, 
    {  
        question : "Which of the following is NOT a primitive data type in JavaScript?",
        choiceA : "string",
        choiceB : "boolean",
        choiceC : "array",
        choiceD : "number",
        correct : "C",
    },
    {    
        question : "Which of the following is used to add an element to the end of an array in JavaScript?",
        choiceA : "push()",
        choiceB : "unshift()",
        choiceC : "shift()",
        choiceD : "pop()",
        correct : "A",
    },
    {    
        question : "What does the term 'callback function mean in JavaScript?",
        choiceA : "A function that is called at the beginning of a script",
        choiceB : "A function that is called when an event occurs",
        choiceC : "A function that is passed as an argument to another function",
        choiceD : "A function that is called when an error occurs",
        correct : "C",
    },
    {
        question : "Which of the following is used to declare a function in JavaScript?",
        choiceA : "def",
        choiceB : "func",
        choiceC : "function",
        choiceD : "fn",
        correct : "C",
    },
    {   question : "What is the purpose of the 'this' keyword in JavaScript?",
        choiceA : "It refers to the current object",
        choiceB : "It refers to the global object",
        choiceC : "It refers to the parent object",
        choiceD : "It refers to the child object",
        correct : "A",
    },
    {
        question : "Which of the following is NOT a looping structure in JavaScript?",
        choiceA : "while",
        choiceB : "do-while",
        choiceC : "for",
        choiceD : "repeat-until",
        correct : "D",
    },
    {    
        question: "Which of the following is used to prevent a variable from being modified in JavaScript?",
        choiceA : "let",
        choiceB : "var",
        choiceC : "const",
        choiceD : "none of the above",
        correct : "C",
    }];


 //more variables
 var lastQuestion = questions.length - 1
 var runningQuestion = 0;
 timerElement;
let score = 0;

//function for quiz button
quizButton.addEventListener("click",function(){
document.querySelector("#questionView").style.display = "block";
document.querySelector("#introView").style.display = "none";
});


 // displaying the question
 function displayQuestion(){
    var q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}


startQuiz.addEventListener("click", displayQuestion);

//starting quiz
function startQuiz(){
    quizButton.style.display = "none";
    displayQuestion();
    questionView.style.display = "block";
    timerElement = setInterval(1000);
}
//tracking correct and incorrect answers



   

    //setting the timer for the quiz
    //var count
    //timerElement = 75; //75 seconds for the whole quiz
    
    
    function displayTime(){
        timer = setInterval(function() {
            timerCount--;
            timerElement.textContent = timerCount;
            if (timerCount >= 0) {
              // Tests if win condition is met
              if (answerIsCorrect && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                winGame();
              }
            }
            // Tests if time has run out
            if (timerCount === 0) {
              // Clears interval
              clearInterval(timer);
              loseGame();
            }
          }, 1000);

    }



    // setting the function to check for answers
    var quizQuestions = document.getElementById("questionView")
    function checkAnswer(answer){
        if(questions[runningQuestionIndex].correct == answer){
            score++;
            answerIsCorrect();
        } else {
            answerIsWrong();
        }
        if(runningQuestionIndex < lastQuestionIndex){
            count = 0;
            runningQuestionIndex++;
            quizQuestions();
        } else {
            clearTimeout(quizTime);
            scoreView();
        }}
    

// scoring
function scoreDisplay(){

}




















