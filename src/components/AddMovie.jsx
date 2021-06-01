import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: '',
    });
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  onClick() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: 'xablau',
      storyLine: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.onChange }
          />
        </label>

        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.onChange }
          />
        </label>

        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.onChange }
          />
        </label>

        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyLine"
            value={ storyLine }
            data-testid="storyline-input"
            onChange={ this.onChange }
          />
        </label>

        <label htmlFor="image-input" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.onChange }
          />
        </label>

        <label htmlFor="select-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ this.onChange }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.onClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}
