import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';

function renderCheckBox(genre, handleInput) {
  return (
    <label htmlFor="select" data-testid="genre-input-label">
      Gênero
      <select
        name="genre"
        onChange={ handleInput }
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

function makeTitleInput(title, handleInput) {
  return (
    <Input
      htmlFor="title-input"
      dataTestidLabel="title-input-label"
      valueLabel="Título"
      dataTestidInput="title-input"
      handleInput={ handleInput }
      valueInput={ title }
      name="title"
    />
  );
}

function makeSubtitleInput(subtitle, handleInput) {
  return (
    <Input
      htmlFor="subtitle-input"
      dataTestidLabel="subtitle-input-label"
      valueLabel="Subtítulo"
      dataTestidInput="subtitle-input"
      handleInput={ handleInput }
      valueInput={ subtitle }
      name="subtitle"
    />
  );
}

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
  }

  handleInput(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, rating, storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {makeTitleInput(title, this.handleInput)}
        {makeSubtitleInput(subtitle, this.handleInput)}
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
        <TextArea storyline={ storyline } handleInput={ this.handleInput } />
        {renderCheckBox(genre, this.handleInput)}
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
