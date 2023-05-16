// pseudocode coding quiz
var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector(".counter");
var questionSection = document.querySelector(".question-section");
var firstQuestionAnswers = ['1. strings', '2. booleans', '3. alerts', '4. numbers'];
var secondQuestionAnswers = ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'];
var thirdQuestionAnswers = ['1. numbers and strings', '2. other arrays', '3. booleans', '4.all of the above'];
var fourthQuestionAnswers = ['1. commas', '2. curly brackets', '3. quotes', '4.parenthesis'];
var lastQuestionAnswers = ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'];
var highScoreList = document.querySelector("#high-scores");
var timer;
var timerCount;
var answerResult;
var highScores = [];

// When I click the start button, then a timer starts and I am presented with a question
/* If (start button is clicked) {
    timer starts
    first question } */
    function startGame() {
        timerCount = 75;
        setTimer();
        firstQuestion();
    };

// Timer decrements seond by second until it reaches 0 and calls the game over function
   function setTimer() {
       
       timer = setInterval(function() {  
            timerCount--;
            timeEl.textContent = timerCount;

            if(timerCount === 0) {
                clearInterval(timer);
                gameOver();

            }
        }, 1000);
    };

// First question and buttons appear after clicking the start quiz button
    function firstQuestion() {
        questionSection.innerHTML = "";
        var firstQuestion = document.createElement("p");
        firstQuestion.textContent = "Commonly used data types do NOT Include:"
        firstQuestion.setAttribute("class", "questions");
        questionSection.appendChild(firstQuestion);

        // loops through the array of firstQuestion answers and creates buttons with the values in the array
        for (let i = 0; i < firstQuestionAnswers.length; i++) {
            var answers = document.createElement("button");
            answers.textContent = firstQuestionAnswers[i];
            answers.setAttribute("class", "question-buttons");

            // listens for click on buttons two go to the second question
            answers.addEventListener('click', function (event){

                //you can compare the answer from the one you clickled
                //through the event you can find the clicked answer and compare it with the correct one
                //if its correct add time
                //if its incorecctt decrease time
               
                if (this.textContent === firstQuestionAnswers[3]) {
                    answerResult = "Correct!"
                    secondQuestion(answerResult);
                } else {
                    answerResult = "Wrong!"
                    secondQuestion(answerResult);
                };
                
            });

            questionSection.appendChild(answers);
        };
 
    
    };


// same process as in the first question
    function secondQuestion(answerResult){
        questionSection.innerHTML = "";
        var secondQuestion = document.createElement("p");
        secondQuestion.textContent = "The condition in an if/else statement is enclosed with________."
        secondQuestion.setAttribute("class", "questions");
        questionSection.appendChild(secondQuestion);



        for (let i = 0; i < secondQuestionAnswers.length; i++) {
            var answers = document.createElement("button");
            answers.textContent = secondQuestionAnswers[i];
            answers.setAttribute("class", "question-buttons");

            answers.addEventListener('click', function (){
                thirdQuestion();
            });

            questionSection.appendChild(answers);
        };
    };

// same process as in the first question
    function thirdQuestion(){
        questionSection.innerHTML = "";
        var thirdQuestion = document.createElement("p");
        thirdQuestion.textContent = "Arrays in JavaScript can be used to store ________."
        thirdQuestion.setAttribute("class", "questions");
        questionSection.appendChild(thirdQuestion);

        for (let i = 0; i < thirdQuestionAnswers.length; i++) {
            var answers = document.createElement("button");
            answers.textContent = thirdQuestionAnswers[i];
            answers.setAttribute("class", "question-buttons");

            answers.addEventListener('click', function (){
                fourthQuestion();
            });

            questionSection.appendChild(answers);
        };
    };


    // same process as in the first question
    function fourthQuestion(){
        questionSection.innerHTML = "";
        var fourthQuestion = document.createElement("p");
        fourthQuestion.textContent = "String values must be enclosed within ________ when being assigned to variables."
        fourthQuestion.setAttribute("class", "questions");
        questionSection.appendChild(fourthQuestion);

        for (let i = 0; i < fourthQuestionAnswers.length; i++) {
            var answers = document.createElement("button");
            answers.textContent = fourthQuestionAnswers[i];
            answers.setAttribute("class", "question-buttons");

            answers.addEventListener('click', function (){
                lastQuestion();
            });

            questionSection.appendChild(answers);
        };
    };

// last question executes the gameOver function
    function lastQuestion(){
        questionSection.innerHTML = "";
        var lastQuestion = document.createElement("p");
        lastQuestion.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:"
        lastQuestion.setAttribute("class", "questions");
        questionSection.appendChild(lastQuestion);

        for (let i = 0; i < lastQuestionAnswers.length; i++) {
            var answers = document.createElement("button");
            answers.textContent = lastQuestionAnswers[i];
            answers.setAttribute("class", "question-buttons");

            answers.addEventListener('click', function (){
                gameOver();
            });

            questionSection.appendChild(answers);
        };
    };

    function gameOver(){
        // timer stops, once all questions are answered
        clearInterval(timer);
        // save timerCount as final savedScore and parse it
        localStorage.setItem("timerCount", JSON.stringify(timerCount));
        var savedScore = JSON.parse(localStorage.getItem("timerCount"));
        // clears question section
        questionSection.innerHTML = "";
        // create new header
        var allDone = document.createElement("h2");
        allDone.textContent = "All done!"
        allDone.setAttribute("class", "ending");
        questionSection.appendChild(allDone);

        // score is created with final savedScore, which was parsed from the local storage
        var finalScore = document.createElement("p");
        finalScore.textContent = "Your final score is " + savedScore;
        finalScore.setAttribute("class", "ending")
        questionSection.appendChild(finalScore);
        
        
        var finalForm = document.createElement("form");
        questionSection.appendChild(finalForm);

        var initialLabel = document.createElement("label");
        initialLabel.textContent = "Enter initials: ";
        initialLabel.setAttribute("for", "initials");
        initialLabel.setAttribute("class", "ending");
        finalForm.appendChild(initialLabel);

        var userInput = document.createElement("input");
        userInput.setAttribute("type","text");
        userInput.setAttribute("id", "initials");
        finalForm.appendChild(userInput);

        var submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        submitButton.setAttribute("class", "submit-button");
        finalForm.appendChild(submitButton);

    };


    function renderHighScores(){
        scoreList.innerHTML = "";

        for (let i = 0; i < highScores.length; i++) {
            var highScore = highScores[i];

            var li = document.createElement("li");
            li.textContent = highScore;
            li.setAttribute("data-index", i);
            highScoreList.appendChild(li);

            
        }

    }






    startButton.addEventListener('click', startGame);

// when I answer a question I am presented with another question
/*If question answered {
    // When I answer the question incorrectly then time is subtracted from the clock
    /* If (question incorrect) {
        timer subtracts 10 seconds from the timer and score
        and next question
        print "wrong" under the next question
    } else { 
        next question shown
        print "correct" under the next question
    }
}*/



 

// When all questions are answered the timer reaches 0 then the game is over
/* if (All questions are answered OR Timer reaches 0) {
    game over then I can save my initials and score 
    print "your final score is...timeleft"
      if(input not letters) {
        print "input not recognized"
      } else {
        Go to highscore page, which has initials and highscore saved
        print "Initials - Score" 
        Go back and clear high scores button
      }
      
} */

