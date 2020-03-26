import React, { Component } from 'react';

export default class Contador extends Component {

  state = {
    contador: 1
  }

  adicionaNumero = () => {
    this.setState({ contador: this.state.contador + 1 })
  }

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.adicionaNumero}>Incrementar número</button>
      </div>
    );
  }
}
