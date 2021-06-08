import React from 'react';
import PropTypes from 'prop-types';

class AddSinopse extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label
        htmlFor="sinopse"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddSinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddSinopse;
