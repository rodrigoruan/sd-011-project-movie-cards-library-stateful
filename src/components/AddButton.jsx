import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddButton extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button type="button" data-testid="send-button" onClick={ handleClick }>
        Adicionar filme
      </button>
    );
  }
}

AddButton.propTypes = {
  handleClick: PropTypes.string.isRequired,
};

export default AddButton;
