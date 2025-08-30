//Javascript for results

//Creating the table dynamically
const tbody = document.querySelector("#B2Div2 tbody");

const numberWords = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
];

for (let i = 0; i < 20; i++) {
  const word = numberWords[i];
  const number = i + 1;

  const row = document.createElement("tr");

  row.innerHTML = `
    <td class="serial"><input class="serialInput" id="${word}Serial" readonly value="${number}" /></td>
    <td class="date"><input class="dateInput" id="${word}Date" readonly /></td>
    <td class="draw"><input class="drawInput" id="${word}Draw" readonly /></td>
    <td><input class="wn" id="${word}First" readonly /></td>
    <td><input class="wn" id="${word}Second" readonly /></td>
    <td><input class="wn" id="${word}Third" readonly /></td>
    <td><input class="wn" id="${word}Fourth" readonly /></td>
    <td><input class="wn" id="${word}Fifth" readonly /></td>
    <td><input class="wn" id="${word}Sixth" readonly /></td>
    <td class="spaceTD"><input class="space" readonly /></td>
    <td><input class="wn" id="${word}Extra" readonly /></td>
`;

  tbody.appendChild(row);
}

//Fetching result from results.json and populate into the last 20 results table

// window.addEventListener("DOMContentLoaded", () => {
//   fetch("drawResults.json")
//     .then((res) => res.json())
//     .then((data) => {
//       resultArray = data;
//       console.log("Loaded results:", resultArray);
// initialize functions here

//populate the last 20 results into the table
const resultArray = [
  {
    date: "2025-06-23",
    draw: 4089,
    w1: 2,
    w2: 15,
    w3: 29,
    w4: 37,
    w5: 45,
    w6: 49,
    extra: 24,
  },
  {
    date: "2025-06-26",
    draw: 4090,
    w1: 10,
    w2: 26,
    w3: 28,
    w4: 35,
    w5: 37,
    w6: 46,
    extra: 20,
  },
  {
    date: "2025-06-30",
    draw: 4091,
    w1: 11,
    w2: 27,
    w3: 31,
    w4: 33,
    w5: 34,
    w6: 36,
    extra: 13,
  },
  {
    date: "2025-07-03",
    draw: 4092,
    w1: 6,
    w2: 15,
    w3: 16,
    w4: 17,
    w5: 25,
    w6: 34,
    extra: 31,
  },
  {
    date: "2025-07-07",
    draw: 4093,
    w1: 10,
    w2: 15,
    w3: 17,
    w4: 33,
    w5: 36,
    w6: 45,
    extra: 34,
  },
  {
    date: "2025-07-10",
    draw: 4094,
    w1: 12,
    w2: 21,
    w3: 26,
    w4: 27,
    w5: 35,
    w6: 44,
    extra: 10,
  },
  {
    date: "2025-07-14",
    draw: 4095,
    w1: 2,
    w2: 8,
    w3: 19,
    w4: 29,
    w5: 38,
    w6: 41,
    extra: 20,
  },
  {
    date: "2025-07-17",
    draw: 4096,
    w1: 7,
    w2: 8,
    w3: 17,
    w4: 29,
    w5: 32,
    w6: 42,
    extra: 1,
  },
  {
    date: "2025-07-21",
    draw: 4097,
    w1: 2,
    w2: 5,
    w3: 10,
    w4: 12,
    w5: 14,
    w6: 37,
    extra: 17,
  },
  {
    date: "2025-07-24",
    draw: 4098,
    w1: 9,
    w2: 11,
    w3: 24,
    w4: 32,
    w5: 39,
    w6: 49,
    extra: 26,
  },
  {
    date: "2025-07-28",
    draw: 4099,
    w1: 2,
    w2: 14,
    w3: 16,
    w4: 21,
    w5: 36,
    w6: 47,
    extra: 1,
  },
  {
    date: "2025-07-31",
    draw: 4100,
    w1: 7,
    w2: 19,
    w3: 20,
    w4: 21,
    w5: 22,
    w6: 29,
    extra: 37,
  },
  {
    date: "2025-08-04",
    draw: 4101,
    w1: 30,
    w2: 32,
    w3: 40,
    w4: 43,
    w5: 45,
    w6: 49,
    extra: 5,
  },
  {
    date: "2025-08-08",
    draw: 4102,
    w1: 2,
    w2: 15,
    w3: 28,
    w4: 39,
    w5: 42,
    w6: 44,
    extra: 5,
  },
  {
    date: "2025-08-11",
    draw: 4103,
    w1: 9,
    w2: 24,
    w3: 31,
    w4: 34,
    w5: 43,
    w6: 44,
    extra: 1,
  },
  {
    date: "2025-08-14",
    draw: 4104,
    w1: 22,
    w2: 25,
    w3: 29,
    w4: 31,
    w5: 34,
    w6: 43,
    extra: 11,
  },
  {
    date: "2025-08-18",
    draw: 4105,
    w1: 1,
    w2: 4,
    w3: 18,
    w4: 24,
    w5: 37,
    w6: 42,
    extra: 26,
  },
  {
    date: "2025-08-21",
    draw: 4106,
    w1: 4,
    w2: 13,
    w3: 22,
    w4: 36,
    w5: 38,
    w6: 46,
    extra: 12,
  },
  {
    date: "2025-08-25",
    draw: 4107,
    w1: 2,
    w2: 3,
    w3: 4,
    w4: 16,
    w5: 22,
    w6: 39,
    extra: 48,
  },
  {
    date: "2025-08-28",
    draw: 4108,
    w1: 10,
    w2: 11,
    w3: 16,
    w4: 24,
    w5: 34,
    w6: 35,
    extra: 1,
  },
];

