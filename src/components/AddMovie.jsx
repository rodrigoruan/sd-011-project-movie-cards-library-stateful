import React from 'react';
import PropTypes from 'prop-types';
import MovieTitle from './MovieTitle';
import MovieSubtitle from './MovieSubtitle';
import MovieImage from './MovieImage';
import MovieStoryline from './MovieStoryline';
import MovieRating from './MovieRating';
import MovieGenre from './MovieGenre';

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

    this.reset = this.reset.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState = {
      [name]: value,
    };
  }

  reset() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <MovieTitle
          value={ title }
          name="title"
          OnChange={ this.handleChange }
        />
        <MovieSubtitle
          value={ subtitle }
          name="subtitle"
          OnChange={ this.handleChange }
        />
        <MovieImage
          value={ imagePath }
          name="imagePath"
          OnChange={ this.handleChange }
        />
        <MovieStoryline
          value={ storyline }
          name="storyline"
          OnChange={ this.handleChange }
        />
        <MovieRating
          value={ rating }
          name="rating"
          OnChange={ this.handleChange }
        />
        <MovieGenre
          value={ genre }
          name="genre"
          OnChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.reset }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
