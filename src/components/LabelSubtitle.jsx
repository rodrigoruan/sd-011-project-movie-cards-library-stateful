import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelSubtitle extends Component {
  render() {
    const { value, functionChange } = this.props;
    return (
      <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ functionChange }
        />
      </label>
    );
  }
}

LabelSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  functionChange: PropTypes.func.isRequired,
};

export default LabelSubtitle;
