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
  boxes.forEach(box => box.addEventListener("mouseover",pixel)) //for each div, add event listener
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

//Generates a pixelated trail
function pixel(e) {
  e.target.style.backgroundColor="black"; //replaced this with e.target
  }

//Set Color Function used when you click a color button //
function setColor(color) {
  const divs = document.querySelectorAll(".box")
  divs.forEach(div => div.addEventListener("mouseover", (e)=> {
    if (color =="black") {
      e.target.style.backgroundColor="black";
    }
    else if (color=="rainbow") {
      e.target.style.backgroundColor=rainbow();
    }
    else if (color=="gray") { //this still doesn't work//
      e.target.style.backgroundColor = "black";
      console.log(e.target.style.opacity)
      if (e.target.style.opacity <= 0.9) {
        e.target.style.opacity = +e.target.style.opacity+0.1;
    }}
   else if (color=="favorite") {
    e.target.style.backgroundColor= favorite.value
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

// Gray //
const Gray = document.querySelector("#gray")

Gray.addEventListener("click", () => {
  let color = "gray"
  setColor(color);
} )


//Clear //
const Clear = document.querySelector("#clear")

Clear.addEventListener("click",clear)

function clear() {
  const divs = document.querySelectorAll(".box")
  divs.forEach(div => div.style.backgroundColor="white")
}

// Favorite Color 

const favorite = document.querySelector("#favcolor");

favorite.addEventListener("click", () => {
  let color = "favorite"
  setColor(color);})

//Slider to create new grid//
var slider = document.querySelector(".slider");
var output = document.querySelector("#slider-value");
output.innerHTML = slider.value + "x" + slider.value;

slider.oninput = function() {
  output.innerHTML = this.value + "x" + this.value;}

  slider.addEventListener("mouseup", () => {
    deletethegrid();
    createGrid(slider.value)
  })


  // Removes Grid //
  function deletethegrid() {
      const allDiv=document.querySelectorAll(".box");
      allDiv.forEach((allDiv) => {
        allDiv.remove();
      })
    }