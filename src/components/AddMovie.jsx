import React, { Component } from 'react';
import GenericInput from './GenericInput';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <GenericInput
          labelDataTestId="title-input-label"
          labelText="Título"
          inputDataTestId="title-input"
          inputName="title"
          inputValue={ title }
          handleChange={ this.handleChange }
        />

        <GenericInput
          labelDataTestId="subtitle-input-label"
          labelText="Subtítulo"
          inputDataTestId="subtitle-input"
          inputName="subtitle"
          inputValue={ subtitle }
          handleChange={ this.handleChange }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {

}.isRequired;

export default AddMovie;
