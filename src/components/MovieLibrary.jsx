import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './components/SearchBar';

// implement AddMovie component here
class MovieLibrary extends Component {
  render() {
    return (
      <SearchBar />
    );
  }
}

export default MovieLibrary;

// MovieLibrary.propTypes = {
//   bkOnly: PropTypes.string.isRequired,
//   srcbkOch: PropTypes.func.isRequired,
// };
