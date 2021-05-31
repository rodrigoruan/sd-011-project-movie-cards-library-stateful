// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render(){
   const { onclick } = this.props;
   const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return(
     <form data-testid="add-movie-form">
       <label data-testid="title-input-label">Título
         <input data-testid="title-input" name="title" type="text" value={ title } onChange={ this.handleChange } />
       </label>

       <label data-testid="subtitle-input-label">Subtítulo
         <input data-testid="subtitle-input" type="text" name="subtitle" value={ subtitle } onChange={ this.handleChange } />
       </label>

       <label data-testid="image-input-label">Imagem
         <input data-testid="image-input" type="text" name="imagePath" value={ imagePath } onChange={ this.handleChange }/>
       </label>

       <label data-testid="storyline-input-label">Sinopse
         <textarea data-testid="storyline-input" name="storyline" value={ storyline } onChange={ this.handleChange }/>
       </label>

       <label data-testid="rating-input-label">Avaliação
         <input data-testid="rating-input" type="number" name="rating" value={ rating } onChange={ this.handleChange }/>
       </label>

       <label data-testid="genre-input-label">Gênero
         <select data-testid="genre-input" name="genre" value={ genre } onChange={ this.handleChange }>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
         </select>
       </label>
     </form>
    );
  }
}

export default AddMovie;