import React from 'react';
// import PropTypes from 'prop-types';

class AddMovieButton extends React.Component {
  render() {
    // const { title-buton } = this.props;
    return (
      <button type="button" data-testid="send-button">Adicionar filme</button>
      // adicionar onClick ao button
    );
  }
}

// AddMovieButton.propTypes = {
//   title: PropTypes.string,
//   handleChange: PropTypes.func,
// }.isRequired;

export default AddMovieButton;
