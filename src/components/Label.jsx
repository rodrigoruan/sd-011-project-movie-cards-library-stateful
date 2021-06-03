import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Label extends Component {
  createLabel(title, name, func, value) {
    const input = (title === 'Sinopse')
      ? this.createTextarea(name, func, value)
      : this.createInput(name, func, value);

    return (
      <label htmlFor={ `${name}-input` } data-testid={ `${name}-input-label` }>
        <p>{title}</p>
        {input}
      </label>
    );
  }

  createInput(name, func, value) {
    return (
      <input
        type={ (name === 'rating') ? 'number' : 'text' }
        data-testid={ `${name}-input` }
        onChange={ func }
        name={ (name === 'image') ? 'imagePath' : name }
        value={ value }
      />
    );
  }

  createTextarea(name, func, value) {
    return (
      <textarea
        data-testid={ `${name}-input` }
        onChange={ func }
        name={ (name === 'image') ? 'imagePath' : name }
        value={ value }
      />
    );
  }

  render() {
    const { title, name, func, value } = this.props;
    return (this.createLabel(title, name, func, value));
  }
}

Label.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Label;
