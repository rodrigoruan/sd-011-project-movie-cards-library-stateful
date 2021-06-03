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

    this.evClick = this.evClick.bind(this);
    this.evChange = this.evChange.bind(this);
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

  evChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyLine,
      // rating,
      // genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <MovieTitles
          subtitle={ subtitle }
          title={ title }
          imagePath={ imagePath }
          handleChange={ this.evChange }
        />
        <MovieContent
          storyLine={ storyLine }
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
