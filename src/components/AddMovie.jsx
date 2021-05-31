import React, { Component } from 'react';
import Bottun from './Bottun';

export default class AddMovie extends Component {
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
  }

  handleChangerTitle = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Titulo:
          <input type="text" value={ this.state.title } name="title" data-testid="title-input" onChange={ this.handleChangerTitle } />
        </label>
        <label data-testid="subtitle-input-label">
          Subtittulo
          <input type="text" name="subtitle" value={ this.state.subtitle } data-testid="subtitle-input" onChange={ this.handleChangerTitle } />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input type="file" name="Imagem" value={ this.state.imagePath } data-testid="image-input" onChange={ this.handleChangerTitle } data-testid="subtitle-input" />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea name="sinopse" value={ this.state.storyline } data-testid="storyline-input" onChange={ this.handleChangerTitle } />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input type="number" data-testid="rating-input" onChange={ this.handleChangerTitle } />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input" onChange={ this.handleChangerTitle } >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <Bottun />
      </form>
    );
  }
}
