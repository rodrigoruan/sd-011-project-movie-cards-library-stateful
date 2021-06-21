import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onAddMovie = (movie) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

    onSearchTextChange = (event) => {
      this.setState({ searchText: event.target.value });
    }

    onBookmarkedChange = (event) => {
      this.setState({ bookmarkedOnly: event.target.checked });
    }

    onSelectedGenreChange = (event) => {
      this.setState({ selectedGenre: event.target.value });
    }

    getFilteredMovies = () => {
      const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

      return movies
        .filter((item) => {
          if (!bookmarkedOnly) {
            return true;
          }

          return item.bookmarked;
        })
        .filter((item) => {
          if (selectedGenre === '') {
            return true;
          }

          return item.genre === selectedGenre;
        })
        .filter((item) => {
          if (searchText === '') {
            return true;
          }

          if (item.title.includes(searchText)) {
            return true;
          }

          if (item.subtitle.includes(searchText)) {
            return true;
          }

          if (item.storyline.includes(searchText)) {
            return true;
          }

          return false;
        });
    }

    render() {
      const { searchText, bookmarkedOnly, selectedGenre } = this.state;

      const filteredMovies = this.getFilteredMovies();

      return (
        <div>
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.onSearchTextChange }
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ this.onBookmarkedChange }
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ this.onSelectedGenreChange }
          />
          <MovieList movies={ filteredMovies } />
          <h2>Novo Filme</h2>
          <AddMovie onClick={ this.onAddMovie } />
        </div>);
    }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
