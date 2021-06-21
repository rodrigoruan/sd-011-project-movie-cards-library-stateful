// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

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
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="add-movie-title-input" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            name="title"
            id="add-movie-title-input"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="add-movie-subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            id="add-movie-subtitle-input"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="add-movie-image-input" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            id="add-movie-image-input"
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleChange }
          />
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
