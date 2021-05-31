// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.initialState = this.state;

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              value={ this.state.title }
              name='title'
              onChange={this.changeHandler}
              data-testid="title-input"
            />
          </label>

          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              value={ this.state.subtitle }
              name='subtitle'
              onChange={this.changeHandler}
              data-testid="subtitle-input"
            />
          </label>

          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              value={ this.state.imagePath }
              name='imagePath'
              onChange={this.changeHandler}
              data-testid="image-input"
            />
          </label>

          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              value={ this.state.storyline }
              name='storyline'
              onChange={this.changeHandler}
              data-testid="storyline-input"
            />
          </label>

          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              value={ this.state.rating }
              name="rating"
              onChange={this.changeHandler}
              data-testid="rating-input"
            />
          </label>

          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select
              value={ this.state.genre }
              name='genre'
              onChange={ this.changeHandler }
              data-testid="genre-input"
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>

          <button onClick={ (event) => {
            event.preventDefault();
            onClick(this.state);
            this.setState(this.initialState); 
            } }>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

// AddMovie.propTypes = {

// };

export default AddMovie;
