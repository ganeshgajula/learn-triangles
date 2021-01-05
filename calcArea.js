const submitBtn = document.querySelector("#submitBtn");
const inputFields = document.querySelectorAll('input[name="options"]');
const output = document.querySelector(".output");
const calcAreaOne = document.querySelector(".calcAreaOne");
const base = document.querySelector(".base");
const height = document.querySelector(".height");
const inputFieldOne = inputFields[0];
const inputFieldTwo = inputFields[1];
const inputFieldThree = inputFields[2];
const inputFieldFour = inputFields[3];
const areaOneResult = document.querySelector("#areaOneResult");
const outputContentOne = document.querySelector("#outputContentOne");
const calcAreaTwo = document.querySelector(".calcAreaTwo");
const side = document.querySelector(".side");
const areaTwoResult = document.querySelector("#areaTwoResult");
const outputContentTwo = document.querySelector("#outputContentTwo");
const calcAreaThree = document.querySelector(".calcAreaThree");
const sideOne = document.querySelector(".sideOne");
const sideTwo = document.querySelector(".sideTwo");
const sideThree = document.querySelector(".sideThree");
const areaThreeResult = document.querySelector("#areaThreeResult");
const outputContentThree = document.querySelector("#outputContentThree");
const calcAreaFour = document.querySelector(".calcAreaFour");
const angleA = document.querySelector(".angleA");
const sideB = document.querySelector(".sideB");
const sideC = document.querySelector(".sideC");
const outputContentFour = document.querySelector("#outputContentFour");

outputContentOne.style.display = "none";
outputContentTwo.style.display = "none";
outputContentThree.style.display = "none";
outputContentFour.style.display = "none";
// function clickHandler() {
//   // console.log(inputFields.length)
//   for (var i = 0; i < inputFields.length; i++) {
//     if (inputFields[i].checked) {
//       console.log(`input field ${i} is checked`);
//     }
//   }
// }

// function clickHandler() {
//   if (inputFields[0].checked) {
//     output.innerHTML = `
//     <img src="/right-triangle.png" alt="right-angle-triangle" />
//     <p>The formula to calculate the area of right angled triangle is</p>
//     <h4>Formula: 1/2 x base x height</h4>
//     <form class="calcArea">
//       <label for="base">base</label>
//       <input type="number" class="base" min="1" required />
//       <label for="base">height</label>
//       <input type="number" min="1" required />
//       <button class="calcAreaOne">Calculate</button>
//     </form>
//     `;
//   } else if (inputFields[1].checked) {
//     console.log("input field 2 checked");
//   } else if (inputFields[2].checked) {
//     console.log("input field 3 checked");
//   } else if (inputFields[3].checked) {
//     console.log("input field 4 checked");
//   }
// }

function calculateAreaOne(e) {
  // let result = base. * 2;
  e.preventDefault();
  const baseValue = base.value;
  const heightValue = height.value;
  if (baseValue <= 0 || baseValue === "") {
    alert("Please enter the correct base value");
  } else if (heightValue <= 0 || heightValue === "") {
    alert("Please enter the correct height value");
  } else {
    let result = 0.5 * baseValue * heightValue;
    console.log(result);
    areaOneResult.innerText = `Area of a right angled triangle is ${result} units`;
  }
}

function calculateAreaTwo(e) {
  e.preventDefault();
  let sideValue = side.value;
  if (sideValue <= 0 || sideValue === "") {
    alert("Please enter the correct side length");
  } else {
    let formula = (Math.sqrt(3) / 4) * sideValue * sideValue;
    let result = formula.toFixed(2);
    console.log(result);
    areaTwoResult.innerText = `Area of equilateral triangle is ${result} units`;
  }
}

function calculateAreaThree(e) {
  e.preventDefault();
  const sideOneValue = parseInt(sideOne.value);
  // console.log(sideOneValue);
  const sideTwoValue = parseInt(sideTwo.value);
  // console.log(sideTwoValue);
  const sideThreeValue = parseInt(sideThree.value);
  // console.log(sideThreeValue);
  const s = (sideOneValue + sideTwoValue + sideThreeValue) / 2;
  console.log(s);
  let formula = Math.sqrt(
    s * (s - sideOneValue) * (s - sideTwoValue) * (s - sideThreeValue)
  );
  let finalValue = formula.toFixed(2);
  console.log(finalValue);
  areaThreeResult.innerText = `Area of triange is ${finalValue} units`;
}

function calculateAreaFour(e) {
  e.preventDefault();
  const angleAValue = parseInt(angleA.value);
  console.log(angleAValue);
  const sideBValue = parseInt(sideB.value);
  console.log(sideBValue);
  const sideCValue = parseInt(sideC.value);
  console.log(sideCValue);
  const piValue = Math.PI;
  const finalPiValue = piValue.toFixed(2);
  console.log(finalPiValue);
  angleInRadians = angleAValue * (finalPiValue / 180);
  const finalAngle = angleInRadians.toFixed(2);
  console.log(finalAngle);
  const sinValue = Math.sin(finalAngle);
  const finalSinValue = sinValue.toFixed(2);
  console.log(finalSinValue);
  let formula = 0.5 * sideBValue * sideCValue * finalSinValue;
  console.log(formula);
  areaFourResult.innerText = `Area of triangle is ${formula} units`;
}

function inputChangeOne() {
  console.log("1st input field checked");
  outputContentTwo.style.display = "none";
  outputContentThree.style.display = "none";
  outputContentFour.style.display = "none";
  outputContentOne.style.display = "block";
}

function inputChangeTwo() {
  console.log("2nd input field checked");
  outputContentOne.style.display = "none";
  outputContentThree.style.display = "none";
  outputContentFour.style.display = "none";
  outputContentTwo.style.display = "block";
}

function inputChangeThree() {
  console.log("3rd input field checked");
  outputContentOne.style.display = "none";
  outputContentTwo.style.display = "none";
  outputContentFour.style.display = "none";
  outputContentThree.style.display = "block";
}

function inputChangeFour() {
  console.log("4th input field checked");
  outputContentOne.style.display = "none";
  outputContentTwo.style.display = "none";
  outputContentThree.style.display = "none";
  outputContentFour.style.display = "block";
}

// submitBtn.addEventListener("click", clickHandler);
inputFieldOne.addEventListener("change", inputChangeOne);
inputFieldTwo.addEventListener("change", inputChangeTwo);
inputFieldThree.addEventListener("change", inputChangeThree);
inputFieldFour.addEventListener("change", inputChangeFour);

calcAreaOne.addEventListener("click", calculateAreaOne);
calcAreaTwo.addEventListener("click", calculateAreaTwo);
calcAreaThree.addEventListener("click", calculateAreaThree);
calcAreaFour.addEventListener("click", calculateAreaFour);
