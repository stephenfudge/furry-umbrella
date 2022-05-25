// variables for sections
var openingSection = document.getElementById("openingSection");
var questionSection = document.getElementById("questionSection");
var closingSection = document.getElementById("closingSection");
var highScoreSection = document.getElementById("highScoreSection");

// sub sections
var initialsForm = document.getElementById("initialsForm");
var scoresEl = document.getElementById("score");
var viewScores = document.getElementById("viewScores");
var highScoreList = document.getElementById("highScoreList");


//buttons
var startButton = document.querySelector("#startButton");
var backButton = document.querySelector("#backButton");
var clearButton = document.querySelector("#clearButton");
// var formButton = document.querySelector("#formButton");


//questions/answers element
var questionNumber = document.querySelector("#questionNumber");
var answers = document.querySelector("#answers");
var timer = document.querySelector("#timer");

var score = 0;
var timeLeft;
var gameFinished;
timer.textContent = "Timer: ";

//array for high scores
var highScores = [];

//assign array details for questions 
var arrayShuffledQuestions;
var QuestionIndex = 0;



// 5 questions/answers for quiz
var myQuestions = [{
        q: 'What is Javascript?',
        a: '3. A programming language',
        multiChoices: [{
            choice: '1. A clock manufacturer'
        }, {
            choice: '2. A time zone'
        }, {
            choice: '3. A programming language'
        }, {
            choice: '4. A color'
        }]
    },
    {
        q: 'How do you name a variable?',
        a: '1. var',
        multiChoices: [{
            choice: '1. var'
        }, {
            choice: '2. function'
        }, {
            choice: '3. if'
        }, {
            choice: '4. addEventListener'
        }]
    },
    {
        q: 'What tag do you use to attach your Javascript page in your HTML page?',
        a: '4. <script>',
        multiChoices: [{
            choice: '1. <html>'
        }, {
            choice: '2. <head>'
        }, {
            choice: '3. <ol>'
        }, {
            choice: '4. <script>'
        }]
    },
    {
        q: 'Which symbol is used for "OR"? ',
        a: '2. || ',
        multiChoices: [{
            choice: '1. == '
        }, {
            choice: '2. || '
        }, {
            choice: '3. ++ '
        }, {
            choice: '4. -- '
        }]
    },
    {
        q: 'Which of the following popups will provide you with a textbox?',
        a: '3. prompt',
        multiChoices: [{
            choice: '1. alert'
        }, {
            choice: '2. confirm'
        }, {
            choice: '3. prompt'
        }, {
            choice: '4. none of the above'
        }]
    },
];





// initalize
var init = function () {
    highScoreSection.classList.add("hide");
    highScoreSection.classList.remove("show");
    openingSection.classList.remove("hide");
    openingSection.classList.add("show");
    scoresEl.removeChild(scoresEl.lastChild);
    QuestionIndex = 0;
    gameFinished = "";
    timer.textContent = "Timer: ";
    score = 0;
}

//countdown from 35 seconds
var timerDown = function () {
    timeLeft = 35;

    var timercheck = setInterval(function () {
        timer.textContent = 'Timer: ' + timeLeft;
        timeLeft--;

        if (gameFinished) {
            clearInterval(timercheck)
        }

        if (timeLeft < 0) {
            showScore();
            timer.textContent = '';
            clearInterval(timercheck);
        }
    }, 1000)
}


var startGame = function () {
    // adding classes to the html elements
    openingSection.classList.add('hide');
    openingSection.classList.remove('show');
    questionSection.classList.remove('hide');
    questionSection.classList.add('show');

    //setting questions to randomize appearance
    arrayShuffledQuestions = myQuestions.sort(() => Math.random() - 0.5)

    timerDown()
    setQuestion()
}


//function calls questions
var setQuestion = function () {
    resetAnswers()
    displayQuestion(arrayShuffledQuestions[QuestionIndex])
}

//removes answers
var resetAnswers = function () {
    while (answers.firstChild) {
        answers.removeChild(answers.firstChild)
    };
};



