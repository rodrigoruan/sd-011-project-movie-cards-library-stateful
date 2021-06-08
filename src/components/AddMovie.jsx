// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LabeledInput from './LabeledInput';

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

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.resetStateInputs = this.resetStateInputs.bind(this);
  }

  handleChangeInput({ target }) {
    const { id, value } = target;

    this.setState({
      [id]: value,
    });
  }

  resetStateInputs() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderInput(labelText, id, type, inputValue) {
    return (
      <LabeledInput
        labelTestId={ `${id}-input-label` }
        labelText={ labelText }
        id={ id !== 'image' ? id : 'imagePath' }
        type={ type }
        value={ inputValue }
        onChange={ this.handleChangeInput }
        data-testid={ `${id}-input` }
      />
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          { this.renderInput('Título', 'title', 'text', title) }
          { this.renderInput('Subtítulo', 'subtitle', 'text', subtitle) }
          { this.renderInput('Imagem', 'image', 'text', imagePath) }
          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse
            <textarea
              value={ storyline }
              data-testid="storyline-input"
              onChange={ this.handleChangeInput }
              id="storyline"
            />
          </label>
          { this.renderInput('Avaliação', 'rating', 'number', rating) }
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero
            <select
              value={ genre }
              data-testid="genre-input"
              onChange={ this.handleChangeInput }
              id="genre"
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button
            type="button"
            data-testid="send-button"
            onClick={ () => {
              onClick(this.state);
              this.resetStateInputs();
            } }
          >
            Adicionar filme
          </button>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
