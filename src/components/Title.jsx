import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="titleInp" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          id="titleInp"
          name="title"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Title;
