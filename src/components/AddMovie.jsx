// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';

class AddMovie extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.state({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  submit() {
    const { onClick } = this.props;
    onClick();
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          value={ title }
          nameInput={ title }
          dataInput="title-input"
          func={ this.submit }
          name="Título"
          data="title-input-label"
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
