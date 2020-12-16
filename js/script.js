document.addEventListener('DOMContentLoaded', main);
//Initial color to draw
let elementColor = 'black';

function main() {
  createGrid(16);
  listenButtons();
  const gridRange = document.querySelector('#range');
  gridRange.value = 16;
}

function createGrid(greedSize) {
  const table = document.querySelector('.grid');
  table.style = `grid-template-columns: repeat(${greedSize},1fr);`;
  for (let i = 0; i < greedSize * greedSize; i++) {
    const element = document.createElement('div');
    element.classList.add('element');
    table.append(element);
  }
  activateGrid();
}
//Listen to click on all buttons
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
    deactivateColoring();
  });
}

function listenEraseButton() {
  const eraseButton = document.querySelector('#erase');
  eraseButton.addEventListener('click', (e) => {
    elementColor = 'white';
  });
}
/*After single mouse click,grid is activated and user can draw.
After double mouse click grid is deactivated and user cant draw,grid listen for single mouse click,to start draw again
*/
function activateGrid() {
  const table = document.querySelector('.grid');
  table.addEventListener('click', startDraw);
  table.addEventListener('dblclick', deactivateColoring);
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
/*When user release range,delete actual grid and create a new grid with size "gridSizeRange.value"*/
function setRange() {
  const gridSizeText = document.querySelector('#grid-size-text');
  const gridSizeRange = document.querySelector('#range');
  gridSizeText.textContent = `Grid size ${gridSizeRange.value} x ${gridSizeRange.value}`;
  deleteGrid();
  createGrid(gridSizeRange.value);
}
//When user check the range,show actual value of range
function showRange() {
  const gridSizeText = document.querySelector('#grid-size-text');
  const gridSizeRange = document.querySelector('#range');
  gridSizeText.textContent = `Grid size  ${gridSizeRange.value} x ${gridSizeRange.value}`;
}

function startDraw() {
  const elements = document.querySelectorAll('.element');
  elements.forEach((element) =>
    element.addEventListener('mouseenter', changeColor)
  );
}
//Change background color of each item
function changeColor(e) {
  e.target.style.backgroundColor = elementColor;
}
//Remove event listener from each item
function deactivateColoring() {
  const elements = document.querySelectorAll('.element');
  elements.forEach((element) =>
    element.removeEventListener('mouseenter', changeColor)
  );
  activateGrid();
}
