import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleStates = this.handleStates.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleStates({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { func: onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="cont" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            value={ this.state.title }
            data-testid="title-input"
            onChange={ this.handleStates }
          />
        </label>
        <label htmlFor="cont">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input-label"
            value={ this.state.subtitle }
            onChange={ this.handleStates }
          />
        </label>
        <label htmlFor="cont" data-testid="image-imput-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            value={ this.state.imagePath }
            onChange={ this.handleStates }
          />
        </label>
        <label htmlFor="cont" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={ this.state.storyline }
            onChange={ this.handleStates }
          />
        </label>
        <label htmlFor="cont" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            value={ this.state.rating }
            onChange={ this.handleStates }
          />
        </label>
        <label htmlFor="cont" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            value={ this.state.genre }
            onChange={ this.handleStates }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>

        <button type="button" data-testid="send-button" onClick={ onClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
