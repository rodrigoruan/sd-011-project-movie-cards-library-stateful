import React from 'react';
import PropTypes from 'prop-types';

class LabelSubtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

LabelSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LabelSubtitle;
