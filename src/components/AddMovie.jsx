import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="addMovieTitleInput">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
            id="addMovieTitleInput"
            name="title"
          />
        </label>
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
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
            id="addMovieSinopseTextarea"
            name="storyline"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
