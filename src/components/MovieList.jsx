import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// acreidito que esse componente não foi alterado do projeto anterior mas ele se propoe a:
// -> receber via props a lista com os dados = movies
// -> possui as tags a o class name para passar nos testes do projeto
// -> faz um map nesse array de objeto contendo os filmes afim de mostrar todos eles - passa tambem a key que é uma exigencia para o react poder usar como indice e se organizar la
// -> por fim temos a validação da props via proptypes

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
