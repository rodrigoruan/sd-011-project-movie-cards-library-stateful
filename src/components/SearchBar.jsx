// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      teste: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      teste: event.target.value,
    });
  }

  render() {
    const { teste } = this.state;

    return (
      <div>

        <form>
          <label htmlFor="teste">
            Inclui o texto:
            <input
              type="text"
              value={ teste }
              onChange={ this.handleChange }
              name="teste"
              id="teste"
            />
          </label>
        </form>

      </div>
    );
  }
}

export default SearchBar;
