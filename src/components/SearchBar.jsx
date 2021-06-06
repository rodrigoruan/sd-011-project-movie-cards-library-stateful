// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, } = this.props;
    return (
      <form action="" data-testid="search-bar-form">
        <label htmlFor="" data-testid="text-input-label">Inclui o texto:</label>
        <input type="text" value={searchText} onChange={onSearchTextChange} data-testid="text-input" />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => {},
};

export default SearchBar;
