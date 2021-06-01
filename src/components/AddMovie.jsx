import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.functionClick = this.functionClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  functionClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  resetState() {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor>
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor>
          Subtítulo
          <input type="text" name="subtitle" value={ subtitle } data-testid="subtitle-input" onChange={ this.handleChange } />
        </label>
        <label data-testid="image-input-label" htmlFor>
          Imagem
          <input type="text" name="imagePath" value={ imagePath } data-testid="image-input" onChange={ this.handleChange } />
        </label>
        <label data-testid="storyline-input-label" htmlFor>
          Sinopse
          <textarea value={ storyline } name="storyline" data-testid="storyline-input" onChange={ this.handleChange } />
        </label>
        <label data-testid="rating-input-label" htmlFor>
          Avaliação
          <input type="number" value={ rating } name="rating" data-testid="rating-input" onChange={ this.handleChange } />
        </label>
        <label data-testid="genre-input-label" htmlFor>
          Gênero
          <select value={ genre } name="genre" data-testid="genre-input" onChange={ this.handleChange }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.functionClick }
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
