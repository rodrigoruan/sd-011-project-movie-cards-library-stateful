import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

class AddMovie extends Component {
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
  }

  addState({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const { onclick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Label
          name="Título"
          id="title-input-label"
          idLabel="title-input-label"
          value=""
          idI="title-input"
        />
        <Label
          name="Subtítulo"
          id="subtitle-input-label"
          idLabel="subtitle-input-label"
          value=""
          idI="subtitle-input"
        />
        <Label
          name="Imagem"
          id="image-input-label"
          idLabel="image-input-label"
          value=""
          idI="subtitle-input"
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired,
};

export default AddMovie;
