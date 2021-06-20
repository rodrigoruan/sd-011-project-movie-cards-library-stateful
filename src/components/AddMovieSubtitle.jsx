import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label
        htmlFor="AddMovie__subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          id="AddMovie__subtitle"
          data-testid="subtitle-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieSubtitle;
