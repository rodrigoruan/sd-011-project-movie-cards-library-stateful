import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

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
    const { onClick } = this.props;
    return (
      <div />
    );
  }
}

AddMovie.prototype = {
  onClick: PropTypes.func.isRequired,
};
