//creating variables to grab classes
let questionE1 = document.querySelector(".question");
let questionOneE1 = document.querySelector(".question-one");
let questionTwoE1 = document.querySelector(".question-two");
let questionThreeE1 = document.querySelector(".question-three");
let questionTimerE1 = document.querySelector(".timer");
let submitButton = document.querySelector(".button");
let scoreE1 = document.querySelector(".score");
let hidePTag = document.querySelector(".hide");
let textAreaE1 = document.querySelector(".textarea");

//saves scores to local storage, to retrieve later at leaderboardAppear function
//let savedScores = localStorage.;


//array of objects, array of questions and answers
let computerChoices = [
    {
        q: "How many planets are in the solar system?",
        a1: "Nine",
        a2: "Eight",
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
    //hide score, set it to ""
    //remove all three buttons, leave the p tag
    //textarea.textContent = localStorage.getItem("savedScores")
    //change timer into a bootstrap form
    //clear button (below timer) becomes a bootstrap button
    //add a <p> to third row and give it a class of textarea
    
}

function clearButton(){
    event.preventDefault();
    questionTimerE1.value = "";

}

function typeYourName(event){
    let key = event.key.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    if (alphabet.includes(key)){
        textAreaE1.textContent += event.key
    }
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
    questionTimerE1.textContent = "Timer: " + timer;
}

function correctAnswer(){
        //call changeButtonToGreen
        //score += 1
        //call scoreIncreases 
        
        //localStorage.setItem("savedScores", score)
   
        //computerChoicesIndex += 1
        //call currentQA

    } 

    
function wrongAnswer(){
        //timer -= 10
        //call timerDecreases
        //call changeButtonToRed

    //computerChoicesIndex += 1
    //call currentQA
}

function gameOver(){

}

questionTwoE1.addEventListener("click", correctAnswer);

questionTwoE1.addEventListener("click", wrongAnswer);

questionThreeE1.addEventListener("click", wrongAnswer);

submitButton.addEventListener("submit", submitName);

questionTimerE1.addEventListener("", );