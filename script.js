let bokser = document.querySelectorAll(".boks");

let spiller = "X";
let isGameOver = false;

bokser.forEach(e => {
    e.innerHTML = ""
    e.addEventListener("click", () => {
        if (!isGameOver && e.innerHTML === "") {
            e.innerHTML = spiller;
            cheakWin();
            cheakDraw();
            changeSpiller();
        }
    })
})
function changeSpiller() {
    if (spiller === "X") {
        spiller = "O";
        document.querySelector(".bg").style.left = "85px";

    } else {
        spiller = "X";
        document.querySelector(".bg").style.left = "0";
    }

}
function cheakWin() {
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for (let i = 0; i < winConditions.length; i++) {
        let v0 = bokser[winConditions[i][0]].innerHTML;
        let v1 = bokser[winConditions[i][1]].innerHTML;
        let v2 = bokser[winConditions[i][2]].innerHTML;

        if (v0 != "" && v0 === v1 && v0 === v2) {
            isGameOver = true;
            document.querySelector("#resultat").innerHTML = spiller + " win ";
            document.querySelector("#ny-runde").style.display = "inline"


            for(j = 0; j<3; j++){
                bokser[winConditions[i][j]].style.backgroundColor = "red"
                bokser[winConditions[i][j]].style.color = "black"
            }
        }
    }
}

function cheakDraw() {
    if(!isGameOver){
        let isDraw = true;
        bokser.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            document.querySelector("#resultat").innerHTML = " Uavgjort! ";
            document.querySelector("#ny-runde").style.display = "inline"

        }
    }

}

document.querySelector("#ny-runde").addEventListener("click", ()=>{
    isGameOver = false;
    spiller = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#resultat").innerHTML="";
    document.querySelector("#ny-runde").style.display = "none";


    bokser.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff"
    })
})