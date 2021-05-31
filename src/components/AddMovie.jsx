import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: action,
    });
  }
  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
      </form>
    );
  }
}

export default AddMovie;
