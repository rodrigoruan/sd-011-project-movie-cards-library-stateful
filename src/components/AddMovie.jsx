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
        <label data-testid="title-input-label" htmlFor="addMovieTitleInput">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
            id="addMovieTitleInput"
            name="title"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="addMovieSubtitleInput">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            id="addMovieSubtitleInput"
            name="subtitle"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
