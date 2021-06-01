import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubTitleInput extends Component {
  render() {
    const { subtitle, handleState } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleState }
        />
      </label>
    );
  }
}

export default SubTitleInput;

SubTitleInput.propTypes = {
  subtitle: PropTypes.string,
  handleState: PropTypes.func,
};

SubTitleInput.defaultProps = {
  subtitle: '',
  handleState: () => {},
};
