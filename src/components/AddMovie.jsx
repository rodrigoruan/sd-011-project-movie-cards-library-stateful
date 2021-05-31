// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    }
  }


  render() {
    const { onClick } = this.props;

    // updateTitle() {
    //   this.setState = {
    //     title: 
    //   }
    // }

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título</label>
        <input data-testid="title-input" type="text" value={ this.state.title } onChange="" />
      </form>
    )
  }
}

export default AddMovie;