import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
import Select from './Select';
import Button from './Button';

const status = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();

    this.state = status;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  resetState() {
    this.setState(status);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <FirstPart
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <SecondPart
          storyline={ storyline }
          rating={ rating }
          handleChange={ this.handleChange }
        />
        <Select
          genre={ genre }
          handleChange={ this.handleChange }
        />
        <Button
          sendFunction={ this.handleSubmit }
        />
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.Component;

export default AddMovie;
