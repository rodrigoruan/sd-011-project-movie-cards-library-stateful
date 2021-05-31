// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    const { onClick } = props;

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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          <input
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
          Título
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          <input
            name="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
          Subtítulo
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          <input
            name="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
          />
          Imagem
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
          Sinopse
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          <input
            name="rating"
            type="number"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleChange }
          />
          Avaliação
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
