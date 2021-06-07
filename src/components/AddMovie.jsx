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
    this.submitClick = this.submitClick.bind(this);
  }

  submitClick(state) {
    this.setState = state.props;
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <button type="submit" data-testid="send-button" onClick={ this.submitClick }>Adicionar filme</button>
      </form>
    );
  }
}

export default addMovie;