//shows questions/answers
var displayQuestion = function (index) {
    questionNumber.textContent = index.q;
    for (var i = 0; i < index.multiChoices.length; i++) {
        var answerButton = document.createElement('button');
        answerButton.textContent = index.multiChoices[i].choice;
        answerButton.classList.add('btn');
        answerButton.classList.add('answerbtn');
        answerButton.addEventListener("click", answerCheck);
        answers.appendChild(answerButton);
    }
};


//checks answer. if right +5 points if wrong -5 seconds
var answerCheck = function (event) {
    var chosenAnswer = event.target
    if (arrayShuffledQuestions[QuestionIndex].a === chosenAnswer.textContent) {
        score = score + 5
    } else {
        score = score;
        timeLeft = timeLeft - 5;
    };

    //proceeds to next question if there is one
    QuestionIndex++
    if (arrayShuffledQuestions.length > QuestionIndex + 1) {
        setQuestion()
    } else {
        gameFinished = "true";
        showScore();
    }
}


//Display total score screen at end of game
var showScore = function () {
    questionSection.classList.add("hide");
    closingSection.classList.remove("hide");
    closingSection.classList.add("show");

    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    scoresEl.appendChild(scoreDisplay);
}



//create high score values
var createHighScore = function (event) {
    event.preventDefault()
    var initials = document.querySelector("#initials").value;
    if (!initials) {
        alert("Enter your initials!");
        return;
        // console.log(initials);
    }

    initialsForm.reset();

    var highScore = {
        initials: initials,
        score: score
    }

    //push and sort scores
    highScores.push(highScore);
    highScores.sort((a, b) => {
        return b.score - a.score
    });

    //clear visibile list to resort
    while (highScoreList.firstChild) {
        highScoreList.removeChild(highScoreList.firstChild)
    }
    //create elements in order of high scores
    for (var i = 0; i < highScores.length; i++) {
        var highscoreEl = document.createElement("li");
        // highscoreEl.ClassName = "high-score";
        highscoreEl.className = "high-score"
        highscoreEl.innerHTML = highScores[i].initials + " - " + highScores[i].score;
        highScoreList.appendChild(highscoreEl);
    }
    console.log(highScore); // shows score and name

    saveHighScore();
    displayHighScores();

}

//save high score
var saveHighScore = function () {
    localStorage.setItem("highScores", JSON.stringify(highScores));

}

//load values/ called on page load
var loadHighScore = function () {
    var loadedHighScores = localStorage.getItem("highScores")
    if (!loadedHighScores) {
        return false;
    }

    loadedHighScores = JSON.parse(loadedHighScores);
    loadedHighScores.sort((a, b) => {
        return b.score - a.score
    })


    for (var i = 0; i < loadedHighScores.length; i++) {
        var highscoreEl = document.createElement("li");
        // highscoreEl.ClassName = "high-score";
        highscoreEl.className = "highScore";
        highscoreEl.innerText = loadedHighScores[i].initials + " - " + loadedHighScores[i].score;
        highScoreList.appendChild(highscoreEl);

        highScores.push(loadedHighScores[i]);

    }
}

//display high score screen from link or when initials entered
var displayHighScores = function () {

    highScoreSection.classList.remove("hide");
    highScoreSection.classList.add("show");
    gameFinished = "true";

    if (closingSection.className = "show") {
        closingSection.classList.remove("show");
        closingSection.classList.add("hide");
    }
    if (openingSection.className = "show") {
        openingSection.classList.remove("show");
        openingSection.classList.add("hide");
    }

    if (questionSection.className = "show") {
        questionSection.classList.remove("show");
        questionSection.classList.add("hide");
    }
}


//clears high scores
var clearScores = function () {
    highScores = [];

    while (highScoreList.firstChild) {
        highScoreList.removeChild(highScoreList.firstChild);
    }

    localStorage.clear(highScores);

}

loadHighScore();

//on start click, start game
startButton.addEventListener("click", startGame)
//on submit button create score
initialsForm.addEventListener("submit", createHighScore)
//when view high-scores is clicked
viewScores.addEventListener("click", displayHighScores)
//go back button
backButton.addEventListener("click", init)
//clear scores button
clearButton.addEventListener("click", clearScores)