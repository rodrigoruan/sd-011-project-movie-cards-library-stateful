// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import CreateInputText from './CreateInputText';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) { // perguntar deste target pros universitários.
    const { name, value } = target;
    this.setState({
      [name]: value,
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
    const { title, subtitle, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <CreateInputText
          label="Título"
          id="title"
          value={ title }
          change={ this.handleChange }
        />
        <CreateInputText label="Subtítulo" id="subtitle" value={ subtitle } change={ this.handleChange } />
        <CreateInputText label="Imagem" id="image" change={ this.handleChange } />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <CreateInputText type="number" label="Avaliação" id="rating" value={ rating } change={ this.handleChange } />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
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
