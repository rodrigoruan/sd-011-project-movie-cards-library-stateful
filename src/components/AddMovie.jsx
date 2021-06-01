// implemente AddMovie componente aqui
import React, { Component } from 'react';

export default class AddMovie extends Component {
  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="">
          Título
          <input data-testid="title-input" type="text" value={title} />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="">
          Subtítulo
          <input data-testid="subtitle-input" type="text" value={subtitle} />
        </label>

        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input type="text" data-testid="image-input" value={imagePath} />
        </label>

        <label data-testid="storyline-input-label" htmlFor="">Sinopse
          <textarea data-testid="storyline-input" value={storyline} >
          </textarea>
        </label>
        <label data-testid="rating-input-label" htmlFor="">Avaliação
          <input data-testid="rating-input" value={rating} value={rating} type="number" />
        </label>
        <label data-testid="genre-input-label" htmlFor="">Gênero
          <select data-testid="genre-input">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}
