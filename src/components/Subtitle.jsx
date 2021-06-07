import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          className="addMovie-inputs"
          type="text"
          name="subtitle"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Subtitle;

Subtitle.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

Subtitle.defaultProps = {
  value: '',
  handleChange: () => {},
};
