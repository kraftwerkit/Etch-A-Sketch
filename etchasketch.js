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

//Asks the user for a grid size //
//Focus on removing the grid for now
function deleteGrid() {
  newside= parseInt(prompt("Enter grid size"))
  if (newside >= 1 && newside <=100) {
    {   //remove all children from an element
      const allDiv = document.querySelectorAll(".box"); //review code here.
      allDiv.forEach((allDiv)=> {
        allDiv.remove();            
      })
  }}
  else {

    alert("That is not a valid value!") //insert code here that would loop to prompt again
  }
}

//after we remove the grid, call createGrid()

const Button = document.querySelector("#new-grid")
Button.addEventListener("click", () => {
  deleteGrid();
  createGrid(newside)
})
