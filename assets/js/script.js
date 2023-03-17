//var anie = "anie"
var quizButton = document.querySelector("#startQuiz");

quizButton.addEventListener("click",function(){
document.querySelector("#questionView").style.display = "block"
document.querySelector("#introView").style.display = "none"
})

//create functionality inside input forms
//mkae sure its changing questions
//tracking correct and incorrect answers
//returning correct answer

//creating questions
 let questions = [
    {
        question : "What does "JS" stand for in JavaScript?",
        ChoiceA : "Wrong",
        ChoiceB : "Wrong",
        ChoiceC : "Correct",
        ChoiceD : "Wrong",
        correct : "C",

        question : "Which keyword is used to declare a variable in JavaScript?"
        ChoiceA : "Wrong",
        ChoiceB : "Wrong",
        ChoiceC : "Wrong",
        ChoiceD : "Correct",
        correct : "D",

        question : "What is the difference between == and === in JavaScript?",
        ChoiceA : "Wrong",
        ChoiceB : "Wrong"
        ChoiceC : "Correct",
        ChoiceD : "Wrong",
        correct : "C",

        question : "Which of the following is NOT a primitive data type in JavaScript?",
        ChoiceA : "Wrong",
        ChoiceB : "Wrong",
        ChoiceC : "Correct",
        ChoiceD : "Wrong",
        correct : "C",

        question : "Which of the following is used to add an element to the end of an array in JavaScript?",
        ChoiceA : "Correct",
        ChoiceB : "Wrong",
        ChoiceC : "Wrong",
        ChoiceD : "Wrong",
        correct : "A",

        question : "What does the term "callback function" mean in JavaScript?",
        ChoiceA : "Wrong",
        ChoiceB : "Wrong",
        ChoiceC : "Correct",
        ChoiceD : "Wrong",
        correct : "C",

        question : "Which of the following is used to declare a function in JavaScript?",
        

    }





















 ]