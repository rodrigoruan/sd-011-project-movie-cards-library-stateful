import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  // prettier-ignore
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <h1>ola</h1>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
