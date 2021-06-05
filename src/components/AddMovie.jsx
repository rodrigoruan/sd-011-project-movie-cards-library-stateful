import React from 'react';
import PropTypes from 'prop-types';
import AddTitle from './AddTitle';
import AddSubtitle from './AddSubtitle';

class AddMovie extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: ' ',
  //     subtitle: '',
  //   };
  //   // this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.state({
  //     [name]: value,
  //   });
  // }

  render() {
    // const { handleChange } = this.props;
    const { title, subtitle } = this.props;
    return (
      <form data-testid="add-movie-form">
        <AddTitle onclick={ () => {}} title={ title } />
        <AddSubtitle onclick={ () => {} } subtitle={ subtitle } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  // handleTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

/**
 * Consultei o repositório do Bruno Duarte para resolver esse ProTypes.component (alterado postriormente)
 * Link: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/100/commits/6514823095a37669dc42b1e756b04f2527fcf8fc
 * Consultei o repositório do Renan Moraes para resolver o problema da componitização.
 * https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/67/commits/3a869c4e86f7c38878d1059183f22ff6f4ed8680
 */

export default AddMovie;
