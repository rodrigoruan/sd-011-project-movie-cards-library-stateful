import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonForm extends Component {
  render() {
    const {
      onClick: { handleClick },
    } = this.props;

    return (
      <div>
        <button type="button" onClick={ handleClick } data-testid="send-button">
          Adicionar filme
        </button>
      </div>
    );
  }
}
ButtonForm.propTypes = {
  onClick: PropTypes.string.isRequired,
};
