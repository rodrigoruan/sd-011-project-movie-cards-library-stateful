import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { storyline, func } = this.props;
    return (
      <label htmlFor="i2" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="rating-input"
          type="textarea"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ func }
          name="storyline"
        />
      </label>
    );
  }
}
export default TextArea;

TextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
