import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelTextArea extends Component {
  render() {
    const { valueInput, func } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ valueInput }
          onChange={ func }
        />
      </label>
    );
  }
}

export default LabelTextArea;

LabelTextArea.propTypes = {
  valueInput: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
