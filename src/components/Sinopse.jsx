import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { value, functionOnChange } = this.props;
    return (
      <label
        htmlFor="storyline-input-label"
        data-testid="storyline-input-label"
      >
        Sinopse
        <input
          name="storyline"
          type="text"
          value={ value }
          data-testid="storyline-input"
          onChange={ functionOnChange }
        />
      </label>
    );
  }
}
Sinopse.propTypes = {
  value: PropTypes.string.isRequired,
  functionOnChange: PropTypes.func.isRequired,
};

export default Sinopse;
