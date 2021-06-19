// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
    constructor(props) {
        super(props);

        const { movies } = this.props;
        this.state = {
            searchText: '',
            bookmarkedOnly: false,
            selectedGenre: '',
            moviesList: movies,
        }

        this.onClickMovie = this.onClickMovie.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    // for the req 18 I consulted Bruno's repository
    // https://github.com/tryber/sd-011-project-movie-cards-library-stateful/blob/brunoarduarte-movie-cards-library-stateful/src/components/MovieLibrary.jsx

    onClickMovie(movie) {
        const { moviesList } = this.state;
        this.setState({
        movies: [...moviesList, movie],
        });
    }

    handleSearchInput({target}) {
        const { value } = target;
        this.setState({ searchText: value });
    }

    handleSearchTextFilter() {
        const { searchText, moviesList } = this.state;
        return moviesList.filter((movie) => movie
            .title.toLowerCase().includes(searchText)
            || movie.subtitle.toLowerCase().includes(searchText)
            || movie.storyline.toLowerCase().includes(searchText));
    }

    render() {
        const { moviesList, searchText } = this.state;
        console.log(searchText);
        console.log(moviesList);
        return(
            <div>
                <SearchBar onSearchTextChange={ this.handleSearchInput } />
                <AddMovie onClick={ this.onClickMovie } />
                <MovieList movies={ this.handleSearchTextFilter() }/>
            </div>
        );
    }
}

MovieLibrary.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.number,
        imagePath: PropTypes.string,
        }),
    ).isRequired,
};

export default MovieLibrary;