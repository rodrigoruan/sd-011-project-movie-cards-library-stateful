import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.resetState = this.resetState.bind(this)
    this.functionClick = this.functionClick.bind(this)
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }

  functionClick() {
    const { onClick } = this.props
    onClick(this.state)
    this.resetState()
  }

  resetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    })
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    })
  }
  
  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input type="text" name="title" value={this.state.title} data-testid="title-input" onChange={this.handleChange} />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" name="subtitle" value={this.state.subtitle} data-testid="subtitle-input" onChange={this.handleChange} />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input type="text" name="imagePath" value={this.state.imagePath} data-testid="image-input" onChange={this.handleChange} />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea value={this.state.storyline} name="storyline" data-testid="storyline-input" onChange={this.handleChange} />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input type="number" value={this.state.rating} name="rating" data-testid="rating-input" onChange={this.handleChange} />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select value={this.state.genre} name="genre" data-testid="genre-input" onChange={this.handleChange} >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="button" onClick={this.functionClick}>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddMovie
