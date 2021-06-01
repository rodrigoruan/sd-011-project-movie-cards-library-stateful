import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

function onClick() {}

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.handleChangeSearchBar = this.handleChangeSearchBar.bind(this);
    this.handleChangeBookmarked = this.handleChangeBookmarked.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  handleChangeSearchBar({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  handleChangeBookmarked({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      bookmarkedOnly: value,
    })
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ this.state.searchText }
          onSearchTextChange={ this.handleChangeSearchBar }
          bookmarkedOnly={ this.state.bookmarkedOnly }
          onBookmarkedChange={ this.handleChangeBookmarked }
          selectedGenre={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.props.movies } />
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

export default MovieLibrary;
