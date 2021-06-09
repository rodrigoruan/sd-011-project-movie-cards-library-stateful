// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.initMovies = this.initMovies.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  componentDidMount() {
    const { movies } = this.props;
    this.initMovies(movies);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  initMovies(movies) {
    this.setState(({ movies }));
  }

  filterMovies({ title, subtitle, storyline, genre, bookmarked }) {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const findText = title.toLowerCase().includes(searchText.toLowerCase())
                    || subtitle.toLowerCase().includes(searchText.toLowerCase())
                    || storyline.toLowerCase().includes(searchText.toLowerCase());
    const findGenre = genre.includes(selectedGenre);
    const findFav = (bookmarkedOnly) ? bookmarked : true;
    return findText && findGenre && findFav;
  }

  newMovie({ subtitle, title, imagePath, storyline, rating, genre }) {
    const movie = {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    };
    this.setState((prevState) => ({ movies: [...prevState.movies, movie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filtedMovies = movies.filter((movie) => this.filterMovies(movie));
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ filtedMovies } />
        <AddMovie onClick={ this.newMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;
