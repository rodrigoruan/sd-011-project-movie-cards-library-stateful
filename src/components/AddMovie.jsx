import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  handleChangeTitle() {

  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            onChange={ this.handleChangeTitle }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  state: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default AddMovie;
