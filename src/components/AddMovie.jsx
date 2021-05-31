import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  render() {
    const { value, onChange } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="new-title" data-testid="title-input-label">
          Título
          <input
            id="new-title"
            type="text"
            value={ value }
            data-testid="title-input"
            onChange={ onChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
