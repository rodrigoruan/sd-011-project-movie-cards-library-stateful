import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleStates = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filter = () => {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    let objeto = movies;
    if (bookmarkedOnly) objeto = movies.filter(({ bookmarked }) => bookmarked === true);
    if (selectedGenre) {
      objeto = movies.filter(({ genre }) => genre.includes(selectedGenre));
    }
    if (searchText) {
      objeto = movies
        .filter(({ title, subtitle, storyline }) => title.includes(searchText)
        || subtitle.includes(searchText) || storyline.includes(searchText));
    }

    return objeto;
  }

  renderCard= (newCard) => {
    this.setState((previous) => ({
      movies: [...previous.movies, newCard],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.handleStates }
          onSearchTextChange={ this.handleStates }
          onSelectedGenreChange={ this.handleStates }
        />
        <MovieList movies={ this.filter() } />
        <AddMovie onClick={ this.renderCard } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
