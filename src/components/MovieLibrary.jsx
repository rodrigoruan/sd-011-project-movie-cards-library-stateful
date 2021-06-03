import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      movies,
    };
  }

  addMovie({ title, subtitle, imagePath, storyLine, rating, genre }) {
    const movieAdd = {
      title,
      subtitle,
      imagePath,
      storyLine,
      rating,
      genre,
    };
    this.setState((items) => ({
      movies: [...items.movies, movieAdd],
    }));
  }

  render() {
    return (
      <div><AddMovie onClick={ this.addMovie } /></div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
