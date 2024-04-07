const SketchArea = document.querySelector("#sketch-area");     //Define sketch area
const SketchAreaSide=600 //The width/height from CSS as a numerical value (no dimensions)


//Generates a rainbow pixelated trail
function pixel() {
  this.style.backgroundColor=rainbow(); //Why does "this" work?
}

//Generates grid size with user input
function createGrid(side) {
  for (let i=1; i<=side**2; i++) {
    const box = document.createElement("div")
    box.style.width=box.style.height=`${SketchAreaSide/side}px`
    box.classList.add("box")
    SketchArea.appendChild(box); //Adds the divisions to the container
    box.addEventListener("mouseover",pixel) //Why does the event listener need to be here?
}
}

createGrid(16) //Call the function, generate a 16x16 grid by default.


//Create an array for colors used in trail
const pretty = ["#ffadad",  "#ffd6a5",  "#fdffb6",  "#caffbf",  
"#9bf6ff",  "#a0c4ff",  "#bdb2ff","#ffc6ff"]

//Returns a random color value from the array
function rainbow() { 
  {
       return pretty[Math.floor(Math.random()*pretty.length)];
   }
  }

//Function to delete existing grid//
function deleteGrid() {
  do {
    newside = parseInt(prompt("Enter a number between 1 and 100", 16));
  } while (((newside>100 || newside <1) && newside) || (newside==0)); 
  // Loop runs when content evaluates to TRUE.
  // && num to break the loop if user gives non zero input.
  // num==0 to return true if the user inputs 0 FALSE || TRUE evaluates to TRUE.
  // Check && num is false when num is null (cancel) or an empty string. Stops the while loop.
  // I still need to account for weird strings like agkhldfadsfa

  if (newside<=100 && newside>=1) { //if input is bewteen 1 and 100, generate a new grid in the same space.
    const allDiv=document.querySelectorAll(".box");
    allDiv.forEach((allDiv) => {
      allDiv.remove();
    })
  }
  }

//After the grid is removed, generate a new grid in the same area with the createGrid function.
const Button = document.querySelector("#new-grid")
Button.addEventListener("click", () => {
  deleteGrid();
  createGrid(newside);
})