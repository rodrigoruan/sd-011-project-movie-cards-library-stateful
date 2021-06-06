import React, { Component } from 'react';
import PropTypes from 'prop-types';
// aqui sao os componentes criados devido a ficar muito grande o render do AddMovies todos são filhos dele, recebem via props os dados e a função handleChange para controlar o estado
// todos possuem validação da props via proptype
// todos tem data-testids para validação dos testes
class Imagepath extends Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Imagepath;

Imagepath.propTypes = {
  subtitle: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
