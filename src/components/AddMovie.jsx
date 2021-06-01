import React, { Component } from 'react';
import InputComponent from './InputComponent';
import dataInputs from '../dataInputs';

class AddMovie extends Component {
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
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'number' ? parseFloat(target.value) : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, rating, storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputComponent
          info={ dataInputs }
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          rating={ rating }
          handleChange={ this.handleChange }
        />

        <label htmlFor="textareaInput" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="textareaInput"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
            name="storyline"
          />
        </label>

        <label htmlFor="selectInputAdd" data-testid="genre-input-label">
          Gênero
          <select
            id="selectInputAdd"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
            name="genre"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>

        <button type="submit" data-testid="send-button">Adicionar filme</button>

      </form>
    );
  }
}

export default AddMovie;

// Reduzir funcoes e criar novos componentes para reduzir o codigo
// Ate aqui, tudo rodando ok
