import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    //   subtitle: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event) {
    const newTitle = event.target.value;
    this.setState({ title: newTitle });
  }

  render() {
    const { title } = this.state;
    // const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="AddMovie__title" data-testid="title-input-label">
          Título
          <input
            id="AddMovie__title"
            data-testid="title-input"
            value={ title }
            onChange={ this.onTitleChange }
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
