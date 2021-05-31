import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
inputTitle(){

}

  render() {
    return (

         <form data-testid="add-movie-form">
    
         </form>
    );
  }
}
