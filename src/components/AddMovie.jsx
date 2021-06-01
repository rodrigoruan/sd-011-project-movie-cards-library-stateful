import React from 'react';
import PropTypes from 'prop-types';
import Genre from './Genre';
import Storyline from './Storyline';
import Imagem from './Imagem';

class AddMovie extends React.Component {
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

    this.initialValue = this.initialValue.bind(this);
    this.resetButton = this.resetButton.bind(this);
  }

  initialValue(evento) {
    const { target } = evento;
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  resetButton() {
    const { onClick } = this.props;
    onClick(this.state);
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
    const { subtitle, title, imagePath, rating, storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.initialValue }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.initialValue }
          />
        </label>
        <Imagem initialValue={ this.initialValue } value={ imagePath } />

        <Storyline initialValue={ this.initialValue } value={ storyline } />
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="text"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.initialValue }
          />
        </label>
        <Genre initialValue={ this.initialValue } value={ genre } />
        <button
          data-testid="send-button"
          onClick={ this.resetButton }
          type="submit"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
