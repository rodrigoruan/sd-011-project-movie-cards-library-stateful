import React from 'react';

class AddMovie extends React.Component {
  render() {
    const { handler, title, subtitle, imagePath, storyline } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="input">
          Título
          <input
            data-testid="title-input"
            value={ title }
            name="title"
            onChange={ handler }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            value={ subtitle }
            name="subtitle"
            onChange={ handler }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="input">
          Imagem
          <input
            data-testid="image-input"
            value={ imagePath }
            name="imagePath"
            onChange={ handler }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="area">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={ storyline }
            name="storyline"
            onChange={ handler }
          />
        </label>

      </form>
    );
  }
}
export default AddMovie;

// subtítulo
// título
// caminho da imagem
// sinopse
// avaliação
// gênero
