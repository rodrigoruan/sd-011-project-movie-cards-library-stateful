import React from 'react';

class AddMovie extends React.Component {
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

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <div>{ title }</div>
        <div>{ subtitle }</div>
        <div>{ imagePath }</div>
        <div>{ storyline }</div>
        <div>{ rating }</div>
        <div>{ genre }</div>
      </form>
    );
  }
}

export default AddMovie;
