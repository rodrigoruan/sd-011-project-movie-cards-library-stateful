// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super()

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }
  render() {
    const { onClick } = this.props;

    return(
      <div>
        <form data-testid="add-movie-form"></form>
      </div>
    )
  }
}

AddMovie.PropTypes = {
  onClick: PropTypes.func,
}


export default AddMovie;

