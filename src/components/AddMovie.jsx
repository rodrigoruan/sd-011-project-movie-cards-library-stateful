import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  // constructor() {
  //   super();
  //   this.handleTitle = this.handleTitle.bind(this);
  // }

  render() {
    const { handleTitle } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name=""
            id=""
            data-testid="title-input"
            onChange={ handleTitle }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  handleTitle: PropTypes.func.isRequired,
};

export default AddMovie;
