import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label
        htmlFor="AddMovie__title"
        data-testid="title-input-label"
      >
        Título
        <input
          id="AddMovie__title"
          data-testid="title-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default AddMovieTitle;
