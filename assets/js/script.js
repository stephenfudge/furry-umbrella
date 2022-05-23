//  variable for score
var score = 0;
var question = 0; // for the 'for' loop to go through the array of q's





// variable for the start button
var startGame = document.querySelector(".btn");
var timer = document.querySelector("#timer");
var questionNumber = document.querySelector(".questionNumber");
var test = document.querySelector(".answers");


// variable for start timer clock
var timeLeft;

// when i click start game what happens
startGame.addEventListener("click", function () {
    //    hides button on the click
    startGame.style.display = "none";
    timerDown();
    quiz();

    listEL();
})

// function counts down for the game
function timerDown() {
    // timeLeft = 75;
    timeLeft = 10;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timer` to show the remaining seconds
            timer.textContent = "Timer: " + timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timer.textContent = "Timer: " + timeLeft;
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timer.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            gameOver();
        }
    }, 1000);


}

// when timer hits 0 it will show game over and change the text size/color
function gameOver() {
    questionNumber.setAttribute("style", "color: green; font-size: 50px;");
    questionNumber.textContent = "GAME OVER!";

}

// hides button once it's clicked on
// function hideButton(event) {
//     event.style.display = "none";
// }

// questionNumber.textContent = "Question 1";

// for (var i = 0; i < answers; i++) {
//     answers.textContent = "Answer " + i;
// }




//   array for questions

var myQuestions = [{
        question: "What is Javascript?",
        multiChoice: {
            a: "a programming language",
            b: "a clock manufacturer",
            c: "a color invented in 2010"
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML tag do you use to connect your Javascript page to an HTML page",
        multiChoice: {
            a: "h2",
            b: "div",
            c: "script"
        },
        correctAnswer: "c"
    }
];


function quiz() {
    for (var i = 0; i < myQuestions.length; i++)
        //     questionNumber.textContent = myQuestions[question[i]];
        questionNumber.textContent = (myQuestions[i].question);
    // test.textContent = myQuestions.multiChoice[i];
    console.log(myQuestions[i].question);
    console.log(myQuestions[i].multiChoice[i]);

}




var questions = document.querySelector(".questions");


function listEL() {
    questions.addEventListener("click", function (event) {
        var element = event.target;

        if (element.matches(".questions")) {
            var state = element.getAttribute("data-state");

            // Use an if statement to conditionally render the number on the card
            if (state === "hidden") {
                // If the card is clicked while the state is "hidden", we set .textContent to the number 
                element.textContent = element.dataset.list1;
                // Using the dataset property, we change the state to visible because the user can now see the number
                element.dataset.state = "visible";

                // } else {
                //     // 'Hide' the number by setting .textContent to an empty string
                //     // element.textContent = "";
                //     // Use .setAttribute() method
                //     element.setAttribute("data-state", "hidden")

                // }
                // }
            }
        }
    })
}