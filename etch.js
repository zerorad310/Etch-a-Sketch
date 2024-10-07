const doc = document.querySelector("body");
doc.style.display = "flex";
doc.style.flexDirection = "column";
doc.style.justifyContent = "center";
doc.style.alignItems = "center";
doc.style.height = "100vh";
doc.style.width = "100vw";
doc.style.padding = "0px";
doc.style.backgroundColor = "rgba(106, 111, 223, 0.6)";

const mainButtonContainer = document.querySelector(".mainButtonContainer");
mainButtonContainer.style.flexGrow = "0";
mainButtonContainer.style.display = "flex";
mainButtonContainer.style.justifyContent = "center";
mainButtonContainer.style.height = "3vh";
mainButtonContainer.style.width = "30vw";
mainButtonContainer.style.flexShrink = "0";
mainButtonContainer.style.margin = "0px";

const selectionBtn = document.querySelector(".mainButton");

const mainContainer = document.querySelector(".mainContainer");
mainContainer.style.backgroundColor = "#ffffff";
mainContainer.style.display = "flex";
mainContainer.style.justifyContent = "space-around";
mainContainer.style.alignItems = "center";
mainContainer.style.boxSizing = "border-box";
mainContainer.style.height = "30vw";
mainContainer.style.width = "30vw";
mainContainer.style. margin = "2em";
mainContainer.style.border = "2px solid black";


mainContainer.style.flexWrap = "wrap";
mainButtonContainer.appendChild(selectionBtn);


function getRandomColorNumber(){
    let a = Math.floor(Math.random()*1000);
    if (a>255){

    }
}

function randomizeBgColor(){
    let color1 = (Math.floor(Math.random()*(255-0+1)));
    let color2 = (Math.floor(Math.random()*(255-0+1)));
    let color3 = (Math.floor(Math.random()*(255-0+1)));
    let opacity = Math.random()
    event.target.style.backgroundColor = `rgba(${color1},${color2},${color3},${opacity})`;
    
}

let gridNum = 1;
let square = [];

function createGrid(){
    
    if (square.length > 0){
        mainContainer.innerHTML = "";
    }
    
    square = [];
    mainContainer.style.gap = "0%";
    gridNum = prompt("Please enter a number between 1 and 100");

    let k=0;
    for (let i = 0; i < gridNum; i++) {
        for (let j = 0; j < gridNum; j++) {
            square[k] = document.createElement("div");
            square[k].style.display = "flex"
            square[k].style.justifyContent = "space-around";
            square[k].style.alignItems = "center";
            // square[k].textContent = ".";
            square[k].style.color = "#ffffff";
            let d = (100/(gridNum))
            square[k].style.height = `${d}%`;
            square[k].style.width = `${d}%`;
            square[k].style.flexWrap = "nowrap";
            square[k].style.boxSizing = "border-box";
            square[k].style.border = ".1px solid black";
            

            // Setting eventlistener to randomize background color of the divs .
            square[k].addEventListener("mouseover", () => randomizeBgColor());
                   
            mainContainer.appendChild(square[k]);
            
            k++;
        }        
    }
}

selectionBtn.addEventListener("click", () => createGrid());
