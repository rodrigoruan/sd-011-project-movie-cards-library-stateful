import React from 'react';

class Storyline extends React.Component {
  render() {
    const { storyline, addMyMovies } = this.props
    return (
      <label data-testid="storyline-input-label">
      Sinopse
      <textarea
      name="storyline"
      data-testid="storyline-input"
      value={ storyline }>
        </textarea>
    </label>
    )
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string,
  addMyMovies: PropTypes.func,
}

export default Storyline;