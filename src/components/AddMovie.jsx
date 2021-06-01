import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FisrtPart from './FisrtPart';
import SecondPart from './SecondPart';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      // title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  render() {
    return (
      <form>
        <FisrtPart />
        <SecondPart />
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.Component;

export default AddMovie;
