// I had to make two files to complete Movie's informations cause Lint limit about 50 lines inside render()
import React from 'react';
import PropTypes from 'prop-types';

class MovieContent extends React.Component {
  render() {
    const {
      storyLine,
      handleChange,
    } = this.props;

    return (
      <fieldset>
        <label htmlFor="storyline-input" data-testid="storyline">
          Sinopse
          <textarea
            name="storyLine"
            id="storyline-input"
            value={ storyLine }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating-input"
            value={ rating }
            data-testid="rating-input"
            onChange={ handleChange }
          />
        </label>
      </fieldset>
    );
  }
}

MovieContent.propTypes = {
  storyLine: PropTypes.string,
}.isRequired;

export default MovieContent;
