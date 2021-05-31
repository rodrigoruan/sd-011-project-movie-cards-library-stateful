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
  }

  handleState(target) {
  const { name, value } = target;
  this.setState({
  [name]: value,
  })
  }
  render() {
  const { addMovies } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="ctl">
          Título
          <input onChange={this.handleState} data-testid="title-input" value={ this.state.title } />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="ctl">
          Subtítulo
          <input onChange={this.handleState} data-testid="subtitle-input" value={ this.state.subtitle } />
        </label>
        <label data-testid="image-input-label" htmlFor="ctl">
          Imagem
          <input onChange={this.handleState} data-testid="image-input" value={ this.state.imagePath } />
        </label>
        <label data-testid="storyline-input-label" htmlFor="ctl">
          Sinopse
          <textarea
            onChange={this.handleState}
            data-testid="storyline-input"
            value={ this.state.storyline }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="ctl">
          Avaliação
          <input onChange={this.handleState} data-testid="rating-input" value={ this.state.rating } />
        </label>
        <label data-testid="genre-input-label" htmlFor="ctl">
          Gênero
          <select data-testid="genre-input" type="text" value={ this.state.genre }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}
