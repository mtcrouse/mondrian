
var body = document.querySelector('body');

var grid = document.createElement('div');
grid.className = 'grid';
body.appendChild(grid);

var palette = document.getElementsByClassName('palette')[0];

var colorChoice = 'white';

function pixelGrid(size) {

  grid.style.width = size + 'px';
  grid.style.height = size + 'px';
  palette.style.height = size + 'px';

  for (var i = 0; i < 16; i++) {
    var parentPixel = document.createElement('div');
    parentPixel.style.height = size / 4 + 'px';
    parentPixel.style.width = size / 4 + 'px';
    parentPixel.className = 'pixelParent';
    parentPixel.style.backgroundColor = 'white';

    var random = Math.floor(Math.random() * 10);
    var randomRotate = Math.floor(Math.random() * 3);
    var rotateDegrees;

    if (randomRotate === 1) {
      rotateDegrees = 90;
    } else if (randomRotate === 2) {
      rotateDegrees = 180;
    } else if (randomRotate === 3) {
      rotateDegrees = 270;
    }


    var counter = 0;
    var areaUsed = 0;

    if (random < 1) {
      for (var j = 0; j < 4; j++) {
        childPixel = document.createElement('div');
        childPixel.style.height = size / 8 + 'px';
        childPixel.style.width = size / 8 + 'px';
        childPixel.className = 'pixelChild';
        childPixel.style.backgroundColor = 'white';
        parentPixel.appendChild(childPixel);
      }
    } else if (random < 5) {
      for (var k = 0; k < 2; k++) {
        childPixel = document.createElement('div');
        childPixel.style.height = size / 4 + 'px';
        childPixel.style.width = size / 8 + 'px';
        childPixel.className = 'pixelChild';
        childPixel.style.backgroundColor = 'white';
        parentPixel.appendChild(childPixel);
      }
    } else if (random < 10) {
      for (var l = 0; l < 2; l++) {
        childPixel = document.createElement('div');
        childPixel.style.height = size / 8 + 'px';
        childPixel.style.width = size / 8 + 'px';
        childPixel.className = 'pixelChild';
        childPixel.style.backgroundColor = 'white';
        parentPixel.appendChild(childPixel);
      }
        childPixel = document.createElement('div');
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
  var colors = ['red', 'blue', 'yellow', 'black', ];
  for (var hue of colors) {
    var newColor = document.createElement('div');
    var colorName = document.createElement('div');
    newColor.className = 'colorButton';
    newColor.style.backgroundColor = hue;
    colorName.className = 'colorName';
    colorName.textContent = hue;
    palette.appendChild(colorName);
    palette.appendChild(newColor);
  }
}

function chooseColor(event) {
  colorChoice = event.target.style.backgroundColor;
  for (divs of document.getElementsByClassName('colorButton')) {
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

var brushStatus = false;

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
