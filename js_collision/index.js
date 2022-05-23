var mainBoard = document.getElementById('main-Board');
var ball_1 = document.createElement('div');
ball_1.classList.add('ball');
mainBoard.appendChild(ball_1);

var ball_2 = document.createElement('div');
ball_2.classList.add('ball');
mainBoard.appendChild(ball_2);

var boardHeight = 500;
var boardWidth = 700;
var ballHeight = 50;
var ballWidth = 50;
var ballPosition = {
    X: 0,
    Y: 0
}
var ball_2Position = {
    X: 100,
    Y: 100
}

var direction =  {
    X:1,
    Y:1,
}

var speed = {
    X:2,
    Y:2
}
var speed_2 = 4;

mainBoard.style.height = boardHeight+'px';
mainBoard.style.width = boardWidth+'px';

ball_1.style.height = ballHeight+'px';
ball_1.style.width = ballWidth+'px';
ball_2.style.height = ballHeight+'px';
ball_2.style.width = ballWidth+'px';


function collisionWithBoard() {
    
    function ballMovementConditionX() {
        if(ballPosition.X + ballWidth >= boardWidth || ballPosition.X <= 0){
            direction.X = -1;
        }
        if (ballPosition.X <= 0){
            direction.X = 1;
        }
        
        if(ball_2Position.Y + ballWidth >= boardWidth ){
            direction.Y = -1;
        }
        if (ball_2Position.Y <= 0){
            direction.Y = 1;
        }
    }
    
    function ballMovementConditionY() {
        if(ballPosition.Y + ballHeight >= boardHeight  ){
            direction.Y = -1;
        }
        if (ballPosition.Y <= 0){
            direction.Y = 1;
        }
        
        if(ball_2Position.Y + ballHeight >= boardHeight ){
            direction.Y = -1;
        }
        if (ball_2Position.Y <= 0){
            direction.Y = 1;
        }
    }
    
    function ballMovement() {            
        
        ball_1 [
            ball_1.style.left = ballPosition.X+'px',
            ball_1.style.top = ballPosition.Y+'px'            
        ],
        
        ball_2 [
            ball_2.style.left = ball_2Position.X+'px',
            ball_2.style.top = ball_2Position.Y+'px'            
        ]
        
        
        ballPosition.X = ballPosition.X + speed.X* direction.X;
        ballPosition.Y = ballPosition.Y + speed.Y* direction.Y;
        
        ball_2Position.X = ballPosition.X + speed.X* direction.X;
        ball_2Position.Y = ballPosition.Y + speed.Y* direction.Y;
        
        
        ballMovementConditionX();
        ballMovementConditionY();
        
        
    }
    
    // if(valuesOne.left < valuesTwo.left + valuesTwo.width  && valuesOne.left + valuesOne.width  > valuesTwo.left &&
    //     valuesOne.top < valuesTwo.top + valuesTwo.height && valuesOne.top + valuesOne.height > valuesTwo.top) {
    
    //         // directionX = -1 * directionY;
    //     } 
    // }
    
    setInterval(ballMovement,10);        
}
collisionWithBoard();

// console.log(ball_2.getBoundingClientRect());
// console.log(ball_1.getBoundingClientRect());
