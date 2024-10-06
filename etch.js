const doc = document.querySelector("body");
doc.style.display = "flex";
doc.style.flexDirection = "column";
doc.style.height = "100vh";

const mainButtonContainer = document.querySelector(".mainButtonContainer");
mainButtonContainer.style.backgroundColor = "#e6e6fa";
mainButtonContainer.style.flexGrow = "0";
mainButtonContainer.style.display = "flex";
mainButtonContainer.style.justifyContent = "center";
mainButtonContainer.style.height = "5vh";
mainButtonContainer.style.flexShrink = "0";

const selectionBtn = document.querySelector(".mainButton");

const mainContainer = document.querySelector(".mainContainer");
mainContainer.style.backgroundColor = "black";
mainContainer.style.display = "flex";
mainContainer.style.justifyContent = "space-around";
mainContainer.style.alignItems = "center";
// mainContainer.style.gap = `${1/26}vw`;
mainContainer.style.flexWrap = "wrap";



mainButtonContainer.appendChild(selectionBtn);

let gridNum = 1;
square = [];

function createGrid(){
    
    if (square.length > 0){
        mainContainer.removeChild(child);
        square = [];
    }
    
    gridNum = parseInt(document.getElementById("myInput").value,10);
    mainContainer.style.gap = `${1/(gridNum+1)}vw`;
    
    let k=0;
    for (let i = 0; i < gridNum; i++) {
        for (let j = 0; j < gridNum; j++) {
            square[k+1] = document.createElement("div");
            square[k+1].style.display = "flex"
            square[k+1].style.justifyContent = "space-around";
            square[k+1].style.alignItems = "center";
            square[k+1].textContent = k+1;
            square[k+1].style.color = "#ffffff";
            let d = (100/(gridNum+1))
            square[k+1].style.height = `${d}vw`;
            square[k+1].style.width = `${d}vw`;
            square[k+1].style.borderColor = "Black";
            square[k+1].style.flexWrap = "wrap";
            if ((k+1)%3==0){
                square[k+1].style.backgroundColor = "#6a5acd";
            }
            else if ((k+1)%3==1){square[k+1].style.backgroundColor = "#008080";}
            else {square[k+1].style.backgroundColor = "#4682b4";}


            mainContainer.appendChild(square[k+1]);
            
            k++;
        }        
    }
}




selectionBtn.addEventListener("click", () => createGrid());




