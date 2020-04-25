//creating variables to grab classes
let questionE1 = document.querySelector(".question");
let questionOneE1 = document.querySelector(".question-one");
let questionTwoE1 = document.querySelector(".question-two");
let questionThreeE1 = document.querySelector(".question-three");
let questionTimerE1 = document.querySelector(".timer");
let submitButton = document.querySelector(".button");
let scoreE1 = document.querySelector(".score");


//array of objects, array of questions and answers
let computerChoices = [
    {
        q: "How many planets are in the solar system?",
        a1: "Nine",
        a2: "Eight",
        a3: "Dunno"
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

function setTimer(){
    
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

}

//function to change button appearance to green if chosen button is correct answer
function changeButtonToGreen(){

}

//function to change button appearance to red if chosen button is incorrect answer
function changeButtonToRed(){

}

function scoreIncreases(){
    scoreE1.textContent = score;
}

function timerDecreases(){
    questionTimerE1.textContent = timer;
}

function correctAnswer(){
    if (computerChoices.a1 === true){
        //call changeButtonToGreen
        //score += 1
        //call scoreIncreases  
    } 

    else {
        //timer -= 10
        //call timerDecreases
        //call changeButtonToRed

    }
    //computerChoicesIndex += 1
    //call currentQA
}

questionTwoE1.addEventListener("click", correctAnswer);

questionTwoE1.addEventListener("click", );

questionThreeE1.addEventListener("click", );