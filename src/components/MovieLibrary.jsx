// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    // const { movies } = this.props;
    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      movies: props.movies,
    };
    this.renderButton = this.renderButton.bind(this);
  }

  renderButton = (newMovie) => {
    this.setState(
      (previewState) => ({
        movies: [...previewState.movies, newMovie],
      }),
    );
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.renderButton } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf((PropTypes.object).isRequired),
};

MovieLibrary.defaultProps = {
  movies: {},
};

// MovieLibrary.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.shape({
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     imagePath: PropTypes.string,
//   })).isRequired,
// };

export default MovieLibrary;
