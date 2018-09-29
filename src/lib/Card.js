const possiblesSuits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
const possiblesValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

class Card {
  constructor(value, suit) {
    if (possiblesSuits.indexOf(suit) == -1) throw new Error('Invalid suit');
    if (possiblesValues.indexOf(value) == -1) throw new Error('Invalid value');

    this.value = value;
    this.suit = suit;
  }

  static getPossiblesValues() {
    return possiblesValues;
  }

  static getPossiblesSuits() {
    return possiblesSuits;
  }
}

export default Card;