for (let i = 0; i < resultArray.length; i++) {
  const prefix = numberWords[i];
  const rowData = resultArray[i];

  document.getElementById(`${prefix}Date`).value = rowData.date;
  document.getElementById(`${prefix}Draw`).value = rowData.draw;
  document.getElementById(`${prefix}First`).value = rowData.w1;
  document.getElementById(`${prefix}Second`).value = rowData.w2;
  document.getElementById(`${prefix}Third`).value = rowData.w3;
  document.getElementById(`${prefix}Fourth`).value = rowData.w4;
  document.getElementById(`${prefix}Fifth`).value = rowData.w5;
  document.getElementById(`${prefix}Sixth`).value = rowData.w6;
  document.getElementById(`${prefix}Extra`).value = rowData.extra;
}

// Finding absent numbers
const array140 = [];
for (let i = 0; i < resultArray.length; i++) {
  const prefix = numberWords[i];
  array140.push(Number(document.getElementById(`${prefix}First`).value));
  array140.push(Number(document.getElementById(`${prefix}Second`).value));
  array140.push(Number(document.getElementById(`${prefix}Third`).value));
  array140.push(Number(document.getElementById(`${prefix}Fourth`).value));
  array140.push(Number(document.getElementById(`${prefix}Fifth`).value));
  array140.push(Number(document.getElementById(`${prefix}Sixth`).value));
  array140.push(Number(document.getElementById(`${prefix}Extra`).value));
}
console.log(array140);

const absentNumber = [];
for (let i = 1; i < 50; i++) {
  if (!array140.includes(i)) {
    absentNumber.push(i);
  }
}
console.log(absentNumber);

const absentContainer = document.getElementById("B2Div42");
absentNumber.forEach((num) => {
  const box = document.createElement("div");
  box.className = "number-box";
  box.textContent = num;
  absentContainer.appendChild(box);
});

// Highlighting same number in same background color in results

const inputs = document.querySelectorAll(".wn");

inputs.forEach((input) => {
  input.addEventListener("mouseenter", () => {
    const value = input.value.trim();
    inputs.forEach((otherInput) => {
      if (otherInput.value.trim() === value) {
        otherInput.classList.add("highlight");
      }
    });
  });

  input.addEventListener("mouseleave", () => {
    inputs.forEach((input) => input.classList.remove("highlight"));
  });
});

// Javascript for random pick

// Generate number buttons (1 to 49)
const grid = document.getElementById("B6Div2");
for (let i = 1; i <= 49; i++) {
  const div = document.createElement("div");
  div.className = "number";
  div.id = `num_${i}`;
  div.textContent = i;
  div.addEventListener("click", () => {
    div.classList.toggle("selected");
  });
  grid.appendChild(div);
}

