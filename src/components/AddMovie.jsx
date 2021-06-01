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
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
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
            onChange={ this.updateTitle }
            value={ title } // parei aqui... finalizar req 8
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
