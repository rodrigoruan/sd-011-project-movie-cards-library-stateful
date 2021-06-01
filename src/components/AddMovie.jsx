// implement AddMovie component here
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
    }
    this.addMyMovies = this.addMyMovies.bind(this)
  }

  addMyMovies(target) {
    const {name, value} = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { myMovies } = this.props
    return (
    <form data-testid="add-movie-form">
      <label data-testid="title-input-label">
        Título
        <input
        type="text" 
        data-testid="title-input"
        value={this.state.title}
        onChange={this.addMyMovies}
        >
          </input>
      </label>
        
      <label data-testid="subtitle-input-label">
        Subtítulo
        <input
        type="text"
        data-testid="subtitle-input"
        value={this.state.subtitle}>
          {this.state.subtitle}
          </input>
      </label>

      <label data-testid="image-input-label">
        Imagem
        <input
        type="text"
        data-testid="image-input"
        value={this.state.imagePath}>
          {this.state.imagePath}
          </input>
      </label>

      <label data-testid="storyline-input-label">
        Sinopse
        <textarea
        data-testid="storyline-input"
        value={this.state.storyline}>
          {this.state.storyline}
          </textarea>
      </label>

      <label data-testid="rating-input-label">
        Avaliação
        <input
        type="number" 
        data-testid="rating-input"
        value={this.state.rating}>
          {this.state.rating}
          </input>
      </label>

      <label data-testid="genre-input-label">
        Gênero
        <select
        data-testid="genre-input"
        value={this.state.genre}>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
      </label>

      <button data-testid="send-button" onClick={ myMovies }>Adicionar filme</button>

    </form>
    )
  }
}

export default AddMovies;