var content = document.getElementById('content');

/////////
//STATE//
/////////
var ticTacToe = [
    ["-", "-", "-"], //row 0
    ["-", "-", "-"], //row 1
    ["-", "-", "-"], //row 2
]



//first player O
var isPlayerXTurn = false;

content.innerHTML = renderGame(ticTacToe);
var playerHeader = document.getElementById("player");

/////////////
//functions//
/////////////

//event param named anything//
function buttonClicked(event) {
    // console.log(("button clicked!"));
    console.log(event);

    let clickedButton = event.target;
    let clickedButtonId = clickedButton.id; //1,2

    //comma is character index 1
    let rowIndex = clickedButtonId[0];
    let columnIndex = clickedButtonId[2];

    //update state

    if (getCellContent(rowIndex, columnIndex) == "-") {
        if (isPlayerXTurn) {
            ticTacToe[rowIndex][columnIndex] = "X";
            playerHeader.innerHTML = "O";

            isPlayerXTurn = false;
        } else { // it is O's turn
            ticTacToe[rowIndex][columnIndex] = "O";
            isPlayerXTurn = true;
            playerHeader.innerHTML = "X";
        }

        renderCell(rowIndex, columnIndex);

        // var winConditions = [
        //     getCellContent(0, 0) + getCellContent(0, 1) + getCellContent(0, 2),
        // ];

        // for (var i=0; i<winConditions.length; i++) {
        //     if (winConditions[i]==="XXX" || winConditions[i]==="OOO") {
        //         // console.log("winner");
        //         alert("Winner")
        //         }
        //     }

        console.log(clickedButtonId);
    }
}


/////////////////////////////
////////render functions/////
////////////////////////////
function renderCell(row, column) {
    let button = getButton(row, column);
    button.innerHTML = ticTacToe[row][column];
    console.log(button);
}

function getCellContent(row, column) {
    let button = getButton(row, column);
    console.log(button.innerHTML);
    return button.innerHTML;
}

function getButton(row, column) {
    let id = `${row},${column}`;
    let button = document.getElementById(id);
    return button;
}

function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>It's player <span id="player">O's</span> turn!</h4>
            <div class="w-50 text-center">
                <button id="0,0" onClick="buttonClicked(event)">${game[0][0]}</button>
                <button id="0,1" onClick="buttonClicked(event)">${game[0][1]}</button>
                <button id="0,2" onClick="buttonClicked(event)">${game[0][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button id="1,0" onClick="buttonClicked(event)">${game[1][0]}</button>
                <button id="1,1" onClick="buttonClicked(event)">${game[1][1]}</button>
                <button id="1,2" onClick="buttonClicked(event)">${game[1][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button id="2,0" onClick="buttonClicked(event)">${game[2][0]}</button>
                <button id="2,1" onClick="buttonClicked(event)">${game[2][1]}</button>
                <button id="2,2" onClick="buttonClicked(event)">${game[2][2]}</button>
            </div>
        </div>
    `
}