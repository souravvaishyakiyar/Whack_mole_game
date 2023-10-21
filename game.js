let scoreH2=document.getElementById('score');
let timeLeftH2=document.getElementById('timeLeft');
let startNewGameButton=document.getElementById('startNewGame');
let pauseGameButton=document.getElementById('pauseGame');


let squares=document.querySelectorAll('.square');

function randomMole(){
    squares.forEach(square =>{
        square.classList.remove('mole');
    })
    let hitPosition=Math.floor(Math.random()*squares.length());
    sqaures[hitPosition].classList.add('mole');
}

randomMole();