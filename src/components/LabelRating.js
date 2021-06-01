import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating, addMyMovies} = this.props
    return (
      <label data-testid="rating-input-label">
      Avaliação
      <input
      name="rating"
      type="number" 
      data-testid="rating-input"
      value={ rating }>
        </input>
    </label>
    )
  }
}

Rating.propTypes = {
  rating: PropTypes.string,
  addMyMovies: PropTypes.func,
}

export default Rating;