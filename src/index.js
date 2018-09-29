import React from 'react';
import ReactDOM from 'react-dom';
import Ui from './components/Ui/Ui.js';
import Card from './lib/Card.js';
import Deck from './lib/Deck.js';

const cards = [];
Card.getPossiblesSuits().forEach((suit) => {
  Card.getPossiblesValues().forEach((value) => {
    cards.push(new Card(value, suit));
  });
});

const deck = new Deck(cards);

ReactDOM.render((
  <Ui deck={deck} />
), document.getElementById('react-container'));
