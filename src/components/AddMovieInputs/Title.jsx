import React, { Component } from 'react';
import { string, func } from 'prop-types';

class Title extends Component {
  render() {
    const { title, handleInputChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title"
          data-testid="title-input"
          value={ title }
          onChange={ handleInputChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: string,
  handleInputChange: func,
}.isRequired;

export default Title;
