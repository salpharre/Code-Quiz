
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
        answer:"a1",
    },
    {
        q: "",
        a1: "",
        a2: "",
        a3: "",
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
        q: "",
        a1: "",
        a2: "",
        a3: "",
        answer:"a1",
    },
    {
        q: "",
        a1: "",
        a2: "",
        a3: "",
        answer:"a1",
    },
    {
        q: "",
        a1: "",
        a2: "",
        a3: "",
        answer:"a1",
    },
];


//saves scores to local storage, to retrieve later at leaderboardAppear function
let savedScores = localStorage.getItem("savedScores");

//variable for score
let score = 0;


//variable for timer, game starts with 100 secs
let timer = 100;

questionTimerE1.textContent = "Timer: " + timer

let timeLeft;

//timer function to start and change every second
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


startTimer();

}
currentQA();

//function to change the p element with a class of button into a bootstrap button
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
    

    
    let body = document.getElementsByTagName("body")[0];

    //creat new div to nestle under form tag
    let div = document.createElement("div");
    div.setAttribute("class", "form-group mx-sm-3 mb-2");
    document.querySelector(".div").appendChild(div);

    //create new input tag nestled under new div
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("placeholder", "Name Here");
    document.querySelector(".div2").appendChild(input);
    
    //button, sibling to new div, child to form tag
    let button = document.createElement("button")
    button.textContent = "Submit";
    button.setAttribute("type", "submit");
    button.setAttribute("class", "btn btn-primary mb-2");

    //everytime button is clicked the function is called
    button.addEventListener("click", appendNameToScore); 
    document.querySelector(".div3").appendChild(button);

    
    function appendNameToScore(event){
        event.preventDefault();
        let formValue = document.querySelector(".form-control").value
        //let nameStorage = localStorage.getItem("name")
        document.querySelector(".name").textContent = formValue;

    }
}

function scoreIncreases(){
    scoreE1.textContent = score;
}

function timerDecreases(){
    questionTimerE1.textContent = "Timer: " + timer;
}

function resetTime(){
    clearInterval(timeLeft);
    timer = 100;
}

let choiceOne = document.querySelectorAll(".choice");
//for loop for each of the btns in the choiceOne array
choiceOne.forEach(function(btn){
    btn.addEventListener("click", function(event){
//setting userGuess to a string that represents choice property of object btn
//setting userGuess for buttons clicked
      let userGuess = event.target.dataset.choice
      if (userGuess === computerChoices[computerChoicesIndex].answer){
        score++;
        scoreIncreases();
        alert("correct!")
        
        localStorage.setItem("savedScores", score);
    }
    else if (userGuess !== computerChoices[computerChoicesIndex].answer){
        alert("wrong!");
    }

    computerChoicesIndex++;
    resetTime();
    currentQA();
    })
})
