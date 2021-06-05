import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputComponent from './InputComponent';
import dataInputs from '../dataInputs';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.refreshState = this.refreshState.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'number' ? parseFloat(target.value) : target.value;
    this.setState({
      [name]: value,
    });
  }

  refreshState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, rating, storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputComponent
          info={ dataInputs }
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          rating={ rating }
          handleChange={ this.handleChange }
        />

        <label htmlFor="textareaInput" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="textareaInput"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
            name="storyline"
          />
        </label>

        <label htmlFor="selectInputAdd" data-testid="genre-input-label">
          Gênero
          <select
            id="selectInputAdd"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
            name="genre"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>

        <button
          type="button"
          data-testid="send-button"
          onClick={ this.refreshState }
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: undefined,
};
