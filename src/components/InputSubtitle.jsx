import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <label htmlFor="new-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          id="new-subtitle"
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleChanges }
        />
      </label>
    );
  }
}
export default InputSubtitle;

InputSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};
