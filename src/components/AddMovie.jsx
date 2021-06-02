// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryline from './InputStoryline';
// import InputRating from './InputRating';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: '',
    };
    this.changeValue = this.changeValue.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  changeValue({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: '',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle state={ title } func={ this.changeValue } />
        <InputSubtitle state={ subtitle } func={ this.changeValue } />
        <InputImage state={ imagePath } func={ this.changeValue } />
        <InputStoryline state={ storyline } func={ this.changeValue } />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.changeValue }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.changeValue }
          >
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.addMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.objectOf(),
};

AddMovie.defaultProps = {
  onClick: '',
};

export default AddMovie;
