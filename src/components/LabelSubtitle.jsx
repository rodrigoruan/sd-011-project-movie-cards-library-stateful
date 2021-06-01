import React from 'react';
import PropTypes from 'prop-types';

class LabelSubtitle extends React.Component {
  render() {
    const { subtitle } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ subtitle }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

LabelSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default LabelSubtitle;
