import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="addMovieTitleInput">
        Título
        <input
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
          id="addMovieTitleInput"
          name="title"
        />
      </label>
    );
  }
}

export default Title;
