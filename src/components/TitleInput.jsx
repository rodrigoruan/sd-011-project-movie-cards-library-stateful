import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { title, handleChange } = this.props;

    return (
      <label
        className="add-movie-labels"
        htmlFor="title-input"
        data-testid="title-input-label"
      >
        Título
        <input
          id="title-input"
          name="title"
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleInput;
