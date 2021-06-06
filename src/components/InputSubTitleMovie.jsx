import React from 'react';
import PropTypes from 'prop-types';

class InputSubTitlemovie extends React.Component {
  render() {
    const { subtitle, hadleState } = this.props;
    // console.log(subtitle);
    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="subtitle-input"
      >
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          onChange={ hadleState }
          name="subtitle"
          data-testid="subtitle-input"
          id="subtitle-input"
        />
      </label>
    );
  }
}

export default InputSubTitlemovie;

InputSubTitlemovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  hadleState: PropTypes.func.isRequired,
};
