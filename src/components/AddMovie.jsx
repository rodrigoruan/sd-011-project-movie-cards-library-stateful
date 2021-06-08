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
    this.handleMovie = this.handleMovie.bind(this);
  }

  handleMovie({ e }) {
    const { name, value } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleId" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            id="titleId"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;