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

//saves scores to local storage, to retrieve later at leaderboardAppear function
//let savedScores = localStorage.;


//array of objects, array of questions and answers
let computerChoices = [
    {
        q: "There are three main things essential to a webpage, including CSS and HTML, what is the third?",
        a1: "JavaScript",
        a2: "jQuery",
        a3: "Dunno"
    },
    {
        q: "In what direction does the sun rise?",
        a1: "East",
        a2: "West",
        a3: "North"
    },
    {
        q: "",
        a1: "",
        a2: "",
        a3: ""
    },
    {
        q: "",
        a1: "",
        a2: "",
        a3: ""
    },
    {
        q: "",
        a1: "",
        a2: "",
        a3: ""
    },
    {
        q: "",
        a1: "",
        a2: "",
        a3: ""
    },
    {
        q: "",
        a1: "",
        a2: "",
        a3: ""
    },
    {
        q: "",
        a1: "",
        a2: "",
        a3: ""
    },

];

//variable for score
let score = 0;


//variable for timer, game starts with 100 secs
let timer = 100;

questionTimerE1.textContent = "Timer: " + timer

//timer function to start and change every second
function startTimer(){
    let timeLeft = setInterval(function(){
        timerDecreases();

        if (timer === 0){
            questionTimerE1.textContent = "";
            clearInterval(timeLeft);
            leaderboardAppear();
        }

}, 1000);

}

//variable for index of current question
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
}
currentQA();

//function to change the p element with a class of button into a bootstrap button
function leaderboardAppear(){
    //change h1 text to Game. Over.
    questionE1.textContent = "Game" + ". " + "Over" + "."

    //hide p tag that holds score
    hidePTag.textContent = "";
    
    //hide buttons
    questionOneE1.textContent = "";
    questionTwoE1.textContent = "";
    questionThreeE1.textContent = "";
    
    //retrieve score stored in local storage and deposit in textarea
    textarea.textContent = localStorage.getItem("savedScores")
    
    //add class names that turns form tag into a bootstrap form tag
    body.children[0].children[4].children[0].setAttribute("class", "form-inline");
    let div = document.createElement("div");
    div.setAttribute("class", "form-group mx-sm-3 mb-2");
    body.children[0].children[4].children[0].appendChild(div);

    //
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("placeholder", "Name Here");
    body.children[0].children[4].children[0].firstChild.appendChild(input);
    
    //
    let button = document.createElement("button")
    button.textContent = "Submit";
    button.setAttribute("type", "submit");
    button.setAttribute("class", "btn btn-primary mb-2");

  
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
            textAreaE1.textContent += event.key
        }

}




}

//alert user that the answer was correct or incorrect
function alertAnswer(event){
    let target = event.target;
    if (target.class === "question-one"){
        alert("correct!")
    } else {
        alert("wrong!");
    }
}


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

answersTextE1.addEventListener("click", function(event){
    let target = event.target;
    if (target.class === "question-one"){
        alertAnswer();
        score++;
        scoreIncreases();
        
        localStorage.setItem("savedScores", score);
    }
    else if (target.class === "questionTwoE1" || target.class === "questionThreeE1"){
        timer--;
        timerDecreases();
        alertAnswer();
    }

    computerChoicesIndex++;
    currentQA();
}); 

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