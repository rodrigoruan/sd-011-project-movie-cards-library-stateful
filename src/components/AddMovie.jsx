import React, { Component } from 'react';
import Label from './Label';

class AddMovie extends Component {
  render() {
    const { onclick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Label
          name="Título"
          id="title-input-label"
          idLabel="title-input-label"
          value=""
          idI="title-input"
        />
      </form>
    );
  }
}

AddMovie.proTypes = {
  onclick: PropTypes.func.isRequired,
};

export default AddMovie;
