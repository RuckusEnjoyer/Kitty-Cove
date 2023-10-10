let grid = [];
let yourTurn = true;
let gameOver = false;
let button = document.getElementById("reset-button");
let h1 = document.getElementById("winner");

const userPic = "https://icons.iconarchive.com/icons/icons8/windows-8/256/Mobile-Phone-icon.png"; //const userPic = "../pictures/smiley.png";
const aiPic = "https://cdn-icons-png.flaticon.com/256/4436/4436481.png"; //const aiPic = "../pictures/cat_smiley.png";

//Every possible set of 3 squares in a row
let wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];


function checkPlayerWon() {
    for (let j of wins) {
        //checks if player has 3 squares in a row
        let playerWon = true;
        for (let k of j) {
            if (grid[k] !== "player") {
                playerWon = false;
                break;
            }
        }
        if (playerWon) {
            gameOver = true;
            button.style.display = "inline-block";
            h1.innerText = "You win!"
            h1.style.display = "block";
            break;
        }
    }
}

function checkAIWon() {
    for (let j of wins) {
        let AIWon = true;
        //checks if AI has 3 squares in a row
        for (let k of j) {
            if (grid[k] !== "AI") {
                AIWon = false;
                break;
            }
        }
        if (AIWon) {
            gameOver = true;
            button.style.display = "inline-block";
            h1.innerText = "The AI won!"
            h1.style.display = "block";
            break;
        }
    }
}

function checkDraw() {
    //checks if all 9 squares are full
    let draw = true;
    for (let i = 1; i <= 9; i++) {
        if (!grid[i]) {
            draw = false;
            break;
        }
    }
    if (draw) {
        gameOver = true;
        button.style.display = "inline-block";
        h1.innerText = "It's a draw!"
        h1.style.display = "block";
    }
}

function AImove() {
    //generates a list of empty squares for the AI to go to
    let options = [];
    for (let i = 1; i <= 9; i++) {
        if (!grid[i]) {
            options.push(i);
        }
    }
    //chooses a random square
    let index = options[Math.floor(Math.random() * options.length)];
    grid[index] = "AI";
    let image = document.getElementById(`image-${index}`);
    image.src = aiPic;
    image.style.display = "block";
    checkAIWon();
    checkDraw();
    yourTurn = true;
}

button.addEventListener("click", function() {
    //resets the game
    for (let i = 1; i <= 9; i++) {
        let image = document.getElementById(`image-${i}`);
        image.src = "";
        image.style.display = "none";
    }
    grid = [];
    yourTurn = true;
    gameOver = false;
    button.style.display = "none";
    h1.innerText = "";
    h1h1.style.display = "block";
});

for (let i = 1; i <= 9; i++) {
    //checks if you click on the grid
    document.getElementById(`grid-${i}`).addEventListener("click", function() {
        //puts a piece down if it's allowed
        if (yourTurn && !gameOver && !grid[i]) {
            grid[i] = "player";
            let image = document.getElementById(`image-${i}`);
            image.src = userPic;
            image.style.display = "block";
            yourTurn = false;
            checkPlayerWon();
            checkDraw();
            if (!gameOver) {
                //makes AI go 1 second later
                setTimeout(AImove, 1000);
            }
        }
    });
}