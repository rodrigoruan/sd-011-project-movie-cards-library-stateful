import React from 'react';
import PropTypes from 'prop-types';
import AddMovieButton from './AddMovieButton'

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

/*  */
handleChange(event) {
  const { name, value } = event.target;
  this.setState({
    [name]: value,
  });
}
/*  */
handleClick() {
  const { onClick } = this.props;
  const { movie } = this.state;
  this.setState({
    subtitle:'',
    title:'',
    imagePath:'',
    rating: 0,
    genre: 'action',
  });
  onClick(movie);
}

  /* Requisito 7,8 */
  render() {
    const { handleChange, handleClick } = this;
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
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            value={title}
            data-testid="title-input"
            onChange={handleChange}
            type="text"
            name="title"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            value={subtitle}
            data-testid="subtitle-input"
            onChange={handleChange}
            type="text"
            name="subtitle"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            value={imagePath}
            data-testid="image-input"
            onChange={handleChange}
            type="text"
            name="imagePath"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            value={storyline}
            data-testid="storyline-input"
            onChange={handleChange}
            name="storyline"
            id="storyline"
          >
          {storyline}
          </textarea>
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            value={rating}
            data-testid="rating-input"
            onChange={handleChange}
            type="number"
            name="rating"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            value={genre}
            data-testid="genre-input"
            onChange={handleChange}
            name="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <AddMovieButton handleClick={ handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;