import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Req.08
class Title extends Component {
  render() {
    const { title, newTitle } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          // name="title"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ newTitle }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  newTitle: PropTypes.func,
}.isRequired;

export default Title;
