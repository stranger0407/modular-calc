import { ERROR, ERROR_INPUT, MAX_HISTORY_LENGTH } from './constants.js';
import { updateDisplay } from './display.js';
import { initInputHandlers } from './input.js';
// import { initMemory, updateMemoryButtons } from './memory.js';
// import { initHistory } from './history.js';
export class ScientificCalculator {
  constructor() {
    this.inputStr = "";
    this.displayStr = "";
    this.isSecondFunction = false;
    this.isDegree = true;
    this.isExponential = false;
    this.memory = null;
    this.calculationHistory = [];
    this.MAX_HISTORY_LENGTH = MAX_HISTORY_LENGTH;
    
    this.display = document.querySelector(".result");

   
    // initMemory(this);
    // initHistory(this);
    updateDisplay(this);
    // updateMemoryButtons(this);
    initInputHandlers(this);
   
  }

  
  clearCalc() {
    this.inputStr = "";
    this.displayStr = "";
    updateDisplay(this);
  }


  toggleSign() {
    if (this.inputStr === "") this.inputStr = "0";
    if (typeof this.inputStr !== "string")
      this.inputStr = this.inputStr.toString();

    let match = this.inputStr.match(/(-?\d+(\.\d+)?)$/);
    if (match) {
      let num = Number(match[1]);
      let toggled = num * -1;
      this.inputStr = this.inputStr.replace(/(-?\d+(\.\d+)?)$/, `${toggled}`);
      this.displayStr = this.inputStr;
    }
    updateDisplay(this);
  }

  inverseValue() {
    if (typeof this.inputStr !== "string")
      this.inputStr = this.inputStr.toString();
    let match = this.inputStr.match(/(\d+(\.\d+)?)$/);
    if (match) {
      let num = Number(match[1]);
      let inverse = `1/(${num})`;
      this.inputStr = this.inputStr.replace(/(\d+(\.\d+)?)$/, inverse);
      this.displayStr = this.inputStr;
    }
    updateDisplay(this);
  }

  
}
