import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, addMyMovies } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ addMyMovies }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string,
  addMyMovies: PropTypes.func,
};

Storyline.defaultProps = {
  storyline: '',
  addMyMovies: () => {},
};

export default Storyline;
