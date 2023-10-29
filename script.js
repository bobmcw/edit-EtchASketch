const container = document.querySelector("div.container")


for(let i=0;i<16;i++)
{
    let row = document.createElement("div")
    row.setAttribute("class","row")
    for (let i=0;i<16;i++)
    {
        let square = document.createElement("div")
        square.setAttribute("class","square")
        row.appendChild(square)
    }
    container.appendChild(row)
}
squares = document.querySelectorAll("div.square")
squares.forEach(element => {
    element.addEventListener("click",() => element.style.background = "blue")
});