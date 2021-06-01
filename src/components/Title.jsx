import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="addMovieTitleInput">
        Título
        <input
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ handleChange }
          id="addMovieTitleInput"
          name="title"
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Title;
