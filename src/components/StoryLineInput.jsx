import React from 'react';
import PropTypes from 'prop-types';

class StotyLineInput extends React.Component {
  render() {
    const { storyline, handleInput } = this.props;
    return (
      <div>
        <label
          className="add-label"
          data-testid="storyline-input-label"
          htmlFor="storyline"
        >
          Sinopse
          <textarea
            className="textarea-input"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ handleInput }
          />
        </label>
      </div>
    );
  }
}

StotyLineInput.propTypes = {
  storyline: PropTypes.string,
  handleInput: PropTypes.func,
}.isRequired;

export default StotyLineInput;
