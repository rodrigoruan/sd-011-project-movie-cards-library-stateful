import React from 'react';
import PropTypes from 'prop-types';
import AddMovieButton from './AddMovieButton';
import AddGenre from './AddGenre';
import AddRating from './AddRating';
import AddTextArea from './AddTextArea';

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

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    const { movie } = this.state;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
    onClick(movie);
  }

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
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
            type="text"
            name="title"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChange }
            type="text"
            name="subtitle"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleChange }
            type="text"
            name="imagePath"
          />
        </label>
        <AddTextArea handleChange={ handleChange } storyline={ storyline } />
        <AddRating handleChange={ handleChange } rating={ rating } />
        <AddGenre handleChange={ handleChange } genre={ genre } />
        <AddMovieButton handleClick={ handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
