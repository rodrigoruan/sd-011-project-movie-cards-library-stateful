import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSipnose extends Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <label htmlFor="new-sipnose" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="new-sipnose"
          type="text"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChanges }
        />
      </label>
    );
  }
}
export default InputSipnose;

InputSipnose.propTypes = {
  value: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};
