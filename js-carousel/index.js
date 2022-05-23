var delay = 3000; 

var viewPort = document.querySelector(".image-holder");
var images = document.querySelectorAll("img");
var no_of_slides = images.length;
var marginLeft = (no_of_slides - 1) * 100 * -1;

var current = 0;

var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

var dotsContainer = document.querySelector(".dots-container");

function changeSlide(left = true) {
    if (left) {
        current += current > marginLeft ? -100 : current * -1;
    } else {
        current = current < 0 ? current + 100 : marginLeft;
    }
    
    viewPort.style.marginLeft = current + "%";
    
    dotsCondition(current);
}


var imageSlide = setInterval(changeSlide, delay);
var restart = function() {
    clearInterval(imageSlide);
    imageSlide = setInterval(changeSlide, delay);
};


next.addEventListener("click", function() {
    changeSlide();
    restart();
});

prev.addEventListener("click", function() {
    changeSlide(false);
    restart();
});

// Loading dots for first time
dotsCondition(0);

function dotsCondition(current) {
    // clears dot-container div
    dotsContainer.replaceChildren();

    for(let i = 0; i < no_of_slides; i++){
        var dotsElement = document.createElement("div");
        var dots = dotsContainer.appendChild(dotsElement);
        // image = 2nd, current  = -100, Math.abs(-100) = 100, Math.abs(current) % no_of_slides = 100 % 3 = 1
        if(i == (Math.abs(current) % no_of_slides)){
            dots.className = "dots active";
            
        }
        else{
            dots.className = "dots";
        }
        //i= 0, 1, 2
        dots.addEventListener("click", function(){onDotsClick(i)}, false);
    }
}

// onClick function for dot
function  onDotsClick(index) {
    // 1 * -100 = -100;
    current = index * -100;
    viewPort.style.marginLeft = current + "%";
    
    dotsCondition(current);
    restart();
}