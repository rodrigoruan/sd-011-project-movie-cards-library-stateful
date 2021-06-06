import React from 'react';
// import Data from '../data';
class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handlerChange = this.handlerChange.bind(this);
    // this.handlerClick = this.handlerClick.bind(this);
  }

  handlerChange(event) {
    // console.log('asd')
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // handlerClick(event) {
  //   return console.log('test click', event);
  // }

  render() {
    // const { subtitle, title, imagePath, storyLine, rating, genre } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input-label" data-testid="title-input-label">
          Título
          <input type="text" name="title" data-testid="title-input" onChange={ this.handlerChange } />
        </label>
        <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" name="subtitle" data-testid="subtitle-input" onChange={ this.handlerChange } />
        </label>
        <label htmlFor="image-input-label" data-testid="image-input-label">
          Imagem
          <input type="text" name="imagePath" data-testid="image-input" onChange={ this.handlerChange } />
        </label>
        <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
          Sinopse
          <input type="textarea" name="storyline" data-testid="storyline-input" onChange={ this.handlerChange } />
        </label>
        <label htmlFor="rating-input-label" data-testid="rating-input-label">
          Avaliação
          <input type="number" name="rating" data-testid="rating-input" onChange={ this.handlerChange } />
        </label>
        <select data-testid="genre-input" name="genre" onChange={ this.handlerChange }>
          <label data-testid="genre-input-label">
            Gênero
            <option data-testid="genre-option" value="action" selected>Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </label>
        </select>
        <button data-testid="send-button" onClick={ this.handlerClick }>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
