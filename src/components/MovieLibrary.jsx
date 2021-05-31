import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleToggleBoomarked = this.handleToggleBoomarked.bind(this);
  }

  handleChangeGenre() {

  }

  handleChangeText() {

  }

  handleToggleBoomarked() {

  }

  render() {
    const { bookmarkedOnly, searchText, selectedGenre, movies } = this.state;

    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChangeText }
          bookmarkedOnly={ bookmarkedOnly }
          onBoomarkedChange={ this.handleToggleBoomarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChangeGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ handleAddMovie } />
      </main>
    );
  }
}
