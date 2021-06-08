import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { value, handleState } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="ctl">
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

export default Sinopse;

Sinopse.propTypes = {
  value: PropTypes.string,
  handleState: PropTypes.func,
};

Sinopse.defaultProps = {
  value: '',
  handleState: () => {},
};
