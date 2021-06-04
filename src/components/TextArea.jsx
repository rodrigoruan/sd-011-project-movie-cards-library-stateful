import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { storyline, handleInput } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          rows="5"
          cols="33"
          data-testid="storyline-input"
          onChange={ handleInput }
          name="storyline"
          value={ storyline }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  handleInput: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};
export default TextArea;
