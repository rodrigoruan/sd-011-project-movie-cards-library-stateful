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
    const { onCLick } = this.props;
    return (
      <form>

      </form>
    );
  }
}
