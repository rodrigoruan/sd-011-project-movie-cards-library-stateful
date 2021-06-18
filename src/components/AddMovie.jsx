// Requisito realizado com consultas aos sites:
// https://www.youtube.com/watch?v=99cWTot8bFc
// https://stackoverflow.com/questions/12894169/what-is-the-html-for-attribute-in-label
// https://app.betrybe.com/course/live-lectures/sd-cohort-8#aula-122-formularios-em-react
// https://reactjs.org/docs/forms.html
// Baseada na resolução do arquivo SearchBar.jsx
// Alterações realizadas após participação nos plantões
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      genre: 'action' };

    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ rating: event.target.value });
  // }

  handleChange({ target }) {
    const { name, value } = target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  newMovie = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(
      {
        rating: 0,
        subtitle: '',
        title: '',
        imagePath: '',
        storyLine: '',
        genre: 'action' },
    );
  }

  renderTitle = (title, handleChange) => (
    <label
      htmlFor="title-input"
      data-testid="title-input-label"
    >
      Título
      <input
        type="text"
        value={ title }
        name="title"
        onChange={ handleChange }
        data-testid="title-input"
      />
    </label>
  )

  renderSubtitle = (subtitle, handleChange) => (
    <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
      Subtítulo
      <input
        type="text"
        value={ subtitle }
        name="subtitle"
        onChange={ handleChange }
        data-testid="subtitle-input"
      />
    </label>
  )

  renderImage = (imagePath, handleChange) => (
    <label htmlFor="image-input" data-testid="image-input-label">
      Imagem
      <input
        type="text"
        value={ imagePath }
        name="imagePath"
        onChange={ handleChange }
        data-testid="image-input"
      />
    </label>
  )

  renderStoryLine = (storyLine, handleChange) => (
    <label htmlFor="storyline-input" data-testid="storyline-input-label">
      Sinopse
      <textarea
        value={ storyLine }
        name="storyLine"
        onChange={ handleChange }
        data-testid="storyline-input"
      />
    </label>
  )

  renderRating = (rating, handleChange) => (
    <label htmlFor="rating-input" data-testid="rating-input-label">
      Avaliação
      <input
        type="number"
        value={ rating }
        name="rating"
        onChange={ handleChange }
        data-testid="rating-input"
      />
    </label>
  )

  renderGenre = (genre, handleChange) => (
    <label htmlFor="storyline-input" data-testid="genre-input-label">
      Gênero
      <select
        value={ genre }
        name="genre"
        onChange={ handleChange }
        data-testid="genre-input"
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    </label>
  )

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.renderTitle(title, this.handleChange) }
        { this.renderSubtitle(subtitle, this.handleChange) }
        { this.renderImage(imagePath, this.handleChange) }
        { this.renderStoryLine(storyLine, this.handleChange) }
        { this.renderRating(rating, this.handleChange) }
        { this.renderGenre(genre, this.handleChange) }
        <button
          type="button"
          onClick={ this.newMovie }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// AddMovie.defaultProps = {
//   onClick: '()',
// };

export default AddMovie;
