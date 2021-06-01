import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    this.movieAdd = this.movieAdd.bind(this);
    this.setAttribute = this.setAttribute.bind(this);
  }

  setAttribute(inputName, inputType, inputValue) {
    return (
      <input
        name={ inputName }
        type={ inputType }
        value={ inputValue }
        data-testid={ inputName === 'imagePath' ? 'image-input' : `${inputName}-input` }
        onChange={ this.movieAdd }
      />
    );
  }

  movieAdd({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="control" data-testid="title-input-label">
            Título
            { this.setAttribute('title', 'text', title) }
          </label>
          <label htmlFor="control" data-testid="subtitle-input-label">
            Subtítulo
            { this.setAttribute('subtitle', 'text', subtitle) }
          </label>
          <label htmlFor="control" data-testid="image-input-label">
            Imagem
            { this.setAttribute('imagePath', 'text', imagePath) }
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
