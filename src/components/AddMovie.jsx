// implemente AddMovie componente aqui
import React, { Component } from 'react';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
}

export default class AddMovie extends Component {
  constructor() {
    super();

    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });    

  }

  handleClick(e) {
    e.preventDefault();

    const { onClick } = this.props;

    this.setState(initialState);
    onClick();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="">
          Título
          <input data-testid="title-input" type="text" name="title" value={title} onChange={this.handleChange} />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="">
          Subtítulo
          <input data-testid="subtitle-input" type="text" name="subtitle" value={subtitle} onChange={this.handleChange} />
        </label>

        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input type="text" data-testid="image-input" name="imagePath" value={imagePath} onChange={this.handleChange} />
        </label>

        <label data-testid="storyline-input-label" htmlFor="">Sinopse
          <textarea data-testid="storyline-input" name="storyLine" value={storyline} onChange={this.handleChange} >
          </textarea>
        </label>
        <label data-testid="rating-input-label" htmlFor="">Avaliação
          <input data-testid="rating-input" name="rating" value={rating} type="number" onChange={this.handleChange} />
        </label>
        <label data-testid="genre-input-label" htmlFor="">Gênero
          <select data-testid="genre-input" name="genre" onChange={this.handleChange} >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={this.handleClick} >Adicionar filme</button>
      </form>
    );
  }
}
