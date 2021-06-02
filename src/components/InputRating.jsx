import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { state, func } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ state.rating }
          data-testid="rating-input"
          onChange={ func.changeValue }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  state: PropTypes.number,
  func: PropTypes.func,
};

InputRating.defaultProps = {
  state: 0,
  func: '',
};

export default InputRating;
