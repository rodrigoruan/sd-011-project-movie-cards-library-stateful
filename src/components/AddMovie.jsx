import React from 'react';
import PropTypes from 'prop-types';
import LabeledInput from './LabeledInput';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;

    this.setState({
      [id]: value,
    });
  }

  reset() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  renderInput(labelText, id, type, inputValue) {
    return (
      <LabeledInput
        labelTestId={ `${id}-input-label` }
        labelText={ labelText }
        id={ id !== 'image' ? id : 'imagePath' }
        type={ type }
        value={ inputValue }
        onChange={ this.handleChange }
        data-testid={ `${id}-input` }
      />
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.renderInput('Título', 'title', 'text', title) }
        { this.renderInput('Subtítulo', 'subtitle', 'text', subtitle) }
        { this.renderInput('Imagem', 'image', 'text', imagePath) }
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        { this.renderInput('Avaliação', 'rating', 'number', rating) }
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre"
            value={ genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ () => {
            onClick(this.state);
            this.reset();
          } }
          data-testid="send-button"
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
