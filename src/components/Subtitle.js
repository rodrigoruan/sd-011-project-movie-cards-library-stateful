import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, addMyMovies } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ addMyMovies }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string,
  addMyMovies: PropTypes.func,
};

Subtitle.defaultProps = {
  subtitle: '',
  addMyMovies: () => {},
};

export default Subtitle;