function pickRandom() {
  const numberInput = Number(document.getElementById("pickHowMany").value);
  const pickedContainer = document.getElementById("B6Div52");
  //onst messageBox = document.getElementById("message");

  const selectedEls = document.querySelectorAll(".number.selected");
  const selectedNums = Array.from(selectedEls).map((el) =>
    parseInt(el.textContent, 10)
  );

  pickedContainer.innerHTML = ""; // Clear previous picks
  //messageBox.innerHTML = ""; // Clear previous messages
  document.getElementById("pickHowMany").classList.remove("borderGlow");

  // Validation
  if (numberInput <= 0 || isNaN(numberInput)) {
    alert("Please enter a valid number between 1 and 12.");
    //messageBox.textContent = "Please enter a valid number to pick.";
    document.getElementById("pickHowMany").classList.add("borderGlow");
    return;
  }

  if (numberInput >= 13 || isNaN(numberInput)) {
    alert("Please enter a valid number between 1 and 12.");
    //messageBox.textContent = "Please enter a valid number to pick.";
    document.getElementById("pickHowMany").classList.add("borderGlow");
    return;
  }

  if (selectedNums.length === 0) {
    alert("Please select numbers first.");
    return;
  }

  if (selectedNums.length <= numberInput) {
    alert("Choose a value smaller than the total selected numbers.");
    // messageBox.textContent =
    //   "Choose a value smaller than the total selected numbers.";
    document.getElementById("pickHowMany").classList.add("borderGlow");
    return;
  }

  // Shuffle and pick
  const shuffled = selectedNums.sort(() => 0.5 - Math.random());
  const picked = shuffled.slice(0, numberInput);
  const sortedPicked = picked.sort((a, b) => a - b);

  pickedContainer.innerHTML = ""; // Clear previous picks
  sortedPicked.forEach((num) => {
    const box = document.createElement("div");
    box.className = "picks";
    box.textContent = num;
    pickedContainer.appendChild(box);
  });
}

function selectAll() {
  const pickedContainer = document.getElementById("B6Div52");
  //const messageBox = document.getElementById("message");

  pickedContainer.innerHTML = ""; // Clear previous picks
  //messageBox.innerHTML = ""; // Clear previous messages
  document.getElementById("pickHowMany").value = "";
  document.getElementById("pickHowMany").classList.remove("borderGlow");

  const numbers = document.querySelectorAll(".number");
  numbers.forEach((el) => el.classList.add("selected"));
}

function deselectAll() {
  const pickedContainer = document.getElementById("B6Div52");
  //const messageBox = document.getElementById("message");

  pickedContainer.innerHTML = ""; // Clear previous picks
  //messageBox.innerHTML = ""; // Clear previous messages
  document.getElementById("pickHowMany").value = "";
  document.getElementById("pickHowMany").classList.remove("borderGlow");

  const numbers = document.querySelectorAll(".number");
  numbers.forEach((el) => el.classList.remove("selected"));
}

// Find out the frequencies of the winning number in the last 5 draws
let result = {};
function showFreq() {
  result = {}; //reset
  const inputEl = document.getElementById("numberOfDraws");
  const numberOfDraws = Number(inputEl.value);
  document.getElementById("numberOfDraws").classList.remove("borderGlow");

  if (isNaN(numberOfDraws) || numberOfDraws <= 1 || numberOfDraws > 20) {
    alert("Please enter a valid number between 2 and 20.");
    document.getElementById("numberOfDraws").classList.add("borderGlow");
    return;
  }

  const iStart = 20 - numberOfDraws;

  const numbersArray = [];

  for (let i = iStart; i < resultArray.length; i++) {
    const prefix = numberWords[i];
    numbersArray.push(Number(document.getElementById(`${prefix}First`).value));
    numbersArray.push(Number(document.getElementById(`${prefix}Second`).value));
    numbersArray.push(Number(document.getElementById(`${prefix}Third`).value));
    numbersArray.push(Number(document.getElementById(`${prefix}Fourth`).value));
    numbersArray.push(Number(document.getElementById(`${prefix}Fifth`).value));
    numbersArray.push(Number(document.getElementById(`${prefix}Sixth`).value));
    numbersArray.push(Number(document.getElementById(`${prefix}Extra`).value));
  }
  console.log(numbersArray);

  const countMap = new Map();
  for (const num of numbersArray) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const [num, count] of countMap) {
    const key = `x${count}`;
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(num);
  }

  for (const key in result) {
    if (Array.isArray(result[key]) && result[key].length === 0) {
      delete result[key];
    }
  }

  renderResultsTable(result);
  document.getElementById("B5Div3").style.display = "block";
}

