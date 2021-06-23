import React from 'react';
import PropTypes from 'prop-types';

export default class SendButton extends React.Component {
  render() {
    const { SendButtonFunc } = this.props;

    return (
      <button
        onClick={ SendButtonFunc }
        type="button"
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

SendButton.propTypes = {
  SendButtonFunc: PropTypes.func.isRequired,
};
