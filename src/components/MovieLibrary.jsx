// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.teste = 0;
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText="uma string"
          onSearchTextChange={ umaCallback }
          bookmarkedOnly="teste"
          onBookmarkedChange={ outraCallback }
          selectedGenre="maisUmTeste"
          onSelectedGenreChange={ outraCallBack }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ umaCallback } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.isRequired,
};

export default MovieLibrary;
