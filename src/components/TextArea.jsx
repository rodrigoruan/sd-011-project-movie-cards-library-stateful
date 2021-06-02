import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends Component {
  render() {
    const { handleAddMovie, storyline } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="textarea">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          onChange={ handleAddMovie }
          value={ storyline }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  handleAddMovie: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
}.isRequired;
