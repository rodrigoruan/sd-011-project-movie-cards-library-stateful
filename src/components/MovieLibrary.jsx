import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import data from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: data,
      bookmarkedMovies: data.filter((el) => el.bookmarked === true),
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.CheckBookMark = this.CheckBookMark.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleMovieGenre = this.handleMovieGenre.bind(this);
  }

  handleTextChange = ({ target }) => {
    const filtered = data.filter(
      (el) =>
        el.title.includes(target.value) ||
        el.subtitle.includes(target.value) ||
        el.storyline.includes(target.value)
    );
    this.setState({ searchText: target.value }, () => {
      this.state.searchText === target.value
        ? this.setState({ movies: filtered })
        : this.setState({ movies: data });
    });
  };

  CheckBookMark = () => {
    this.setState(
      (curr) => ({ bookmarkedOnly: !curr.bookmarkedOnly }),
      () => {
        this.state.bookmarkedOnly
          ? this.setState({ movies: this.state.bookmarkedMovies })
          : this.setState({ movies: data });
      }
    );
  };

  handleAddMovie = (el) => {
    console.log(el);
  };

  handleMovieGenre = ({ target }) => {
    this.setState({ selectedGenre: target.value });
    this.setState({ movies: data.filter((el) => el.genre.includes(target.value)) });
  };

  render() {
    const { bookmarkedOnly, searchText, movies } = this.state;
    return (
      <div>
        <h2 className="mt-3 text-center"> My awesome movie library </h2>
        <SearchBar
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.CheckBookMark}
          onSearchTextChange={this.handleTextChange}
          searchText={searchText}
          onSelectedGenreChange={this.handleMovieGenre}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.handleAddMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
