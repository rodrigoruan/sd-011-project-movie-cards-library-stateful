import React, { Component } from 'react';

class AddMovieTitle extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };

    this.createTitle = this.createTitle.bind(this);
  }

  createTitle(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ title }
          onChange={ this.createTitle }
          data-testid="title-input"
        />
      </label>
    );
  }
}

export default AddMovieTitle;
