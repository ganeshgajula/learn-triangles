const result = document.querySelector(".resultTxt");
// console.log(formContent.elements.length);
let score = 0;
const scoreDisplay = document.querySelectorAll(".score");
// const submitBtn = document.querySelector(".submitBtn");

// submitBtn.addEventListener("click", clickHandler);
const contentOne = document.querySelectorAll(".content-one");

// const wrongEmoji = document.querySelector(".wrong-emoji");

// wrongEmoji.style.display = "none";

// const correctEmoji = document.querySelector(".correct-emoji");

// correctEmoji.style.display = "none";

const resultMsg = document.querySelectorAll(".resultMsg");

const correct = document.querySelectorAll(".correct");

correct[0].style.display = "none";
correct[1].style.display = "none";
correct[2].style.display = "none";
correct[3].style.display = "none";
correct[4].style.display = "none";
correct[5].style.display = "none";
correct[6].style.display = "none";
correct[7].style.display = "none";

const quizSetOne = document.querySelectorAll('input[name="ques1Options"]');
const quizSetTwo = document.querySelectorAll('input[name="ques2Options"]');
const quizSetThree = document.querySelectorAll('input[name="ques3Options"]');
const quizSetFour = document.querySelectorAll('input[name="ques4Options"]');
const quizSetFive = document.querySelectorAll('input[name="ques5Options"]');
const quizSetSix = document.querySelectorAll('input[name="ques6Options"]');
const quizSetSeven = document.querySelectorAll('input[name="ques7Options"]');
const quizSetEight = document.querySelectorAll('input[name="ques8Options"]');

const setOneAnswer = "Obtuse angle triangle";
const setTwoAnswer = "Acute angle triangle";
const setThreeAnswer = "Right angle triangle";
const setFourAnswer = "40 degree";
const setFiveAnswer = "Equilateral triangle";
const setSixAnswer = "2 congruent sides";
const setSevenAnswer = "Hypotenuse";
const setEightAnswer = "5";

console.log(quizSetOne);
const setOneQuestionOne = quizSetOne[0];
const setOneQuestionTwo = quizSetOne[1];
const setOneQuestionThree = quizSetOne[2];

const setTwoQuestionOne = quizSetTwo[0];
const setTwoQuestionTwo = quizSetTwo[1];
const setTwoQuestionThree = quizSetTwo[2];

const setThreeQuestionOne = quizSetThree[0];
const setThreeQuestionTwo = quizSetThree[1];
const setThreeQuestionThree = quizSetThree[2];

const setFourQuestionOne = quizSetFour[0];
const setFourQuestionTwo = quizSetFour[1];
const setFourQuestionThree = quizSetFour[2];

const setFiveQuestionOne = quizSetFive[0];
const setFiveQuestionTwo = quizSetFive[1];
const setFiveQuestionThree = quizSetFive[2];

const setSixQuestionOne = quizSetSix[0];
const setSixQuestionTwo = quizSetSix[1];
const setSixQuestionThree = quizSetSix[2];

const setSevenQuestionOne = quizSetSeven[0];
const setSevenQuestionTwo = quizSetSeven[1];
const setSevenQuestionThree = quizSetSeven[2];

const setEightQuestionOne = quizSetEight[0];
const setEightQuestionTwo = quizSetEight[1];
const setEightQuestionThree = quizSetEight[2];

