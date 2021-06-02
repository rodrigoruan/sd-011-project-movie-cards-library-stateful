import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { state, func } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ state.subtitle }
          data-testid="subtitle-input"
          onChange={ func.changeValue }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  state: PropTypes.string,
  func: PropTypes.func,
};

InputSubtitle.defaultProps = {
  state: '',
  func: '',
};

export default InputSubtitle;
