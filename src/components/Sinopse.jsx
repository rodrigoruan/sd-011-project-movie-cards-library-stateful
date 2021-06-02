import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyLine, handleElements } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="text4">
        Sinopse
        <input
          data-testid="storyline-input"
          id="text4"
          type="text"
          name="storyLine"
          value={ storyLine }
          onChange={ handleElements }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  handleElements: PropTypes.func.isRequired,
  storyLine: PropTypes.string.isRequired,
};

export default Sinopse;
