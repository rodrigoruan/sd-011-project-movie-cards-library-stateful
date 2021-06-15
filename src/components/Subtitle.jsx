import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, handleChangeSubtitle } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          type="text"
          value={ value }
          onChange={ handleChangeSubtitle }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string,
  handleChangeSubtitle: PropTypes.func,
}.isRequired;
export default Subtitle;
