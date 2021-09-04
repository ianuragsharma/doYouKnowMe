var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Monu",
    score: 3,
  },

  {
    name: "Sonu",
    score: 2,
  },
   {
    name: "Tinku",
    score: 5,
  },
]

// array of objects
var questions = [
{
  question: "Q1.Where do I live? ",
  answer: "delhi"
}, 
{
  question: "Q2.Which month is my birthday? ",
  answer: "november"
},
{
  question: "Q3.  What is my age ",
  answer: "21"
},

{
  question: "Q4. What is my nick name? ",
  answer: "annu"
},

{
  question: "Q5.What kind of pizza do i like? ",
  answer: "margherita"
},


];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to how much do you know Anurag Sharma? ");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
    console.log("Correct answere is " ,answer);
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores");

  highScores.map(player => console.log(player.name, " : ", player.score))
}


welcome();
game();
showScores();