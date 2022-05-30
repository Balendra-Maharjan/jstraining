var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvasHeight = 500;
var canvasWidth = 500;

canvas.height = canvasHeight;
canvas.width = canvasWidth;



ctx.fillStyle = 'black';
ctx.fillRect(0, 150, 50, 150);
ctx.transform(-1,0,1,1,0,0);

ctx.resetTransform();
ctx.fillStyle = 'black';
ctx.fillRect(100, 150, 50, 150);
ctx.transform(-1,0,1,1,0,0);

ctx.resetTransform();
ctx.transform(-1,0,1,1,0,0);
ctx.fillStyle = 'brown';
ctx.fillRect(0, 150, 150, 150);

ctx.resetTransform();
ctx.fillStyle = 'black';
ctx.fillRect(150, 300, 50, 150);

ctx.resetTransform();
ctx.fillStyle = 'black';
ctx.fillRect(250, 300, 50, 150);
