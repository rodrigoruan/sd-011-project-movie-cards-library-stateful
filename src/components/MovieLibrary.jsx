import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  render() {
    const movies = this.props;
    return <div />;
  }
}

MovieLibrary.defaultProps = {
  movies: [],
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieLibrary;
