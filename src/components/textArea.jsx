import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { storyLine, change } = this.props;
    return (
      <label htmlFor="textArea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyLine"
          id="textArea"
          value={ storyLine }
          data-testid="storyline-input"
          onChange={ change }
          cols="30"
          rows="10"
        />
      </label>    
    );
  }
}

TextArea.propTypes = {
  storyLine: PropTypes.string,
  change: PropTypes.func,
};

TextArea.defaultProps = {
  storyLine: '',
  change: () => {},
};

export default TextArea;
