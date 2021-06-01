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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    // this.onclick = this.onclick.bind(this);
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;
    const { name, value } = target;
    const { searchText } = this.state;
    this.setState({
      searchText: value,
      movies: movies.filter((el) => el.title.includes(value)
      || el.subtitle.includes(value)
      || el.storyline.includes(value)),
    });
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.props;
    const { bookmarkedOnly } = this.state;
    const { name } = target;
    this.setState(() => ({
      [name]: bookmarkedOnly === false,
      movies: movies.filter((el) => (!bookmarkedOnly
        ? el.bookmarked === !bookmarkedOnly
        : true)),
    }));
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    const { name, value } = target;
    console.log(value);
    this.setState(() => ({
      [name]: value,
      movies: movies.filter((el) => el.genre.includes(value)),
    }));
  }

  // onclick(event) {
  //   // const { movies } = this.state;
  //   event.preventDefault();
  //   console.log(event.target);
  //   // this.setState(() => ({
  //   //   movies: [...movies.push({
  //   //   })],
  //   // }));
  // }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
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
        <MovieList movies={ movies } />
        <AddMovie onclick={ this.onclick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default MovieLibrary;
