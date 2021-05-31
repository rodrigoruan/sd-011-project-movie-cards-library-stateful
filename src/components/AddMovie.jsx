import React from 'react';
import PropTypes from 'prop-types';

import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputRating from './InputRating';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  clickHandler(e) {
    e.preventDefault();
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
      <form data-testid="add-movie-form">
        <InputTitle value={ this.state.title } handleChange={ this.changeHandler } />
        <InputSubtitle
          value={ this.state.subtitle }
          handleChange={ this.changeHandler }
        />
        <InputImage
          value={ this.state.imagePath }
          handleChange={ this.changeHandler }
        />
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            value={ this.state.storyline }
            data-testid="storyline-input"
            onChange={ this.changeHandler }
          />
        </label>
        <InputRating
          value={ this.state.rating }
          handleChange={ this.changeHandler }
        />
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            value={ this.state.genre }
            data-testid="genre-input"
            onChange={ this.changeHandler }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ this.clickHandler }>
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
  onClick: 'undefined',
};

export default AddMovie;
