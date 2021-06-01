import React from 'react';
import PropTypes from 'prop-types';

export default class TitleInput extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          value={ title }
          type="text"
          data-testid="title-input"
          id="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
