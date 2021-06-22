import React from 'react';
import PropTypes from 'prop-types';
/* Requisito 6 */
class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.stateSet = this.stateSet.bind(this);
  }

  stateSet() {
    const { onClick } = this.props;
    onClick();
  }
  /* Requisito 7,8 */
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
        <label data-testid="title-input-label" htmlFor="text">
          Título
          <input
            value={title}
            data-testid="title-input"
            onChange={this.stateSet}
            type="text"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="text">
          Subtítulo
          <input
            value={subtitle}
            data-testid="subtitle-input"
            onChange={this.stateSet}
            type="text"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="text">
          Imagem
          <input
            value={imagePath}
            data-testid="image-input"
            onChange={this.stateSet}
            type="text"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="text">
          Sinopse
          <textarea
            value={storyline}
            data-testid="storyline-input"
            onChange={this.stateSet}
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="text">
          Avaliação
          <input
            value={rating}
            data-testid="rating-input"
            onChange={this.stateSet}
            type="number"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="text">
          Gênero
          <select
            value={genre}
            data-testid="genre-input"
            onChange={this.stateSet}
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;