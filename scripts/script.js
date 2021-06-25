(() => {
    const takeCardElement = document.getElementById('take-card');
    const userTempScoreElement = document.getElementById('user-temp-score');
    const computerTempScoreElement = document.getElementById('computer-temp-score');
    const enoughCardElement = document.getElementById('enough-cards');
    const score = document.getElementById('score');
    const gameResultElement = document.getElementById('game-result');
    const playAgainElement = document.getElementById('play-again');

    let tempUserScore = 0;
    let tempComputerScore = 0;
    let userScore = 0;
    let computerScore = 0;

    const cards = () => {
        let cards = [];

        for (let i = 6; i <= 14; i++){
            let cardName = '';
            let value = 0;
            if (i<=10){
                cardName = i;
                value = i;
            }
            if (i == 11){
                cardName = 'J';
                value = 10;
            }
            if (i == 12){
                cardName = 'Q';
                value = 10;
            }
            if (i == 13){
                cardName = 'K';
                value = 10;
            }
            if (i == 14){
                cardName = 'A';
                value = 11;
            }
            cards.push({value: value, suit: 'spade', cardName: cardName, imgSrc: "img/spade.png"});
            cards.push({value: value, suit: 'diamond', cardName: cardName, imgSrc: "img/diamond.png"});
            cards.push({value: value, suit: 'clubs', cardName: cardName, imgSrc: "img/clubs.png"});
            cards.push({value: value, suit: 'heart', cardName: cardName, imgSrc: "img/heart.png"});
        }
         return cards;
    };

    const randomNumber = (num) =>{
        return Math.floor(Math.random()*num);
    }

    const displayCard = (cardTitle, cardImg, targetDivId) =>{
        let cardItem = document.createElement('div');
        cardItem.setAttribute('class', 'card-item');

        let h1Element = document.createElement('h1');
        h1Element.setAttribute('class', 'card-title')
        h1Element.innerHTML = cardTitle;

        let cardImgElement = document.createElement('img');
        cardImgElement.setAttribute('class', 'card-img');
        cardImgElement.setAttribute('src', cardImg);

        cardItem.appendChild(h1Element);
        cardItem.appendChild(cardImgElement);

        document.getElementById(targetDivId).appendChild(cardItem);
    }

    const displayScore = ()=>{
        score.innerHTML = `SmartUser ${userScore} : ${computerScore} Computer`;
    }

    const hideUserButtons = () =>{
        takeCardElement.classList.add('display-none');
        enoughCardElement.classList.add('display-none');
    }

    const displayUserButtons = () =>{
        takeCardElement.classList.remove('display-none');
        enoughCardElement.classList.remove('display-none');
    }

    const displayPlayAgainButton = () =>{
        playAgainElement.classList.remove('display-none');
    }

    const hidePlayAgainButton = ()=>{
        playAgainElement.classList.add('display-none');
    }

    let takeCardUser = ()=>{
        let randomCardNumber = randomNumber(cardDeck.length);
        let userCard = cardDeck[randomCardNumber];
        tempUserScore += userCard.value;
        displayCard(userCard.cardName, userCard.imgSrc, 'user-cards');
        userTempScoreElement.innerHTML = `You have: ${tempUserScore} points`;
        if (tempUserScore > 21){
            gameResultElement.innerHTML = `You took more then you need. Pity, but you lost...`;
            computerScore += 1;
            displayScore();
            hideUserButtons();
            displayPlayAgainButton();
        }
        cardDeck.splice(randomCardNumber, 1);
    }

    let computerPlay = () => {
        let randomCardNumber = randomNumber(cardDeck.length);
        let computerCard = cardDeck[randomCardNumber];

        tempComputerScore += computerCard.value;

        displayCard(computerCard.cardName, computerCard.imgSrc, 'computer-cards');
        computerTempScoreElement.innerHTML = `Computer has: ${tempComputerScore} points`;
        cardDeck.splice(randomCardNumber, 1);

        if (tempComputerScore > 21){
            gameResultElement.innerHTML = `Computer took more then it needs. Congratulations! You won!!!!!!`;
            userScore += 1;
            displayScore();
            displayPlayAgainButton();
        }
    }

    let enoughCard = () =>{
        hideUserButtons();
        do {
            computerPlay();
        }
        while (tempComputerScore<=18);

        if ((tempUserScore == tempComputerScore) && (tempUserScore <=21) && (tempComputerScore <=21)){
            gameResultElement.innerHTML = `Both of you has ${tempComputerScore}. Nobody won`;
        }
        if ((tempUserScore > tempComputerScore) && (tempUserScore <=21) && (tempComputerScore <=21)){
            gameResultElement.innerHTML = `You won! Congratulations! Play again?`;
            userScore +=1;
        }
        if ((tempUserScore < tempComputerScore)&& (tempUserScore <=21) && (tempComputerScore <=21)){
            gameResultElement.innerHTML = `It is pity, you lost. Revenge?`;
            computerScore += 1;
        }
        displayScore();
        displayPlayAgainButton();
    }

    let playAgain = ()=>{
        displayUserButtons();
        hidePlayAgainButton();
        cardDeck = cards();
        tempComputerScore = 0;
        tempUserScore = 0;
        gameResultElement.innerHTML = '';
        computerTempScoreElement.innerHTML = '';
        userTempScoreElement.innerHTML = '';
        document.getElementById('user-cards').innerHTML = '';
        document.getElementById('computer-cards').innerHTML = '';
    }

    let cardDeck = cards();

    takeCardElement.addEventListener('click', takeCardUser);
    enoughCardElement.addEventListener('click', enoughCard);
    playAgainElement.addEventListener('click', playAgain);


})();