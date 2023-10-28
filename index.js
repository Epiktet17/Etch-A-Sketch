let gridContainer = document.querySelector(".grid-container");


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  clearGrid();
  createGrid(this.value);
  setColor();
}

function createGrid(sizeOfGrid){//only need 1 variable, if grid has 3 rows it has to have 3 columns
  for (let i = 0; i < sizeOfGrid; i++) {
    let row = document.createElement("div");

    row.classList.add("grid-row");
    gridContainer.appendChild(row);
    for (let j = 0; j < sizeOfGrid; j++) {
      let divInsideRow = document.createElement("div");
      divInsideRow.classList.add('div-inside-row');
      row.appendChild(divInsideRow);
    }
  }
}

function clearGrid() {
  let rows = document.querySelectorAll(".grid-row");
  rows.forEach(function(row) {
    row.remove();
  });
}

function colorGrid(color){
  let divInsideSelector = document.querySelectorAll(".div-inside-row");
  for (let i = 0; i < divInsideSelector.length; i++) {
    divInsideSelector[i].addEventListener("mouseover",function(){
      divInsideSelector[i].style.backgroundColor = color;
    });
  }
  }
function eraser(){
  document.getElementById("favcolor").value = "#FFFFFF";
}

function setColor(){
  let pickedColor = document.getElementById("favcolor").value;
  colorGrid(pickedColor);
}
