import React from 'react';
import PropTypes from 'prop-types';
import Titles from './Titles';

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
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form
        data-testid="add-movie-form"
      >
        <Titles />
        <label
          htmlFor="image-input-label"
          data-testid="image-input-label"
        >
          Imagem
          <input
            type="text"
            data-testid="image-input"
          />
        </label>
        <label
          htmlFor="storyline-input-label"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            data-testid="storyline-input"
          />
        </label>
        <label
          htmlFor="rating-input-label"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            name="rating"
            type="number"
            data-testid="rating-input"
          />
        </label>

      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
