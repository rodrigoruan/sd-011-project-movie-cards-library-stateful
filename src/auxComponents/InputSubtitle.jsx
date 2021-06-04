import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { stateModify, subtitle } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          value={ subtitle }
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ stateModify }
        />
      </label>
    );
  }
}

export default InputSubtitle;

InputSubtitle.propTypes = {
  stateModify: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
