import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './components/SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.evSearch = this.evSearch.bind(this);
    this.resulSearch = this.resulSearch.bind(this);
  }

  get initialState() {
    const { movies } = this.props;
    return {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  evSearch({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  }

  resulSearch() {
    const { movies } = this.state;
    const { searchText, selectedGenre } = this.state;

    return movies.filter(({
      title, subtitle, storyline,
    }) => title.includes(searchText)
    || subtitle.includes(searchText)
      || storyline.includes(searchText));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.evSearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.evSearch }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.evSearch }
        />
        <MovieList movies={ this.resulSearch() } />
        <AddMovie onClick={ (e) => e } />
      </>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.objectOf().isRequired,
};
