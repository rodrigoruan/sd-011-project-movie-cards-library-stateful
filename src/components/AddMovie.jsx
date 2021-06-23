// precisa de implementação
// precisa ter estado gerenciável

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './AddMoviesFormItens/Title';
import Subtitle from './AddMoviesFormItens/Subtitle';
import ImagePath from './AddMoviesFormItens/ImagePath';
import Storyline from './AddMoviesFormItens/Storyline';
import Rating from './AddMoviesFormItens/Rating';

// Req.06
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
    this.newTitle = this.newTitle.bind(this);
    this.newSubtitle = this.newSubtitle.bind(this);
    this.newImage = this.newImage.bind(this);
    this.newSinopse = this.newSinopse.bind(this);
    this.newRating = this.newRating.bind(this);
    this.newGenre = this.newGenre.bind(this);
    this.insertNewMovie = this.insertNewMovie.bind(this);
  }

  insertNewMovie = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action' },
    );
  }

  newTitle({ target }) {
    this.setState({
      title: target.value,
    });
  }

  newSubtitle({ target }) {
    this.setState({
      subtitle: target.value,
    });
  }

  newImage({ target }) {
    this.setState({
      imagePath: target.value,
    });
  }

  newSinopse({ target }) {
    this.setState({
      storyline: target.value,
    });
  }

  newRating({ target }) {
    this.setState({
      rating: target.value,
    });
  }

  newGenre({ target }) {
    this.setState({
      genre: target.value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      // Req.07
      <form data-testid="add-movie-form">
        {/* Req.08 */}
        <Title title={ title } newTitle={ this.newTitle } />
        {/* Req.09 */}
        <Subtitle subtitle={ subtitle } newSubtitle={ this.newSubtitle } />
        {/* Req.10 */}
        <ImagePath imagePath={ imagePath } newImage={ this.newImage } />
        {/* Req.11 */}
        <Storyline storyline={ storyline } newSinopse={ this.newSinopse } />
        {/* Req.12 */}
        <Rating rating={ rating } newRating={ this.newRating } />
        {/* Req.13 */}
        <label htmlFor="rating-input" data-testid="genre-input-label">
          Gênero
          <select value={ genre } data-testid="genre-input" onChange={ this.newGenre }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        {/* Req.14 */}
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.insertNewMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}
// Req.06
AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
