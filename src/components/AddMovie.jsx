import React from 'react';
// import PropTypes from 'prop-types';


class AddMovie extends React.Component {
  constructor( {
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  })

  render() {
    return (
      <form data-testid="add-movie-form">

      </form>
    )
  }
}

export default AddMovie;
