import React from 'react';
import PropTypes from 'prop-types'

class Title extends React.Component {
  render() {
    const { title, addMyMovies } = this.props
    return (
      <label data-testid="title-input-label">
      Título
      <input
      name="title"
      type="text" 
      data-testid="title-input"
      value={ title }
      onChange={ addMyMovies }
      ></input>
    </label>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string,
  addMyMovies: PropTypes.func,
}

export default Title;
