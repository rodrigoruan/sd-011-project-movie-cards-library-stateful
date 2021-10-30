import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import { SearchBar } from './SearchBar';
import { AddMovie } from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    //  Recebido os filmes por parâmetro do App.js
    const { movies } = this.props;
    //  Estado inicial
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.newMovie = this.newMovie.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  //  Função para filtrar os filmes
  filterMovies() {
    //  Desestruturado as propriedades do state
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    let filter = movies;
    //  Caso o bookmark seja true filtra todos os filmes favoritos
    if (bookmarkedOnly) filter = movies.filter(({ bookmarked }) => bookmarked);
    //  Caso tenha um gênero selecionada vai filtrar todos os filmes com aquele genre
    if (selectedGenre) filter = movies.filter(({ genre }) => genre === selectedGenre);
    //  Caso tenha algo no searchText vai procurar no title subtitle e storyline dos filmes quais tem aquelas letras
    if (searchText) {
      filter = movies
        .filter(({ title, subtitle, storyline }) => `${title} ${subtitle} ${storyline}`
          .includes(searchText));
    }

    return filter;
  }

  //  Função para adicioanr um novo filme, seta o state com os filmes anteriores e o novo.
  newMovie(event) {
    this.setState((lastMovies) => ({
      movies: [...lastMovies.movies, event],
    }));
  }

  //  Função para salvar o state de cada input padrão
  changeState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    //  Desestruturando as propriedades do state para usar
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
        //  Passado a função changeState, para todas já que ela vai pegar o name, e o value dinamicamente posso usá-la para todas.
          onSelectedGenreChange={ this.changeState }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.changeState }
          bookmarkedOnly={ bookmarkedOnly }
          onSearchTextChange={ this.changeState }
          searchText={ searchText }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.newMovie } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
