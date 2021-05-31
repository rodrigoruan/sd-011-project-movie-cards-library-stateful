// implement AddMovie component here

import React, { Component } from 'react'

export default class AddMovie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
    this.handleState = this.handleState.bind(this)
  }

  handleState({target}) {
    const {value, name} = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const {onClick} = this.props
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">Título
          <input type="text" value={this.state.title} data-testid="title-input" id="title-input" name="title" onChange={this.handleState}/>
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo
          <input type="text" value={this.state.subtitle} data-testid="subtitle-input" id="subtitle-input" name="subtitle" onChange={this.handleState}></input>
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">Imagem
          <input type="text" name="imagePath" id="image-input" data-testid="image-input" onChange={this.handleState}/>
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">Sinopse
        <textarea value={this.state.storyline} name="storyline" id="storyline-input" data-testid="storyline-input" onChange={this.handleState}></textarea>
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">Avaliação
          <input type="number" name="rating" value={this.state.rating} data-testid="rating-input" id="rating-input" onChange={this.handleState} max="5" min="0"/>
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">Gênero
          <select value={this.state.genre} data-testid="genre-input" id="genre-input" name="genre" onChange={this.handleState}>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    )
  }
}

