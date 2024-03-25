//* Create a 16 by 16 grid *//

const SIDE = 600;
let row = 16;
let col = 16;

const sketchArea = document.querySelector("#sketch-area");   //*Creates 600 by 600 sketch area*//
sketchArea.style.width = `${SIDE}px`;
sketchArea.style.height = `${SIDE}px`;

//**Changes Cell Color */
function setBackgroundColor() {
  this.style.backgroundColor = "black";
}

//**Creates the cells with a for loop*//
function createGridCells() {
  for (let i =0; i < (row*col); i++) {
    const gridCell = document.createElement("div")
    gridCell.style.width = `${(SIDE/col) -2}px`;
    gridCell.style.height = `${(SIDE/row) -2}px`;
    gridCell.classList.add("cell");

    sketchArea.appendChild(gridCell);

    gridCell.addEventListener("mouseover", setBackgroundColor)
  }
}

createGridCells()
