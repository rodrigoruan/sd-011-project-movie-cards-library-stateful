import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  //   const { movies } = this.props;
  //   this.handleAddMovies = this.handleAddMovies.bind(this);
  //   this.state = {
  //     movies,
  //   };
  // }

  // handleAddMovies(movie) {
  //   this.setState(({ movies }) => ({
  //     movies: [...movies, movie],
  //   }));
  // }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onclick={ () => {} } />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object),
// };

// MovieLibrary.defaultProps = {
//   movies: '',
// };

export default MovieLibrary;
