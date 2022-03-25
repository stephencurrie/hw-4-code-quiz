// These are all the varibles that will have to do something dynamic in the hmtl

var timerhigh = document.querySelector("#high");
var timerEL = document.querySelector("#timer");

var screen0El = document.querySelector("#screen0");
var screen0ButtonEl = screen0El.querySelector("#start");

var screen1El = document.querySelector("#screen1");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#possibleAnswers");

var screen2El = document.querySelector("#screen2");
var finalScoreEl = screen2El.querySelector("#finalscore");
var initalsEl = screen2El.querySelector("#initials");

var screen3El = document.querySelector("#screen3");
var highScoresEl = screen3El.querySelector("#goback");
var goBackEl = screen3El.querySelector("#highscores");
var clearEl = screen3El.querySelector("#clear");

var timeLeft = 5;
timerEl.textContent = timeLeft;

console.log(timeleft);

// // // Timer that counts down from 30
// function countdown() {
//     var timeLeft = 5;
  
//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function () {
//       // As long as the `timeLeft` is greater than 1
//       if (timeLeft > 0) {
//         // Set the `textContent` of `timerEl` to show the remaining seconds
//         timerEl.textContent = timeLeft;
//         // Decrement `timeLeft` by 1
//         timeLeft--;
      
//       } else {
//         // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//         timerEl.textContent = 'Done';
//         // Use `clearInterval()` to stop the timer
//         clearInterval(timeInterval);

//       }
//     }, 1000);
//   }
  
  
//   countdown();

// //   This is Trey's sample code below:

// var HIDE_CLASS = "hide";
// var questions = [
//   {
//     question: "What house was Harry Potter in?",
//     answers: ["Gryffindoor", "Ravenclaw", "Slytherin", "Hufflepuff"],
//     answer: 0
//   },
//   {
//     question: "What was Hermione's cat's name?",
//     answers: ["Crookshanks", "Peter Pettigrew", "Scabbers", "Harry"],
//     answer: 0
//   }
// ];
// var currentQuestion = 0;

// var dynamicElements = [
//   screen0Ele,
//   screen1Ele,
//   screen2Ele,
//   doSomethingEle,
//   saySomethingEle
// ];

// function init() {
//   setEventListeners();
// }

// function setState(state) {
//   switch (state) {
//     case 1:
//       populateQuestion();
//       break;
//     default:
//       break;
//   }

//   dynamicElements.forEach(function (ele) {
//     var possibleStatesAttr = ele.getAttribute("data-states");
//     var possibleStates = JSON.parse(possibleStatesAttr);
//     if (possibleStates.includes(state)) {
//       ele.classList.remove(HIDE_CLASS);
//     } else {
//       ele.classList.add(HIDE_CLASS);
//     }
//   });
// }

// function populateQuestion() {
//   var questionObj = questions[currentQuestion];
//   // Remove the current list items
//   answersEl.innerHTML = "";
//   questionEl.textContent = questionObj.question;
//   questionObj.answers.forEach(function (question) {
//     var li = document.createElement("li");
//     li.textContent = question;
//     answersEl.appendChild(li);
//   });
//   if (currentQuestion === questions.length - 1) {
//     currentQuestion = 0;
//   } else {
//     currentQuestion++;
//   }
// }

// function setEventListeners() {
//   screen0ButtonEle.addEventListener("click", function () {
//     setState(1);
//   });
//   screen1ButtonEle.addEventListener("click", function () {
//     setState(2);
//   });
//   screen2ButtonEle.addEventListener("click", function () {
//     setState(0);
//   });
//   // Notice we are placing the event listener on the UL element.
//   // This is because the UL element is never destroyed whereas
//   // the list elements are always destroyed and re-created. We would
//   // need to add the event listeners to the list items
//   // every time we created one.
//   answersEl.addEventListener("click", function (evt) {
//     var target = evt.target;
//     if (target.matches("li")) {
//       window.alert(target.innerText);
//     }
//   });
// }

// init();

  