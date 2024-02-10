const result = document.querySelector(".result");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");

function updateResult() {
  let resultValue = parseInt(result.textContent); // Get current value

  increase.onclick = function () {
    resultValue += 1;
    result.textContent = resultValue;
  };

  reset.onclick = function () {
    resultValue = 0;
    result.textContent = resultValue;
  };

  decrease.onclick = function () {
    resultValue -= 1;
    result.textContent = resultValue;
  };
}

updateResult(); // Call the function to initialize the event listeners
