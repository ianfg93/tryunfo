import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div>
        <section data-testid="name-card">{cardName}</section>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <section data-testid="description-card">{cardDescription}</section>
        <section data-testid="attr1-card">{cardAttr1}</section>
        <section data-testid="attr2-card">{cardAttr2}</section>
        <section data-testid="attr3-card">{cardAttr3}</section>
        <section data-testid="rare-card">{cardRare}</section>
        {cardTrunfo === true && <section data-testid="trunfo-card">Super Trunfo</section>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;