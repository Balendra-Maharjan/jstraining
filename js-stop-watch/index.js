var title = document.createElement('h1');
document.body.append(title);
title.textContent = 'JavaScript Stop Watch ';

var myInterval;
var clock = document.createElement('div');    
clock.textContent = '00:00:00:00';
document.body.append(clock);
clock.classList.add('clock-container');

var btn = document.createElement('BUTTON');
btn.classList.add('btn');
btn.textContent = 'Start';
var isStarted = false;
var reset_btn = document.createElement('BUTTON');
reset_btn.textContent = 'Reset';


btn.addEventListener('click', function click(e){
    console.log('clicked');
    if(isStarted){ 
        stopTimer();
        btn.textContent = 'Start';
    }
    else{
        myInterval = setTimer();
        btn.textContent = 'Stop';
        
    }
    isStarted = !isStarted;
    
});
document.body.append(btn);
document.body.append(reset_btn);

reset_btn.addEventListener('click', function click(e) {
    clearInterval(myInterval);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0]; 
    clock.textContent = '00:00:00:00';
    
});

function setTimer(){
    return setInterval(function(){  
        clock.replaceChildren(getTime ());
    },10);
}


function stopTimer(){
    clearInterval(myInterval);
}

var [milliseconds,seconds,minutes,hours] = [0,0,0,0]; 
function getTime () {
    
    milliseconds+=10;
    
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        
        if(seconds == 60){
            seconds = 0;
            minutes++;
            
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }        
    }
    return  (hours < 10 ? '0'+ hours:hours) + ':'+( minutes < 10 ? '0'+ minutes:minutes)+ ':'+ (seconds < 10 ? '0'+ seconds:seconds)+ ':'+ milliseconds ;
}

