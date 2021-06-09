import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Titulo
        <input
          data-testid="title-input"
          name="title"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
Title.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
export default Title;
