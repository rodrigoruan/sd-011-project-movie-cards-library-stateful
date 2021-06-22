import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="text1">
        Título
        <input
          data-testid="title-input"
          id="text1"
          type="text"
          name="title"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Title;
