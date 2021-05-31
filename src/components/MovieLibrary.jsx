import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
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

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handleText = this.handleText.bind(this);
    this.toggleBoomark = this.toggleBoomark.bind(this);
  }

  handleAddMovie(newMovieData) {
    this.setState((previous) => {
      const newArray = [...previous.movies];
      newMovieData.rating = parseFloat(newMovieData.rating);
      newArray.push({ ...newMovieData, boomarked: false });
      return { movies: newArray };
    });
  }

  handleGenre = ({ target }) => { this.setState({ selectedGenre: target.value }) };

  handleText = ({ target }) => { this.setState({ searchText: target.value }) };

  toggleBoomark = ({ target }) => { this.setState({ bookmarkedOnly: target.checked }) };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    const filters = {
      bookmarked: bookmarkedOnly,
      searchTerm: searchText,
      genre: selectedGenre,
    };
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.toggleBoomark }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenre }
        />
        <MovieList movies={ movies } filters={ filters } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
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

export default MovieLibrary;
