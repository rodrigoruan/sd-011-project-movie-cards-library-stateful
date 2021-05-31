// https://github.com/tryber/sd-011-project-movie-cards-library-stateful codigo base retirado daqui.
import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types'
// import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText=""
          onSearchTextChange={ () => {} }
          bookmarkedOnly={ false }
          onBookmarkedChange={ () => {} }
          selectedGenre=""
          onSelectedGenreChange={ () => {} }
        />
        <MovieList movies={ movies } />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MovieLibrary;
