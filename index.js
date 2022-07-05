
function checkHand(arrHand) {
    if (arrHand.length < 2) {
        console.log('<2');
    } else if(arrHand[0] === arrHand[1]) {
        console.log('succes');

    } else {
        // reset arrHand and arrIdx
        arrHand = 0;
        arrIdx = 0;

        arrHand = [];
        arrIdx = [];
        console.log(arrHand);
        console.log(arrIdx);
        console.log(typeof(arrIdx))

    }
}




// card buttons 
// buttons need to have unique name while divs represent cards
const card_btn_1 = document.querySelector('#card-btn-1');
card_btn_1.addEventListener('click',clickCard_1);

const card_btn_2 = document.querySelector('#card-btn-2');
card_btn_2.addEventListener('click',clickCard_2);

const card_btn_3 = document.querySelector('#card-btn-3');
card_btn_3.addEventListener('click',clickCard_3);

const card_btn_4 = document.querySelector('#card-btn-4');
card_btn_4.addEventListener('click',clickCard_4);


function clickCard_1() {
    console.log('1')
    // index for arrDeck
    let idx = 0;
    let currentCard = 'Card1';
    arrHand.push(currentCard);
    arrIdx.push(idx);
    console.log(arrHand);
    console.log(arrIdx);
    checkHand(arrHand);

}

function clickCard_2() {
    console.log('1')
    // index for arrDeck
    let idx = 1;
    let currentCard = 'Card2';
    arrHand.push(currentCard);
    arrIdx.push(idx);
    console.log(arrHand);
    console.log(arrIdx);
    checkHand(arrHand);

}

function clickCard_3() {
    console.log('1')
    // index for arrDeck
    let idx = 2;
    let currentCard = 'Card1';
    arrHand.push(currentCard);
    arrIdx.push(idx);
    console.log(arrHand);
    console.log(arrIdx);
    checkHand(arrHand);

}

function clickCard_4() {
    console.log('1')
    // index for arrDeck
    let idx = 3;
    let currentCard = 'Card2';
    arrHand.push(currentCard);
    arrIdx.push(idx);
    console.log(arrHand);
    console.log(arrIdx);
    checkHand(arrHand);

}
// array corresponds to divs: from left to right form up to down
let arrDeck = ['card1', 'card2', 'card1', 'card2']

// array with cards in hand
let arrHand = [];

// index array
let arrIdx = [];