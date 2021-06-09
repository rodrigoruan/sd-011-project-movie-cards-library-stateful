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
      movielist: movies,
      movies,
    };

    this.onClick = this.onClick.bind(this);
    this.genericHandler = this.genericHandler.bind(this);
    this.createMovieList = this.createMovieList.bind(this);
  }

  onClick(state) {
    const { movielist } = this.state;
    const newMovie = state;
    movielist.push(newMovie);
    this.createMovieList();
  }

  async genericHandler(event) {
    const { target: { value, name, checked } } = event;
    await this.setState(
      name !== 'bookmarkedOnly'
        ? { [name]: value }
        : { bookmarkedOnly: checked },
    );
    await this.createMovieList();
    console.log(this.state);
  }

  async createMovieList() {
    const { bookmarkedOnly, selectedGenre, searchText, movielist } = this.state;
    let list = movielist;
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

    await this.setState({ movies: list });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
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

        <MovieList movies={ movies } />

        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
