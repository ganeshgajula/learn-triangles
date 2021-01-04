const result = document.querySelector(".resultTxt");
// console.log(formContent.elements.length);

// const submitBtn = document.querySelector(".submitBtn");

// submitBtn.addEventListener("click", clickHandler);
const contentOne = document.querySelector(".content-one");

const wrongEmoji = document.querySelector(".wrong-emoji");

wrongEmoji.style.display = "none";

const correctEmoji = document.querySelector(".correct-emoji");

correctEmoji.style.display = "none";

const correct = document.querySelector(".correct");

correct.style.display = "none";

const quizSetOne = document.querySelectorAll('input[name="ques1Options"]');

const setOneAnswer = "obtuse angle triangle";

console.log(quizSetOne);
const setOneQuestionOne = quizSetOne[0];
const setOneQuestionTwo = quizSetOne[1];
const setOneQuestionThree = quizSetOne[2];

function answerOneClickHandler() {
  if (setOneQuestionOne.value === setOneAnswer) {
    console.log("correct");
    contentOne.style.backgroundColor = "green";
  } else {
    contentOne.style.backgroundColor = "red";
  }
  for (var i = 0; i < quizSetOne.length; i++) {
    quizSetOne[i].disabled = true;
  }
}
function answerTwoClickHandler() {
  if (setOneQuestionTwo.value === setOneAnswer) {
    console.log("correct");
    contentOne.style.backgroundColor = "green";
  } else {
    contentOne.style.backgroundColor = "red";
  }
  for (var i = 0; i < quizSetOne.length; i++) {
    quizSetOne[i].disabled = true;
  }
}
function answerThreeClickHandler() {
  if (setOneQuestionThree.value === setOneAnswer) {
    console.log("correct");
    contentOne.style.backgroundColor = "green";
    correct.style.display = "block";
    correctEmoji.style.display = "block";
    contentOne.style.display = "none";
  } else {
    contentOne.style.backgroundColor = "red";
  }
  for (var i = 0; i < quizSetOne.length; i++) {
    quizSetOne[i].disabled = true;
  }
}
setOneQuestionOne.addEventListener("click", answerOneClickHandler);

setOneQuestionTwo.addEventListener("click", answerTwoClickHandler);

setOneQuestionThree.addEventListener("click", answerThreeClickHandler);
