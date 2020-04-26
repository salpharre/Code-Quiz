
//creating variables to grab classes
let questionE1 = document.querySelector(".question-text");
let questionOneE1 = document.querySelector(".question-one");
let questionTwoE1 = document.querySelector(".question-two");
let questionThreeE1 = document.querySelector(".question-three");
let questionTimerE1 = document.querySelector(".timer");
let scoreE1 = document.querySelector(".score");
let hidePTag = document.querySelector(".hide");
let textAreaE1 = document.querySelector(".textarea");
 

//array of objects, array of questions and answers
let computerChoices = [
    {
        q: "There are three main things essential to a webpage, including CSS and HTML, what is the third?",
        a1: "JavaScript",
        a2: "jQuery",
        a3: "Dunno",
        //names the correct answer in the array, and which is referred back to in a for loop for an addEventListener for the buttons
        answer:"a1",
    },
    {
        q: "JavaScript wasn't always it's name, what other names has it been released as?",
        a1: "Mocha",
        a2: "Latte",
        a3: "Spidermonkey",
        answer:"a1",
        
    },
    {
        q: "Are JavaScript and Java the same?",
        a1: "No",
        a2: "Yes",
        a3: "Yes",
        answer:"a1",
    },
    {
        q: "Is JavaScript a programming language?",
        a1: "Yes",
        a2: "No",
        a3: "What's JavaScript?",
        answer:"a1",
    },
    {
        q: "What year was JavaScript invented?",
        a1: "1995",
        a2: "2005",
        a3: "1985",
        answer:"a1",
    },
    {
        q: "Who created JavaScript?",
        a1: "Netscape",
        a2: "Oracle",
        a3: "Microsoft",
        answer:"a1",
    },
    {
        q: "How long did Brendan Eich take to write the JavaScript programming language?",
        a1: "10 days",
        a2: "2 months",
        a3: "2 years",
        answer:"a1",
    },
    {
        q: "Is Null an object?",
        a1: "Yes",
        a2: "No",
        a3: "what's an object?",
        answer:"a1",
    },
];


//saves scores to local storage, to retrieve later at leaderboardAppear function
let savedScores = localStorage.getItem("savedScores");

//variable for score
let score = 0;


//variable for timer, game starts with 100 secs
let timer = 100;

//prints timer to page
questionTimerE1.textContent = "Timer: " + timer

//declare var with no value, to be declared in a function later
let timeLeft;

//timer function to start and decrease every second
function startTimer(){
    timeLeft = setInterval(function(){
        timer--;
        timerDecreases();

        if (timer === 0){
            questionTimerE1.textContent = "";
            clearInterval(timeLeft);
            leaderboardAppear();
        }

}, 1000);

}


//variable for index of current question and answer
let computerChoicesIndex = 0;


//function to generate question and answers
function currentQA(){

    //if there's another question and set of answers then the next set appears
    if (computerChoicesIndex < computerChoices.length){
        questionE1.innerHTML = computerChoices[computerChoicesIndex].q;
        questionOneE1.innerHTML = computerChoices[computerChoicesIndex].a1;
        questionTwoE1.innerHTML = computerChoices[computerChoicesIndex].a2;
        questionThreeE1.innerHTML = computerChoices[computerChoicesIndex].a3;
    }
    //if there aren't any left, leaderboard screen appears
    else {
        leaderboardAppear();
    }

//re-start timer when function loops
startTimer();

}
currentQA();
//empties local storage at the beginning of a new game
localStorage.clear();

//function to clear buttons, timer and p tag to make room for form, submit button and printing score
function leaderboardAppear(){

    //change h1 text to Game. Over.
    questionE1.textContent = "Game" + ". " + "Over" + ".";


   //remove pTag and question variables
   hidePTag.remove();
   questionOneE1.remove();
   questionTwoE1.remove();
   questionThreeE1.remove();
   questionTimerE1.remove();
   
   
    //retrieve score stored in local storage and deposit in textarea
    textAreaE1.textContent = localStorage.getItem("savedScores")
    


    //create new div to nestle under form tag
    let div = document.createElement("div");

    //set attribute for new div
    div.setAttribute("class", "form-group mx-sm-3 mb-2");

    //append new div to element with class of div
    document.querySelector(".div").appendChild(div);

    //create new input tag nestled under new div
    let input = document.createElement("input");
    
    //sets attributes for new input element
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("placeholder", "Name Here");

    //appends input element to element with div2
    document.querySelector(".div2").appendChild(input);
    
    //button, sibling to new div, child to form tag
    let button = document.createElement("button")
    button.textContent = "Submit";

    //sets attributes for new button
    button.setAttribute("type", "submit");
    button.setAttribute("class", "btn btn-primary mb-2");

    //everytime button is clicked the function is called
    button.addEventListener("click", appendNameToScore); 

    //appends newly created button to element with class of div3
    document.querySelector(".div3").appendChild(button);

    //grabs name typed into form and prints to webpage
    function appendNameToScore(event){

        //prevents webpage from refreshing and starting game over
        event.preventDefault();

        //grabs value inputted into form
        let formValue = document.querySelector(".form-control").value

        //prints value from formValue to element with the class of name, and therfore onto the webpage
        document.querySelector(".name").textContent = formValue;

    }
}

//prints updated score to webpage
function scoreIncreases(){
    scoreE1.textContent = score;
}

//prints timer to webpage
function timerDecreases(){
    questionTimerE1.textContent = "Timer: " + timer;
}

//function that resets timer to 100
function resetTime(){
    clearInterval(timeLeft);
    timer = 100;
}

//declaring a variable to grab class
let choiceOne = document.querySelectorAll(".choice");

//for loop for each of the btns in the choiceOne array
choiceOne.forEach(function(btn){
    btn.addEventListener("click", function(event){

//setting userGuess for buttons clicked
      let userGuess = event.target.dataset.choice
      if (userGuess === computerChoices[computerChoicesIndex].answer){

        //score increases by one, and prints to the webpage, an alert pops up to tell user they picked correctly
        score++;
        scoreIncreases();
        alert("correct!")
        
        //updated score is saved to local storage
        localStorage.setItem("savedScores", score);

    }
    //if user does not guess the same answer the computer chooses, an alert pops up
    else if (userGuess !== computerChoices[computerChoicesIndex].answer){
        alert("wrong!");

    }

    //computer moves one index number more for the next question to appear
    computerChoicesIndex++;

    //time interval is reset
    resetTime();

    //called function with for loop and timer reset
    currentQA();

    });
});
