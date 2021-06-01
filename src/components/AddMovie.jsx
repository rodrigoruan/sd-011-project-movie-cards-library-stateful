// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import CreateInput from './CreateInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changer = this.changer.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
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

  changer({ target }) { // perguntar deste target pros universitários.
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <CreateInput label="Título" id="title" value={ title } change={ this.changer } />
        <CreateInput
          label="Subtítulo"
          id="subtitle"
          value={ subtitle }
          change={ this.changer }
        />
        <CreateInput label="Imagem" id="image" change={ this.changer } />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.changer }
          />
        </label>
        <CreateInput
          type="number"
          label="Avaliação"
          id="rating"
          value={ rating }
          change={ this.changer }
        />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.changer }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.handleSubmit }>
          Adicionar filme
        </button>
      </form>);
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
