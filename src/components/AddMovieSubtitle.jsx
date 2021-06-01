import React, { Component } from 'react';

class AddMovieTitle extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
    };

    this.createSubtitle = this.createSubtitle.bind(this);
  }

  createSubsubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  render() {
    const { subtitle } = this.state;

    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          onChange={ this.createSubtitle }
          data-testid="title-input"
        />
      </label>
    );
  }
}

export default AddMovieTitle;
