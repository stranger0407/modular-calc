
import { updateDisplay } from './display.js';


// export function initUIHandlers(calculator) {
 
// }

export function changeMode(calculator) {
  calculator.isSecondFunction = !calculator.isSecondFunction;

  document.querySelector("[value='square']").textContent = calculator.isSecondFunction
    ? "x³"
    : "x²";
  document.querySelector("[value='√']").textContent = calculator.isSecondFunction
    ? "∛x"
    : "√x";
}

export function degree(calculator) {
  calculator.isDegree = !calculator.isDegree;
  document.querySelector(".unit").textContent = calculator.isDegree ? "DEG" : "RAD";

  // Update display to reflect the change if there's a result
  if (calculator.inputStr && !isNaN(Number(calculator.inputStr))) {
    updateDisplay(calculator);
  }
}

export function degreeClickEventHandler(calculator, e) {
  let currentKey = e.target.closest("button")?.value;
  switch (currentKey) {
    case "degree":
      degree(calculator);
      break;
    case "F-E":
      toggleExponential(calculator);
      break;
    default:
      break;
  }
}

export function toggleExponential(calculator) {
  if (!calculator.inputStr || isNaN(Number(calculator.inputStr))) return;

  let num = Number(calculator.inputStr);
  calculator.isExponential = !calculator.isExponential;

  if (calculator.isExponential) {
    // Format the number in scientific notation
    let exponentStr = num.toExponential(2); // 2 decimal places
    let [mantissa, exponent] = exponentStr.split("e");

    // Store the original number for calculations
    calculator.inputStr = num.toString();
    // Display in scientific notation
    calculator.displayStr = `${mantissa}×10^${Number(exponent)}`;
  } else {
    // Return to standard notation
    calculator.inputStr = num.toString();
    calculator.displayStr = calculator.inputStr;
  }

  updateDisplay(calculator);
}