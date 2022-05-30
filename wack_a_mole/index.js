
var holes = [...document.querySelectorAll('.hole')];
var scoreEl = document.querySelector('.score span');
var score = 0;



function run(){
    var i = Math.floor(Math.random() * holes.length)
    var hole = holes[i]
    var timer = null

    var img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'assets/mole.png'

    img.addEventListener('click', () => {
        score += 10;
        scoreEl.textContent = score;
        img.src = 'assets/mole-whacked.png'
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 500)
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1500)
}
run()
