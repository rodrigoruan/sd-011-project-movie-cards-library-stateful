import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addMovie() {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title">
            Título:
            <input data-testid="title-input" name="title" type="text" value={ title } onChange={ this.handleChange } />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subítulo:
            <input data-testid="subtitle-input" name="subtitle" type="text" value={ subtitle } onChange={ this.handleChange } />
          </label>
          <label data-testid="image-input-label" htmlFor="image">
            Imagem:
            <input data-testid="image-input" name="image" type="text" value={ imagePath } onChange={ this.handleChange } />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse:
            <textarea name="storyline" cols="30" rows="10" data-testid="storyline-input" value={ storyline } onChange={ this.handleChange } />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating">
            Avaliação:
            <input data-testid="rating-input" name="rating" type="number" value={ rating } onChange={ this.handleChange } />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero:
            <select data-testid="genre-input" name="genre" value={ genre } onChange={ this.handleChange }>
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
        <button data-testid="send-button" type="submit" onClick={ this.addMovie }>Adicionar filme</button>
      </div>
    );
  }
}

export default AddMovie;
