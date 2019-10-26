var content = document.getElementById('content');

//////STATE///////

//create rock, paper, scissors objects

//players turn: you, computer


/////FUNCTIONS////


var rockPaperScissors =
    {
        rock: 0,
        paper: 1,
        scissors: 2
    };

var playerOne = [
    rockPaperScissors.rock,
    rockPaperScissors.paper,
    rockPaperScissors.scissors
]

var playerTwo = [
    rockPaperScissors.rock,
    rockPaperScissors.paper,
    rockPaperScissors.scissors
]

function play(move) {
    if (playerOne[0] || playerTwo[0]) {
        alert("you won")
    }
    else if (playerOne[0] === playerTwo[0]) {
        alert("you tied")
    }
}

"Replace this with your own abstraction of Rock Paper Scissors"

content.innerHTML = renderGame(rockPaperScissors);




function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button class="btn btn-primary">Rock</button>
                <button class="btn btn-primary">Paper</button>
                <button class="btn btn-primary">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5">You played: <b>ROCK</b></div>
                <div class="m-5">The computer played: <b>SCISSORS</b></div>
            </div>
            <h1 class="text-center">You win!</h1>
        </div>
    `
}