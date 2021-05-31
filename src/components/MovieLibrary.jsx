import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

const initialState = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: 'comedy',
  movies: '',
};

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChanges2({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText="string"
          onSearchTextChange={ this.handleChanges2 }
          bookmarkedOnly="true"
          onBookmarkedChange={ this.handleChanges2 }
          selectedGenre="string"
          onSelectedGenreChange={ this.handleChanges2 }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleChanges2 } />
      </div>
    );
  }
}

export default MovieLibrary;
