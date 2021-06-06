import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovies from './AddMovie';
import MovieList from './MovieList';
// Componente MovieLibrary:
// Componente de grande importancia - pai de varios componentes
// -> tem alguns estados setados logo abaixo bem seu construtor e o super
class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    // é feito o bind das funções para que sejam acessiveis via this dentro do render
    this.handleChange = this.handleChange.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
    this.AddMovies = this.AddMovies.bind(this);
  }

  // A função handle change tem como objetivo controlar o estados na hora que o elemento sofre uma alteração
  // temos um destruct do event.target
  // capturamos o name do elemento via destruct
  // fazemos um verificação com um if ternario para caso o elemento seja um checkbox ele atribua ao valor o target.checked para os outros casos ele atribiu o campo valor
  // depois seta o estado atribuindo o nome e o valor daquele elemento
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  /*
  Aqui fiz de duas formas
  uma usando o if abaixo
  nesse caso funciona, passa nos testes mas por algum motivo que não sei dizer o filtro não é dinamico em todas as estancias ele so consegue filtrar um por vez
  basicamente uso ifs para determinar o tipo de filtro que quero naquele momento caso atenda a verificação faço um filtro nos filmes
  */

  // filterMovie() {
  //   const { movies } = this.state;
  //   const { searchText, bookmarkedOnly, selectedGenre } = this.state;
  //   let resultMovies = movies;
  //   if (searchText !== '') {
  //     resultMovies = movies.filter((film) => (film.title.includes(searchText)

  //     || film.subtitle.includes(searchText)
  //     || film.storyline.includes(searchText)));
  //   }
  //   if (bookmarkedOnly) {
  //     resultMovies = movies.filter((film) => film.bookmarked === true);
  //   }
  //   if (selectedGenre !== '') {
  //     resultMovies = movies.filter((film) => film.genre === selectedGenre);
  //   }
  //   return resultMovies;

  /*
  aqui com a ajuda do Rafael consegui fazer usando apenas filters
  -> recebo o movies via estado, e os outros estados
  -> retorno um filtro que primeiro filtra pelo texto, usando o ou verifico se o que foi digitado tem correspondencia no titulo, subtitulo e na sinopse do filme
  -> o resultado disso faço outro filtro verificando se o bookmarkedOnly é se o filme é bookmarked
  -> o resultado desse filtro verifico ou todos os filmes ou o genero selecionado
  */
  filterMovie() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return movies.filter((film) => film.title.includes(searchText)
    || film.subtitle.includes(searchText)
    || film.storyline.includes(searchText))

      .filter((film) => film.bookmarked || !bookmarkedOnly)

      .filter((film) => selectedGenre === '' || film.genre === selectedGenre);
  }

  // ao clicar no botao submit recebo como parametro e setando o state e adicionando ao final do array movies via spread operator

  AddMovies(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  /*
  aqui inicia o render:
  -> coloco em uma variavel o retorno da função filterMovie
  -> recebo os estados
  -> renderizo o Searchbar passando via props os estados e a função handleChange
  -> renderizo a MovieList
  -> por fim renderizo o addMovies form afim de adicionar um novo filme
  */
  render() {
    const resultFilter = this.filterMovie();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ resultFilter } />
        <AddMovies onClick={ this.AddMovies } />
      </div>
    );
  }
}
export default MovieLibrary;
// valido o movies que foi recebido via props
MovieLibrary.propTypes = {
  movies: PropTypes.string,
}.isRequired;
