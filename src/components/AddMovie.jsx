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
    onClick = this.props;
  render() {
    const { 
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre } = this.state;

    return ();
  }
}

export default AddMovie;