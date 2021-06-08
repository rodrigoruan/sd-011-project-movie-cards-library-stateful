// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.changeCall = this.changeCall.bind(this);
    this.filterCall = this.filterCall.bind(this);
  }

  changeCall({ target }) {
    const { name, value } = target;
    if (name === 'bookmarkedOnly') {
      this.setState({ [name]: target.checked });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  filterCall() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filtro = movies;
    if (searchText) {
      filtro = filtro.filter((filme) => filme.title
        .toLowerCase().includes(searchText.toLowerCase())
        || filme.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || filme.storyline.toLowerCase().includes(searchText.toLowerCase()));
    }
    if (bookmarkedOnly) {
      filtro = filtro.filter((filme) => filme.bookmarked);
    }
    if (selectedGenre) {
      filtro = filtro.filter((filme) => filme.genre === selectedGenre);
    }
    return filtro;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeCall }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeCall }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeCall }
        />
        <MovieList movies={ this.filterCall() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

MovieLibrary.defaultProps = {
  movies: [{}],
};

export default MovieLibrary;
