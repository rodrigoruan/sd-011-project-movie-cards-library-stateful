import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="addMovieTitleInput" data-testid="title-input-label">
          Título
          <input
            id="addMovieTitleInput"
            name="title"
            type="text"
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="addMovieSubtitleInput" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="addMovieSubtitleInput"
            name="subtitle"
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
