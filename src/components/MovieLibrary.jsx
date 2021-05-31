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

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.filterMovieList = this.filterMovieList.bind(this);
  }

  onSearchTextChange({ target: { value } }) {
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.value,
    });
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({
      selectedGenre: value,
    });
  }

  addMovie({ target }) {
    const { value } = target;
    const newMovie = {
      title: value.title,
      subtitle: value.subtitle,
      storyline: value.storyline,
      rating: value.rating,
      imagePath: value.imagePath,
      bookmarked: false,
      genre: value.genre,
    };

    this.setState((state) => ({
      movies: state.movies.push(newMovie),
    }));
  }

  filterMovieList() {
    const filteredMovies = () => {
      const { searchText } = this.state;
      const filterStates = ['title', 'subtitle', 'storyline'];
      return data.filter((movie) => filterStates.some((state) => movie[state]
        .toString().toLowerCase().indexOf(searchText.toLowerCase()) >= 0));
    };

    this.setState({
      movies: filteredMovies(),
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
