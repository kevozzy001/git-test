const container = document.getElementById("container")
const clear = document.querySelector('.clear')
const brush = document.querySelector('.brush')
const rainbowBrush = document.querySelector('.rainbow')
const eraser = document.querySelector('.eraser')
const hideGrid = document.querySelector('.hideGrid')
const showGrid = document.querySelector('.showGrid')



const smallCanvas = document.querySelector('.smallBtn')
const mediumCanvas = document.querySelector('.mediumBtn')
const largeCanvas = document.querySelector('.largeBtn')

function start(){
  clear.addEventListener('click', eraseAll)
  brush.addEventListener('click', draw)
  rainbowBrush.addEventListener('click', drawColor)
  eraser.addEventListener('click', erase)
  hideGrid.addEventListener('click', removeGrid)
  showGrid.addEventListener('click', show)
}


smallCanvas.addEventListener('click', function(){
  makeRows(16,16);
  start();
})
mediumCanvas.addEventListener('click',function(){
  makeRows(22,22);
  start();
})
largeCanvas.addEventListener('click', function(){
  makeRows(30,30);
  start();
})

//-------------canvas making-------------//
makeRows(20, 20);
start();


function makeRows(rows, cols) {
  removeRows();
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

function removeRows(){
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}


//-----------drawing and erasing------------//

const gridItems = document.querySelectorAll('.grid-item');

  function eraseAll() {
    gridItems.forEach((item) => {
      item.style.backgroundColor = 'white';
      item.style.opacity = '1';
    });
  }

let currentColor = 'black'

function setCurrentColor(newColor) {
  currentColor = newColor
}

const color = document.getElementById("colorPicker");
color.oninput = (e) => setCurrentColor(e.target.value)



function draw(){
  gridItems.forEach(item => item.addEventListener
    ('mousedown', function() {
    item.style.background = currentColor;
  }));

  gridItems.forEach(item => item.addEventListener
    ('mouseover', function(event) {
      if(event.buttons == 1) {
        item.style.background = currentColor;
      }
  }));
}

function drawColor(){
  gridItems.forEach(item => item.addEventListener
    ('click', function() {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
    item.style.background = "#" + randomColor;
  }));

  gridItems.forEach(item => item.addEventListener
    ('mouseover', function(event) {
      if(event.buttons == 1) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        item.style.background = "#" + randomColor;
      }
  }));
}

function erase(){
  gridItems.forEach(item => item.addEventListener
    ('click', function() {
    item.style.background = 'white';
  }));

  gridItems.forEach(item => item.addEventListener
    ('mouseover', function(event) {
      if(event.buttons == 1) {
        item.style.background = 'white';
      }
  }));
}

function removeGrid(){
  gridItems.forEach((item) => {
    item.style.border = '0px solid black';
  });
}

function show(){
  gridItems.forEach((item) => {
    item.style.border = '0.1px solid black';
  });



  function test(){
    console.log('yes')
  }
}







