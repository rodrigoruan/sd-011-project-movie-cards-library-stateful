import React, { Component } from 'react';

import PropTypes from 'prop-types';

class InputStoryline extends Component {
  render() {
    const { handleChange, storyline } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
InputStoryline.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
};
InputStoryline.defaultProps = {
  storyline: '',
  handleChange: () => {},
};
export default InputStoryline;
