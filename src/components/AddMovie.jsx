// implement AddMovie component here

import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this);
    this.handleOnChangeSubtitle = this.handleOnChangeSubtitle.bind(this);
    this.handleOnChangeImagePath = this.handleOnChangeImagePath.bind(this);
    this.handleOnChangeStoryline = this.handleOnChangeStoryline.bind(this);
    this.handleOnChangeRating = this.handleOnChangeRating.bind(this);
    this.handleOnChangeGenre = this.handleOnChangeGenre.bind(this);
  }

  handleOnChangeTitle({ target }) {
    this.setState({
      title: target.value,
    });
  }

  handleOnChangeSubtitle({ target }) {
    this.setState({
      subtitle: target.value,
    });
  }

  handleOnChangeImagePath({ target }) {
    this.setState({
      imagePath: target.value,
    });
  }

  handleOnChangeStoryline({ target }) {
    this.setState({
      storyline: target.innerText,
    });
  }

  handleOnChangeRating({ target }) {
    this.setState({
      rating: target.value,
    });
  }

  handleOnChangeGenre({ target }) {
    this.setState({
      genre: target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" action="">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            name="title-input"
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.handleOnChangeTitle }
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            name="subtitle-input"
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.handleOnChangeSubtitle }
          />
        </label>

        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            name="image-input"
            data-testid="image-input"
            type="text"
            src={ imagePath }
            onChange={ this.handleOnChangeTitle }
          />
        </label>

        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            name="storyline-input"
            data-testid="storyline-input"
            cols="30"
            rows="10"
            onChange={ this.handleOnChangeStoryline }
          >
            { storyline }
          </textarea>
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            name="rating-input"
            data-testid="rating-input"
            type="number"
            value={ rating }
            onChange={ this.handleOnChangeRating }
          />
        </label>

        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            name="genre-input"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleOnChangeGenre }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="submit">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
