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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title">
          Titulo
          <input
            name="title"
            id="add-movie-title-input"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            id="add-movie-title-input"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="title">
          Imagem
          <input id="title" />
        </label>
        <label htmlFor="title">
          Sinopse
          <input id="title" />
        </label>
        <label htmlFor="title">
          Avaliação
          <input id="title" />
        </label>
        <label htmlFor="title">
          Gênero
          <input id="title" />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagepath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  ratign: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
