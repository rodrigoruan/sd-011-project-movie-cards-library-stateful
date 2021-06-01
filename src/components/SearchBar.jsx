import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <fieldset>
            <legend>inclui o texto</legend>
            <label htmlFor="name-input" data-testid="text-input-label">
              <input
                type="text"
                name=""
                id=""
                value="searchText"
                onChange="onSearchTextChange"
                data-testid="text-input"
              />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SearchBar;
