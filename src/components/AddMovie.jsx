import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };

    this.createTitle = this.createTitle.bind(this);
    this.createSubtitle = this.createSubtitle.bind(this);
    this.createStoryline = this.createStoryline.bind(this);
    this.createRating = this.createRating.bind(this);
    this.createImagePath = this.createImagePath.bind(this);
    this.createGenre = this.createGenre.bind(this);
  }

  createTitle(event) {
    this.setState({ title: event.target.value });
  }

  createSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  createStoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  createRating(event) {
    this.setState({ rating: event.target.value });
  }

  createImagePath(event) {
    this.setState({ imagePath: event.target.value });
  }

  createGenre(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    const { title, subtitle, storyline, rating, imagePath, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title">
          <input
            type="text"
            value={ title }
            onChange={ this.createTitle }
          />
        </label>
        <label htmlFor="subtitle">
          <input
            type="text"
            value={ subtitle }
            onChange={ this.createSubtitle }
          />
        </label>
        <label htmlFor="storyline">
          <input
            type="text"
            name="storyline"
            value={ storyline }
            onChange={ this.createStoryline }
          />
        </label>
        <label htmlFor="rating">
          <input
            type="text"
            value={ rating }
            onChange={ this.createRating }
          />
        </label>
        <label htmlFor="imagePath">
          <input
            type="text"
            value={ imagePath }
            onChange={ this.createImagePath }
          />
        </label>
        <label htmlFor="genre">
          <input
            type="text"
            value={ genre }
            onChange={ this.createGenre }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default AddMovie;
