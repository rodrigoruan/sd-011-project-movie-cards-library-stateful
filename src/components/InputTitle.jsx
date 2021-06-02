import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { state, func } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ state }
          data-testid="title-input"
          onChange={ func }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  state: PropTypes.string,
  func: PropTypes.objectOf(),
};

InputTitle.defaultProps = {
  state: '',
  func: '',
};

export default InputTitle;
