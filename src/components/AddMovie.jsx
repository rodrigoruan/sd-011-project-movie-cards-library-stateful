import React from 'react';
import Label from './Label';
// import PropTypes from 'prop-types';

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

    this.handleImage = this.handleImage.bind(this);
    this.handleStoryline = this.handleStoryline.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  handleImage({ target }) {
    this.setState({ imagePath: target.value });
  }

  handleStoryline({ target }) {
    this.setState({ storyline: target.innerText });
  }

  handleRating({ target }) {
    this.setState({ rating: target.value });
  }

  handleGenre({ target }) {
    console.log(target.value);
    this.setState({ genre: target.value });
  }

  handleState(e) {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" action="">
        <Label alias="title" text="Título" value={ title } func={ this.handleState } />
        <Label
          alias="subtitle"
          text="Subtítulo"
          value={ subtitle }
          func={ this.handleState }
        />
        <Label
          alias="image"
          text="Imagem"
          value={ imagePath }
          func={ this.handleState }
        />
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            onChange={ this.handleStoryline }
          >
            { storyline }
          </textarea>
        </label>
        <Label
          alias="rating"
          text="Avaliação"
          value={ rating }
          func={ this.handleRating }
        />
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select data-testid="genre-input" value={ genre } onChange={ this.handleGenre }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
