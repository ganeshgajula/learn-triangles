let submitBtn = document.querySelector("#submitBtn");
let inputFields = document.querySelectorAll('input[name="options"]');
let output = document.querySelector(".output");
let calcAreaOne = document.querySelector(".calcAreaOne");
let base = document.querySelector(".base");
let inputFieldOne = inputFields[0];
let inputFieldTwo = inputFields[1];
let inputFieldThree = inputFields[2];
let inputFieldFour = inputFields[3];
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

// function calculateAreaOne() {
//   let result = base * 2;
//   console.log(result);
// }

function inputChangeOne() {
  console.log("1st input field checked");
  output.innerHTML = `
    <img src="/right-triangle.png" alt="right-angle-triangle" />
    <p>The formula to calculate the area of right angled triangle is</p>
    <h4>Formula: 1/2 x base x height</h4>
    <form class="calcArea">
      <label for="base">base</label>
      <input type="number" class="base" min="1" required />
      <label for="base">height</label>
      <input type="number" min="1" required />
      <button class="calcAreaOne">Calculate</button>
    </form>
    `;
}

function inputChangeTwo() {
  console.log("2nd input field checked");
}

function inputChangeThree() {
  console.log("3rd input field checked");
}

function inputChangeFour() {
  console.log("4th input field checked");
}

// submitBtn.addEventListener("click", clickHandler);
// calcAreaOne.addEventListener("click", calculateAreaOne);
inputFieldOne.addEventListener("change", inputChangeOne);
inputFieldTwo.addEventListener("change", inputChangeTwo);
inputFieldThree.addEventListener("change", inputChangeThree);
inputFieldFour.addEventListener("change", inputChangeFour);
