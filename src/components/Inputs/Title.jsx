import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { title, handleFunction } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          name="title"
          id="title-input"
          value={ title }
          onChange={ handleFunction }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  handleFunction: PropTypes.func,
}.isRequired;

export default Title;
