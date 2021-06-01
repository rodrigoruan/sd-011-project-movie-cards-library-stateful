import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { storyline, handler } = this.props;
    return (
      <label htmlFor="i2" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="rating-input"
          type="textarea"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handler }
          name="storyline"
        />
      </label>
    );
  }
}
export default TextArea;

TextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
