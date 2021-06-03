// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   searchText: '',
    //   bookmarkedOnly: false,
    //   selectedGenre: '',
    // // moviesction: { movies },
    };
  }

  // const { movies } = this.props;

  addMovie = (addMovie) => {
    this.setState((state) => ({
      movies: [...state.movies, addMovie],
    }));
  }

  render() {
    const { movies, title, storyline } = this.props;
    // const { onClick } = this.state;
    // const {
    //   searchText,
    //   bookmarkedOnly,
    //   selectedGenre,
    //   moviesction,
    // } = this.state;
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
  // onClick: PropTypes.func.isRequired,
};

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
