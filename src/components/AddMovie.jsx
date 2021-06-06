// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: '0',
      genre: 'action',
    }
  } 
  render() {
    const { onClick } = this.props; 
    return (
      <form action="">
      </form>
    );
  }
}

AddMovie.propTypes = {
    onClick: PropTypes.func,
};

AddMovie.defaultProps = {
    onClick: () => {},
}
export default AddMovie;