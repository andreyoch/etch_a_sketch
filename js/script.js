document.addEventListener('DOMContentLoaded', main);

let elementColor = 'black';
const pickColorArea = document.querySelector('#color-picker');

function main() {
  createGrid(16);
  listenButtons();
  startDraw();
}

function createGrid(greedSize) {
  const table = document.querySelector('.grid');
  for (let i = 0; i < greedSize; i++) {
    const tableRow = document.createElement('div');
    tableRow.classList.add('row');
    table.append(tableRow);

    for (let j = 0; j < greedSize; j++) {
      const element = document.createElement('div');
      element.classList.add('element');
      // element.style.height = `${greedSize}px`;
      // element.style.width = `${greedSize}px`;
      tableRow.append(element);
    }
  }
}

function listenButtons() {
  listenRandomButton();
  listenResetButton();
  listenEraseButton();
  listenPickColorButton();
}

function listenRandomButton() {
  const randomButton = document.querySelector('#random');
  randomButton.addEventListener('click', pickRandomColor);
}
function listenResetButton() {
  const resetButton = document.querySelector('#reset');

  resetButton.addEventListener('click', (e) => {
    elementColor = 'green';
    const elements = document.querySelectorAll('.element');
    elements.forEach((element) => (element.style.backgroundColor = 'white'));
  });
}

function listenEraseButton() {
  const eraseButton = document.querySelector('#erase');
  eraseButton.addEventListener('click', (e) => {
    elementColor = 'white';
  });
}

function startDraw() {
  const elements = document.querySelectorAll('.element');
  elements.forEach((element) =>
    element.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = elementColor;
    })
  );
}

function pickRandomColor() {
  const red = Math.floor(Math.random(0, 256) * 256);
  const green = Math.floor(Math.random(0, 256) * 256);
  const blue = Math.floor(Math.random(0, 256) * 256);
  elementColor = `rgb(${red},${green},${blue})`;
}

function listenPickColorButton() {
  const pickColorArea = document.querySelector('#color-picker');
  pickColorArea.addEventListener('mouseleave', (e) => {
    elementColor = pickColorArea.value;
  });
}

// function showRange() {
//   const gridSize = document.querySelector('#grid-size');
//   const range = document.querySelector('#range');
//   gridSize.textContent = `Grid size is ${range.value} x ${range.value}`;
//   deleteGrid();
//   createGrid(range.value);
// }

// function deleteGrid() {
//   const elements = document.querySelectorAll('.element');
//   elements.forEach((element) => element.remove());
// }