function setOneAnswerOneClickHandler() {
  if (setOneQuestionOne.value === setOneAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[0].style.display = "block";
    resultMsg[0].innerText = "😃 Correct! Great";
    contentOne[0].style.display = "none";
    score = score + 1;
    scoreDisplay[0].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[0].innerText = "😟 Incorrect! Review it";
    contentOne[0].style.display = "none";
    correct[0].style.display = "block";
    scoreDisplay[0].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetOne.length; i++) {
    quizSetOne[i].disabled = true;
  }
}
function setOneAnswerTwoClickHandler() {
  if (setOneQuestionTwo.value === setOneAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[0].style.display = "block";
    resultMsg[0].innerText = "😃 Correct! Great";
    contentOne[0].style.display = "none";
    score = score + 1;
    scoreDisplay[0].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[0].innerText = "😟 Incorrect! Review it";
    contentOne[0].style.display = "none";
    correct[0].style.display = "block";
    scoreDisplay[0].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetOne.length; i++) {
    quizSetOne[i].disabled = true;
  }
}
function setOneAnswerThreeClickHandler() {
  if (setOneQuestionThree.value === setOneAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[0].style.display = "block";
    resultMsg[0].innerText = "😃 Correct! Great";
    contentOne[0].style.display = "none";
    score = score + 1;
    scoreDisplay[0].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[0].innerText = "😟 Incorrect! Review it";
    contentOne[0].style.display = "none";
    correct[0].style.display = "block";
    scoreDisplay[0].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetOne.length; i++) {
    quizSetOne[i].disabled = true;
  }
}

function setTwoAnswerOneClickHandler() {
  if (setTwoQuestionOne.value === setTwoAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[1].style.display = "block";
    resultMsg[1].innerText = "😃 Correct! Great";
    contentOne[1].style.display = "none";
    score = score + 1;
    scoreDisplay[1].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[1].innerText = "😟 Incorrect! Review it";
    contentOne[1].style.display = "none";
    correct[1].style.display = "block";
    scoreDisplay[1].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetTwo.length; i++) {
    quizSetTwo[i].disabled = true;
  }
}
function setTwoAnswerTwoClickHandler() {
  if (setTwoQuestionTwo.value === setTwoAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[1].style.display = "block";
    resultMsg[1].innerText = "😃 Correct! Great";
    contentOne[1].style.display = "none";
    score = score + 1;
    scoreDisplay[1].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[1].innerText = "😟 Incorrect! Review it";
    contentOne[1].style.display = "none";
    correct[1].style.display = "block";
    scoreDisplay[1].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetTwo.length; i++) {
    quizSetTwo[i].disabled = true;
  }
}
function setTwoAnswerThreeClickHandler() {
  if (setTwoQuestionThree.value === setTwoAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[1].style.display = "block";
    resultMsg[1].innerText = "😃 Correct! Great";
    contentOne[1].style.display = "none";
    score = score + 1;
    scoreDisplay[1].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[1].innerText = "😟 Incorrect! Review it";
    contentOne[1].style.display = "none";
    correct[1].style.display = "block";
    scoreDisplay[1].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetTwo.length; i++) {
    quizSetTwo[i].disabled = true;
  }
}

function setThreeAnswerOneClickHandler() {
  if (setThreeQuestionOne.value === setThreeAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[2].style.display = "block";
    resultMsg[2].innerText = "😃 Correct! Great";
    contentOne[2].style.display = "none";
    score = score + 1;
    scoreDisplay[2].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[2].innerText = "😟 Incorrect! Review it";
    contentOne[2].style.display = "none";
    correct[2].style.display = "block";
    scoreDisplay[2].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetThree.length; i++) {
    quizSetThree[i].disabled = true;
  }
}
function setThreeAnswerTwoClickHandler() {
  if (setThreeQuestionTwo.value === setThreeAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[2].style.display = "block";
    resultMsg[2].innerText = "😃 Correct! Great";
    contentOne[2].style.display = "none";
    score = score + 1;
    scoreDisplay[2].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[2].innerText = "😟 Incorrect! Review it";
    contentOne[2].style.display = "none";
    correct[2].style.display = "block";
    scoreDisplay[2].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetThree.length; i++) {
    quizSetThree[i].disabled = true;
  }
}
function setThreeAnswerThreeClickHandler() {
  if (setThreeQuestionThree.value === setThreeAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[2].style.display = "block";
    resultMsg[2].innerText = "😃 Correct! Great";
    contentOne[2].style.display = "none";
    score = score + 1;
    scoreDisplay[2].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[2].innerText = "😟 Incorrect! Review it";
    contentOne[2].style.display = "none";
    correct[2].style.display = "block";
    scoreDisplay[2].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetThree.length; i++) {
    quizSetThree[i].disabled = true;
  }
}

