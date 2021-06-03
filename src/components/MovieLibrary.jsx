import React from 'react';
import PropTypes from 'prop-types';

// external files imports
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  // super
  constructor(props) {
    super(props);
    const { movies } = this.props;

    // initial info
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    // bindings
    this.handleChange = this.handleChange.bind(this);
    this.filterLibrary = this.filterLibrary.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  // functions
  handleChange({ target }) {
    const { name, type } = target;

    // checkbox validation
    let value;
    if (type === 'checkbox') {
      value = target.checked;
    } else {
      value = target.value;
    }

    this.setState(() => ({ [name]: value }));
  }

  // filter library's movies
  filterLibrary() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    // if bookmarked
    if (bookmarkedOnly) {
      return movies.filter((items) => items.bookmarked);
    }

    // if empty selected genre validation
    if (selectedGenre.length !== 0) {
      return movies.filter((items) => items.genre === selectedGenre);
    }

    // if empty search text validation
    if (searchText.length !== 0) {
      return movies.filter((items) => {
        const { title, subtitle, storyline } = items;
        const auxTitle = title.includes(searchText);
        const auxSubtitle = subtitle.includes(searchText);
        const auxStoryline = storyline.includes(searchText);

        return (auxTitle || auxSubtitle || auxStoryline);
      });
    }

    return movies;
  }

  // set movies
  addMovie({ subtitle, title, imagePath, storyLine, rating, genre }) {
    const movieAdd = {
      subtitle,
      title,
      imagePath,
      storyLine,
      rating,
      genre,
    };

    this.setState((items) => ({ movies: [...items.movies, movieAdd] }));
  }

  // render
  render() {
    // initial info
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    return (
      // html structure, SearchBar, MovieList and AddMovie
      <div>
        <br />
        <center><h2> My awesome movie library </h2></center>
        <br />
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
