import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { handlerChange } = this.props;
    const { storyline } = this.props;
    return (
      <label htmlFor="text4" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="text4"
          data-testid="storyline-input"
          type="text"
          name="storyline"
          value={ storyline }
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default Sinopse;
