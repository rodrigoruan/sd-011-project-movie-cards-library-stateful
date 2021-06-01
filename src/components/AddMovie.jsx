// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
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
  }

  onClick() {

  }
    
  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="name-input" data-testid="title-input-label">
          Título
          <input name="title" type="text" data-testid="title-input" onChange={ title } />
        </label>
      </form>
    );
  }
}

export default AddMovie;
