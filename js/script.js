document.addEventListener('DOMContentLoaded', main);

let elementColor = 'black';

function main() {
  createGrid(16);
  listenButtons();
  const range = document.querySelector('#range');
  range.value = 16;
}

function createGrid(greedSize) {
  const table = document.querySelector('.grid');
  table.style = `grid-template-columns: repeat(${greedSize},1fr);`;
  for (let i = 0; i < greedSize * greedSize; i++) {
    const element = document.createElement('div');
    element.classList.add('element');
    table.append(element);
  }
  startDraw();
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
  const pickColorArea = document.querySelector('#color-picker');

  resetButton.addEventListener('click', (e) => {
    elementColor = pickColorArea.value;
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

function deleteGrid() {
  const elements = document.querySelectorAll('.element');
  elements.forEach((element) => element.remove());
}

function setRange() {
  const gridSizeText = document.querySelector('#grid-size-text');
  const gridSizeRange = document.querySelector('#range');
  gridSizeText.textContent = `Grid size ${gridSizeRange.value} x ${gridSizeRange.value}`;
  deleteGrid();
  createGrid(gridSizeRange.value);
}

function showRange() {
  const gridSizeText = document.querySelector('#grid-size-text');
  const gridSizeRange = document.querySelector('#range');
  gridSizeText.textContent = `Grid size  ${gridSizeRange.value} x ${gridSizeRange.value}`;
}
