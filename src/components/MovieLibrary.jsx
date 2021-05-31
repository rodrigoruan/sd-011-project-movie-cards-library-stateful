import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleToggleBoomarked = this.handleToggleBoomarked.bind(this);
  }

  handleAddMovie(newMovieData) {
    this.setState((previous) => {
      const newArray = [...previous.movies];
      newMovieData.rating = parseFloat(newMovieData.rating);
      newArray.push({ ...newMovieData, boomarked: false });
      return { movies: newArray };
    });
  }

  handleChangeGenre(e) {
    this.setState({
      selectedGenre: e.target.value,
    });
  }

  handleChangeText(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  handleToggleBoomarked(e) {
    this.setState({
      bookmarkedOnly: e.target.checked,
    });
  }

  render() {
    const { bookmarkedOnly, searchText, selectedGenre, movies } = this.state;
    const filters = {
      bookmarked: bookmarkedOnly,
      searchTerm: searchText,
      genre: selectedGenre,
    };

    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChangeText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleToggleBoomarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChangeGenre }
        />
        <MovieList movies={ movies } filters={ filters } />
        <AddMovie onClick={ this.handleAddMovie } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  })).isRequired,
};
