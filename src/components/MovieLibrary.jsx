import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange = ({ target: { value } }) => {
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange = () => {
    const { bookmarkedOnly } = this.state;
    this.setState({
      bookmarkedOnly: !bookmarkedOnly,
    });
  }

  onSelectedGenreChange = ({ target: { value } }) => {
    this.setState({
      selectedGenre: value,
    });
  }

  filteredMovie = () => {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;

    const arrayMovie = movies.filter((movie) => (movie.title.includes(searchText))
    || (movie.genre.includes(selectedGenre))
    || (movie.bookmarked === !bookmarkedOnly));

    return arrayMovie;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSearchTextChange={ this.onSearchTextChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.filteredMovie() } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: [],
};
