import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          value={ value }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