function setFourAnswerOneClickHandler() {
  if (setFourQuestionOne.value === setFourAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[3].style.display = "block";
    resultMsg[3].innerText = "😃 Correct! Great";
    contentOne[3].style.display = "none";
    score = score + 1;
    scoreDisplay[3].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[3].innerText = "😟 Incorrect! Review it";
    contentOne[3].style.display = "none";
    correct[3].style.display = "block";
    scoreDisplay[3].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetFour.length; i++) {
    quizSetFour[i].disabled = true;
  }
}
function setFourAnswerTwoClickHandler() {
  if (setFourQuestionTwo.value === setFourAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[3].style.display = "block";
    resultMsg[3].innerText = "😃 Correct! Great";
    contentOne[3].style.display = "none";
    score = score + 1;
    scoreDisplay[3].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[3].innerText = "😟 Incorrect! Review it";
    contentOne[3].style.display = "none";
    correct[3].style.display = "block";
    scoreDisplay[3].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetFour.length; i++) {
    quizSetFour[i].disabled = true;
  }
}
function setFourAnswerThreeClickHandler() {
  if (setFourQuestionThree.value === setFourAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[3].style.display = "block";
    resultMsg[3].innerText = "😃 Correct! Great";
    contentOne[3].style.display = "none";
    score = score + 1;
    scoreDisplay[3].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[3].innerText = "😟 Incorrect! Review it";
    contentOne[3].style.display = "none";
    correct[3].style.display = "block";
    scoreDisplay[3].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetFour.length; i++) {
    quizSetFour[i].disabled = true;
  }
}
function setFiveAnswerOneClickHandler() {
  if (setFiveQuestionOne.value === setFiveAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[4].style.display = "block";
    resultMsg[4].innerText = "😃 Correct! Great";
    contentOne[4].style.display = "none";
    score = score + 1;
    scoreDisplay[4].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[4].innerText = "😟 Incorrect! Review it";
    contentOne[4].style.display = "none";
    correct[4].style.display = "block";
    scoreDisplay[4].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetFive.length; i++) {
    quizSetFive[i].disabled = true;
  }
}
function setFiveAnswerTwoClickHandler() {
  if (setFiveQuestionTwo.value === setFiveAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[4].style.display = "block";
    resultMsg[4].innerText = "😃 Correct! Great";
    contentOne[4].style.display = "none";
    score = score + 1;
    scoreDisplay[4].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[4].innerText = "😟 Incorrect! Review it";
    contentOne[4].style.display = "none";
    correct[4].style.display = "block";
    scoreDisplay[4].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetFive.length; i++) {
    quizSetFive[i].disabled = true;
  }
}
function setFiveAnswerThreeClickHandler() {
  if (setFiveQuestionThree.value === setFiveAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[4].style.display = "block";
    resultMsg[4].innerText = "😃 Correct! Great";
    contentOne[4].style.display = "none";
    score = score + 1;
    scoreDisplay[4].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[4].innerText = "😟 Incorrect! Review it";
    contentOne[4].style.display = "none";
    correct[4].style.display = "block";
    scoreDisplay[4].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetFive.length; i++) {
    quizSetFive[i].disabled = true;
  }
}
function setSixAnswerOneClickHandler() {
  if (setSixQuestionOne.value === setSixAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[5].style.display = "block";
    resultMsg[5].innerText = "😃 Correct! Great";
    contentOne[5].style.display = "none";
    score = score + 1;
    scoreDisplay[5].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[5].innerText = "😟 Incorrect! Review it";
    contentOne[5].style.display = "none";
    correct[5].style.display = "block";
    scoreDisplay[5].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetSix.length; i++) {
    quizSetSix[i].disabled = true;
  }
}
function setSixAnswerTwoClickHandler() {
  if (setSixQuestionTwo.value === setSixAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[5].style.display = "block";
    resultMsg[5].innerText = "😃 Correct! Great";
    contentOne[5].style.display = "none";
    score = score + 1;
    scoreDisplay[5].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[5].innerText = "😟 Incorrect! Review it";
    contentOne[5].style.display = "none";
    correct[5].style.display = "block";
    scoreDisplay[5].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetSix.length; i++) {
    quizSetSix[i].disabled = true;
  }
}
function setSixAnswerThreeClickHandler() {
  if (setSixQuestionThree.value === setSixAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[5].style.display = "block";
    resultMsg[5].innerText = "😃 Correct! Great";
    contentOne[5].style.display = "none";
    score = score + 1;
    scoreDisplay[5].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[5].innerText = "😟 Incorrect! Review it";
    contentOne[5].style.display = "none";
    correct[5].style.display = "block";
    scoreDisplay[5].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetSixz.length; i++) {
    quizSetSix[i].disabled = true;
  }
}
function setSevenAnswerOneClickHandler() {
  if (setSevenQuestionOne.value === setSevenAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[6].style.display = "block";
    resultMsg[6].innerText = "😃 Correct! Great";
    contentOne[6].style.display = "none";
    score = score + 1;
    scoreDisplay[6].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[6].innerText = "😟 Incorrect! Review it";
    contentOne[6].style.display = "none";
    correct[6].style.display = "block";
    scoreDisplay[6].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetSeven.length; i++) {
    quizSetSeven[i].disabled = true;
  }
}
function setSevenAnswerTwoClickHandler() {
  if (setSevenQuestionTwo.value === setSevenAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[6].style.display = "block";
    resultMsg[6].innerText = "😃 Correct! Great";
    contentOne[6].style.display = "none";
    score = score + 1;
    scoreDisplay[6].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[6].innerText = "😟 Incorrect! Review it";
    contentOne[6].style.display = "none";
    correct[6].style.display = "block";
    scoreDisplay[6].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetSeven.length; i++) {
    quizSetSeven[i].disabled = true;
  }
}
function setSevenAnswerThreeClickHandler() {
  if (setSevenQuestionThree.value === setSevenAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[6].style.display = "block";
    resultMsg[6].innerText = "😃 Correct! Great";
    contentOne[6].style.display = "none";
    score = score + 1;
    scoreDisplay[6].innerText = `Score : ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[6].innerText = "😟 Incorrect! Review it";
    contentOne[6].style.display = "none";
    correct[6].style.display = "block";
    scoreDisplay[6].innerText = `Score : ${score}`;
  }
  for (var i = 0; i < quizSetSeven.length; i++) {
    quizSetSeven[i].disabled = true;
  }
}
function setEightAnswerOneClickHandler() {
  if (setEightQuestionOne.value === setEightAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[7].style.display = "block";
    resultMsg[7].innerText = "😃 Correct! Great";
    contentOne[7].style.display = "none";
    score = score + 1;
    scoreDisplay[7].innerText = `Score : ${score}`;
    result.innerText = `Final Score is ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[7].innerText = "😟 Incorrect! Review it";
    contentOne[7].style.display = "none";
    correct[7].style.display = "block";
    scoreDisplay[7].innerText = `Score : ${score}`;
    result.innerText = `Final Score is ${score}`;
  }
  for (var i = 0; i < quizSetEight.length; i++) {
    quizSetEight[i].disabled = true;
  }
}
function setEightAnswerTwoClickHandler() {
  if (setEightQuestionTwo.value === setEightAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[7].style.display = "block";
    resultMsg[7].innerText = "😃 Correct! Great";
    contentOne[7].style.display = "none";
    score = score + 1;
    scoreDisplay[7].innerText = `Score : ${score}`;
    result.innerText = `Final Score is ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[7].innerText = "😟 Incorrect! Review it";
    contentOne[7].style.display = "none";
    correct[7].style.display = "block";
    scoreDisplay[7].innerText = `Score : ${score}`;
    result.innerText = `Final Score is ${score}`;
  }
  for (var i = 0; i < quizSetEight.length; i++) {
    quizSetEight[i].disabled = true;
  }
}
function setEightAnswerThreeClickHandler() {
  if (setEightQuestionThree.value === setEightAnswer) {
    console.log("correct");
    // contentOne.style.backgroundColor = "green";
    correct[7].style.display = "block";
    resultMsg[7].innerText = "😃 Correct! Great";
    contentOne[7].style.display = "none";
    score = score + 1;
    scoreDisplay[7].innerText = `Score : ${score}`;
    result.innerText = `Final Score is ${score}`;
  } else {
    // contentOne.style.backgroundColor = "red";
    resultMsg[7].innerText = "😟 Incorrect! Review it";
    contentOne[7].style.display = "none";
    correct[7].style.display = "block";
    scoreDisplay[7].innerText = `Score : ${score}`;
    result.innerText = `Final Score is ${score}`;
  }
  for (var i = 0; i < quizSetEight.length; i++) {
    quizSetEight[i].disabled = true;
  }
}

setOneQuestionOne.addEventListener("click", setOneAnswerOneClickHandler);
setOneQuestionTwo.addEventListener("click", setOneAnswerTwoClickHandler);
setOneQuestionThree.addEventListener("click", setOneAnswerThreeClickHandler);

setTwoQuestionOne.addEventListener("click", setTwoAnswerOneClickHandler);
setTwoQuestionTwo.addEventListener("click", setTwoAnswerTwoClickHandler);
setTwoQuestionThree.addEventListener("click", setTwoAnswerThreeClickHandler);

setThreeQuestionOne.addEventListener("click", setThreeAnswerOneClickHandler);
setThreeQuestionTwo.addEventListener("click", setThreeAnswerTwoClickHandler);
setThreeQuestionThree.addEventListener(
  "click",
  setThreeAnswerThreeClickHandler
);

setFourQuestionOne.addEventListener("click", setFourAnswerOneClickHandler);
setFourQuestionTwo.addEventListener("click", setFourAnswerTwoClickHandler);
setFourQuestionThree.addEventListener("click", setFourAnswerThreeClickHandler);

setFiveQuestionOne.addEventListener("click", setFiveAnswerOneClickHandler);
setFiveQuestionTwo.addEventListener("click", setFiveAnswerTwoClickHandler);
setFiveQuestionThree.addEventListener("click", setFiveAnswerThreeClickHandler);

setSixQuestionOne.addEventListener("click", setSixAnswerOneClickHandler);
setSixQuestionTwo.addEventListener("click", setSixAnswerTwoClickHandler);
setSixQuestionThree.addEventListener("click", setSixAnswerThreeClickHandler);

setSevenQuestionOne.addEventListener("click", setSevenAnswerOneClickHandler);
setSevenQuestionTwo.addEventListener("click", setSevenAnswerTwoClickHandler);
setSevenQuestionThree.addEventListener(
  "click",
  setSevenAnswerThreeClickHandler
);
// setSevenQuestionTwo.addEventListener("click", setSevenAnswerTwoClickHandler);
// setSevenQuestionThree.addEventListener(
//   "click",
//   setSevenAnswerThreeClickHandler
// );

setEightQuestionOne.addEventListener("click", setEightAnswerOneClickHandler);
setEightQuestionTwo.addEventListener("click", setEightAnswerTwoClickHandler);
setEightQuestionThree.addEventListener(
  "click",
  setEightAnswerThreeClickHandler
);
