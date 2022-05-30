function appInitialize() {
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
    var ball_1Position = {
        X: 0,
        Y: 0
    }
    var ball_2Position = {
        X: 100,
        Y: 100
    }
    
    var ball_1Direction =  {
        X:1,
        Y:1,
    }
    
    var ball_2Direction =  {
        X:1,
        Y:1,
    }
    
    var speed = {
        X:2,
        Y:2
    }
    
    
    mainBoard.style.height = boardHeight+'px';
    mainBoard.style.width = boardWidth+'px';
    
    ball_1.style.height = ballHeight+'px';
    ball_1.style.width = ballWidth+'px';
    ball_2.style.height = ballHeight+'px';
    ball_2.style.width = ballWidth+'px';
    
    
    function ballCollisionWithBoardConditionX() {
        if(ball_1Position.X + ballWidth >= boardWidth || ball_1Position.X <= 0){
            ball_1Direction.X = -1;
        }
        if (ball_1Position.X <= 0){
            ball_1Direction.X = 1;
        }
        
        if(ball_2Position.X + ballWidth >= boardWidth ){
            ball_2Direction.X = -1;
        }
        if (ball_2Position.X <= 0){
            ball_2Direction.X = 1;
        }
    }
    
    function ballCollisionWithBoardConditionY() {
        if(ball_1Position.Y + ballHeight >= boardHeight  ){
            ball_1Direction.Y = -1;
        }
        if (ball_1Position.Y <= 0){
            ball_1Direction.Y = 1;
        }
        
        if(ball_2Position.Y + ballHeight >= boardHeight ){
            ball_2Direction.Y = -1;
        }
        if (ball_2Position.Y <= 0){
            ball_2Direction.Y = 1;
        }
    }
    
    function ballCollisionWithMovement() {  
        
        ball_1.style.left = ball_1Position.X+'px';
        ball_1.style.top = ball_1Position.Y+'px';        
        
        // ball_2.style.left = ball_2Position.X+'px';
        // ball_2.style.top = ball_2Position.Y+'px';        
        
        ball_1Position.X = ball_1Position.X + speed.X* ball_1Direction.X;
        ball_1Position.Y = ball_1Position.Y + speed.Y* ball_1Direction.Y;
        
        ball_2Position.X = ball_2Position.X + speed.X* ball_2Direction.X;
        ball_2Position.Y = ball_2Position.Y + speed.Y* ball_2Direction.Y;
        
        // Collision
        ballCollisionWithBoardConditionX();
        ballCollisionWithBoardConditionY();
        
        // var value1 = ball_1.getBoundingClientRect();
        // var value2 = ball_2.getBoundingClientRect();       
        // console.log(value1);
        // console.log(value2);
        
        if(ball_1Position.X < ball_2Position.X + ball_2.ballWidth &&
            ball_1Position.X + ball_1.ballWidth > ball_2Position.X &&
            ball_1Position.Y < ball_2Position.Y + ball_2.ballHeight &&
            ball_1.ballHeight + ball_1Position.Y > ball_2Position.Y) {
                
                console.log('collision');
            }
            else{
                console.log('no collision');
            }
        }        
        
        setInterval(ballCollisionWithMovement,10);
    }
    
    appInitialize();
    
    
    