// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFiltredMovies = this.handleFiltredMovies.bind(this);
    this.AddMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFiltredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    console.log(selectedGenre, bookmarkedOnly);
    const filtredResult = movies.filter((movie) => (
      (movie.title.includes(searchText.charAt(0).toUpperCase()))
      || (movie.subtitle.includes(searchText.charAt(0).toUpperCase()))
    ));

    return filtredResult;
  }

  addMovie({ title, subtitle, imagePath, storyline, rating, genre }) {
    const { movies } = this.state;
    let updatedMovies = movies;
    const obj = { title, subtitle, imagePath, storyline, rating, genre };
    obj.rating = parseFloat(obj.rating);

    updatedMovies = updatedMovies.concat([obj]);
    this.setState({ movies: updatedMovies });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.handleFiltredMovies() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
