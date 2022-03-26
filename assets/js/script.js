// These are all the varibles that will have to do something dynamic in the hmtl

var highEl = document.querySelector("#high");
var timerEl = document.querySelector("#timer");

var screen0El = document.querySelector("#screen0");
var screen0ButtonEl = screen0El.querySelector("#start");

var screen1El = document.querySelector("#screen1");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#possibleAnswers");
var screen1ButtonEl = screen1El.querySelector("#state1");

var screen2El = document.querySelector("#screen2");
var finalScoreEl = screen2El.querySelector("#finalscore");
var initalsEl = screen2El.querySelector("#initials");
var screen2ButtonEl = screen2El.querySelector("#state2");

var screen3El = document.querySelector("#screen3");
var highScoresEl = screen3El.querySelector("#goback");
var goBackEl = screen3El.querySelector("#highscores");
var clearEl = screen3El.querySelector("#clear");


var HIDE_CLASS = "hide";

var questions = [
  {
    question: "Who is the current quarterback of the Buffalo Bills?",
    answers: ["Tom Brady", "Josh Allen", "Patrick Mahomes", "Lamar Jackson"],
    answer: 1
  },
  {
    question: "In what city is the stadium located?",
    answers: ["Orchard Park", "Los Angeles", "Lockport", "New York City"],
    answer: 0
  },
  {
    question: "Who missed the field goal in Superbowl 25?",
    answers: ["Jim Kelly", "Thurman Thomas", "Bruce Smith", "Scott Norwood"],
    answer: 3
  }
];

var currentQuestion = 0;

var dynamicElements = [
  screen0El,
  screen1El,
  screen2El,
  screen3El,
  highEl,
  timerEl
];

function init() {
  setEventListeners();
}

// This function sets the state

function setState(state) {
  switch (state) {
    case 1:
      populateQuestion();
      break;
    default:
      break;
  }

  dynamicElements.forEach(function (ele) {
    var possibleStatesAttr = ele.getAttribute("data-states");
    var possibleStates = JSON.parse(possibleStatesAttr);
    if (possibleStates.includes(state)) {
      ele.classList.remove(HIDE_CLASS);
    } else {
      ele.classList.add(HIDE_CLASS);
    }
  });
}

// This function polulates the questions

function populateQuestion() {
  var questionObj = questions[currentQuestion];
  // Remove the current list items
  answersEl.innerHTML = "";
  questionEl.textContent = questionObj.question;
  questionObj.answers.forEach(function (question) {
    var li = document.createElement("li");
    li.textContent = question;
    answersEl.appendChild(li);
  });
  if (currentQuestion === questions.length - 1) {
    currentQuestion = 0;
  } else {
    currentQuestion++;
  }
}

// This sets the event listeners to take action

function setEventListeners() {
  screen0ButtonEl.addEventListener("click", function () {
    setState(1);
  });
  screen1ButtonEl.addEventListener("click", function () {
    setState(2);
  });
  screen2ButtonEl.addEventListener("click", function () {
    setState(0);
  });

// BELOW INSTEAD OF ALERT COMPARE TO ARRAY AND MOVE TO NEXT QUESTION
  answersEl.addEventListener("click", function (evt) {
    var target = evt.target;
    if (target.matches("li")) {
      window.alert(target.innerText);
    }
  });
}





// This is the Countdown at the top of the page
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = ("Time left " + timeLeft);
      // Decrement `timeLeft` by 1
      timeLeft--;
   
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
  
    }
  }, 1000);
}
countdown();

init();

