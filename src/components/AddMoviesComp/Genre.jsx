import React, { Component } from 'react';
import PropTypes from 'prop-types';
// aqui sao os componentes criados devido a ficar muito grande o render do AddMovies todos são filhos dele, recebem via props os dados e a função handleChange para controlar o estado
// todos possuem validação da props via proptype
// todos tem data-testids para validação dos testes
class Genre extends Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <div>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Genre;

Genre.propTypes = {
  genre: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
