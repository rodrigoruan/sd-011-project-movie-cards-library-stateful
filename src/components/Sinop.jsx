import React from 'react';
import PropTypes from 'prop-types';

class Sinop extends React.Component {
  render() {
    const { value, handleState } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="cont">
        Sinopse
        <textarea
          name="storyline"
          type="text"
          onChange={ handleState }
          value={ value }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

export default Sinop;

Sinop.propTypes = {
  value: PropTypes.string,
  handleState: PropTypes.func,
};

Sinop.defaultProps = {
  value: '',
  handleState: () => {},
};
