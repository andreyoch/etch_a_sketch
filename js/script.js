document.addEventListener('DOMContentLoaded', main);

function main() {
  createGrid();
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

function listenResetButton() {
  const resetButton = document.querySelector('#reset');

  resetButton.addEventListener('click', (e) => {
    const elements = document.querySelectorAll('.element');
    elements.forEach((element) => element.classList.remove('active'));
  });
}

// function activateGrid() {
//   const table = document.querySelector('.grid');
//    table.addEventListener('click', startDraw);
   
// }

function startDraw() {
  const elements = document.querySelectorAll('.element');
  elements.forEach((element) =>
     element.addEventListener('mouseenter', (e) => {
        e.target.classList.add('active');
        
    })
  );
   
}



