// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';

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

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    console.log(target.value);
    this.setState({
      [name]: value,
    });
  }

  handleButton(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
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
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">
            Título
            <input data-testid="title-input" value={ this.state.title } name="title" type="text" onChange={ this.handleChange } />
          </label>
          <label data-testid="subtitle-input-label">
            Subtítulo
            <input
              data-testid="subtitle-input"
              name="subtitle"
              type="text"
              value={ this.state.subtitle }
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="image-input-label">
            Imagem
            <input data-testid="image-input" name="imagePath" type="text" value={ this.state.imagePath } onChange={ this.handleChange } />
          </label>
          <label data-testid="storyline-input-label">
            Sinopse
            <textarea data-testid="storyline-input" type="text-area" name="storyline" value={ this.state.storyline } onChange={ this.handleChange } />
          </label>
          <label data-testid="rating-input-label">
            Avaliação
            <input data-testid="rating-input" name="rating" type="number" value={ this.state.rating } onChange={ this.handleChange } />
          </label>
          <label data-testid="genre-input-label">
            Gênero
            <select data-testid="genre-input" name="genre" type="select" value={ this.state.genre } onChange={ this.handleChange }>
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button type="submit" data-testid="send-button" onClick={ this.handleButton }>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;
