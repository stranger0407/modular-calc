// import { MAX_HISTORY_LENGTH } from './constants.js';
// import { updateDisplay } from './display.js';

// export function initHistory(calculator) {
//   loadHistoryFromStorage(calculator);
//   document.addEventListener("click", (event) => {
//     const calculatorContainer = document.querySelector(".calculator");
//     const historyPanel = document.querySelector(".history-panel");
//     if (historyPanel && historyPanel.style.display === "block") {
//       if (!calculatorContainer.contains(event.target)) {
//         historyPanel.style.display = "none";
//       }
//     }
//   });
// }

// export function loadHistoryFromStorage(calculator) {
//   const savedHistory = localStorage.getItem("calculatorHistory");
//   calculator.calculationHistory = savedHistory ? JSON.parse(savedHistory) : [];
// }

// export function saveHistoryToStorage(calculator) {
//   localStorage.setItem(
//     "calculatorHistory",
//     JSON.stringify(calculator.calculationHistory)
//   );
// }

// export function addToHistory(calculator, expression, result) {
//   calculator.calculationHistory.unshift({
//     expression,
//     result: result.toString(),
//   });

//   if (calculator.calculationHistory.length > MAX_HISTORY_LENGTH) {
//     calculator.calculationHistory = calculator.calculationHistory.slice(0, MAX_HISTORY_LENGTH);
//   }

//   saveHistoryToStorage(calculator);
// }

// export function clearHistory(calculator) {
//   calculator.calculationHistory = [];
//   saveHistoryToStorage(calculator);

//   const historyPanel = document.querySelector(".history-panel");
//   if (historyPanel && historyPanel.style.display !== "none") {
//     renderHistoryPanel(calculator);
//   }
// }

// export function toggleHistoryDisplay(calculator) {
//   const historyPanel = document.querySelector(".history-panel");
//   if (historyPanel) {
//     historyPanel.style.display = historyPanel.style.display === "none" ? "block" : "none";
//     if (historyPanel.style.display === "block") {
//       renderHistoryPanel(calculator);
//     }
//   }
// }

// export function createHistoryPanel(calculator) {
//   let panel = document.createElement("div");
//   panel.className = "history-panel";

//   const calculatorContainer = document.querySelector(".calculator");
//   if (calculatorContainer) {
//     calculatorContainer.appendChild(panel);
//     renderHistoryPanel(calculator);
//   }
// }

// export function renderHistoryPanel(calculator) {
//   const panel = document.querySelector(".history-panel");
//   if (!panel) return;

//   let historyList = panel.querySelector(".history-list");
//   if (!historyList) {
//     historyList = document.createElement("div");
//     historyList.className = "history-list";
//     panel.appendChild(historyList);
//   }
  
//   historyList.innerHTML = "";

//   if (calculator.calculationHistory.length === 0) {
//     historyList.innerHTML = '<p class="no-history">No calculations yet</p>';
//     return;
//   }

//   calculator.calculationHistory.forEach((item) => {
//     const listItem = document.createElement("div");
//     listItem.className = "history-item";
//     listItem.textContent = `${item.expression} = ${item.result}`;
//     listItem.addEventListener("click", () => {
//       calculator.inputStr = item.result;
//       calculator.displayStr = item.result;
//       updateDisplay(calculator); 
//       panel.style.display = "none";
//     });
//     historyList.appendChild(listItem);
//   });
// }
