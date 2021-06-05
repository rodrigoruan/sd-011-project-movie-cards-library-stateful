import React, { Component } from 'react';

// implement AddMovie component here
class addMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '',
      genre: 'action',
    };
  }

  render() {

    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input">
            Título
            <input
              data-testid="title-input"
              onChange={ title }
            />
          </label>

          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
            Subtítulo
            <input
              data-testid="subtitle-input"
              onChange={ subtitle }
            />
          </label>

        </form>
      </div>
    );
  }
}
export default addMovie;
