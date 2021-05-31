import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    const initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.state = initialState;
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title">
          <input
            id="input-title"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
