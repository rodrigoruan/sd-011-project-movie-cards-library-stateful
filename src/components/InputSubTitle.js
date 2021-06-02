import React from 'react';
import PropTypes from 'prop-types';

class InputSubTitle extends React.Component {
  render() {
    const { subtitle, handleValue } = this.props;

    return (
      <label htmlFor="ex9" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="ex9"
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          name="subtitle"
          onChange={ handleValue }
        />
      </label>
    );
  }
}

InputSubTitle.propTypes = {
  subtitle: PropTypes.string,
  handleValue: PropTypes.func,
};

InputSubTitle.defaultProps = {
  subtitle: '',
  handleValue: null,
};

export default InputSubTitle;