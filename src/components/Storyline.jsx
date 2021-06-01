import React from 'react';
import PropTypes from 'prop-types';

export default class StoryLine extends React.Component {
  render() {
    const { value, changeState } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          name="storyLine"
          value={ value }
          onChange={ changeState }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  value: PropTypes.string,
  changeState: PropTypes.func,
};

StoryLine.defaultProps = {
  value: '',
  changeState: () => {},
};
