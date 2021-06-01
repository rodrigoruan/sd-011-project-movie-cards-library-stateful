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

    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label"> "Título"
            <input type='text' data-testid="title-input" value={this.state.value}
              onChange={this.handleInputs} />
          </label>
          
          <label data-testid="subtitle-input-label"> "Subtítulo"
            <input type='text' data-testid="subtitle-input" value={this.state.value}
              onChange={this.handleInputs} />
          </label>

          <label data-testid="image-input-label"> "Imagem"
            <input type='text' data-testid="image-input" value={this.state.value}
              onChange={this.handleInputs} />
          </label>

          <label data-testid="storyline-input-label"> "Sinopse"
            <textarea data-testid="storyline-input" onChange={this.handleInputs}>
              {this.state.value}
            </textarea>
          </label>

          <label> avaliação
            <input />
          </label>

          <label> gênero
            <input />
          </label>
        </form>
      </div>
    )
  }
}
