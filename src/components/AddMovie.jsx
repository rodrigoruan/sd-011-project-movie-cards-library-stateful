import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';

class AddMovie extends Component {
  constructor() {
    super();

    const initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.state = initialState;

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
  }

  render() {
    const { value, onChange } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleChange } />
        <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
        <label htmlFor="input-image" data-testid="image-input-label">
          Imagem
          <input
            id="input-image"
            value={ value }
            data-testid="image-input"
            onChange={ onChange }
          />
        </label>
        <label htmlFor="input-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="input-storyline"
            value={ value }
            data-testid="storyline-input"
            onChange={ onChange }
          />
        </label>
        <label htmlFor="inputt" data-testid="rating-input-label">
          Avaliação
          <input
            id="inputt"
            type="number"
            value={ value }
            data-testid="rating-input"
            onChange={ onChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onChange: PropTypes.func.isRequired,
};
