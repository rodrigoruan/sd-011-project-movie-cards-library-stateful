import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { subtitle, addMyMovies} = this.props
    return (
      <label data-testid="subtitle-input-label">
      Subtítulo
      <input
      name="subtitle"
      type="text"
      data-testid="subtitle-input"
      value={ subtitle }
      onChange={ addMyMovies }>
        </input>
    </label>
    )
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string,
  addMyMovies: PropTypes.func,
}

export default Subtitle;