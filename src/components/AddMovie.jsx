import React from 'react';

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
    this.addMovieFunction = this.addMovieFunction.bind(this);
  }

  addMovieFunction(event) {
    const { id, value } = event.target;
    this.setState(() => { [id]: value };
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" for="title">
          Título
          <input
            type="text"
            data-testid="title-input"
            onChange={ this.addMovieFunction }
            id="title"
            value={ this.state.title }
					/>
        </label>
        <label data-testid="subtitle-input-label" for="subtitle">
          Subtítulo
          <input type="text"
            data-testid="subtitle-input"
            id="subtitle"
            onChange={ this.addMovieFunction }
            value={ this.state.subtitle }
          />
        </label>
      </form>
    )
  }
}

export default AddMovie;
