
// ## Acceptance Criteria

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// PSUEDOCODE:
    // references: 
        // start game:
        var start = document.getElementById("start");
        var startBtn = document.getElementById("startBtn");
        // reference buttons to choices and questions:
        var questions = document.getElementById("questions");
        var Qtitle = document.getElementById("Qtitle");
        var choiceA = document.getElementById("btnA");
        var choiceB = document.getElementById("btnB");
        var choiceC = document.getElementById("btnC");
        var ChoiceD = document.getElementById("btnD");
        var checkAnswer = document.getElementById("checkanswer");
        // timer:
        var timer = document.getElementById("timer");
        var timeLft = document.getElementById("timeLft");
        var timeUp = document.getElementById("timeUp");
        // score summary references:
        var summary = document.getElementById("scoreSum");
        var finalScore = document.getElementById("finalScore");
        var initials = document.getElementById("initials");
        var submitInitials = document.getElementById("submitInitials");
    // create a function for a timer to start once the button to begin is clicked
    var totalTime = 151;
    function newQuiz(){
        questionIndex = 0;
        totalTime = 150;
        timeLft.textContent = totalTime;
        initials.textContent ="";

        start.style.display = "none";
        questions.style.display = "block";
        timer.style.display = "block";
        timeUp.style.display = "none";

        // timer function:
        var startTimer = setInterval (function () {
            totalTime--;
            timeLft.textContent = totalTime;
            if(totalTime <= 0) {
                clearInterval(startTimer);
                if (questionIndex < questions.length -1){
                    gameOver();
                }
            }
        }, 1000);
        showQuiz();
    };
    // begin display of quiz questions
    function showQuiz(){
        nextQuestion();
    }
    function nextQuestion () {
        Qtitle.textContent = questions[questionIndex].question;
        choiceA.textContent = questions[questionIndex].choices[0];
        choiceB.textContent = questions[questionIndex].choices[1];
        choiceC.textContent = questions[questionIndex].choices[2]
        ChoiceD.textContent = questions[questionIndex].choices[3]
    }
    // Set of Questions:
    const Questions = [
        {
            question:"How do you add a comment in JS?",
            choices: ["A.<!--Comment--> ","B. //Comment ","C. 'Comment' ","D. * Comment * "],
            answer: "B. //Comment"
        },
        {
            question:"Who invented Javascript?",
            choices: ["A. Albert Eintsein ","B. Thomas Edison ","C. Leonadro Da Vinci","D. Brendan Eich"],
            answer: "D. Brendan Eich"
        },
        {
            question:"In an array, the fist index is always __.",
            choices: ["A. 9 ","B. 0","C. 2","D. 1"],
            answer: "B. 0"
        },
        {
            question:"When adding JavaScript to an HTML element, you have to put it inside of ___.",
            choices: ["A. <script> ","B. <JS> ","C. <js>","D. <JavaScript>"],
            answer: "A. <script> "
        },
        {
            question:"A function in JavaScript is created as ___.",
            choices: ["A. function create()","B. function = function create{}","C. create () function","D. something something"],
            answer: "A. function create()"
        },
        {
            question:"In JS, how are functions called?",
            choices: ["A. Yo! function create!","B. call function create() ","C. create()","D. call create ()"],
            answer: "C. create()"
        },
        {
            question:"What is used to check if two variables are equal to one another when usinf if else statements?",
            choices: ["A. ?= ","B. !=","C. == ","D. ==="],
            answer: "C. =="
        },
        {
            question:"A proper if statement is written as __.",
            choices: ["A. if i < 9 ","B. if (i < 9)","C. if i < 9 then ","D. idk"],
            answer: " B. if (i < 9)"
        }
    ]
    // variables for checking answer
    var correctAnswer = 0;
    var questionNumber = 0;
    var Result;
    var questionIndex = 0;
    // Create a function which lets user know if anser is correct or incorrect when an answer is inputted
    function checkAnswer(answer) {
        var lineBreak = document.getElementById("lineBreak");
        lineBreak.style.display = "block";
        answerCheck.style.display = "block";

        // if question is right then add a point to score
        if (Questions[questionIndex].answer === Questions[questionIndex].choices[answer]){
            correctAnswer++;
            answerCheck.textContent = "correct";
        } else {
          // if question is wrong, create a function to remove 10 sec from timer
            totalTime -= 10;
            timeLft.textContent = totalTime;
            answerCheck.textContent = "Incorrect.";
        }
        // have it repeat with each question
        questionIndex++; 
        if(questionIndex < questions.length){
            nextQuestion();
        } else {
            gameOver();
        }
    }
    // game over function:
    function gameOver() {
        start.style.display = "none";
        questions.style.display = "none";
        timer.style.display = "none";
        timeUp.style.display = "block";
        summary.style.display = "block";
        finalScore.textContent = correctAnswer;
    }
    // Have some sort of reference to elements... use document.getElementById
    // create a function for when games over and display final score
    // create fucntion for user to add their initals and store highscore in local storage