import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props)
    const { movies } = this.props
    this.handleChangeLibrary = this.handleChangeLibrary.bind(this)
    this.movieFilter = this.movieFilter.bind(this)
    this.onClick = this.onClick.bind(this)
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies
    }
  }

  onClick(newMovie) {
    this.setState({
      movies: [...this.state.movies, newMovie]
    })
  }

  handleChangeLibrary({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    }, () => this.movieFilter(name))
  }

  movieFilter(typeFilter) {
    if(this.state.bookmarkedOnly === true) {
      let bookmarkedMovies = this.state.movies.filter((filme) => filme.bookmarked === true)
      return this.setState({
        movies: bookmarkedMovies
      })
    }

    if(typeFilter === 'selectedGenre') {
      let genreMovies = this.props.movies.filter((filme) => filme.genre === this.state.selectedGenre)

      return this.setState({
        movies: genreMovies
      })
    }

    if(this.state.searchText !== '') {
      let searchedMovie = this.state.movies.filter((filme) => filme.title.includes(this.state.searchText) 
      || filme.subtitle.includes(this.state.searchText) 
      || filme.storyline.includes(this.state.searchText))

      return this.setState({
        movies: searchedMovie
      })
    }

    else {
      console.log('else')
      return this.setState({
        movies: this.props.movies
      })
    }
  }

  render() {
    return (
      <div>
        <SearchBar searchText={this.state.searchText} onSearchTextChange={this.handleChangeLibrary} bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.handleChangeLibrary} selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.handleChangeLibrary} />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick}/>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary
