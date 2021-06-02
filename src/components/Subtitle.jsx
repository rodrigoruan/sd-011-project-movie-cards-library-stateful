import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="label-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          className="addMovie-inputs"
          type="text"
          name="subtitle"
          subtitle={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Subtitle;

Subtitle.propTypes = {
  subtitle: PropTypes.string,
  handleChange: PropTypes.func,
};

Subtitle.defaultProps = {
  subtitle: '',
  handleChange: () => {},
};
