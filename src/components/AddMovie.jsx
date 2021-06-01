import React from 'react';
import Title from './Title'

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  // Pedi ajuda na sala "A"
  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={this.state.title} handleChange={ this.handleChange } />
        <label data-testid="subtitle-input-label" htmlFor="addMovieSubtitleInput">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            id="addMovieSubtitleInput"
            name="subtitle"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="addMovieImageInput">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
            id="addMovieImageInput"
            name="imagePath"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="addMovieSinopseTextarea">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
            id="addMovieSinopseTextarea"
            name="storyline"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="addMovieRating">
          Avaliação
          <input
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
            id="addMovieRating"
            name="rating"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
