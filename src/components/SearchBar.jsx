import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <fieldset>
            <label htmlFor="name-input" data-testid="text-input-label">
              inclui o texto
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
