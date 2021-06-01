import React from 'react';
import PropTypes from 'prop-types';

class InputTextArea extends React.Component {
  render() {
    const { storyline, hadleState } = this.props;

    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="inputAddMovie"
      >
        Sinopse
        <input
          type="textarea"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ hadleState }
          name="storyline"
          id="inputAddMovie"
        />
      </label>
    );
  }
}

export default InputTextArea;

InputTextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  hadleState: PropTypes.func.isRequired,
};
