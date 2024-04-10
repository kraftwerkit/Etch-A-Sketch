const SketchArea = document.querySelector("#sketch-area");     //Define sketch area
const SketchAreaSide=600 //The width/height from CSS as a numerical value (no dimensions)

//Generates grid size with user input
function createGrid(side) {
  for (let i=1; i<=side**2; i++) {
    const box = document.createElement("div")
    box.style.width=box.style.height=`${SketchAreaSide/side}px`
    box.classList.add("box")
    SketchArea.appendChild(box); //Adds the divisions to the container
   //Why does the event listener need to be here?
}
  var boxes = SketchArea.querySelectorAll("div")
  boxes.forEach(box => box.addEventListener("mouseover",pixel)) //for each div, add event listener.
}

createGrid(16) //Call the function, generate a 16x16 grid by default.

//Returns a random color value from the array
function rainbow() { 
  {
       return pretty[Math.floor(Math.random()*pretty.length)];
   }
  }

//Create an array for colors used in rainbow
const pretty = ["#ffadad",  "#ffd6a5",  "#fdffb6",  "#caffbf",  
"#9bf6ff",  "#a0c4ff",  "#bdb2ff","#ffc6ff"]

//Generates a == pixelated trail
function pixel(e) {
  e.target.style.backgroundColor="black";
  }
//Function to delete existing grid//
function deleteGrid() {
  do {
    newside = +(Math.floor((prompt("Enter a number between 1 and 100", 16)))); //convert to number
  } while (((newside>100 || newside <1) && newside) || (isNaN(newside)==true || newside===0) && newside==null);
  console.log(typeof newside)
  console.log(isNaN(newside))
  // Loop runs when content evaluates to TRUE.
  // && num to break the loop if user gives non zero input.
  // num==0 to return true if the user inputs 0 FALSE || TRUE evaluates to TRUE.
  // Check && num is false when num is null (cancel) or an empty string. Stops the while loop.
  // I still need to account for weird strings like agkhldfadsf and the number 0.

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

//Set Color Functionm used when you click a color button //
function setColor(color) {
  const divs = document.querySelectorAll(".box")
  divs.forEach(div => div.addEventListener("mouseover", (e)=> {
    if (color =="black") {
      e.target.style.backgroundColor="black";
    }
    else if (color=="rainbow") {
      e.target.style.backgroundColor=rainbow();
    }
    else {
      e.target.style.backgroundColor="white";
    }
  }))
}

//Black //
const BlackButton = document.querySelector("#black")

BlackButton.addEventListener("click", () => {
  let color = "black";
  setColor(color);
})

//Eraser //
const EraserButton = document.querySelector("#eraser")

EraserButton.addEventListener("click", () => {
  let color = "erase"
  setColor(color);
} )

// Rainbow //
const Rainbow = document.querySelector("#rainbow")

Rainbow.addEventListener("click", () => {
  let color = "rainbow"
  setColor(color);
} )


//Clear //
const Clear = document.querySelector("#clear")

Clear.addEventListener("click",clear)

function clear() {
  const divs = document.querySelectorAll(".box")
  divs.forEach(div => div.style.backgroundColor="white")
}

// Experimenting with gray shading/opacity
function grey(e) {
  e.target.style.backgroundColor="rgb(2, 0, 100, 0.5)"
}