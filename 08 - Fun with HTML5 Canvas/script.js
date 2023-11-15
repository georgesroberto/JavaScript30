const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
//Blending modes
ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return;
    ctx.lineWidth = hue
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    //Go to 
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;

    if(hue >= 360){
        hue = 0;
    }

    if(ctx.addEventListener >= 150 || ctx.lineWidth <= 1){
        direction = !direction;
    }

    if(dircction){
        ctx.lineWidth--; 
    }
    
    if(!dircction){
        ctx.lineWidth++; 
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    //Sets a new start from point.
    [lastX, lastY] = [e.offsetX, e.offsetY];    
});


canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);