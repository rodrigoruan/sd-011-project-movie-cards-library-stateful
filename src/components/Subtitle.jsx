import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label
          htmlFor="subtitle-input-label"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            name="subtitle"
            type="text"
            value={ value }
            data-testid="subtitle-input"
            onChange={ onChange }
          />
        </label>
      </div>);
  }
}
Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Subtitle;
