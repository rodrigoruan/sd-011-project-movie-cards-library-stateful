import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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

    this.onClick = this.onClick.bind(this);
    this.genericHandler = this.genericHandler.bind(this);
    this.createMovieList = this.createMovieList.bind(this);
  }

  onClick(state) {
    const { movies } = this.state;
    const newMovie = state;
    this.setState({ movies: [...movies, newMovie] });
  }

  async genericHandler(event) {
    const { target: { value, name, checked } } = event;
    await this.setState(
      name !== 'bookmarkedOnly'
        ? { [name]: value }
        : { bookmarkedOnly: checked },
    );
    await this.createMovieList();
  }

  createMovieList() {
    const { bookmarkedOnly, selectedGenre, searchText, movies } = this.state;
    let list = movies;
    if (bookmarkedOnly) {
      list = list.filter((value) => value.bookmarked);
    }

    if (selectedGenre !== '') {
      list = list.filter((value) => value.genre === selectedGenre);
    }

    if (searchText !== '') {
      list = list.filter((object) => (
        object.title.toUpperCase().includes(searchText.toUpperCase())
          || object.subtitle.toUpperCase().includes(searchText.toUpperCase())
          || object.storyline.toUpperCase().includes(searchText.toUpperCase())
      ));
    }

    return list;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.genericHandler }
          onSelectedGenreChange={ this.genericHandler }
          onSearchTextChange={ this.genericHandler }
        />

        <MovieList movies={ this.createMovieList() } />

        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
