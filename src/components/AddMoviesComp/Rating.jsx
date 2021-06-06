import React, { Component } from 'react';
import PropTypes from 'prop-types';
// aqui sao os componentes criados devido a ficar muito grande o render do AddMovies todos são filhos dele, recebem via props os dados e a função handleChange para controlar o estado
// todos possuem validação da props via proptype
// todos tem data-testids para validação dos testes
class Rating extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={ rating }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;
