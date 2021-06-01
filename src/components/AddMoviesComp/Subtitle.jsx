import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Subtitle;

Subtitle.propTypes = {
  subtitle: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
