import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          name="storyLine"
          value={ value }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

StoryLine.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default StoryLine;
