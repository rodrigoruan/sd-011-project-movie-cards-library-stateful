import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSinopse extends Component {
  render() {
    const {
      value,
      handlerChange,
    } = this.props;
    return (
      <label
        htmlFor="storyline-input"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

InputSinopse.propTypes = {
  value: PropTypes.func.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default InputSinopse;
