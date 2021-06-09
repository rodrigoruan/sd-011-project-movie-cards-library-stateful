import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, functionOnChange } = this.props;
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
            onChange={ functionOnChange }
          />
        </label>
      </div>);
  }
}
Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  functionOnChange: PropTypes.func.isRequired,
};
export default Subtitle;
