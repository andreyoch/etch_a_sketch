document.addEventListener('DOMContentLoaded', main);

let elementColor = 'rgb(0,255,255)';

function main() {
  createGrid();
  listenRandomButton();
  listenResetButton();
  startDraw();
}

function createGrid() {
  const table = document.querySelector('.grid');
  for (let i = 0; i < 16; i++) {
    const tableRow = document.createElement('div');
    tableRow.classList.add('row');
    table.append(tableRow);

    for (let j = 0; j < 16; j++) {
      const element = document.createElement('div');
      element.classList.add('element');
      tableRow.append(element);
    }
  }
}

function listenRandomButton() {
  const randomButton = document.querySelector('#random');
  randomButton.addEventListener('click', pickRandomColor);
}
function listenResetButton() {
  const resetButton = document.querySelector('#reset');

  resetButton.addEventListener('click', (e) => {
    const elements = document.querySelectorAll('.element');
    elements.forEach((element) => (element.style.backgroundColor = 'white'));
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
  console.log(red, green, blue);
  elementColor = `rgb(${red},${green},${blue})`;
}
