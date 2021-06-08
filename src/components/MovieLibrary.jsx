// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre: '',
        movies: this.movies,
      };
  }
  render() {
    return (
      <div>
        eeeeeeeeee
      </div>
    );
  }
}

MovieLibrary.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.object,
    ),
  };

  MovieLibrary.defaultProps = {
    movies: [{}],
  };

export default MovieLibrary;
