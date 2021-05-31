import React, { Component } from 'react';
import AddMovieGenre from './AddMovieGenre';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieRating from './AddMovieRating';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onClick } = this.props;
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick();
  }

  render() {
    const { title, subtitle, imagePath, storyline, genre, rating } = this.state;

    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              id="title-input"
              data-testid="title-input"
              value={ title }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              id="subtitle-input"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              id="image-input"
              data-testid="image-input"
              value={ imagePath }
              onChange={ this.handleChange }
            />
          </label>
          <AddMovieStoryline value={ storyline } handleChange={ this.handleChange } />
          <AddMovieRating value={ rating } handleChange={ this.handleChange } />
          <AddMovieGenre value={ genre } handleChange={ this.handleChange } />
          <button type="submit" data-testid="send-button" onClick={ this.handleSubmit }>Adicionar filme</button>
        </form>
      </section>
    );
  }
}
