const SketchArea = document.querySelector("#sketch-area");     //Define sketch area

//Create a 16x16 grid //

function createGrid() {
  for (let i=1; i<=256; i++) {                     //This loop creates 256 divs.
    const box = document.createElement("div")
    box.style.width=box.style.height="37.5px"  /// 600/16=37.5
    box.classList.add("box")
    SketchArea.appendChild(box);
}
}

createGrid()

//Create a black pixelated trail //
