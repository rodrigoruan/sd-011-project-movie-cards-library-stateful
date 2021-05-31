import React, { Component } from 'react';
// import MovieLibrary from './MovieLibrary';
// import MovieList from './MovieList';
// import SearchBar from './SearchBar';

class AddMovie extends Component {
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
    this.handleState = this.handleState.bind(this);
    this.addAtributes = this.addAtributes.bind(this);
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addAtributes (inputName, inputType, inputValue) {
    return (
      <input
        name={ inputName }
        type={ inputType }
        value={ inputValue }
        data-testid={ inputName === 'imagePath' ? 'image-input' : `${inputName}-input` }
        onChange={ this.handleState }
      />
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="ctl">
          Título
          { this.addAtributes('title', 'text', this.state.title) }
        </label>
        <label data-testid="subtitle-input-label" htmlFor="ctl">
          Subtítulo
          { this.addAtributes('subtitle', 'text', this.state.subtitle)}
        </label>
        <label data-testid="image-input-label" htmlFor="ctl">
          Imagem
          { this.addAtributes('imagePath', 'text', this.state.imagePath)}
        </label>
        <label data-testid="storyline-input-label" htmlFor="ctl">
          Sinopse
          <textarea
            name='storyline'
            onChange={ this.handleState }
            data-testid="storyline-input"
            value={ this.state.storyline }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="ctl">
          Avaliação
          { this.addAtributes('rating', 'number', this.state.rating)}
        </label>
        <label data-testid="genre-input-label" htmlFor="ctl">
          Gênero
          <select
          name='genre'
          data-testid="genre-input"
          type="text"
          value={ this.state.genre }
          onChange={this.handleState}
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={ onClick(this.state) }>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
