let btnList = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset-btn');
let newGame = document.querySelector('.new-btn');
let msg = document.querySelector('.msg');
let msgBox = document.querySelector('.display-msg');
let game = document.querySelector('.game');

let playerX = true;

let count = 0;

let winCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

for (let btn of btnList) {
    btn.addEventListener('click', () => {
        if (playerX) {
            btn.innerText = 'X';
            playerX = false;
        }
        else {
            btn.innerText = 'O';
            playerX = true;
        }
        btn.disabled = true;
        count++;
        checkWinner();
    })
}

const disableBtn = () => {
    for (let btn of btnList) {
        btn.disabled = true;
    }
}

const showWinner = (pos1) => {
    if (count === 9) {
        msg.innerText = `${pos1}`;
    }
    else {
        msg.innerText = `Winner is ${pos1}`;
    }
    msgBox.classList.remove('hide');
    game.classList.add('hide');
    disableBtn();
}

const checkWinner = () => {
    for (let win of winCondition) {
        let pos1 = btnList[win[0]].innerText;
        let pos2 = btnList[win[1]].innerText;
        let pos3 = btnList[win[2]].innerText;
        if (pos1 != '' && pos2 != '', pos3 != '') {
            if (pos1 == pos2 && pos2 == pos3) {
                showWinner(pos1);
            }
        }
        if (count === 9) {
            showWinner('Draw');
        }
    }
}

const resetGame = () => {
    for (let btn of btnList) {
        btn.disabled = false;
        btn.innerText = '';
        playerX = true;
        count = 0;
    }
    msgBox.classList.add('hide');
    game.classList.remove('hide');
}

resetBtn.addEventListener('click', resetGame);
newGame.addEventListener('click', resetGame);