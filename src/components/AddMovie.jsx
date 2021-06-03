import React from 'react';
import PropTypes from 'prop-types';
import MovieData from './MovieData';

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

    this.evChange = this.evChange.bind(this);
    this.evClick = this.evClick.bind(this);
  }

  evChange({ target }) {
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
      // storyLine,
      // rating,
      // genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <MovieData
          subtitle={ subtitle }
          title={ title }
          imagePath={ imagePath }
          handleChange={ this.evChange }
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
