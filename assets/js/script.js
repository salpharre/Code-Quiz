//creating variables to grab classes
let questionE1 = document.querySelector(".question-text");
let questionOneE1 = document.querySelector(".question-one");
let questionTwoE1 = document.querySelector(".question-two");
let questionThreeE1 = document.querySelector(".question-three");
let questionTimerE1 = document.querySelector(".timer");
let scoreE1 = document.querySelector(".score");
let hidePTag = document.querySelector(".hide");
let textAreaE1 = document.querySelector(".textarea");
let answersTextE1 = document.querySelector(".answers");
 

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
        q: "In what direction does the sun rise?",
        a1: "East",
        a2: "West",
        a3: "North",
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


   //remove pTag and questions
   hidePTag.remove();
   questionOneE1.remove();
   questionTwoE1.remove();
   questionThreeE1.remove();
   
   
    //retrieve score stored in local storage and deposit in textarea
    textAreaE1.textContent = localStorage.getItem("savedScores")
    
    //add class names to form tag
    //body.children[0].children[4].firstChild.setAttribute("class", "form-inline");
  
    //creat new div to nestle under form tag
    let div = document.createElement("div");
    div.setAttribute("class", "form-group mx-sm-3 mb-2");
    body.children[0].children[4].firstChild.appendChild(div);

    //create new input tag nestled under new div
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("placeholder", "Name Here");
    body.children[0].children[4].children[0].firstChild.firstChild.appendChild(input);
    
    //button, sibling to new div, child to form tag
    let button = document.createElement("button")
    button.textContent = "Submit";
    button.setAttribute("type", "submit");
    button.setAttribute("class", "btn btn-primary mb-2");
    body.children[0].children[4].firstChild.appendChild(button);

    
  
    //submit button for name to print onto page
    function saveName(){
        event.preventDefault();
        questionTimerE1.value = "";

    }
    //mechanism to print name onto page
    function typeYourName(event){
        let key = event.key.toLowerCase();
        let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

        if (alphabet.includes(key)){
            textAreaE1.textContent += localStorage.getItem("savedScores") + ":" + event.key 
        }

}




}

//alert user that the answer was correct or incorrect
/*function alertAnswer(userGuess){
    let target = event.target;
    if (target.class === "question-one"){
        alert("correct!")
    } else {
        alert("wrong!");
    }
}*/


//function to change button appearance to green if chosen button is correct answer
//function changeButtonToGreen(){
    //questionOneE1.setAttribute("class", "btn-success");
//}

//function to change button appearance to red if chosen button is incorrect answer
//function changeButtonToRed(){
    //questionTwoE1.setAttribute("class", "btn-danger");
    //questionThreeE1.setAttribute("class", "btn-danger");
//}

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
        console.log("correct!")
        
        localStorage.setItem("savedScores", score);
    }
    else if (userGuess !== computerChoices[computerChoicesIndex].answer){
        console.log("wrong!");
    }

    computerChoicesIndex++;
    resetTime();
    currentQA();
    })
})


/*answersTextE1.addEventListener("click", function(event){
    let target = event.target;
    if (userGuess === computerChoices[computerChoicesIndex].answer){
        alertAnswer();
        score++;
        scoreIncreases();
        
        localStorage.setItem("savedScores", score);
    }
    else if (target.class === "questionTwoE1" || target.class === "questionThreeE1"){
        alertAnswer();
    }

    computerChoicesIndex++;
    resetTime();
    currentQA();
    
}); */





//seperate function and addeventlistner seperate




function gameOver(){
    if (timer === 0){

    } 
    //else if (){

    //}
}

//questionOneE1.addEventListener("click", correctAnswer);

//questionTwoE1.addEventListener("click", correctAnswer);

//questionThreeE1.addEventListener("click", correctAnswer);

//questionThreeE1.addEventListener("click", wrongAnswer);

//submitButton.addEventListener("submit", saveName);

//questionTimerE1.addEventListener("", );