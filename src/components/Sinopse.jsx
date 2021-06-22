import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="text4">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="text4"
          type="text"
          name="storyline"
          value={ storyline }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  onChange: PropTypes.func,
  storyline: PropTypes.string,
}.isRequired;

export default Sinopse;
