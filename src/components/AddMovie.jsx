// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangesubTitle = this.handleChangesubTitle.bind(this);
    this.handleChangesubImagePath = this.handleChangesubImagePath.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleChangesubTitle(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  handleChangesubImagePath(event) {
    this.setState({
      imagePath: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <label htmlFor="inputTitle" data-testid="title-input-label">
            Título
            <input
              type="text"
              id="inputTitle"
              data-testid="title-input"
              value={ this.state.title }
              onChange={ this.handleChangeTitle }
            />
          </label>
          <label htmlFor="inputSubtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              data-testid="subtitle-input"
              id="inputSubtitle"
              value={ this.state.subtitle }
              onChange={ this.handleChangesubTitle }
            />
          </label>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input type="text" 
              data-testid="image-input" 
              onChange={ this.handleChangesubImagePath }/>
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
