import React, { Component } from 'react';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <FirstPart />
        <SecondPart />
      </form>
    );
  }
}

AddMovie.propTypes = {
  // title: PropTypes.string.isRequired,
  // subtitle: PropTypes.string.isRequired,
};

export default AddMovie;
