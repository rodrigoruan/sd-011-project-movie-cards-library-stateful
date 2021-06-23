import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitleID">
        Subtítulo
        <input
          value={ value }
          type="text"
          id="subtitleID"
          name="subtitle"
          onChange={ onChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Subtitle;

// Source: auxílio do colega Anderson do Santos Silva, consulta ao repositório: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/173/
