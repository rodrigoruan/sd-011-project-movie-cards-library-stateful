import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.changeState = this.changeState.bind(this);
    this.MoviesFiltered = this.MoviesFiltered.bind(this);
  }

  changeState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    console.log('Abaixo temos o this do MovieLibrary');
    console.log(this);
    // console.log('Entrou no changeState de MovieLibrary');
  }

  MoviesFiltered() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;

    let arrayMovies = movies.filter((item) => (
      (item.title.includes(searchText))
      || (item.subtitle.includes(searchText))
      || (item.storyline.includes(searchText))));

    if (searchText === '' && selectedGenre !== '') {
      arrayMovies = movies.filter((item) => (
        (item.genre === selectedGenre)));
    }
    console.log('Abaixo o "arrayMovies" da func "MoviesFeltered" do "MovieLibrary.js" ')
    console.log(arrayMovies);
    return arrayMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          movies={ movies }
          onSearchTextChange={ this.changeState }
          onBookmarkedChange={ this.changeState }
          onSelectedGenreChange={ this.changeState }
        />
        <AddMovie />
        {/* <MovieList movies={ movies } /> */}
        <MovieList movies={ this.MoviesFiltered() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
