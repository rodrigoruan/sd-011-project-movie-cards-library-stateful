import React from 'react';
import PropTypes from 'prop-types';

export default class BtnAddMovie extends React.Component {
  render() {
    const { resetState } = this.props;
    return (
      <button type="submit" onClick={ resetState } data-testid="send-button">Adicionar filme</button>
    );
  }
}

BtnAddMovie.propTypes = {
  resetState: PropTypes.func.isRequired,
}
