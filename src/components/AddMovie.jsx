// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  render(){
   const { onclick } = this.props;

    return(
     <form data-testid="add-movie-form"/>
    );
  }
}

export default AddMovie;