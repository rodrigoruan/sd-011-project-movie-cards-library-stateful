// State
import React from 'react';
import NewLabel from './NewLabel';
import NewInput from './NewInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleForms } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <NewLabel dtid="title-input-label" lv="Título" htmlFor="title-input" />
        <NewInput type="text" name="title" value={ title } dataTestid="title-input" onChange={ this.handleInput } />
        <NewLabel dtid="subtitle-input-label" lv="Subtítulo" htmlFor="subtitle-input" />
        <NewInput type="text" name="subtitle" value={ subtitle } data="subtitle-input" onChange={ this.handleInput } />
        <NewLabel dtid="image-input-label" lv="Imagem" htmlFor="image-input" />
        <NewInput type="text" name="imagePath" value={ imagePath } data="image-input" onChange={ this.handleInput } />
        <NewLabel dtid="storyline-input-label" lv="Sinopse" htmlFor="storyline-input" />
        <textarea name="storyline" value={ storyline } data="storyline-input" onChange={ this.handleInput } />
        <NewLabel dtid="rating-input-label" lv="Avaliação" htmlFor="rating-input" />
        <NewInput type="number" name="rating" value={ rating } data="rating-input" onChange={ this.handleInput } />  
      </form>
    );
  }
}

export default AddMovie;
