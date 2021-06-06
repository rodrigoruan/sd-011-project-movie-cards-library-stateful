import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onClickEvent = this.onClickEvent.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onCheckedChanged = this.onCheckedChanged.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onClickEvent(event) {
    console.log(event);
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onCheckedChanged({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.state;
    return (
      <div className="App">
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onChangeHandler }
          onSelectedGenreChange={ this.onChangeHandler }
          onBookmarkedChange={ this.onCheckedChanged }
        />
        {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))}
        <AddMovie onClick={ this.onClickEvent } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
