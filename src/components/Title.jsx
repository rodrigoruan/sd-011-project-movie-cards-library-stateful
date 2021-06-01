import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="titulo" data-testid="title-input-label">
        Título
        <input
          name="title"
          value={ value }
          id="titulo"
          type="text"
          onChange={ handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

Title.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Title;
