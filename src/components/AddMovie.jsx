// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import MovieInfo from './MovieInfo';
import MovieInfo2 from './MovieInfo2';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  buttonClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyLine,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <MovieInfo
          subtitle={ subtitle }
          title={ title }
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <MovieInfo2
          storyLine={ storyLine }
          rating={ rating }
          genre={ genre }
          handleChange={ this.handleChange }
        />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.buttonClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
