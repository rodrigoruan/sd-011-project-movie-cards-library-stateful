import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: movies,
      bookmarkedOnly: false,
      selectedGenre: '',
      searchText: '',
    };
    this.initialState = { ...this.state };
    this.onClick = this.onClick.bind(this);
    this.modifyState = this.modifyState.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  onClick(info) {
    console.log(info);
    this.setState((state) => ({
      movieList: [...state.movieList, info],
    }));
  }

  filterMovies() {
    const { bookmarkedOnly, selectedGenre, searchText, movieList } = this.state;
    let filtered = movieList;
    if (searchText) {
      filtered = movieList.filter((el) => el.title.includes(searchText)
      || el.subtitle.includes(searchText) || el.storyline.includes(searchText));
    }
    if (bookmarkedOnly) filtered = movieList.filter((el) => el.bookmarked === true);
    if (selectedGenre) filtered = movieList.filter((el) => el.genre === selectedGenre);
    return filtered;
  }

  modifyState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.modifyState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.modifyState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.modifyState }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

export default MovieLibrary;
