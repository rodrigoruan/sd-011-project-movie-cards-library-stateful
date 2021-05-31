import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CreateInput from './CreateInput';
import CreateSelect from './CreateSelect';

class AddMovie extends Component {
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

    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  handleUserInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  submitData(event) {
    const { onClick } = this.props;
    event.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick();
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const values = [subtitle, title, imagePath];
    const userInputs = ['subtitle', 'title', 'imagePath'];
    return (
      <form data-testid="add-movie-form">
        {
          userInputs.map((input, index) => (
            <CreateInput
              key={ input }
              name={ input }
              value={ values[index] }
              handleUserInput={ this.handleUserInput }
            />
          ))
        }
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.handleUserInput }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={ rating }
            onChange={ this.handleUserInput }
          />
        </label>
        <CreateSelect value={ genre } handleUserInput={ this.handleUserInput } />
        <button
          data-testid="send-button"
          onClick={ onClick }
          type="submit"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
