/* =========================
   CODEVERSE ENTERTAINMENT
========================= */

// GAME VARIABLES

let totalPoints = Number(localStorage.getItem("funPoints")) || 0;
let playedGames = Number(localStorage.getItem("funPlayed")) || 0;

let gameFinished = false;
let selectedPuzzle = [];


// HTML ELEMENTS

const gameArea = document.getElementById("gameArea");
const gameTitle = document.getElementById("gameTitle");
const gameContent = document.getElementById("gameContent");
const gameFeedback = document.getElementById("gameFeedback");


// UPDATE STATISTICS

function updateStats() {

    document.getElementById("totalPoints").textContent = totalPoints;

    document.getElementById("playedGames").textContent = playedGames;

    let level = "Beginner";

    if (totalPoints >= 100) {
        level = "Advanced";
    } else if (totalPoints >= 40) {
        level = "Intermediate";
    }

    document.getElementById("level").textContent = level;

    localStorage.setItem("funPoints", totalPoints);
    localStorage.setItem("funPlayed", playedGames);
}

updateStats();


// START GAME

function startGame(type) {

    gameFinished = false;

    gameFeedback.textContent = "";
    gameFeedback.className = "feedback";

    gameArea.hidden = false;

    if (type === "guess") {
        guessGame();
    }

    else if (type === "bug") {
        bugGame();
    }

    else if (type === "puzzle") {
        puzzleGame();
    }

    else if (type === "memory") {
        memoryGame();
    }

    gameArea.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// CLOSE GAME

function closeGame() {
    gameArea.hidden = true;
}


// FINISH GAME

function finishGame(points, message) {

    if (gameFinished) return;

    gameFinished = true;

    totalPoints += points;
    playedGames++;

    updateStats();

    gameFeedback.textContent =
        message + " You earned " + points + " points!";

    gameFeedback.className = "feedback correct";
}


// WRONG ANSWER

function wrongAnswer(message) {

    if (gameFinished) return;

    gameFinished = true;
    playedGames++;

    updateStats();

    gameFeedback.textContent = message;

    gameFeedback.className = "feedback wrong";
}


/* =========================
   GAME 1
   GUESS THE OUTPUT
========================= */

function guessGame() {

    gameTitle.textContent = "Guess the Output";

    gameContent.innerHTML = `

        <h3>What will this JavaScript code print?</h3>

        <div class="question-box">

            <pre>
let x = 5;
let y = 3;

console.log(x + y);
            </pre>

        </div>

        <div class="answers">

            <button class="answer-btn" onclick="checkGuess(7)">
                A) 7
            </button>

            <button class="answer-btn" onclick="checkGuess(8)">
                B) 8
            </button>

            <button class="answer-btn" onclick="checkGuess(15)">
                C) 15
            </button>

            <button class="answer-btn" onclick="checkGuess(2)">
                D) 2
            </button>

        </div>

    `;
}


function checkGuess(answer) {

    if (gameFinished) return;

    if (answer === 8) {

        finishGame(
            10,
            "Excellent! Your answer is correct."
        );

    } else {

        wrongAnswer(
            "Incorrect! The correct answer is 8."
        );

    }

}


/* =========================
   GAME 2
   FIND THE BUG
========================= */

function bugGame() {

    gameTitle.textContent = "Find the Bug";

    gameContent.innerHTML = `

        <h3>Which line contains the syntax error?</h3>

        <div class="question-box">

            <pre>
1. let age = 20;
2. if (age > 18) {
3.     console.log("Adult";
4. }
            </pre>

        </div>

        <p>Choose the incorrect line:</p>

        <div class="answers">

            <button class="answer-btn" onclick="checkBug(1)">
                Line 1
            </button>

            <button class="answer-btn" onclick="checkBug(2)">
                Line 2
            </button>

            <button class="answer-btn" onclick="checkBug(3)">
                Line 3
            </button>

            <button class="answer-btn" onclick="checkBug(4)">
                Line 4
            </button>

        </div>

    `;
}


function checkBug(answer) {

    if (gameFinished) return;

    if (answer === 3) {

        finishGame(
            15,
            "Great! You found the missing closing parenthesis."
        );

    } else {

        wrongAnswer(
            "Not correct! Check line 3 carefully."
        );

    }

}


/* =========================
   GAME 3
   CODE PUZZLE
========================= */

function puzzleGame() {

    gameTitle.textContent = "Code Puzzle";

    selectedPuzzle = [];

    const lines = [

        {
            id: "hello",
            text: '    console.log("Hello!");'
        },

        {
            id: "close",
            text: '}'
        },

        {
            id: "function",
            text: 'function sayHello() {'
        },

        {
            id: "comment",
            text: '    // Print a message'
        }

    ];

    gameContent.innerHTML = `

        <h3>Arrange these code lines in the correct order.</h3>

        <p>Click each line in the correct sequence:</p>

        <div class="puzzle-list" id="puzzleList"></div>

        <p id="selectedLines">Selected: 0 / 4</p>

        <button class="action-btn" onclick="checkPuzzle()">
            Check Answer
        </button>

        <button class="action-btn" onclick="puzzleGame()">
            Restart
        </button>

    `;

    const puzzleList = document.getElementById("puzzleList");

    lines.forEach(function(line) {

        const button = document.createElement("button");

        button.className = "puzzle-item";
        button.textContent = line.text;

        button.onclick = function() {

            if (gameFinished) return;

            if (selectedPuzzle.includes(line.id)) return;

            selectedPuzzle.push(line.id);

            button.disabled = true;

            document.getElementById("selectedLines").textContent =
                "Selected: " + selectedPuzzle.length + " / 4";

        };

        puzzleList.appendChild(button);

    });

}


function checkPuzzle() {

    if (gameFinished) return;

    const correctOrder = [
        "function",
        "comment",
        "hello",
        "close"
    ];

    if (selectedPuzzle.length !== 4) {

        gameFeedback.textContent =
            "Please select all four code lines first.";

        gameFeedback.className = "feedback wrong";

        return;
    }

    const isCorrect = correctOrder.every(function(item, index) {

        return selectedPuzzle[index] === item;

    });

    if (isCorrect) {

        finishGame(
            20,
            "Perfect! You arranged the code correctly."
        );

    } else {

        gameFeedback.textContent =
            "Incorrect order! Press Restart and try again.";

        gameFeedback.className = "feedback wrong";

    }

}


/* =========================
   GAME 4
   MEMORY MATCH
========================= */

function memoryGame() {

    gameTitle.textContent = "Memory Match";

    const symbols = [
        "HTML", "HTML",
        "CSS", "CSS",
        "JS", "JS",
        "React", "React"
    ];

    const shuffled = [...symbols].sort(function() {
        return Math.random() - 0.5;
    });

    let firstCard = null;
    let secondCard = null;

    let locked = false;
    let matches = 0;

    gameContent.innerHTML = `

        <h3>Find all matching programming cards!</h3>

        <p>Click two cards to find their matching pair.</p>

        <div class="memory-grid" id="memoryGrid"></div>

    `;

    const grid = document.getElementById("memoryGrid");

    shuffled.forEach(function(symbol) {

        const card = document.createElement("button");

        card.className = "memory-card";

        card.textContent = "?";

        card.dataset.symbol = symbol;

        card.onclick = function() {

            if (locked || gameFinished) return;

            if (
                card.classList.contains("open") ||
                card.classList.contains("matched")
            ) {
                return;
            }

            card.textContent = symbol;

            card.classList.add("open");

            // FIRST CARD

            if (firstCard === null) {

                firstCard = card;

                return;

            }

            // SECOND CARD

            secondCard = card;

            locked = true;

            // CHECK MATCH

            if (
                firstCard.dataset.symbol ===
                secondCard.dataset.symbol
            ) {

                firstCard.classList.remove("open");
                secondCard.classList.remove("open");

                firstCard.classList.add("matched");
                secondCard.classList.add("matched");

                matches++;

                firstCard = null;
                secondCard = null;

                locked = false;

                // ALL PAIRS FOUND

                if (matches === 4) {

                    finishGame(
                        15,
                        "Amazing! You found all matching cards."
                    );

                }

            } else {

                setTimeout(function() {

                    firstCard.textContent = "?";
                    secondCard.textContent = "?";

                    firstCard.classList.remove("open");
                    secondCard.classList.remove("open");

                    firstCard = null;
                    secondCard = null;

                    locked = false;

                }, 800);

            }

        };

        grid.appendChild(card);

    });

}