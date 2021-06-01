import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextareaField extends Component {
  render() {
    const { storyline, handleState } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ handleState }
        />
      </label>
    );
  }
}

export default TextareaField;

TextareaField.propTypes = {
  storyline: PropTypes.string,
  handleState: PropTypes.func,
};

TextareaField.defaultProps = {
  storyline: '',
  handleState: () => {},
};
