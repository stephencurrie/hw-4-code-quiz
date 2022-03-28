// These are all the varibles that will have to do something dynamic in the hmtl

var highEl = document.querySelector("#high");
var timerEl = document.querySelector("#timer");

var screen0El = document.querySelector("#screen0");
var screen0ButtonEl = screen0El.querySelector("#start");

var screen1El = document.querySelector("#screen1");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#possibleAnswers");
var screen1ButtonEl = screen1El.querySelector("#state1");
var verdictEl = document.querySelector("#verdict");

var screen2El = document.querySelector("#screen2");
var finalScoreEl = document.querySelector("#finalscore");
var initialsEl = screen2El.querySelector("#initials");
var submitInit = document.querySelector("submitInit");
var screen2ButtonEl = screen2El.querySelector("#state2");

var screen3El = document.querySelector("#screen3");
var goBackEl = screen3El.querySelector("#goback");
var highScoresEl = screen3El.querySelector("#highscores");
var screen3ButtonEl = screen3El.querySelector("#state3");
var clearEl = screen3El.querySelector("#clear");
var initialsSpan = document.querySelector("#initialspan");

var HIDE_CLASS = "hide";
var timeInterval;
var timeLeft = 60;
var questions = [
  {
    question: "Who is the current quarterback of the Buffalo Bills?",
    answers: ["Tom Brady", "Josh Allen", "Patrick Mahomes", "Lamar Jackson"],
    answer: "Josh Allen",
  },
  {
    question: "In what city is the stadium located?",
    answers: ["Orchard Park", "Los Angeles", "Lockport", "New York City"],
    answer: "Orchard Park",
  },
  {
    question: "Who missed the field goal in Superbowl 25?",
    answers: ["Jim Kelly", "Thurman Thomas", "Bruce Smith", "Scott Norwood"],
    answer: "Scott Norwood",
  },
  {
    question: "What division do the Buffalo Bills play in?",
    answers: ["AFC East", "NFC East", "AFC West", "NFC Central"],
    answer: "AFC East",
  },
];

var currentQuestion = 0;

var dynamicElements = [
  screen0El,
  screen1El,
  screen2El,
  screen3El,
];

function init() {
  setEventListeners(); // <- when page loads, start the EventListeners function
}

// This sets the event listeners to take action to go to the different states when the buttons are clicked

function setEventListeners() {
  screen0ButtonEl.addEventListener("click", function () {
    setState(1);
  });
  screen1ButtonEl.addEventListener("click", function () {
    setState(2);
  });
  screen2ButtonEl.addEventListener("click", function () {
    setState(3);
  });
  screen3ButtonEl.addEventListener("click", function () {
    setState(0);
  });
}
// This function sets the state

function setState(state) {
  switch (state) {
    case 1:
      countdown();
      populateQuestion(); //When in state1, run the populateQuestion function
      break;
    default:
      break;
  }

  dynamicElements.forEach(function (ele) {
    var possibleStatesAttr = ele.getAttribute("data-states");
    var possibleStates = JSON.parse(possibleStatesAttr);
    if (possibleStates[0] == state) {
      ele.classList.remove(HIDE_CLASS);
    } else {
      ele.classList.add(HIDE_CLASS);
    }
  });
}

// This function polulates the questions

function populateQuestion() {
  // for (var i=0; i < questions.length; i++){

  var questionObj = questions[currentQuestion];
  // Remove the current list items
  answersEl.innerHTML = "";
  questionEl.textContent = questionObj.question;
  questionObj.answers.forEach(function (question) {
    var li = document.createElement("li");
    li.textContent = question;
    li.addEventListener("click", checkAnswer);
    answersEl.appendChild(li);
  });

  // }
}

// checks answers for correctness
function checkAnswer(evt) {
  var target = evt.target;

  var correctAnswer = questions[currentQuestion].answer;
  if (target.innerText === correctAnswer) {
    verdictEl.innerText = "Correct!";

  } else {
    verdictEl.innerText = "Incorrect!";

  }
  currentQuestion++;
  if (questions.length > currentQuestion) {
    populateQuestion();
  } else {
    clearInterval(timeInterval);
    setState(2);
  }

  finalScoreEl.innerText = timeLeft;
  console.log(finalScoreEl);
}
function showHighScores() {
  var highScores = JSON.parse(localStorage.getItem("High Scores")) || [];
  highScoresEl.innerHTML = "";
  for (var i = 0; i < highScores.length; i++) {
    var li = document.createElement("li");
    li.textContent = highScores[i].initials + ": " + highScores[i].score;
    highScoresEl.append(li);
  }
}

screen2ButtonEl.addEventListener("click", function (event) {
  event.preventDefault();
  var initials = document.querySelector("#initials").value;
  var newScore = {
    initials: initials,
    score: timeLeft,
  };

  var highScores = JSON.parse(localStorage.getItem("High Scores")) || [];
  highScores.push(newScore);
  localStorage.setItem("High Scores", JSON.stringify(highScores));

  showHighScores();
});
// This is the Countdown at the top of the page
function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = "Time left " + timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}

init();