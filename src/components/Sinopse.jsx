import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sinopse extends Component {
  render() {
    const { sinopse, chg } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ sinopse }
          onChange={ chg }
        />
      </label>
    );
  }
}
export default Sinopse;

Sinopse.propTypes = {
  sinopse: PropTypes.string.isRequired,
  chg: PropTypes.func.isRequired,
};
