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

    this.handlerChange = this.handlerChange.bind(this);
    this.filter = this.filter.bind(this);
    this.movieAdded = this.movieAdded.bind(this);
  }

  handlerChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  /** Essa função abaixo é responsável por fazer a filtragem na barra de pesquisa "Inclui texto"
   * Ela também faz verificações na checkbox de favoritos e na parte de <select> por gênero.
   * Não posso deixar de agradecer a todos meus amigos estudantes que me ajudaram a chegar nesta
   * lógica e finalizar o requisito. Sem sombra de dúvidas, é um requisito muito bacana de ver funcionado */
  filter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;
    if (searchText) {
      filteredMovies = movies.filter(({ title,
        subtitle,
        storyline }) => title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText));
    }

    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter(({ bookmarked }) => bookmarked);
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter(({ genre }) => genre === selectedGenre);
    }
    return filteredMovies;
  }

  /** Meus agradecimentos a Thyago Pessoa por me fazer entender a lógica por trás desta função
   * movieAdded abaixo. Como não se pode user o .push devido a alguns problemas relacionados ao React,
   * o necessário é fazer com spread operator, que espalha os itens dentro de um array específico. */
  movieAdded(anyMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, anyMovie],
    });
  }

  render() {
    /** Esta desestruturação abaixo refere-se ao uso da prop no componente <MovieList> */
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      /* Às vezes, alguns requisitos passam despercebidos do meu entendimento, é aí onde eu busco ajuda
       * para entender melhor o que alguns estão requerindo!
       * Agradeçõ a ALberto Candido por me ajudar a entender o que o requisito pedia! */
      <div>
        <h1>Filminho e pipoquinha, ui ui ui</h1>
        <SearchBar
          filter={ this.filter }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handlerChange }
          onBookmarkedChange={ this.handlerChange }
          onSelectedGenreChange={ this.handlerChange }
        />

        <MovieList movies={ this.filter() } />
        <AddMovie onClick={ this.movieAdded } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};
