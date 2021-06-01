import React from 'react';
import PropTypes from 'prop-types';

class InputSubTitleNovie extends React.Component {
  render() {
    const { subtitle, hadleState } = this.props;

    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="inputAddMovie"
      >
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          onChange={ hadleState }
          name="subtitle"
          data-testid="title-input"
          id="inputAddMovie"
        />
      </label>
    );
  }
}

export default InputSubTitleNovie;

InputSubTitleNovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  hadleState: PropTypes.func.isRequired,
};
