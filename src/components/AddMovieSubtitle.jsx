import React, { Component } from 'react';

class AddMovieSubtitle extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
    };

    this.createSubtitle = this.createSubtitle.bind(this);
  }

  createSubtitle(event) {
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

export default AddMovieSubtitle;
