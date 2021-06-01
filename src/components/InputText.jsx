import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        data-testid="text-input-label"
        htmlFor="input"
      >
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          name="searchBar"
          placeholder="Search..."
        />
      </label>
    );
  }
}

export default InputText;

InputText.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
