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
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({ searchText: e.target.value });
  }

  onBookmarkedChange(e) {
    this.setState({
      bookmarkedOnly: e.target.checked,
    });
  }

  onSelectedGenreChange(e) {
    this.setState({
      selectedGenre: e.target.value,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return movies
      .filter((movie) => {
        const titleLowerCase = movie.title.toLowerCase();
        const subtitleLowerCase = movie.subtitle.toLowerCase();
        const storylineLowerCase = movie.storyline.toLowerCase();
        const searchTextLowerCase = searchText.toLowerCase();

        return (titleLowerCase.includes(searchTextLowerCase)
        || subtitleLowerCase.includes(searchTextLowerCase)
        || storylineLowerCase.includes(searchTextLowerCase));
      })
      .filter((movie) => !bookmarkedOnly || movie.bookmarked)
      .filter((movie) => selectedGenre === '' || selectedGenre === movie.genre);
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
          onSelectedGenreChange={ this.onSelectedGenreChange }
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
