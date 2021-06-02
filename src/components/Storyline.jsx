import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="label-storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          className="addMovie-inputs"
          name="storyline"
          storyline={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Storyline;

Storyline.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
};

Storyline.defaultProps = {
  storyline: '',
  handleChange: () => {},
};
