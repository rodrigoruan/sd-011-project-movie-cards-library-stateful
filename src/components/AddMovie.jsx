// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormElements from './FormElements';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleInputs = this.handleInputs.bind(this);
    this.addMovieBtn = this.addMovieBtn.bind(this);
  }

  handleInputs({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  addMovieBtn() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { subtitle, title, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          &quot;Título&quot;
          <input
            type="text"
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleInputs }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          &quot;Subtítulo&quot;
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleInputs }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          &quot;Imagem&quot;
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleInputs }
          />
        </label>
        <FormElements
          state={ this.state }
          func={ this.handleInputs }
          addMovie={ this.addMovieBtn }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
