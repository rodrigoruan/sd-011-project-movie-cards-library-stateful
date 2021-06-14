import React, { Component } from 'react';
import propTypes from 'prop-types';

class AddMovieStoryline extends Component {
  render() {
    const { storyline, changer } = this.props;
    return (
      <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          data-testid="storyline-input"
          name="storyline"
          onChange={ changer }
          value={ storyline }
        />
      </label>
    );
  }
}

AddMovieStoryline.propTypes = {
  storyline: propTypes.text,
  changer: propTypes.func,
}.isRequired;

AddMovieStoryline.defaultProps = {
  storyline: '',
};

export default AddMovieStoryline;
