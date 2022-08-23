import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
