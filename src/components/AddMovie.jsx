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

    this.handleInitialValue = this.handleInitialValue.bind(this);
    this.resetButton = this.resetButton.bind(this);
  }

  handleInitialValue(evento) {
    const { name, value } = evento.target;
    this.setState({
      [name]: value,
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
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleInitialValue }
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ this.handleInitialValue }
            />
          </label>
          <Imagem handleInitialValue={ this.handleInitialValue } value={ imagePath } />

          <Storyline handleInitialValue={ this.handleInitialValue } value={ storyline } />
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              name="rating"
              value={ rating }
              data-testid="rating-input"
              onChange={ this.handleInitialValue }
            />
          </label>
          <Genre handleInitialValue={ this.handleInitialValue } value={ genre } />
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.resetButton }
          >
            Adicionar filme
          </button>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
