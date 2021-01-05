const base = document.querySelector("#hypoBase");
const height = document.querySelector("#hypoHeight");
const submitBtn = document.querySelector(".submitBtn");
const calcHypo = document.querySelector("#calcHypo");

function btnClickHandler(e) {
  e.preventDefault();
  const hypoBaseValue = parseInt(base.value);
  const hypoHeightValue = parseInt(height.value);

  console.log(hypoBaseValue);
  console.log(hypoHeightValue);

  const baseSquare = hypoBaseValue * hypoBaseValue;
  const heightSquare = hypoHeightValue * hypoHeightValue;
  const result = baseSquare + heightSquare;
  console.log(result);
  console.log(baseSquare);
  console.log(heightSquare);
  const finalResult = Math.sqrt(result);
  const hypoResult = finalResult.toFixed(2);

  calcHypo.innerText = `Hypotenuse of a triangle with base ${hypoBaseValue} units & height ${hypoHeightValue} units is ${hypoResult} units`;
}

submitBtn.addEventListener("click", btnClickHandler);
