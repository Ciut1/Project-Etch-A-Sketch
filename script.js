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

// Reset button
const resetButton = document.createElement("button")
resetButton.setAttribute("id", "reset")
resetButton.textContent = "Reset"

divButtons.appendChild(resetButton)

// Black color
const colorBlackButton = document.createElement("button")
colorBlackButton.setAttribute("id", "black")
colorBlackButton.textContent = "Black Color"

divButtons.appendChild(colorBlackButton)

// Random color
const colorRandomButton = document.createElement("button")
colorRandomButton.setAttribute("id", "random")
colorRandomButton.textContent = "Random Color"

divButtons.appendChild(colorRandomButton)

// Third child of Main container which is another container for the board of the sketch
const divBoard = document.createElement("div")
divBoard.setAttribute("id", "board")

divContainer.appendChild(divBoard)

// Content of the board
const divBoardContent = document.createElement("div")
divBoardContent.setAttribute("id", "board-content")

divBoard.appendChild(divBoardContent)

// Creation of grid within the board container
let board = document.getElementById("board-content")
board.style.gridTemplateColumns = "repeat(16, 1fr)"
board.style.gridTemplateRows = "repeat(16, 1fr)"

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div")
    square.setAttribute("id", "kotak")
    square.style.backgroundColor = "white"
    square.style.border = "1px solid black"
    board.insertAdjacentElement("beforeend", square)
}

