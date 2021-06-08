import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }

    this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this);
    this.handleOnChangeSubtitle = this.handleOnChangeSubtitle.bind(this);
    this.handleOnChangeImagePath = this.handleOnChangeImagePath.bind(this);
    this.handleOnChangeStoryline = this.handleOnChangeStoryline.bind(this);
    this.handleOnChangeRating = this.handleOnChangeRating.bind(this);
    this.handleOnChangeGenre = this.handleOnChangeGenre.bind(this);
  }

  handleOnChangeTitle({ target }) {
    this.setState({ title: target.value })
  }

  handleOnChangeSubtitle({ target }) {
    this.setState({ subtitle: target.value })
  }

  handleOnChangeImagePath({ target }) {
    this.setState({ imagePath: target.value })
  }

  handleOnChangeStoryline({ target }) {
    this.setState({ storyline: target.innerText })
  }

  handleOnChangeRating({ target }) {
    this.setState({ rating: target.value })
  }

  handleOnChangeGenre({ target }) {
    this.setState({ genre: target.value })
  }

  // handleState(e, property) {
  //   this.setState({ [property]: target.value })
  // }

  render() { 
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form" action="">
        <label data-testid="title-input-label" htmlFor="">Título</label>
        <input data-testid="title-input" type="text" value={ title } onChange={ this.handleOnChangeTitle }/>
        <label data-testid="subtitle-input-label"htmlFor="">Subtítulo</label>
        <input data-testid="subtitle-input" type="text" value={ subtitle } onChange={ this.handleOnChangeSubtitle } />
        <label data-testid="image-input-label" htmlFor="">Imagem</label>
        <input data-testid="image-input" type="text" src={ imagePath } onChange={ this.handleOnChangeTitle }/>
        <label data-testid="storyline-input-label" htmlFor="">Sinopse</label>
        <textarea data-testid="storyline-input" cols="30" rows="10" onChange={ this.handleOnChangeStoryline }>
          { storyline }
        </textarea>
        <label data-testid="rating-input-label" htmlFor="">Avaliação</label>
        <input data-testid="rating-input" type="number" value={ rating } onChange={ this.handleOnChangeRating }/>
        <label data-testid="genre-input-label" htmlFor="">Gênero</label>
        <select data-testid="genre-input" value={ genre } onChange={ this.handleOnChangeGenre }>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        <button data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}
 
export default AddMovie;
