import React from 'react';
import PropTypes from 'prop-types';
import OtherInputs from './OtherInputs';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleChanges = this.handleChanges.bind(this);
    this.eraseState = this.eraseState.bind(this);
  }

  handleChanges({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  eraseState(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="text-input-two" data-testid="title-input-label">
          Título
          <input
            id="text-input-two"
            name="title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChanges }
          />
        </label>
        <label htmlFor="text-input-three" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="text-input-three"
            name="subtitle"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChanges }
          />
        </label>
        <label htmlFor="text-input-image" data-testid="image-input-label">
          Imagem
          <input
            id="text-input-image"
            name="imagePath"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChanges }
          />
        </label>
        <OtherInputs handleChanges={ this.handleChanges } state={ this.state } />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.eraseState }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
