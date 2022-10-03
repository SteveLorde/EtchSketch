
let draw = false

function populateBoard() {
let board = document.querySelector(".Screen");
board.style.gridTemplateColumns = "repeat(24 , 1fr)";
board.style.gridTemplateRows = "repeat(24 , 1fr)";

for (let i = 0; i < 24*24; i++) {
    let square = document.createElement('div')
    square.style.backgroundColor = 'white'
    square.style.borderWidth = "1px"
    square.style.borderStyle = "solid"
    board.insertAdjacentElement("beforeend", square)
    square.addEventListener('dragenter', function(){
        if (!draw) return
        square.style.backgroundColor = 'black'
    })
}
}

window.addEventListener("mousedown", function(){
    draw = true
})
window.addEventListener("drag", function(){
    draw = true
})
populateBoard()