import React from 'react';

class AddMovies extends React.Component {
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
    this.handleStates = this.handleStates.bind(this);
  }

  handleStates() {
    //???
  }

  render() {
    const { func: onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="subtitle-input-label" htmlFor="title"> Título
          <input id="title" data-testid="title-input" onChange={ this.state.title } />
        </label>
        <label data-testid="title-input-label" htmlFor="subtitle"> Subtítulo
          <input id="subtitle" data-testid="subtitle-input" onChange={ this.state.subtitle } />
        </label>
        <label data-testid="image-input-label" htmlFor="img">
          Imagem
          <input id="img" data-testid="image-input" onChange={ this.state.imagePath } />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            id="storyline"
            data-testid="storyline-input" onChange={ this.state.storyline } />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            id="rating"
            data-testid="rating-input"
            onChange={ this.state.rating }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            id="genre"
            data-testid="genre-input"
            onChange={ this.state.genre }
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onChange={ this.onClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovies;
