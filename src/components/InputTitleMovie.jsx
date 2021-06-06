import React from 'react';
import PropTypes from 'prop-types';

class InputTitlemovie extends React.Component {
  render() {
    const { title, hadleState } = this.props;

    return (
      <label
        data-testid="title-input-label"
        htmlFor="title-input"
      >
        Título
        <input
          type="text"
          value={ title }
          onChange={ hadleState }
          name="title"
          data-testid="title-input"
          id="title-input"
        />
      </label>
    );
  }
}

export default InputTitlemovie;

InputTitlemovie.propTypes = {
  title: PropTypes.string.isRequired,
  hadleState: PropTypes.func.isRequired,
};
