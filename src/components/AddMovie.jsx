import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
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
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="addMovieTitleInput" data-testid="title-input-label">
          Título
          <input
            id="addMovieTitleInput"
            name="title"
            type="text"
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="addMovieSubtitleInput" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="addMovieSubtitleInput"
            name="subtitle"
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="addMovieImageInput" data-testid="image-input-label">
          Imagem
          <input
            id="addMovieImageInput"
            name="imagePath"
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
            data-testid="image-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
