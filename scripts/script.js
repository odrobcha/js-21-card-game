let cards = [];


for (let i = 1; i <= 14; i++){
    let cardName = '';
    let value = null;
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

console.log(cards);