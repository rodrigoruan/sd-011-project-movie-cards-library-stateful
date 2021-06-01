import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelTextarea extends Component {
  render() {
    const { value, functionChange } = this.props;
    return (
      <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          type="text"
          value={ value }
          data-testid="storyline-input"
          onChange={ functionChange }
        />
      </label>
    );
  }
}

LabelTextarea.propTypes = {
  value: PropTypes.string.isRequired,
  functionChange: PropTypes.func.isRequired,
};

export default LabelTextarea;
