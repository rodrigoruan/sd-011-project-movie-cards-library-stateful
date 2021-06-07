import React from 'react';
import PropTypes from 'prop-types';

export default class Storyline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          type="text-area"
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
