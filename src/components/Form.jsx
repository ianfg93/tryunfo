import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, // hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
          />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
          />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
          />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
          />
        </label>
        Raridade
        <select
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          name="cardRare"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="cardTrunfo"
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => onSaveButtonClick(cardName, cardDescription, cardImage) }
          name="isSaveButtonDisable"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
