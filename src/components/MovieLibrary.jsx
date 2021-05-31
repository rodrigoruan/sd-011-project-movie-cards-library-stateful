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

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    console.log(movies);

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
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
