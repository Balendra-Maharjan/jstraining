var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// load images

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";


// some variables

var gap = 100;
var constant;

var bX = 10;
var bY = 150;

var gravity = 1;

var score = 0;


// on key down

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 45;
}

// pipe coordinates

var pipe = [];

pipe[0] = {
    x : canvas.width,
    y : 0
};

// draw images

function draw(){
    
    ctx.drawImage(bg,0,0);
    
    
    for(var i = 0; i < pipe.length; i++){
        
        constant = pipeNorth.height+gap;
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
        
        pipe[i].x--;
        
        if( pipe[i].x == 125 ){
            pipe.push({
                x : canvas.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            }); 
        }
        
        // detect collision
        
        if( bX + bird.width >= pipe[i].x &&
             bX <= pipe[i].x + pipeNorth.width &&
              (bY <= pipe[i].y + pipeNorth.height || bY+bird.height >= pipe[i].y+constant) || bY + bird.height >=  canvas.height - fg.height){
            location.reload(); // reload the page
        }
        
        if(pipe[i].x == 5){
            score++;
        }
        
        
    }
    
    ctx.drawImage(fg,0,canvas.height - fg.height);
    
    ctx.drawImage(bird,bX,bY);
    
    bY += gravity;
    
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,canvas.height-20);
    
    requestAnimationFrame(draw);
    
}

draw();
























