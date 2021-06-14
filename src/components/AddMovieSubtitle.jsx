import React, { Component } from 'react';
import propTypes from 'prop-types';

class AddMovieSubtitle extends Component {
  render() {
    const { subtitle, changer } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
          onChange={ changer }
          value={ subtitle }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  subtitle: propTypes.text,
  changer: propTypes.func,
}.isRequired;

AddMovieSubtitle.defaultProps = {
  subtitle: '',
};

export default AddMovieSubtitle;
