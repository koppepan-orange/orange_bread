// I want to make poker game.
let cardsmarks = ['♠', '♣', '♦', '♥'];
let cardsnumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let cards = [];
let card = 0;
// make cards
for (let i = 0; i < cardsmarks.length; i++) {
    for (let j = 0; j < cardsnumbers.length; j++) {
        cards.push(cardsmarks[i] + cardsnumbers[j]);
    }
}
// make card
function makecard() {
    card = cards[Math.floor(Math.random() * cards.length)];
    document.getElementById('card').textContent = card
}