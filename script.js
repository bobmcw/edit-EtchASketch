const container = document.querySelector("div.container")
const newGrid = document.querySelector("button.newGrid")
newGrid.addEventListener('click',() => generateGrid())

function generateGrid(side){
    container.innerHTML = ''
    if (side == undefined)
    {
        side = parseInt(prompt("how many sides (max 100)"))
    }
    side = side > 100 ? side = 100 : side = side
    for(let i=0;i<side;i++)
    {
        let row = document.createElement("div")
        row.setAttribute("class","row")
        for (let i=0;i<side;i++)
        {
            let square = document.createElement("div")
            square.setAttribute("class","square")
            row.appendChild(square)
        }
        container.appendChild(row)
    }
    squares = document.querySelectorAll("div.square")
    squares.forEach(element => {
        element.addEventListener("mouseover",() => element.style.background = "blue")
    });
}
generateGrid(16)