function renderResultsTable(data) {
  const container = document.getElementById("B5Div2");
  container.innerHTML = ""; // Clear previous content

  const table = document.createElement("table");
  //   table.border = "1";
  table.style.borderCollapse = "collapse";
  table.style.marginTop = "10px";
  table.style.marginBottom = "20px";
  const headerRow = document.createElement("tr");
  const th1 = document.createElement("th");

  th1.textContent = "Freq";
  th1.style.color = "white";
  th1.style.width = "60px";
  th1.style.padding = "6px";
  th1.style.borderWidth = "1px";
  th1.style.borderColor = "yellow";
  th1.style.borderStyle = "solid";
  th1.style.borderCollapse = "collapse";
  const th2 = document.createElement("th");
  th2.textContent = "Numbers";
  th2.style.color = "white";
  th2.style.width = "300px";
  th2.style.padding = "6px";
  th2.style.borderWidth = "1px";
  th2.style.borderColor = "yellow";
  th2.style.borderStyle = "solid";
  th2.style.borderCollapse = "collapse";

  headerRow.appendChild(th1);
  headerRow.appendChild(th2);
  table.appendChild(headerRow);

  const sortedEntries = Object.entries(data).sort((a, b) => {
    const aFreq = parseInt(a[0].replace("x", ""));
    const bFreq = parseInt(b[0].replace("x", ""));
    return bFreq - aFreq;
  });

  for (const [key, numberList] of sortedEntries) {
    const row = document.createElement("tr");

    //   for (const key in data) {
    //     const row = document.createElement("tr");

    const frequencyCell = document.createElement("td");
    frequencyCell.textContent = key;
    frequencyCell.style.padding = "6px";
    frequencyCell.style.color = "white";
    // frequencyCell.style.fontSize = "16px";
    frequencyCell.style.borderWidth = "1px";
    frequencyCell.style.borderColor = "yellow";
    frequencyCell.style.borderStyle = "solid";
    frequencyCell.style.borderCollapse = "collapse";

    const numbersCell = document.createElement("td");
    numbersCell.textContent = data[key].sort((a, b) => a - b).join(", ");
    numbersCell.style.padding = "6px";
    numbersCell.style.color = "white";
    // numbersCell.style.fontSize = "16px";
    numbersCell.style.borderWidth = "1px";
    numbersCell.style.borderColor = "yellow";
    numbersCell.style.borderStyle = "solid";
    numbersCell.style.borderCollapse = "collapse";

    const buttonCell = document.createElement("td");
    buttonCell.innerHTML = `<button type="button" class="atrpButton" id="${key}" onclick="atrp(this)">Add</button>`;
    buttonCell.style.borderWidth = "1px";
    buttonCell.style.borderColor = "yellow";
    buttonCell.style.borderStyle = "solid";
    buttonCell.style.borderCollapse = "collapse";

    row.appendChild(frequencyCell);
    row.appendChild(numbersCell);
    row.appendChild(buttonCell);
    table.appendChild(row);
  }

  container.appendChild(table);
}

let buttonID;
function atrp(button) {
  document.getElementById("B6Div52").innerHTML = "";
  document.getElementById("pickHowMany").value = "";
  buttonID = button.id;
  console.log("Button ID:", button.id);
  const numberList = result[buttonID];
  console.log(numberList);

  // First clear all previous selections
  for (let i = 1; i <= 49; i++) {
    const el = document.getElementById(`num_${i}`);
    if (el) {
      el.classList.remove("selected");
    }
  }

  // Add 'selected' class to numbers in numberList
  numberList.forEach((num) => {
    const el = document.getElementById(`num_${num}`);
    if (el) {
      el.classList.add("selected");
    }
  });
}

const startYear = 2025; // Replace with your starting year
const currentYear = new Date().getFullYear();
const copyrightText =
  startYear === currentYear ? currentYear : `${startYear} - ${currentYear}`;
document.getElementById("trademark").textContent = copyrightText;
