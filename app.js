

(function() {
    'use strict'

    const newGame = document.getElementById('new-game');
    const popupWrapper = document.querySelector('.popup-wrapper');
    const playerName1 = document.querySelector('.player-name1');
    const playerName2 = document.querySelector('.player-name2');
    const p1NameForm = document.getElementById('p1-name-form');
    const p2NameForm = document.getElementById('p2-name-form');
    const startNewName = document.querySelector('.start-new-game');  
    

    //Modal - Novo Jogo
    newGame.addEventListener('click', () => {
        popupWrapper.classList.remove('not-show');
        document.getElementById('p1-name-form').focus()
   });

    popupWrapper.addEventListener('click', (e) => {
        const listOfClickedElements = e.target.classList[0];
        const classNames = ['popup-wrapper', 'start-new-game'];
        const shouldClosePopup = classNames.some(classTarget => {
            return classTarget === listOfClickedElements
        });
            if (shouldClosePopup) {
                popupWrapper.classList.add('not-show')
            }
    });

    startNewName.addEventListener('click', () => {
        scoreNames(p1NameForm.value, p2NameForm.value)
    });

    //Print Score names
    const scoreNames = ((player1, player2) => {       
        playerName1.textContent = player1;
        playerName2.textContent = player2;
        popupWrapper.classList.add('not-show');
        newGame.classList.add('not-show');        
    });

    //Score numbers
    //Gameboard
    //Game logic

    const Gameboard = {
        gameboard: [
    
        ]
    }
})()

