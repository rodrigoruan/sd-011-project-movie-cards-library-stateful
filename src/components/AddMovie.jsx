import React from 'react';
import OtherInputs from './OtherInputs';

class AddMovie extends React.Component {
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
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="text-input-two" data-testid="title-input-label">
          Título
          <input
            id="text-input-two"
            name="title"
            type="text"
            value={ this.state.title }
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
            value={ this.state.subtitle }
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
            value={ this.state.imagePath }
            data-testid="image-input"
            onChange={ this.handleChanges }
          />
        </label>
        <OtherInputs handleChanges={ this.handleChanges } state={ this.state } />
      </form>
    );
  }
}

export default AddMovie;
