import React, { Component } from 'react'

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.makeInput = this.makeInput.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
      this.setState({
        [name]: target.value,
      });
  }

  // Criando os inputs dinamicamente, necessitando apenas a chamada da função com o this e os parametros necessarios. (diminuir a quantidade de linhas pro lint não reclamar)
  makeInput = (name, value, type, onChange) => (
    <input
      name={ name }
      value={ value }
      type={ type }
      data-testid={ `${name}-input` }
      id={ `${name}-input` }
      onChange={ onChange }
    />
  );

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          {this.makeInput('title', title, 'text', this.handleChange)}
        </label>
      </form>
    )
  }
}
