import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.textInput = this.textInput.bind(this);
  }

  textInput({ target }) {
    this.setState({ title: target.value });
  }

  render() {
    const { onClick } = this.props;
    const { title } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          { onClick }
          <label htmlFor="input" data-testid="title-input-label">
            Título
            <input
              type="text"
              data-testid="title-input"
              onChange={ this.textInput }
              value={ title }
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
