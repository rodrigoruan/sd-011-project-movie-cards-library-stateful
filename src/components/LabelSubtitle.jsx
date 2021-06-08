import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelSubtitle extends Component {
  render() {
    const { subtitle, handleStates } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleStates }
        />
      </label>
    );
  }
}

export default LabelSubtitle;

LabelSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleStates: PropTypes.func,
};

LabelSubtitle.defaultProps = {
  handleStates: 'Insert handleStates Function',
};
