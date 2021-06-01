import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        <input
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ handleChange }
        />
        Título
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Title;
