//creating variables to grab classes
let questionE1 = document.querySelector(".question");
let questionOneE1 = document.querySelector(".question-one");
let questionTwoE1 = document.querySelector(".question-two");
let questionThreeE1 = document.querySelector(".question-three");
let questionTimerE1 = document.querySelector(".timer");
let submitButton = document.querySelector(".button");


//array of objects, array of questions and answers
let computerChoices = [
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

//variable for timer, game starts with 60 secs
let timer = 60;

//variable for index of current question
let computerChoicesIndex = 0;


//function to generate question and answers
function currentQa(){
    //if there's another question and set of answers then the next set appears
    if (computerChoicesIndex < computerChoices.length){
        questionE1.innerHTML = computerChoices[computerChoicesIndex].q;
        questionOneE1.innerHTML = computerChoices[computerChoicesIndex].a1;
        questionOneE1.innerHTML = computerChoices[computerChoicesIndex].a2;
        questionOneE1.innerHTML = computerChoices[computerChoicesIndex].a3;
    }
    //if there aren't any left, leaderboard screen appears
    else {
        leaderboardAppear();
    }
}


//function to change the p element with a class of button into a bootstrap button
function leaderboardAppear(){
    

}
