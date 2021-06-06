import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { changeInputs, value } = this.props;
    return (
      <label
        htmlFor="addMovie"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          data-testid="storyline-input"
          onChange={ changeInputs }
          type="text"
          name="storyline"
          value={ value }
        />
      </label>
    );
  }
}

export default Sinopse;

Sinopse.propTypes = {
  changeInputs: PropTypes.func,
  value: PropTypes.string,
};

Sinopse.defaultProps = {
  changeInputs: () => {},
  value: '',
};
