//  variable for score
var score = 0;
var question = 0; // for the 'for' loop to go through the array of q's





// variable for the start button
var startGame = document.querySelector(".btn");
var timer = document.querySelector("#timer");
var questionNumber = document.querySelector(".questionNumber");
var answers = document.querySelector(".answers");


// variable for start timer clock
var timeLeft = 75;

// when i click start game what happens
startGame.addEventListener("click", function () {
    startGame.style.display = "none";
})

// hides button once it's clicked on
// function hideButton(event) {
//     event.style.display = "none";
// }

questionNumber.textContent = "Question 1";

for (var i = 0; i < answers; i++) {
    answers.textContent = "Answer " + i;
}




//   array for questions

var myQuestions = [{
        question: "What is Javascript?",
        answers: {
            a: "a programming language",
            b: "a clock manufacturer",
            c: "a color invented in 2010"
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML tag do you use to connect your Javascript page to an HTML page",
        answers: {
            a: "h2",
            b: "div",
            c: "script"
        },
        correctAnswer: "c"
    }
];