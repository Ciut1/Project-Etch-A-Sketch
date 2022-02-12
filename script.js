const divContainer = document.getElementById("container")
divContainer.style.gridTemplateRows = "repeat(16, 1fr)"
divContainer.style.gridTemplateColumns = "repeat(16, 1fr)"

for (let i = 0; i<256; i++) {
    let square = document.createElement("div")
    square.style.backgroundColor = "blue"
    divContainer.insertAdjacentElement("beforeend", square)
}

/*const divHeader = document.createElement("div")
divHeader.setAttribute("id", "header")
divHeader.textContent = "Etch A Sketch"

divContainer.appendChild(divHeader)

const divBoard = document.createElement("div")
divBoard.setAttribute("id", "board")
divBoard.textContent = "hi"
divBoard.style.backgroundColor = "red"

divContainer.appendChild(divBoard)*/
