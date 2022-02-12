const div1 = document.getElementById("container1")

const div2 = document.createElement("div")
div2.setAttribute("id", "container2")

div1.appendChild(div2)

const h11 = document.createElement("h1")
h11.setAttribute("id", "header")
h11.textContent = "Etch A Sketch"
h11.style.color = "white"


div2.appendChild(h11)