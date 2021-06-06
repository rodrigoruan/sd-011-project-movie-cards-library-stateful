import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies, // filmes filtrados
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this); // callbacks que alteram state
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    const { target } = event;
    this.setState({
      searchText: target.value,
    });

    const { searchText, movies } = this.state;
    let researchedMovies = movies;
    if (searchText !== '') {
      researchedMovies = researchedMovies
        .filter((movie) => (movie.title.includes(searchText))
      || (movie.subtitle.includes(searchText))
      || (movie.storyline.includes(searchText)));
    }
    return researchedMovies;
  }

  onBookmarkedChange(event) {
    const { target } = event;
    this.setState({
      bookmarkedOnly: target.checked,
    });

    const { bookmarkedOnly, movies } = this.state; // para acessar os valores e conseguir filtrar
    if (bookmarkedOnly === target.checked) {
      this.setState({
        movies: movies.filter((movie) => movie.bookmarked === true),
      });
    }
  }

  onSelectedGenreChange(event) {
    const { target } = event;
    this.setState({
      selectedGenre: target.value,
    });

    const { selectedGenre, movies } = this.state;
    if (selectedGenre !== '') {
      this.setState({
        movies: movies.filter((movie) => movie.genre === selectedGenre),
      });
    }
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

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: [{}],
};

export default MovieLibrary;
