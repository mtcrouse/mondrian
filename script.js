'use strict'

let body = document.querySelector('body');
let grid = document.getElementById('grid');
let palette = document.getElementById('palette');
let colorChoice = 'white';

function pixelGrid(size) {
  grid.style.width = size + 'px';
  grid.style.height = size + 'px';
  palette.style.height = size + 'px';

  for (let i = 0; i < 16; i++) {
    let parentPixel = document.createElement('div');

    parentPixel.style.height = size / 4 + 'px';
    parentPixel.style.width = size / 4 + 'px';
    parentPixel.className = 'pixelParent';
    parentPixel.style.backgroundColor = 'white';

    let random = Math.floor(Math.random() * 10);
    let randomRotate = Math.floor(Math.random() * 3);
    let rotateDegrees;

    if (randomRotate === 1) {
      rotateDegrees = 90;
    } else if (randomRotate === 2) {
      rotateDegrees = 180;
    } else if (randomRotate === 3) {
      rotateDegrees = 270;
    }

    let counter = 0;
    let areaUsed = 0;

    if (random < 1) {
      for (let j = 0; j < 4; j++) {
        let childPixel = document.createElement('div');

        childPixel.style.height = size / 8 + 'px';
        childPixel.style.width = size / 8 + 'px';
        childPixel.className = 'pixelChild';
        childPixel.style.backgroundColor = 'white';
        parentPixel.appendChild(childPixel);
      }
    } else if (random < 5) {
      for (let k = 0; k < 2; k++) {
        let childPixel = document.createElement('div');

        childPixel.style.height = size / 4 + 'px';
        childPixel.style.width = size / 8 + 'px';
        childPixel.className = 'pixelChild';
        childPixel.style.backgroundColor = 'white';
        parentPixel.appendChild(childPixel);
      }
    } else if (random < 10) {
      for (let l = 0; l < 2; l++) {
        let childPixel = document.createElement('div');

        childPixel.style.height = size / 8 + 'px';
        childPixel.style.width = size / 8 + 'px';
        childPixel.className = 'pixelChild';
        childPixel.style.backgroundColor = 'white';
        parentPixel.appendChild(childPixel);
      }

      let childPixel = document.createElement('div');

      childPixel.style.height = size / 8 + 'px';
      childPixel.style.width = size / 4 + 'px';
      childPixel.className = 'pixelChild';
      childPixel.style.backgroundColor = 'white';
      parentPixel.appendChild(childPixel);
    }
    parentPixel.style.transform = 'rotate(' + rotateDegrees + 'deg)';

    grid.appendChild(parentPixel);
  }
}

function makePalette() {
  let colors = ['red', 'blue', 'yellow', 'black',];
  for (let color of colors) {
    let newColor = document.createElement('div');
    newColor.className = 'colorButton';
    newColor.style.backgroundColor = color;
    palette.appendChild(newColor);
  }
}

function chooseColor(event) {
  colorChoice = event.target.style.backgroundColor;
  for (let divs of document.getElementsByClassName('colorButton')) {
    divs.style.border = '1px solid black';
  }
  event.target.style.border = '5px solid';
  event.target.style.borderColor = 'black';
  if (event.target.style.backgroundColor === 'black') {
    event.target.style.borderColor = 'grey';
  }
}

function colorize(event) {
  if (brushStatus === true) {
    if (event.target.style.backgroundColor !== colorChoice) {
      event.target.style.backgroundColor = colorChoice;
    }
  }
}

function clickColorize(event) {
  if (event.target.style.backgroundColor !== colorChoice) {
    event.target.style.backgroundColor = colorChoice;
  }
}

pixelGrid(450);
makePalette();

let brushStatus = false;

function mouseDown() {
  brushStatus = true;
}

function mouseUp() {
  brushStatus = false;
}

palette.addEventListener('click', chooseColor);

grid.addEventListener('mousedown', mouseDown);

grid.addEventListener('mouseup', mouseUp);

grid.addEventListener('mouseover', colorize);

grid.addEventListener('click', clickColorize);
