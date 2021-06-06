// https://github.com/tryber/sd-011-project-movie-cards-library-stateful codigo base retirado daqui.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleOnSelectedGenreChange = this.handleOnSelectedGenreChange.bind(this);
  }

  // handleClick ainda não funciona
  handleClick(event) {
    const { target } = event;
    const { name } = target;
    const value = '';
    if (name === 'genre') {
      this.setState({
        [name]: 'action',
      });
    } else if (name === 'rating') {
      this.setState({
        [name]: 0,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleInput({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleOnSelectedGenreChange({ target }) {
    const { name, value } = target;
    const { movies } = this.props;
    const { selectedGenre } = this.state;
    this.setState({
      [name]: value,
    });

    const filterSelecteds = (movie) => movie.genre.includes(selectedGenre);
    const movieToCards = (movie) => <MovieCard key={ movie.title } movie={ movie } />;

    movies
      .filter(filterSelecteds)
      .map(movieToCards);
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleInput }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleInput }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleOnSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
