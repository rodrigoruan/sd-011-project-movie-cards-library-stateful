import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class Movielibrary extends Component {
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

  handleChangeGenre({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  handleChangeText({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  handleToggleBoomarked({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filters = {
      bookmarked: bookmarkedOnly,
      searchTerm: searchText,
      genre: selectedGenre,
    };
    return (
      <div>
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
      </div>
    );
  }
}

Movielibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  })).isRequired,
};

export default Movielibrary;
