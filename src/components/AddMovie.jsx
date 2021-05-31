import React, { Component } from 'react'

class AddMovie extends Component {
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target }) {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  resetState() {
    this.setState = ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input 
            type="text"
            data-testid="title-input"
            name="title"
            value={ this.state.title }
            onChange={ this.handleChange }
          />
        </label>
        <label type="text" data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            type="text" 
            data-testid="subtitle-input"
            name="subtitle"
            value={ this.state.subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            type="text" 
            data-testid="image-input" name="imagePath" value={ this.state.imagePath } onChange={ this.handleChange } />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea data-testid="storyline-input" name="storyline" value={ this.state.storyline } onChange={ this.handleChange } />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input type="number" name="rating" data-testid="rating-input" value={ this.state.rating } onChange={ this.handleChange } />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select name="genre" data-testid="genre-input" value={ this.state.genre }onChange={ this.handleChange}>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ this.handleSubmit }>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
