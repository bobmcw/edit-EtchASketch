const container = document.querySelector("div.container")

function generateGrid(side){
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
generateGrid(100)