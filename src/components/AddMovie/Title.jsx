import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        <input
          type="text"
          data-testid="title-input"
          name="title"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
