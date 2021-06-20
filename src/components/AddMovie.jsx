import React from 'react';
import AddMovieRating from './AddMovieRating';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    //   genre: 'action',
    };
  }

  onTitleChange = (event) => {
    const newTitle = event.target.value;
    this.setState({ title: newTitle });
  }

  onSubtitleChange = (event) => {
    const newSubtitle = event.target.value;
    this.setState({ subtitle: newSubtitle });
  }

  onImageChange = (event) => {
    const newImage = event.target.value;
    this.setState({ imagePath: newImage });
  }

  onStorylineChange = (event) => {
    const newStoryline = event.target.value;
    this.setState({ storyline: newStoryline });
  }

  onRatingChange = (event) => {
    const newRating = event.target.value;
    this.setState({ rating: newRating });
  }

  render() {
    const {
      title, subtitle, imagePath,
      storyline, rating,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="AddMovie__title" data-testid="title-input-label">
          Título
          <input
            id="AddMovie__title"
            data-testid="title-input"
            value={ title }
            onChange={ this.onTitleChange }
          />
        </label>
        <label htmlFor="AddMovie__subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="AddMovie__subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.onSubtitleChange }
          />
        </label>
        <label htmlFor="AddMovie__image" data-testid="image-input-label">
          Imagem
          <input
            id="AddMovie__image"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.onImageChange }
          />
        </label>
        <label htmlFor="AddMovie__storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="AddMovie__storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.onStorylineChange }
          />
        </label>
        <AddMovieRating value={ rating } onChange={ this.onRatingChange } />
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
