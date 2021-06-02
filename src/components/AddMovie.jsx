import React from 'react';
import PropTypes from 'prop-types';
import AddMovieGenre from './AddMovieGenre';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieRating from './AddMovieRating'

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

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSend = this.handlerSend.bind(this);
    // this.resetDefaultState = this.resetDefaultState.bind(this);
  }

  handlerChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handlerSend(callback) {
    callback(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            name="title"
            onChange={ this.handlerChange }
            value={ title }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            name="subtitle"
            onChange={ this.handlerChange }
            value={ subtitle }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="imagePath"
            onChange={ this.handlerChange }
            value={ imagePath }
          />
        </label>
        <AddMovieStoryline storyline={ storyline } handler={ this.handlerChange } />
        <AddMovieGenre genre={ genre } handler={ this.handlerChange } />
        <AddMovieRating rating={ rating } handler={ this.handlerChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ () => { this.handlerSend(onClick); } }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
  // title: PropTypes.string.isRequired,
  // subtitle: PropTypes.string.isRequired,
  // imagePath: PropTypes.string.isRequired,
  // storyline: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  // genre: PropTypes.string.isRequired,
};

// AddMovie.defaultProps = {
//   onClick: () => {},
//   // title: '',
//   // subtitle: '',
//   // imagePath: '',
//   // storyline: '',
//   // rating: 0,
//   // genre: 'action',
// };
