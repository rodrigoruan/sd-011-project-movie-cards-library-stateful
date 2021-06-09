import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Titulo
        <input
          data-testid="title-input"
          name="subtitle"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
export default Subtitle;
