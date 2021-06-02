import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    this.handleFunction = this.handleFunction.bind(this);
  }

  handleFunction() {
    this.setState({
      
    });
  }

  render() {
    return (
      <div />
    );
  }
}

AddMovie.propTypes = {
  OnClick: PropTypes.func.isRequired,
};

export default AddMovie;
