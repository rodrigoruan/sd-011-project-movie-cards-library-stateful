import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends Component {
  render() {
    const {
      value,
      handlerChange,
    } = this.props;
    return (
      <label
        htmlFor="subtitle-input"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  value: PropTypes.func.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default InputSubtitle;
