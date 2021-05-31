import React, { Component } from 'react';

export default class AddMovie extends Component {
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

  render() {
    return (
      <form >
        <label data-testid="title-input-label">
          Titulo:
          <input type="text" value="" name="Title" onChange={this.handleChangerTitle} />
        </label>
      </form>
    )
  }
}
