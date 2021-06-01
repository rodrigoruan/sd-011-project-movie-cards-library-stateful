import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      movies: props.movies, // guarda a lista de filmes.
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.filterMovieList = this.filterMovieList.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    const { movies } = this.props;
    this.setState({
      searchText: value,
      movies: value === '' ? movies : this.filterMovieList(),
    });
  }

  onBookmarkedChange() {
    const { movies } = this.props;
    this.setState((state) => ({
      bookmarkedOnly: !state.bookmarkedOnly,
      movies: !state.bookmarkedOnly
        ? movies.filter((movie) => movie.bookmarked === !state.bookmarkedOnly)
        : movies,
    }));
  }

  onSelectedGenreChange({ target: { value } }) {
    const { movies } = this.props;
    this.setState({
      selectedGenre: value,
      movies: !value ? movies : movies.filter((movie) => movie.genre === value),
    });
  }

  addMovie(value) {
    const { movies } = this.state;
    const newMovie = {
      title: value.title,
      subtitle: value.subtitle,
      storyline: value.storyline,
      rating: value.rating,
      imagePath: value.imagePath,
      bookmarked: false,
      genre: value.genre,
    };
    const newMovieList = [...movies];
    newMovieList[newMovieList.length] = newMovie;
    this.setState({
      movies: newMovieList,
    });
  }

  filterMovieList() {
    const { searchText, movies } = this.state;
    const filterStates = ['title', 'subtitle', 'storyline'];
    return movies.filter((movie) => filterStates.some((state) => movie[state]
      .toString().toLowerCase().includes(searchText.toString().toLowerCase())));
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
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
