import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storylineID">
        Sinopse
        <input
          value={ value }
          type="text"
          id="storylineID"
          name="storyline"
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

export default TextArea;

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
