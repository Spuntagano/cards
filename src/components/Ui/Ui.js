import React from 'react';
import Card from '../../components/Card/Card.js'
import style from './Ui.scss';

class Ui extends React.Component {
  constructor(props) {
    super(props);

    this.onShuffle = this.onShuffle.bind(this);
    this.onDealOneCard = this.onDealOneCard.bind(this);
    this.state = {
      card: null
    };
  }

  render() {
    return (
      <div className="ui">
        <div className="card-container">
          {this.state.card && <Card value={this.state.card.value} suit={this.state.card.suit} />}
        </div>

        <div className="button-container">
          <button disabled={!this.props.deck.cards.length} onClick={this.onShuffle}>Shuffle</button>
          <button disabled={!this.props.deck.cards.length} onClick={this.onDealOneCard}>Deal one card</button>
        </div>

        <div className="message-container">
          <div>Cards left in the deck: {this.props.deck.cards.length}</div>
        </div>
      </div>
    )
  }

  onShuffle() {
    this.props.deck.shuffle();
  }

  onDealOneCard() {
    this.setState({
      card: this.props.deck.dealOneCard()
    });
  }
}

export default Ui;
