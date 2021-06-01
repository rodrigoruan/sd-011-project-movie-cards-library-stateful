import React from 'react';
import Title from './Title';

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
    this.addMovieFunction = this.addMovieFunction.bind(this);
  }

  addMovieFunction(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title addMovieFunction={ this.addMovieFunction } value={ title } />
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            id="subtitle"
            onChange={ this.addMovieFunction }
            value={ subtitle }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            type="text"
            id="imagePath"
            data-testid="image-input"
            onChange={ this.addMovieFunction }
            value={ imagePath }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            id="storyline"
            data-testid="storyline-input"
            onChange={ this.addMovieFunction }
            value={ storyline }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
