import React, { Component } from 'react';

import PropTypes from 'prop-types';
import InputRating from './InputRating';
import InputSelect from './InputSelect';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, rating, genre } = this.state;
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
        <InputRating value={ rating } handleChange={ this.handleChange } />
        <InputSelect value={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.Component;

export default AddMovie;
