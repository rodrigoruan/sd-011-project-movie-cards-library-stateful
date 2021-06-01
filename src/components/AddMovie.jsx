// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangesubTitle = this.handleChangesubTitle.bind(this);
    this.handleChangesubImagePath = this.handleChangesubImagePath.bind(this);
    this.handleChangesubStoryline = this.handleChangesubStoryline.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  handleChangesubStoryline(event) {
    this.setState({
      storyline: event.target.value,
    });
  }

  handleChangeRating(event) {
    this.setState({
      rating: event.target.value,
    });
  }

  handleChangeGenre(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
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
            <input
              type="text"
              data-testid="image-input"
              onChange={ this.handleChangesubImagePath }
            />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="storyline"
              cols="25"
              rows="1"
              value={ this.state.storyline }
              data-testid="storyline-input"
              onChange={ this.handleChangesubStoryline }
            />
          </label>
          <label htmlFor="inputRating" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              id="inputRating"
              data-testid="rating-input"
              value={ this.state.rating }
              onChange={ this.handleChangeRating }
            />
          </label>
          <label htmlFor="inputGenre" data-testid="genre-input-label">
            Gênero
            <select name="" id="inputGenre" data-testid="genre-input" value={ this.state.genre } onChange={ this.handleChangeGenre }>
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button type="submit" data-testid="send-button" onClick={ this.handleSubmit }>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
