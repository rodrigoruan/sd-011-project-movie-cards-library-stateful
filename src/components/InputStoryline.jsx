import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const { state, func } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          cols="30"
          rows="10"
          name="storyline"
          value={ state.storyline }
          data-testid="storyline-input"
          onChange={ func.changeValue }
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  state: PropTypes.string,
  func: PropTypes.func,
};

InputStoryline.defaultProps = {
  state: '',
  func: '',
};

export default InputStoryline;
