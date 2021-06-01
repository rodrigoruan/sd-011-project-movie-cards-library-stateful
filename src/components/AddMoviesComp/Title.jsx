import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={ title }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Title;

Title.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
