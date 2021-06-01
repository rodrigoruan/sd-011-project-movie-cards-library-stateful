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

  misteriousFunction() {

  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText="uma string"
          onSearchTextChange={ this.misteriousFunction }
          bookmarkedOnly="teste"
          onBookmarkedChange={ this.misteriousFunction }
          selectedGenre="maisUmTeste"
          onSelectedGenreChange={ this.misteriousFunction }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.misteriousFunction } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
