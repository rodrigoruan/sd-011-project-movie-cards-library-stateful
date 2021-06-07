import React, { Component } from 'react';

import InputRating from './InputRating';
import InputSelect from './InputSelect';
import InputStoryline from './InputStoryline';

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
    this.returnStateInit = this.returnStateInit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  returnStateInit() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, rating, genre, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            id="title"
            value={ title }
            name="title"
            type="text"
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            value={ subtitle }
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            id="imagePath"
            value={ imagePath }
            name="imagePath"
            type="text"
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
        <InputStoryline value={ storyline } handleChange={ this.handleChange } />
        <InputRating value={ rating } handleChange={ this.handleChange } />
        <InputSelect value={ genre } handleChange={ this.handleChange } />
        <button type="button" data-testid="send-button" onClick={ this.returnStateInit }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
