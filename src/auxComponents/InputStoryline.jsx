import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const { storyline, stateModify } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          name="storyline"
          type="textarea"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ stateModify }
        />

      </label>
    );
  }
}

export default InputStoryline;

InputStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  stateModify: PropTypes.func.isRequired,
};
