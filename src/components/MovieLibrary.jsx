import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onClick(changeMovie) {
    const { movies } = this.props;
    this.setState({ movies: [...movies, changeMovie] });
  }

  onSearchTextChange(event) {
    console.log('Esse aqui > ', event.target);
    this.setState({
        searchText: event.target.value,
    })
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies, onSearchTextChange } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ onSearchTextChange }
          
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ (changeMovie) => this.onClick(changeMovie) } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
