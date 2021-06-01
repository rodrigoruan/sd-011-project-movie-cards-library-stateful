import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
// import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  render() {
    return (
      <>
        <AddMovie onClick={ () => console.log('Ok') } />
        <MovieList movies={ this.props.movies } />
      </>
    );
  }
}

export default MovieLibrary;

// MovieLibrary.propTypes = {
//   bkOnly: PropTypes.string.isRequired,
//   srcbkOch: PropTypes.func.isRequired,
// };
