import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelTitle extends Component {
  render() {
    const { value, functionChange } = this.props;
    return (
      <label htmlFor="title-input-label" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ functionChange }
        />
      </label>
    );
  }
}

LabelTitle.propTypes = {
  value: PropTypes.string.isRequired,
  functionChange: PropTypes.func.isRequired,
};

export default LabelTitle;
