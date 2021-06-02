import React from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <h1>
        { movies[0].title }
      </h1>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
