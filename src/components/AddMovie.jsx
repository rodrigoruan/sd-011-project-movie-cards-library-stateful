import React from 'react';
import InputAddMovie from './InputAddMovie';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.hadleState = this.hadleState.bind(this);
  }

  hadleState({ target }) {
    const { name, value } = target;
    console.log(target);
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const { title } = this.state;
    return (
      <InputAddMovie
        data-testid="text-input-label"
        htmlFor
        {Inclui o texto:}
        type="text"
        value={ searchText }
        onChange={ onSearchTextChange }
        name="searchBar"
        data-testid="text-input"
        placeholder="Search..."
      />
      <div>
        <form data-testid="add-movie-form">
          <label
            data-testid="title-input-label"
            htmlFor="inputAddMovie"
          >
            Título
            <input
              type="text"
              value={ title }
              onChange={ this.hadleState }
              name="title"
              data-testid="title-input"
              id="inputAddMovie"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
