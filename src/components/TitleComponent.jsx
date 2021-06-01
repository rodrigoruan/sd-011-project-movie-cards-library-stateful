import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          name="title"
          value={ value }
          onChange={ handleChange }
          data-testid="title-input"
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
