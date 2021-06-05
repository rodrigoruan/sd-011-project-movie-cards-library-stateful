import React from 'react';
import PropTypes from 'prop-types';

class AddTitle extends React.Component {
  render() {
    // const { title-buton } = this.props;
    return (
      <button type="button" data-testid="send-button">Adicionar filme</button>
    );
  }
}

AddTitle.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default AddTitle;
