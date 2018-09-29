class Deck {
  constructor(cards) {
    if (!cards) throw new Error('Deck must have an array of cards as a parameter');

    this.cards = cards;
  }

  shuffle() {
    if (this.cards.length == 0) throw new Error('Attempt to shuffle empty deck');

    for (let i = 0; i < this.cards.length; i++) {
        let rdm = Math.floor(Math.random()*this.cards.length);
        let tmp = this.cards[i];
        this.cards[i] = this.cards[rdm];
        this.cards[rdm] = tmp;
    }
  }

  dealOneCard() {
    if (this.cards.length == 0) throw new Error('Attempt to deal from empty deck');

    return this.cards.pop();
  }
}

export default Deck;
