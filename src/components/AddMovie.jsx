// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    return (
      <div>
        <p>Add Movie</p>
        <form data-testid="add-movie-form" />
      </div>
    );
  }
}

export default AddMovie;
