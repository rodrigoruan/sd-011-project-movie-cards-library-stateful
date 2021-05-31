import React from 'react';
// import PropTypes from 'prop-types';

class SerarchBar extends React.Component {
  render() {
    // const {
    //   searchText,
    //   onSearchTextChange,
    //   bookmarkedOnly,
    //   onBookmarkedChange,
    //   selectedGenre,
    //   onSelectedGenreChange,
    // } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <input type="text" />
        </form>
      </div>
    );
  }
}

// SerarchBar.defaultProps = {
//   searchText: PropTypes.string,
//   onSearchTextChange: PropTypes.string,
//   bookmarkedOnly: PropTypes.string,
//   onBookmarkedChange: PropTypes.string,
//   selectedGenre: PropTypes.string,
//   onSelectedGenreChange: PropTypes.string,
// };

export default SerarchBar;
