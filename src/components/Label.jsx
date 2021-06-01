import React, { Component } from 'react';
import PropTypes from 'prop-types';

//  Componente para criar os inputs...
export class Label extends Component {
  render() {
    const { type, title, change, name, value } = this.props;
    //  Desestruturando as propriedades que vou utilizar pra criar os inputs
    return (
      <label
        //  Se o name for imagePath trocarei, pois quero image-input-label pois o id que pede na label da imagem é 'image-input-label' e se eu usar o name iria ficar imagePath-input-labe, os outros o name é o mesmo então posso usar ele mesmo.
        data-testid={
          name === 'imagePath' ? 'image-input-label' : `${name}-input-label`
        }
        htmlFor={ name }
      >
        {title /* title é o texto que vai ter na label */}
        {type === 'textarea' ? (
          <textarea /* Caso o tipo for textarea vai renderizar um text-area caso contrário um input */
            data-testid={ `${name}-input` }
            onChange={ change }
            name={ name }
            value={ value }
          />
        ) : (
          <input
            type={
              name === 'rating'
                ? 'number'
                : 'text' /* se o nome for rating, o input que vai colocar a nota do filme o type tem que ser number, caso contrário texto */
            }
            onChange={ change }
            name={ name }
            data-testid={ name === 'imagePath' ? 'image-input' : `${name}-input` /*  */ }
            value={ value }
          />
        )}
      </label>
    );
  }
}

export default Label;

Label.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
