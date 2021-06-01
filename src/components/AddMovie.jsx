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
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle } = this.state;
    // const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="titleInput"
          data-testid="title-input-label"
        >
          Título
          <input
            type="text"
            id="titleInput"
            data-testid="title-input"
            onChange={ this.updateState }
            name={ title }
          />
        </label>
        <label
          htmlFor="subtitleInput"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            id="subtitleInput"
            data-testid="subtitle-input"
            onChange={ this.updateState }
            name={ subtitle }
          />
        </label>
      </form>
    );
  }
}

AddMovie.defaultProps = {
  onClick: () => {},
};

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;
