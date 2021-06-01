import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="subtitulo" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          value={ value }
          id="subtitulo"
          type="text"
          onChange={ handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Subtitle;
