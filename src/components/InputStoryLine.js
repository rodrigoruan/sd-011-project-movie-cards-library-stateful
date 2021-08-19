import React from 'react';
import PropTypes from 'prop-types';

class InputStoryLine extends React.Component {
  render() {
    const { storyline, handleValue } = this.props;

    return (
      <label htmlFor="ex11" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="ex11"
          value={ storyline }
          data-testid="storyline-input"
          name="storyline"
          onChange={ handleValue }
          cols="20"
          className="add-movie-inputs"
        />
      </label>
    );
  }
}

InputStoryLine.propTypes = {
  storyline: PropTypes.string,
  handleValue: PropTypes.func,
};

InputStoryLine.defaultProps = {
  storyline: '',
  handleValue: null,
};

export default InputStoryLine;
