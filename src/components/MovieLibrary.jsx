import React from 'react';
import Proptypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({ searchText: e.target.value });
  }

  onBookmarkedChange(e) {
    this.setState({
      bookmarkedOnly: e.target.checked,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, movies } = this.state;

    if (searchText !== '') {
      return movies.filter((movie) => movie.title.toLowerCase()
        .includes(searchText)
        || movie.subtitle.toLowerCase()
          .includes(searchText)
        || movie.storyline.toLowerCase()
          .includes(searchText));
    }

    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked);
    }

    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ this.filterMovies() } />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: Proptypes.arrayOf(Proptypes.object).isRequired,
};
export default MovieLibrary;
