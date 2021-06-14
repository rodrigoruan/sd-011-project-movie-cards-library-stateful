import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddMovie extends Component{
  constructor(){
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    };
    this.changer = this.changer.bind(this)
  }

  changer({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render(){
    const { title, subtitle, imagePath, storyline, rating, genre} = this.state
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            name="title"
            onChange={ this.changer }
            value={ title }
          />
        </label>
      </form>
    )
  }
}

export default AddMovie
