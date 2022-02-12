const divContainer = document.getElementById("container")

const divHeader = document.createElement("div")
divHeader.setAttribute("id", "header")
divHeader.textContent = "Etch A Sketch"

divContainer.appendChild(divHeader)

const divBoard = document.createElement("div")
divBoard.setAttribute("id", "board")

divContainer.appendChild(divBoard)

let board = document.getElementById("board")
board.style.gridTemplateColumns = "repeat(16, 1fr)"
board.style.gridTemplateRows = "repeat(16, 1fr)"

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div")
    square.style.backgroundColor = "blue"
    board.insertAdjacentElement("beforeend", square)
}