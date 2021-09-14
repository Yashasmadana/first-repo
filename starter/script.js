'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const holdbtn = document.querySelector('.btn--hold');
const rollbtn = document.querySelector('.btn--roll');
const newgamebtn = document.querySelector('.btn--new');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

document.querySelector('#score--0').textContent = 0;
document.querySelector('#score--1').textContent = 0;
let currentscore, scores, activeplayer, playing;

const initialcondition = function () {
    currentscore = 0;
    scores = [0, 0];
    activeplayer = 0;

    document.querySelector('.dice').style.visibility = "hidden";
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;

    playing = true;

}
initialcondition();


const switchPlayer = function () {
    activeplayer = activeplayer === 0 ? 1 : 0;
    player1El.classList.toggle('player--active');
    player0El.classList.toggle('player--active');
    let currentscore = 0;
}

rollbtn.addEventListener('click', function () {
    if (playing) {
        let dice = Math.trunc(Math.random() * 6 + 1);
        document.querySelector('.dice').style.visibility = "visible";
        document.querySelector('.dice').src = `dice-${dice}.png`;
        if (dice === 1) {
            document.getElementById(`current--${activeplayer}`).textContent = 0;
            currentscore = 0;
            switchPlayer();
        }

        else if (dice !== 1) {

            currentscore = currentscore + dice;
            document.getElementById(`current--${activeplayer}`).textContent = currentscore;
        }
    }

});


holdbtn.addEventListener('click', function () {
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentscore = 0;


    if (scores[activeplayer] >= 50) {
        playing = false;
        document.querySelector('.dice').style.visibility = "hidden";
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');


    } else {
        // Switch to the next player
        switchPlayer();
    }
})

newgamebtn.addEventListener('click', initialcondition);









