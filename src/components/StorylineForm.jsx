import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StorylineForm extends Component {
  // prettier-ignore
  render() {
    const { storyline, onChangeHandler } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          type="text"
          onChange={ onChangeHandler }
          value={ storyline }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StorylineForm.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
