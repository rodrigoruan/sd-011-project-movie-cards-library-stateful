import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './components/SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = this.initialState;
    this.evSearch = this.evSearch.bind(this);
  }

  get initialState() {
    return {
      search: '',
      favorite: false,
      gen: '',
    };
  }

  evSearch({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  }

  render() {
    const { movies } = this.props;
    const { search, favorite, gen } = this.state;
    const resulSrc = movies.filter(({ title, subtitle }) => title.toLowerCase()
      .includes(search.toLowerCase())
      || subtitle.toLowerCase().includes(search.toLowerCase()))
      .map((result) => result);
    return (
      <>
        <SearchBar
          searchText={ search }
          onSearchTextChange={ this.evSearch }
          bookmarkedOnly={ favorite }
          onBookmarkedChange={ this.evSearch }
          selectedGenre={ gen }
          onSelectedGenreChange={ this.evSearch }
        />
        <MovieList movies={ resulSrc } />
        <AddMovie onClick={ (e) => e } />
      </>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.objectOf().isRequired,
};
