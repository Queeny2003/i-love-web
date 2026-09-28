const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const GRID = 64;   
const CELL = canvas.width / GRID;

function drawPixel(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * CELL, y * CELL, CELL, CELL);
    
}

canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor ((event.clientX - rect.left) / CELL);
    const y = Math.floor ((event.clientY - rect.top) / CELL);
    drawPixel(x, y, "red");
});



