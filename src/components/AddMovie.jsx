// implement AddMovie component here
import React, { Component } from 'react';

export default class AddMovie extends Component {
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
    this.setState({
      [name]: value,
    });
  }

  handleButton() {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (

      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input 
            type="text"
            value={ title } 
            data-testid="title-input"
            onChange={ this.handleChange }/>
        </label>

        <label data-testid="subtitle-input-label">
          Subtítulo
          <input 
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }/>
        </label>

        <label data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }/>
        </label>

        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }/>
        </label>

        <label data-testid="rating-input-label">
          Avaliação
          <input
           type="number"
           value={ rating }
           data-testid="rating-input"
           onChange={ this.handleChange }/>
        </label>

        <label data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }>

            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>  

          </select>
        </label>

        <button data-testid="send-button" onClick={ this.handleButton }>Adicionar filme</button>

      </form>
    )

  }
}
