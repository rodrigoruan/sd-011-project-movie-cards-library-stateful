// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText } = this.props;

    return (
    <div>
      <input type="text" value={ searchText } data-testid="text-input"></input>
    </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
