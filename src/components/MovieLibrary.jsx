import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleGeneric = this.handleGeneric.bind(this);
    this.addMovies = this.addMovies.bind(this);
    this.filtered = this.filtered.bind(this);
  }

  handleGeneric({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovies(movie) {
    this.setState((previous) => ({
      movies: [...previous.movies, movie],
    }));
  }

  filtered() {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;
    let filteredList = movies;

    if (searchText !== '') {
      filteredList = movies.filter((movie) => (movie.title
        .toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText)
      ));
    }

    if (bookmarkedOnly === true) {
      filteredList = movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      filteredList = movies.filter((movie) => movie.genre === selectedGenre);
    }

    return filteredList;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleGeneric }
          onBookmarkedChange={ this.handleGeneric }
          onSelectedGenreChange={ this.handleGeneric }
        />
        <div className="container-movie">
          <div>
            <MovieList movies={ this.filtered() } />
          </div>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Adicionar Filme a Lista
          </button>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <AddMovie onClick={ this.addMovies } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
