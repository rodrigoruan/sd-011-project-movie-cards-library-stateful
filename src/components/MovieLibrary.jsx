import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  async onSearchTextChange({ target }) {
    const { value } = target;
    await this.setState({
      searchText: value,
    });
  }

  async onBookmarkedChange({ target }) {
    const { checked } = target;
    await this.setState({
      bookmarkedOnly: checked,
    });
  }

  async onSelectedGenreChange({ target }) {
    const { value } = target;
    await this.setState({
      selectedGenre: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie
          onClick={ this.createMovie }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: Proptypes.arrayOf(),
};

MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
