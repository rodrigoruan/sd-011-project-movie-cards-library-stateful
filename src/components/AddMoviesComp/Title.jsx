import React, { Component } from 'react';
import PropTypes from 'prop-types';

// aqui sao os componentes criados devido a ficar muito grande o render do AddMovies todos são filhos dele, recebem via props os dados e a função handleChange para controlar o estado
// todos possuem validação da props via proptype
// todos tem data-testids para validação dos testes
class Title extends Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={ title }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Title;

Title.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
