// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    }

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  onSearchTextChange({target}) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({target}) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange({target}) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  filterMovies() {
    const { movies } = this.props;
    let filteredMovies = movies;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if(bookmarkedOnly) filteredMovies = filteredMovies.filter((movie) => movie.bookmarked);
    if(selectedGenre) filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    if(searchText) filteredMovies = filteredMovies.filter((movie) => (movie.title.toLowerCase().includes(searchText)) ||
      (movie.subtitle.toLowerCase().includes(searchText)) || (movie.storyline.toLowerCase().includes(searchText)));
    console.log(filteredMovies);
    return filteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
