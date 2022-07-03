var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var canvasHeight = window.innerHeight;
var canvasWidth = window.innerWidth;


canvas.height = canvasHeight;
canvas.width = canvasWidth;

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle ='black';
        c.fill();
    }
    
    this.collision = function() {
        if( this.x + this.radius > window.innerWidth || this.x - this.radius <= 0 ) {
            this.dx = -this.dx;            
        }
        
        if( this.y + this.radius > window.innerHeight || this.y - this.radius <= 0 ) {
            this.dy = -this.dy;
            
        }
        
        this.y+= this.dy;
        this.x+= this.dx;        
        this.draw();
    }
}
var circleArray = [];
for (var i = 0; i < 2; i++) {
    var x = Math.random()  * innerWidth;
    var dx = 5;
    var y = Math.random()  * innerHeight;
    var dy = 5;
    var radius = 30;    
    circleArray.push(new Circle(x,y,dx,dy,radius));     
      
}

console.log(circleArray);

function animate() {
    requestAnimationFrame(animate);   
    c.clearRect(0,0,canvasWidth,canvasHeight)
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].collision();
    }
    
}

animate();