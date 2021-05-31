import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { srcTXT, onSearchTextChange } = this.props;
    return (
      <label htmlFor="id" data-testid="text-input-label">
        Inclui o texto:
        <input
          id="id"
          type="text"
          value={ srcTXT }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

InputText.propTypes = {
  srcTXT: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default InputText;
