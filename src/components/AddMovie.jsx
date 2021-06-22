// precisa de implementação
// precisa ter estado gerenciável

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        {/* // Req.08 */}
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input type="text" value={ title } data-testid="title-input" onChange={ this.newTitle } />
        </label>
        {/* // Req.09 */}
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" value={ subtitle } data-testid="subtitle-input" onChange={ this.newSubtitle } />
        </label>
        {/* // Req.10 */}
        <label htmlFor="image-input-label" data-testid="image-input-label">
          Imagem
          <input type="text" value={ imagePath } data-testid="image-input" onChange={ this.newImage } />
        </label>
        {/* // Req.11 */}
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea value={ storyline } data-testid="storyline-input" onChange={ this.newSinopse } />
        </label>
        {/* // Req.12 */}
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input type="number" value={ rating } data-testid="rating-input" onChange={ this.newRating } />
        </label>
        {/* // Req.13 */}
        <label htmlFor="rating-input" data-testid="genre-input-label">
          Gênero
          <select value={ genre } data-testid="genre-input" onChange={ this.newGenre }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        {/* // Req.14 */}
        <button type="button" data-testid="send-button" onClick={ this.insertNewMovie }>Adicionar filme</button>
      </form>
    );
  }
}
// Req.06
AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
