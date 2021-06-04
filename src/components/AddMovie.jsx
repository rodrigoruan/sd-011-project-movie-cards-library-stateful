import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

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

    this.handleInput = this.handleInput.bind(this);
    // https://forum.betrybe.com/t/projeto-movie-cards-library-stateful-metodo-render-com-muitas-linhas/468/2
    this.renderTextArea = this.renderTextArea.bind(this);
    this.renderCheckBox = this.renderCheckBox.bind(this);
  }

  handleInput(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderTextArea() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          rows="5"
          cols="33"
          data-testid="storyline-input"
          onChange={ this.handleInput }
          name="storyline"
          value={ storyline }
        />
      </label>
    );
  }

  renderCheckBox() {
    const { genre } = this.state;
    return (
      <label htmlFor="select" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          onChange={ this.handleInput }
          value={ genre }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          htmlFor="title-input"
          dataTestidLabel="title-input-label"
          valueLabel="Título"
          dataTestidInput="title-input"
          handleInput={ this.handleInput }
          valueInput={ title }
          name="title"
        />
        <Input
          htmlFor="subtitle-input"
          dataTestidLabel="subtitle-input-label"
          valueLabel="Subtítulo"
          dataTestidInput="subtitle-input"
          handleInput={ this.handleInput }
          valueInput={ subtitle }
          name="subtitle"
        />
        <Input
          htmlFor="image-input"
          dataTestidLabel="image-input-label"
          valueLabel="Imagem"
          dataTestidInput="image-input"
          handleInput={ this.handleInput }
          valueInput={ imagePath }
          name="imagePath"
        />
        <Input
          type="number"
          htmlFor="rating-input"
          dataTestidLabel="rating-input-label"
          valueLabel="Avaliação"
          dataTestidInput="rating-input"
          handleInput={ this.handleInput }
          valueInput={ rating }
          name="rating"
        />
        {this.renderTextArea}
        {this.renderCheckBox}
        <button type="submit" onClick={ onClick } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: '',
};
export default AddMovie;
