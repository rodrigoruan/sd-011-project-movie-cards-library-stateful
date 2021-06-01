import React from 'react';
import PropTypes from 'prop-types';

class InputTitleNovie extends React.Component {
  render() {
    const { title, hadleState } = this.props;

    return (
      <label
        data-testid="title-input-label"
        htmlFor="inputAddMovie"
      >
        Título
        <input
          type="text"
          value={ title }
          onChange={ hadleState }
          name="title"
          data-testid="title-input"
          id="inputAddMovie"
        />
      </label>
    );
  }
}

export default InputTitleNovie;

InputTitleNovie.propTypes = {
  title: PropTypes.string.isRequired,
  hadleState: PropTypes.func.isRequired,
};
