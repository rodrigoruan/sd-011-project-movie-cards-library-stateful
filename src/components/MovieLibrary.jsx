import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.filter = this.filter.bind(this);
    this.movieAdded = this.movieAdded.bind(this);
  }

  handlerChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;
    if (searchText) {
      filteredMovies = movies.filter(({ title,
        subtitle,
        storyline }) => title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText));
    }

    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter(({ bookmarked }) => bookmarked);
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter(({ genre }) => genre === selectedGenre);
    }
    return filteredMovies;
  }

  // Lembrar de referenciar Thyago Pessoa
  movieAdded(anyMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, anyMovie],
    });
    console.log(anyMovie);
  }

  render() {
    // Esta desestruturação abaixo refere-se ao uso da prop no componente <MovieList>
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      // Lembrar de adicionar créditos a alberto candido: me ajudou a entender o que o requisito pedia
      <div>
        <h1>Filminho e pipoquinha, ui ui ui</h1>
        <SearchBar
          filter={ this.filter }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handlerChange }
          onBookmarkedChange={ this.handlerChange }
          onSelectedGenreChange={ this.handlerChange }
        />

        <MovieList movies={ this.filter() } />
        <AddMovie onClick={ this.movieAdded } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};
