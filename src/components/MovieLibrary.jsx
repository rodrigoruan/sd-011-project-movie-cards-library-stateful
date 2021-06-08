import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filtredMovies = this.filtredMovies.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
    });
  }

  filtredMovies() {
    const { searchText, movies, selectedGenre, bookmarkedOnly } = this.state;
    const array = movies.filter((value) => (value.title.includes(searchText))
     || (value.subtitle.includes(searchText))
     || (value.storyline.includes(searchText)));
    const array2 = array.filter((value2) => (value2.genre.includes(selectedGenre)));
    const array3 = array2.filter((value3) => (value3.bookmarked === bookmarkedOnly));
    return bookmarkedOnly ? array3 : array2;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie />
        <MovieList movies={ this.filtredMovies() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }).isRequired,
};
