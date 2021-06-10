import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.stateSet = this.stateSet.bind(this);
  }

  stateSet() {
    const { onClick } = this.props;
    onClick();
  }

  inputTitle() {
    return (
      <label data-testid="title-input-label" htmlFor="text">
        Título
        <input
          value={ title }
          data-testid="title-input"
          type="text"
          onChange={ this.stateSet }
        />
      </label>
    );
  }

  inputSubtitle() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="text">
        Subtítulo
        <input
          value={ subtitle }
          data-testid="subtitle-input"
          type="text"
          onChange={ this.stateSet }
        />
      </label>
    );
  }

  inputStoryline() {
    return (
      <label data-testid="storyline-input-label" htmlFor="text">
        Sinopse
        <textarea
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.stateSet }
        />
      </label>
    );
  }

  inputImage() {
    return (
      <label data-testid="image-input-label" htmlFor="text">
        Imagem
        <input
          value={ imagePath }
          data-testid="image-input"
          type="text"
          onChange={ this.stateSet }
        />
      </label>
    );
  }

  inputRating(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="text">
        Avaliação
        <input
          value={ rating }
          data-testid="rating-input"
          type="text"
          onChange={ this.stateSet }
        />
      </label>
    );
  }

  inputGenre(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          onChange={ this.stateSet }
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.inputTitle(title)}
        {this.inputSubtitle(subtitle)}
        {this.inputStoryline(storyline)}
        {this.inputImage(imagePath)}
        {this.inputRating(rating)}
        {this.inputGenre(genre)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
