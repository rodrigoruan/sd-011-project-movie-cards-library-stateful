import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      bookmarked: false,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.createInputs = this.createInputs.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  submit() {
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

  createInputs() {
    const { title, subtitle, imagePath, rating } = this.state;
    const inputs = {
      titulo: (
        <input
          type="text"
          id="title"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
      ),
      subtitulo: (
        <input
          type="text"
          id="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      ),
      imagem: (
        <input
          type="text"
          id="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      ),
      avaliacao: (
        <input
          type="number"
          id="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleChange }
        />
      ),
    };
    return inputs;
  }

  render() {
    const { storyline, genre } = this.state;
    const { titulo, subtitulo, imagem, avaliacao } = this.createInputs();
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { titulo }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { subtitulo }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          { imagem }
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            id="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          { avaliacao }
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            type="text"
            id="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ this.submit }>
          Adicionar filme
        </button>
      </form>);
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
