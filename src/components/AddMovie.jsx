import React from 'react';
import Input from './Input';
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

    this.handleTitle = this.handleTitle.bind(this);
    this.handleSubtitle = this.handleSubtitle.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleStoryline = this.handleStoryline.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
  }

  handleTitle({ target }) {
    this.setState({ title: target.value });
  }

  handleSubtitle({ target }) {
    this.setState({ subtitle: target.value });
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
    this.setState({ genre: target.value });
  }

  // handleState(e, property) {
  //   this.setState({ [property]: target.value })
  // }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form" action="">
        <label data-testid="title-input-label" htmlFor="abc">
          Título
          <Input alias="title" value={ title } func={ this.handleTitle } />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <Input alias="subtitle" value={ subtitle } func={ this.handleSubtitle } />
        </label>
        <label data-testid="image-input-label" htmlFor="image">
          Imagem
          <Input alias="image" value={ imagePath } func={ this.handleImage } />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            onChange={ this.handleStoryline }
          >
            { storyline }
          </textarea>
        </label>
        <label data-testid="rating-input-label" htmlFor="abc">
          Avaliação
          <Input id="abc" alias="rating" value={ rating } func={ this.handleRating } />
        </label>
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
