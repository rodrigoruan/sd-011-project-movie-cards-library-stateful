import React from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  render() {
    return <p>Test</p>;
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
