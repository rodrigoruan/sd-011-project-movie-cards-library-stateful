// implemente AddMovie componente aqui
import React, { Component } from 'react';

export default class AddMovie extends Component {
  render() {
    const { title, subtitle, imagePath } = this.props;
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
      </form>
    );
  }
}
