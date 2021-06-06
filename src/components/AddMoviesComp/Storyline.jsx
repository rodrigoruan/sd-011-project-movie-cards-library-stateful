import React, { Component } from 'react';
import PropTypes from 'prop-types';
// aqui sao os componentes criados devido a ficar muito grande o render do AddMovies todos são filhos dele, recebem via props os dados e a função handleChange para controlar o estado
// todos possuem validação da props via proptype
// todos tem data-testids para validação dos testes
class Storyline extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <div>
        <label data-testid="storyline-input-label" htmlFor="image">
          Sinopse
          <textarea
            data-testid="storyline-input"
            type="text"
            name="storyline"
            value={ storyline }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Storyline;

Storyline.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
