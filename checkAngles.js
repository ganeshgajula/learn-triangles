const angleOne = document.querySelector("#angleA");
const angleTwo = document.querySelector("#angleB");
const angleThree = document.querySelector("#angleC");
const submitBtn = document.querySelector(".submitBtn");
const anglesSum = document.querySelector("#anglesSum");

function calcSumOfAngles(e) {
  e.preventDefault();

  const angleOneValue = parseInt(angleOne.value);
  const angleTwoValue = parseInt(angleTwo.value);
  const angleThreeValue = parseInt(angleThree.value);

  const sumOfAngles = angleOneValue + angleTwoValue + angleThreeValue;
  console.log(sumOfAngles);
  if (sumOfAngles === 180) {
    anglesSum.innerText = ` As sum of all the angles equals to 180 degrees. Hence, the angles form a traingle.`;
  } else {
    anglesSum.innerText = `As sum of all the angles does not equals to 180 degrees. Hence, the angles do not form a triangle`;
  }
}

submitBtn.addEventListener("click", calcSumOfAngles);
