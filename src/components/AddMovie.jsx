import React from 'react';
import PropTypes from 'prop-types';
import MovieTitles from './MovieTitles';
import MovieContent from './MovieContent';

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
    this.evClick = this.evClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  evClick(event) {
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
      // genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <MovieTitles
          subtitle={ subtitle }
          title={ title }
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <MovieContent
          storyLine={ storyLine }
          rating={ rating }
        />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.evClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
