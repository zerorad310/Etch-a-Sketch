const doc = document.querySelector("body");
doc.style.display = "flex";
doc.style.flexDirection = "column";
doc.style.justifyContent = "center";
doc.style.alignItems = "center";
doc.style.height = "100vh";
doc.style.width = "100vw";
doc.style.padding = "0px";

const mainButtonContainer = document.querySelector(".mainButtonContainer");
// mainButtonContainer.style.backgroundColor = "#e6e6fa";
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
// mainContainer.style.borderColor = "10px solid #000000";
mainContainer.style.border = "2px solid black";


mainContainer.style.flexWrap = "wrap";
mainButtonContainer.appendChild(selectionBtn);


function getRandomColorNumber(){
    let a = Math.floor(Math.random()*1000);
    if (a>255){

    }
}




let gridNum = 1;
let square = [];

function createGrid(){
    
    if (square.length > 0){
        // alert(square.length);
        mainContainer.innerHTML = "";
    }
    
    square = [];

    gridNum = parseInt(document.getElementById("myInput").value,10);
    // mainContainer.style.gap = `${1/(gridNum+1)}%`;
    mainContainer.style.gap = "0%";
    




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

            // Setting random background color of the divs .
            color1 = (Math.floor(Math.random()*(255-0+1)));
            color2 = (Math.floor(Math.random()*(255-0+1)));
            color3 = (Math.floor(Math.random()*(255-0+1)));
            square[k].style.backgroundColor = `rgb(${color1},${color2},${color3})`;
            square[k].style.color = "black";  
            
            mainContainer.appendChild(square[k]);
            
            k++;
        }        
    }
}




selectionBtn.addEventListener("click", () => createGrid());














































// const doc = document.querySelector("body");
// doc.style.display = "flex";
// doc.style.flexDirection = "column";
// doc.style.height = "100vh";

// const mainButtonContainer = document.querySelector(".mainButtonContainer");
// mainButtonContainer.style.backgroundColor = "#e6e6fa";
// mainButtonContainer.style.flexGrow = "0";
// mainButtonContainer.style.display = "flex";
// mainButtonContainer.style.justifyContent = "center";
// mainButtonContainer.style.height = "5vh";
// mainButtonContainer.style.flexShrink = "0";

// const selectionBtn = document.querySelector(".mainButton");

// const mainContainer = document.querySelector(".mainContainer");
// mainContainer.style.backgroundColor = "black";
// mainContainer.style.display = "flex";
// mainContainer.style.justifyContent = "space-around";
// mainContainer.style.alignItems = "center";
// // mainContainer.style.gap = `${1/26}vw`;
// mainContainer.style.flexWrap = "wrap";



// mainButtonContainer.appendChild(selectionBtn);

// let gridNum = 1;
// let square = [];

// function createGrid(){
    
//     if (square.length > 0){
//         let throwAwayVar;
//         alert(square.length);
//         for (let div = 1; div < (square.length + 1); div++){
//             alert(square[div]);
//             throwAwayVar = square;
//             throwAwayVar.removeChild(throwAwayVar.children[div]);
//             // square[div].remove()
//             alert(square.length)
//         }
//         // mainContainer.removeChild(child);
//         alert("Kicker")
        
//     }
    
//     square = [];

//     alert(square.length);

//     gridNum = parseInt(document.getElementById("myInput").value,10);
//     mainContainer.style.gap = `${1/(gridNum+1)}vw`;
    
//     let k=0;
//     for (let i = 0; i < gridNum; i++) {
//         for (let j = 0; j < gridNum; j++) {
//             square[k+1] = document.createElement("div");
//             square[k+1].style.display = "flex"
//             square[k+1].style.justifyContent = "space-around";
//             square[k+1].style.alignItems = "center";
//             square[k+1].textContent = k+1;
//             square[k+1].style.color = "#ffffff";
//             let d = (100/(gridNum+1))
//             square[k+1].style.height = `${d}vw`;
//             square[k+1].style.width = `${d}vw`;
//             square[k+1].style.borderColor = "Black";
//             square[k+1].style.flexWrap = "wrap";
//             if ((k+1)%3==0){
//                 square[k+1].style.backgroundColor = "#6a5acd";
//             }
//             else if ((k+1)%3==1){square[k+1].style.backgroundColor = "#008080";}
//             else {square[k+1].style.backgroundColor = "#4682b4";}


//             mainContainer.appendChild(square[k+1]);
            
//             k++;
//         }        
//     }
// }




// selectionBtn.addEventListener("click", () => createGrid());

