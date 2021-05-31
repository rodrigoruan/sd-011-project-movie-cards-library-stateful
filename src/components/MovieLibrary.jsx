import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '', // guarda o texto de busca por filmes;
      bookmarkedOnly: false, // um boolean que guarda se é para filtrar por filmes favoritados ou não;
      selectedGenre: '', // guarda o gênero do filme selecionado para poder fazer a filtragem;
      movies: '', // guarda a lista de filmes.
    };
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText onSearchTextChange bookmarkedOnly onBookmarkedChange selectedGenre onSelectedGenreChange />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
