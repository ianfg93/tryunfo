import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
    prevOn: false,
  };

  onSaveButtonClick = (objetoInfo) => {
    const { cardTrunfo, hasTrunfo } = this.state;
    this.setState({ hasTrunfo: hasTrunfo || cardTrunfo });
    this.setState((prev) => ({
      data: [...prev.data, objetoInfo],
      prevOn: true,
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      });
    });
  };

  onInputChange = (event) => {
    const { target } = event;
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
          cardImage, cardRare } = this.state;
        const total = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
        const maximo = 210;
        const minimo = 90;
        if (
          cardName && cardDescription && cardImage && cardRare && cardAttr1 >= 0
          && cardAttr1 <= minimo && cardAttr2 >= 0 && cardAttr2 <= minimo
          && cardAttr3 >= 0 && cardAttr3 <= minimo && total <= maximo) {
          this.setState({
            isSaveButtonDisabled: false,
          });
        } else {
          this.setState({
            isSaveButtonDisabled: true,
          });
        }
      },
    );
  };

  btnDelete = (event) => {
    const { target } = event;
    const { id } = target;
    const { data } = this.state;
    const cartas = data.filter(({ cardName }) => cardName !== id);
    this.setState({
      data: cartas,
    });
    this.setState({ hasTrunfo: false });
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, data, prevOn, hasTrunfo } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          prevOn && data.map((e) => (
            <>
              <Card
                key={ e.cardName }
                cardName={ e.cardName }
                cardDescription={ e.cardDescription }
                cardAttr1={ e.cardAttr1 }
                cardAttr2={ e.cardAttr2 }
                cardAttr3={ e.cardAttr3 }
                cardImage={ e.cardImage }
                cardRare={ e.cardRare }
                cardTrunfo={ e.cardTrunfo }
              />
              <button
                type="button"
                id={ e.cardName }
                data-testid="delete-button"
                onClick={ this.btnDelete }
                cardTrunfo={ e.cardTrunfo }
              >
                Excluir
              </button>
            </>
          ))
        }
      </div>
    );
  }
}

export default App;
