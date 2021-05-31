import React, { Component } from 'react';
import Button from './Button';

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
  }

  handleChangerTitle = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Titulo:
          <input type="text" value={ this.state.title } name="title" data-testid="title-input" onChange={ this.handleChangerTitle } />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtittulo
          <input type="text" name="subtitle" value={ this.state.subtitle } data-testid="subtitle-input" onChange={ this.handleChangerTitle } />
        </label>
        <label data-testid="image-input-label" htmlFor="image">
          Imagem
          <input type="file" name="image" value={ this.state.imagePath } data-testid="image-input" onChange={ this.handleChangerTitle } data-testid="subtitle-input" />
        </label>
        <label data-testid="storyline-input-label" htmlFor="sinopse">
          Sinopse
          <textarea name="sinopse" value={ this.state.storyline } data-testid="storyline-input" onChange={ this.handleChangerTitle } />
        </label>
        <label data-testid="rating-input-label" htmlFor="textarea">
          Avaliação
          <input type="number" name="textarea" data-testid="rating-input" onChange={ this.handleChangerTitle } />
        </label>
        <label data-testid="genre-input-label" htmlFor="generate">
          Gênero
          <select data-testid="genre-input" name="generate" onChange={ this.handleChangerTitle }>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <Button func={ this.ha } type="submit" name="Adicionar filme" />
      </form>
    );
  }
}

export default AddMovie;
