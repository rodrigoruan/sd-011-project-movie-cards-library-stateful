import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="label-storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          className="addMovie-inputs"
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Storyline;

Storyline.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

Storyline.defaultProps = {
  value: '',
  handleChange: () => {},
};
