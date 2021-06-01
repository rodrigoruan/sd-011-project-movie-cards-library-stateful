import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
import Select from './Select';

class AddMovie extends Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <FirstPart />
        <SecondPart />
        <Select />
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.Component;

export default AddMovie;
