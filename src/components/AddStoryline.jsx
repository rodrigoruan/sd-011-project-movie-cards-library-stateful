import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddStoryline extends Component {
  render() {
    const { storyline, handleChanges } = this.props;
    return (
      <div>
        <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
          Sinopse:
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ handleChanges }
          />
        </label>
      </div>
    );
  }
}

AddStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};
