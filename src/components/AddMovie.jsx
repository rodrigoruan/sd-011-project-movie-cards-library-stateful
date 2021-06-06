import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handlerCheck({ event }) {
    console.log('Olá');
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input-label" data-testid="title-input-label">
          Título
          <input type="text" data-testid="title-input" onChange={ title } />
        </label>
        <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" data-testid="subtitle-input" onChange={ subtitle } />
        </label>
        <label htmlFor="image-input-label" data-testid="image-input-label">
          Imagem
          <input type="text" data-testid="image-input" onChange={ imagePath } />
        </label>
        <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
          Sinopse
          <input type="textarea" data-testid="storyline-input" onChange={ imagePath } />
        </label>
        <label htmlFor="rating-input-label" data-testid="rating-input-label">
          Avaliação
          <input type="number" data-testid="rating-input" onChange={ rating } />
        </label>
        <select data-testid="genre-input" onChange={ genre }>
          <label data-testid="genre-input-label">
            Gênero
            <option data-testid="genre-option" value="action" selected>Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </label>
        </select>
      </form>
    );
  }
}

export default AddMovie;
