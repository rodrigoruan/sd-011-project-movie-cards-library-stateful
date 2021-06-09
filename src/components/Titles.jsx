import React from 'react';
import PropTypes from 'prop-types';

class Titles extends React.Component {
  render() {
    const { value, functionOnChange } = this.props;
    return (
      <label
        htmlFor="title-input-label"
        data-testid="title-input-label"
      >
        Título
        <input
          name="title"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ functionOnChange }
        />
      </label>
    );
  }
}
Titles.propTypes = {
  value: PropTypes.string.isRequired,
  functionOnChange: PropTypes.func.isRequired,
};
export default Titles;
