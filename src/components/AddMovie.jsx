import React from 'react';
// import propTypes from 'prop-types';
// import InputFile from './InputFile';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-label">
          Título
          <input
            id="title"
            name="title"
            type="text"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
