import React from 'react';
// import PropTypes from 'prop-types';
import AddInputsToForm from './AddInputsToForm';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <AddInputsToForm />
      </form>
    );
  }
}

/**
 * Consultei o repositório do Bruno Duarte para resolver esse ProTypes.component
 * Link: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/100/commits/6514823095a37669dc42b1e756b04f2527fcf8fc
 */

export default AddMovie;
