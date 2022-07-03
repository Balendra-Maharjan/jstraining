let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const canvasWidth = 800;
const canvasHeight = 500;

let lastTime = 0;

ctx.clearRect(0,0,canvasWidth,canvasHeight);




// paddle 
class Paddle {
    constructor(game) {
        this.width = 150;
        this.height = 20;
        this.game = game;
        // this.game.canvasWidth = game.canvasWidth;
        
        this.speed = 0;
        this.maxSpeed = 5;
        
        this.position = {
            x: game.canvasWidth / 2 - this.width / 2,
            y: game.canvasHeight - this.height - 5
        }
    }
    
    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    
    update(dt) {
        
        this.position.x += this.speed;
        
        if(this.position.x < 0 ) this.position.x = 0;
        if(this.position.x + this.width > this.canvasWidth ) this.position.x = this.canvasWidth - this.width;
    }
    
    moveLeft() {
        this.speed = -1 * this.maxSpeed;
    }
    
    moveRight() {
        this.speed = 1 * this.maxSpeed;
    }
    
    stop() {
        this.speed = 0;
    }
}


// paddle.draw(ctx);


// ball
class Ball {
    constructor(game) {
        this.canvasHeight = game.canvasHeight;
        this.canvasWidth = game.canvasWidth;
        this.radius = 20;
        this.position = {
            x: canvasWidth / 2 - this.radius * 2,
            y: canvasHeight / 2 - this.radius * 2
        }
        
        this.speed = {
            x: 4,
            y: 4
        }
    }
    
    draw (ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius , 0 , Math.PI * 2, false);
        ctx.fillStyle ='black';
        ctx.fill();
    }
    
    update (dt) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        
        if(this.position.x + this.radius > this.canvasWidth || this.position.x < 0 ) {
            this.speed.x = -1 * this.speed.x;
        }
        
        if(this.position.y + this.radius > this.canvasHeight || this.position.y < 0 ) {
            this.speed.y = -1 * this.speed.y;
        }
    }
    
}

// ball.draw(ctx);



// paddle movement

class paddleMovement {
    constructor (paddle) {
        document.addEventListener("keydown", e => {
            // console.log(e.keyCode);
            switch (e.keyCode) {
                
                case 37:
                paddle.moveLeft();
                // console.log('left');
                break;
                
                case 39:
                paddle.moveRight();
                // console.log('right');
                break;
            }
        })
        
        document.addEventListener("keyup", e => {
            // console.log(e.keyCode);
            switch (e.keyCode) {
                
                case 37:
                if (paddle.speed <  0 ) paddle.stop();
                break;
                
                case 39:
                if (paddle.speed > 0 ) paddle.stop();                
                break;
            }
        })
    }
}

class Brick  {
    constructor() {
        this.width = 70;
        this.height = 40;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.bricksRowCount = 8;
        this.bricksColumnCount = 5;
    }
}

// class bricks{
//     bricks = [];
    
//     for (let i = 0; i < brickRowCount; i++) {
//         bricks[i] = [];
//         for (let j = 0; j < brickColumnCount; j++) {
//             var x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
//             var y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
//             bricks[i][j] = { x, y, ...brickInfo };
//         }
//     }
// }



// game initialize 

class Game {   
    
    constructor(canvasWidth,canvasHeight) {
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        
    }
    
    start() {
        // debugger
        this.paddle = new Paddle(this);
        
        this.ball = new Ball(this);
        new paddleMovement(this.paddle);
    }
    
    update(dt) {
        this.paddle.update(dt);
        this.ball.update(dt);
    }
    
    draw (ctx) {
        this.paddle.draw(ctx);
        this.ball.draw(ctx);
    }
}

let game = new Game(canvasHeight,canvasWidth);
game.start();


// gameLoop

function gameLoop(timestamp) {
    let dt = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0,0,canvasHeight,canvasWidth);
    
    
    requestAnimationFrame(gameLoop);
    
    game.update(dt);
    game.draw(ctx);
    
}

requestAnimationFrame(gameLoop);