// Main container
const divContainer = document.getElementById("container")

// The first child of the main container
const divHeader = document.createElement("div")
divHeader.setAttribute("id", "header")
divHeader.textContent = "Etch A Sketch"

divContainer.appendChild(divHeader)

// Second child of Main container which is another container for buttons
const divButtons = document.createElement("div")
divButtons.setAttribute("id", "tombol")

divContainer.appendChild(divButtons)

// Third child of Main container which is another container for the board of the sketch
const divBoard = document.createElement("div")
divBoard.setAttribute("id", "board")

divContainer.appendChild(divBoard)

// Content of the board
const divBoardContent = document.createElement("div")
divBoardContent.setAttribute("id", "board-content")

divBoard.appendChild(divBoardContent)

// Creation of grid within the board content container
function createGrid(size) {
    let board = document.getElementById("board-content");
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div")
        square.setAttribute("id", "kotak")
        square.addEventListener("mouseover", colorSquare)
        board.insertAdjacentElement("beforeend", square)
    }
}

createGrid(16)
let color = Math.random() * 360
function colorSquare() {
    this.style.backgroundColor = `hsl(${color}, 100%, 50%)`
}