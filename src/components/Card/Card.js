import React from 'react';
import style from './Card.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="text-container">
          <div>{this.props.value}</div>
          <div>{this.props.suit}</div>
        </div>
      </div>
    )
  }
}

export default Card;
