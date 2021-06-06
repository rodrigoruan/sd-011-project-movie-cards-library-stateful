// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
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

    this.filterChecked = this.filterChecked.bind(this);
    this.addMovies = this.addMovies.bind(this);
    this.filterSearchBar = this.filterSearchBar.bind(this);
  }

  //  requisito 17
  filterChecked({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  // requisito 19
  addMovies(newMovies) {
    this.setState((estadoAnterior) => ({
      movies: [...estadoAnterior.movies, newMovies],
    }));
  }

  // Para esta parte eu consultei o Repositório de Islene Gomes
  //  Source:/* https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/15/files
  // requisito 18

  filterSearchBar() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let arrayMovies = movies;
    if (bookmarkedOnly === true) {
      arrayMovies = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      arrayMovies = movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      arrayMovies = movies.filter((movie) => movie
        .title.toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText));
    }
    return arrayMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.filterChecked }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.filterChecked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.filterChecked }
        />
        <MovieList movies={ this.filterSearchBar() } />
        <AddMovie onClick={ this.addMovies } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf((PropTypes.object).isRequired),
};

MovieLibrary.defaultProps = {
  movies: {},
};
