import React from 'react';
import PropTypes from 'prop-types';

// external files imports
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  // super
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.filterLibrary = this.filterLibrary.bind(this);
  }

  // functions
  handleChange({ target }) {
    const { name, type } = target;

    let value;
    if (type === 'checkbox') value = target.checked;
    else value = target.value;

    this.setState(() => ({ [name]: value }));
  }

  addMovie({ title, subtitle, imagePath, storyLine, rating, genre }) {
    const movieAdd = {
      title,
      subtitle,
      imagePath,
      storyLine,
      rating,
      genre,
    };

    this.setState((items) => ({ movies: [items.movies, movieAdd] }));
  }

  filterLibrary() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    if (searchText.length !== 0) {
      return movies.filter((items) => {
        const { title, subtitle, storyLine } = items;
        const auxTitle = title.filter(searchText);
        const auxSubtitle = subtitle.filter(searchText);
        const auxStoryLine = storyLine.filter(searchText);
        return (auxTitle || auxSubtitle || auxStoryLine);
      });
    }

    if (bookmarkedOnly) {
      return movies.filter((items) => items.bookmarked);
    }

    if (selectedGenre.length !== 0) {
      return movies.filter((items) => items.genre === selectedGenre);
    }

    return movies;
  }

  // render
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterLibrary() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

// propTypes
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

// export
export default MovieLibrary;
