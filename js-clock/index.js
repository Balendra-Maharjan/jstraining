var title = document.createElement('h1');
document.body.append(title);
title.textContent = 'JavaScript Clock';
var clock = document.createElement('div');    
document.body.append(clock);
clock.classList.add('clock-container')



var date = new Date();
// console.log(date);

var hour = date.getHours();
var minute = date.getMinutes();
var seconds = date.getSeconds();

// console.log(seconds);
setInterval(function(){  
    clock.replaceChildren(getTime ());
    return getTime ();
},1000);

function getTime () {
    return new Date().getHours() +':' + new Date().getMinutes()+ ':' + new Date().getSeconds();
}